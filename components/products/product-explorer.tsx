"use client";

import { Clock, Search, TrendingUp, Activity } from "lucide-react";
import { Input } from "@/components/ui/input";
import ProductCard from "@/components/products/product-card";
import { useMemo, useState } from "react";
import { products } from "@/db/schema";
import { InferSelectModel } from "drizzle-orm";
import { cn } from "@/lib/utils";

type Product = InferSelectModel<typeof products>;

export default function ProductExplorer({ products: initialProducts }: { products: Product[] }) {
    const [sortBy, setSortBy] = useState<"trending" | "latest">("trending");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProducts = useMemo(() => {
        let result = [...initialProducts];

        if (searchQuery.length > 0) {
            const query = searchQuery.toLowerCase();
            result = result.filter((p) =>
                p.name.toLowerCase().includes(query) ||
                p.tagline?.toLowerCase().includes(query)
            );
        }

        return result.sort((a, b) => {
            if (sortBy === "trending") return b.voteCount - a.voteCount;
            const dateA = a.createAt ? new Date(a.createAt).getTime() : 0;
            const dateB = b.createAt ? new Date(b.createAt).getTime() : 0;
            return dateB - dateA;
        });
    }, [searchQuery, initialProducts, sortBy]);

    return (
        <div className="space-y-8">
            {/* SEARCH & FILTER SECTION - Improved for Desktop & Tablet */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">

                {/* Search Bar - No max-width so it 'touches' the buttons area */}
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground size-5 opacity-50" />
                    <Input
                        type="text"
                        placeholder="Search products..."
                        className="h-12 pl-12 bg-background border-2 border-foreground/10 rounded-xl focus:border-primary/40 transition-all text-sm shadow-none w-full"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {/* Filter Buttons */}
                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        onClick={() => setSortBy("trending")}
                        className={cn(
                            "flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all border-2",
                            sortBy === "trending"
                                ? "bg-primary text-primary-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                                : "bg-background border-foreground/5 text-muted-foreground hover:border-foreground/10"
                        )}
                    >
                        <TrendingUp className="size-4" />
                        Trending
                    </button>
                    <button
                        type="button"
                        onClick={() => setSortBy("latest")}
                        className={cn(
                            "flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all border-2",
                            sortBy === "latest"
                                ? "bg-primary text-primary-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                                : "text-muted-foreground bg-background border-foreground/5 hover:border-foreground/10"
                        )}
                    >
                        <Clock className="size-4" />
                        Recent
                    </button>
                </div>
            </div>

            {/* STATUS INDICATOR */}
            <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                    <Activity className="size-4 text-primary/40" />
                    Showing {filteredProducts.length} Active Nodes
                </div>
            </div>

            {/* PRODUCT GRID */}
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="py-24 text-center bg-secondary/5 rounded-3xl border-2 border-dashed border-foreground/10">
                    <p className="text-lg font-bold text-muted-foreground italic">No products discovered in this segment.</p>
                </div>
            )}
        </div>
    );
}