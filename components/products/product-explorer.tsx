"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

import { toast } from "sonner";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";
import ProductCard from "@/components/products/product-card";
import { Button } from "@/components/ui/button";
import { getExploreProductsAction } from "@/lib/products/explore-actions";

type ExploreActionResult = Awaited<ReturnType<typeof getExploreProductsAction>>;

type ExploreProduct = Extract<
    ExploreActionResult,
    { success: true }
>["products"][number];

type ProductExplorerProps = {
    products?: ExploreProduct[];
    hasMore?: boolean;
    nextCursor?: string | null;
};

type SortOption = "trending" | "latest";

export default function ProductExplorer({
    products: initialProducts = [],
    hasMore: initialHasMore = false,
    nextCursor: initialNextCursor = null,
}: ProductExplorerProps) {
    const [products, setProducts] = useState<ExploreProduct[]>(initialProducts);

    const [hasMore, setHasMore] = useState(initialHasMore);

    const [nextCursor, setNextCursor] = useState<string | null>(
        initialNextCursor,
    );

    const [search, setSearch] = useState("");

    const [sortBy, setSortBy] = useState<SortOption>("trending");

    const [isLoading, setIsLoading] = useState(false);

    const requestId = useRef(0);

    const firstRender = useRef(true);

    const fetchProducts = useCallback(
        async (nextSearch: string, nextSort: SortOption) => {
            const currentRequestId = ++requestId.current;

            setIsLoading(true);

            const result: ExploreActionResult = await getExploreProductsAction({
                cursor: null,
                search: nextSearch,
                sortBy: nextSort,
            });

            if (currentRequestId !== requestId.current) {
                return;
            }

            setIsLoading(false);

            if (!result.success) {
                toast.error(result.message);
                return;
            }

            setProducts(result.products || []);

            setHasMore(result.hasMore || false);

            setNextCursor(result.nextCursor ?? null);
        },
        [],
    );

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }

        const timeout = window.setTimeout(() => {
            void fetchProducts(search, sortBy);
        }, 300);

        return () => window.clearTimeout(timeout);
    }, [search, sortBy, fetchProducts]);

    const handleLoadMore = async () => {
        if (isLoading || !hasMore || !nextCursor) {
            return;
        }

        const currentRequestId = ++requestId.current;

        setIsLoading(true);

        const result: ExploreActionResult = await getExploreProductsAction({
            cursor: nextCursor,
            search,
            sortBy,
        });

        if (currentRequestId !== requestId.current) {
            return;
        }

        setIsLoading(false);

        if (!result.success) {
            toast.error(result.message);
            return;
        }

        setProducts((current) => [...current, ...(result.products || [])]);

        setHasMore(result.hasMore || false);

        setNextCursor(result.nextCursor ?? null);
    };

    const handleSortChange = (nextSort: SortOption) => {
        if (nextSort === sortBy) {
            return;
        }

        setSortBy(nextSort);
    };

    return (
        <div className="space-y-6">
            {/* Search */}

            <div className="flex h-10 w-full shrink-0 items-stretch border-2 border-foreground bg-background shadow-[3px_3px_0px_0px_#000]">
                <div className="flex w-10 shrink-0 select-none items-center justify-center border-r-2 border-foreground bg-foreground/[0.06]">
                    <span className="text-sm font-bold leading-none text-foreground/60">
                        ⌕
                    </span>
                </div>

                <input
                    type="search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search by name, tagline, or tags..."
                    aria-label="Search products"
                    className="h-full min-w-0 flex-1 bg-transparent px-3 text-xs font-semibold text-foreground outline-none placeholder:text-foreground/35"
                />
            </div>

            {/* Result count + sorting */}

            <div className="flex flex-col justify-between gap-4 px-1 sm:flex-row sm:items-center">
                <div className="flex shrink-0 items-center gap-3">
                    <p className="text-[10px] font-bold uppercase leading-none tracking-[0.18em] text-foreground/40">
                        Showing {products.length}{" "}
                        {products.length === 1 ? "result" : "results"}
                    </p>

                    {search && (
                        <button
                            type="button"
                            onClick={() => setSearch("")}
                            className="cursor-pointer text-[10px] font-bold uppercase leading-none tracking-[0.18em] text-foreground/50 transition-colors hover:text-foreground">
                            Clear search
                        </button>
                    )}
                </div>

                <div className="flex h-10 shrink-0 items-stretch self-start border-2 border-foreground bg-background shadow-[3px_3px_0px_0px_#000] sm:self-auto">
                    <button
                        type="button"
                        onClick={() => handleSortChange("trending")}
                        disabled={isLoading}
                        className={cn(
                            "h-full cursor-pointer select-none border-r-2 border-foreground px-4 text-[10px] font-bold uppercase tracking-wider outline-none transition-colors duration-150",
                            sortBy === "trending"
                                ? "bg-foreground text-background"
                                : "bg-background text-foreground/60 hover:bg-foreground/[0.02]",
                        )}>
                        Trending
                    </button>

                    <button
                        type="button"
                        onClick={() => handleSortChange("latest")}
                        disabled={isLoading}
                        className={cn(
                            "h-full cursor-pointer select-none px-4 text-[10px] font-bold uppercase tracking-wider outline-none transition-colors duration-150",
                            sortBy === "latest"
                                ? "bg-foreground text-background"
                                : "bg-background text-foreground/60 hover:bg-foreground/[0.02]",
                        )}>
                        Recents
                    </button>
                </div>
            </div>

            {/* Loading / empty / products */}

            {isLoading && products.length === 0 ? (
                <div className="flex min-h-60 items-center justify-center">
                    <Loader2 className="animate-spin text-primary" size={28} />
                </div>
            ) : products.length === 0 ? (
                <div className="border border-dashed border-foreground/15 bg-foreground/[0.02] px-6 py-32 text-center">
                    <div className="mb-4 inline-flex select-none border-2 border-foreground bg-background p-4">
                        <span className="text-xl font-bold leading-none text-foreground/45">
                            ⌕
                        </span>
                    </div>

                    <p className="text-sm font-semibold uppercase tracking-tight text-foreground/45">
                        No products match your search criteria
                    </p>

                    {search && (
                        <button
                            type="button"
                            onClick={() => setSearch("")}
                            className="mt-4 cursor-pointer text-xs font-bold text-foreground underline underline-offset-4 transition-opacity hover:opacity-60">
                            Clear search
                        </button>
                    )}
                </div>
            ) : (
                <>
                    {/* Product grid */}

                    <div className="grid gap-8 pt-4 md:grid-cols-2 lg:grid-cols-3">
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                hasVoted={product.hasVoted}
                            />
                        ))}
                    </div>

                    {/* Load more */}

                    {hasMore && nextCursor && (
                        <div className="mt-10 flex justify-center">
                            <Button
                                variant="default"
                                size="default"
                                onClick={handleLoadMore}
                                disabled={isLoading}
                                className="cursor-pointer text-foreground">
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 size-4 animate-spin" />
                                        Loading...
                                    </>
                                ) : (
                                    "Load more"
                                )}
                            </Button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
