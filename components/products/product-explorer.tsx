"use client";

import { Clock, Search, TrendingUp, LayoutGrid } from "lucide-react";
import { Input } from "@/components/ui/input";
import ProductCard from "@/components/products/product-card";
import { useMemo, useState } from "react";
import { products } from "@/db/schema";
import { InferSelectModel } from "drizzle-orm";
import { cn } from "@/lib/utils";

// 1. STRICT TYPING: Infer the type directly from the DB Schema
type Product = InferSelectModel<typeof products>;

export default function ProductExplorer({ products: initialProducts }: { products: Product[] }) {
    const [sortBy, setSortBy] = useState<"trending" | "latest">("trending");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProducts = useMemo(() => {
        let result = [...initialProducts];

        // Search Logic
        if (searchQuery.length > 0) {
            const query = searchQuery.toLowerCase();
            result = result.filter((p) =>
                p.name.toLowerCase().includes(query) ||
                p.tagline?.toLowerCase().includes(query)
            );
        }

        // Sort Logic
        return result.sort((a, b) => {
            if (sortBy === "trending") return b.voteCount - a.voteCount;
            // Using createAt (the field name from your schema)
            const dateA = a.createAt ? new Date(a.createAt).getTime() : 0;
            const dateB = b.createAt ? new Date(b.createAt).getTime() : 0;
            return dateB - dateA;
        });
    }, [searchQuery, initialProducts, sortBy]);

    return (
        <div className="space-y-12">
            {/* SEARCH & FILTER CONTROL PANEL */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 bg-secondary/5 p-6 rounded-[2rem] border-2 border-foreground/5 shadow-sm">

                {/* Tactical Search Bar */}
                <div className="flex-1 relative max-w-xl">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary size-5 opacity-50" />
                    <Input
                        type="text"
                        placeholder="Search the registry..."
                        className="h-14 pl-12 bg-background border-2 border-foreground/10 rounded-2xl focus:border-primary transition-all text-base font-medium shadow-none"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {/* Editorial Sort Switcher (Tactile Toggle) */}
                <div className="flex items-center gap-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 ml-2">Sort By:</span>
                    <div className="flex p-1 bg-background border-2 border-foreground/5 rounded-2xl">
                        <button
                            type="button"
                            onClick={() => setSortBy("trending")}
                            className={cn(
                                "flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all",
                                sortBy === "trending"
                                    ? "bg-primary text-primary-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                                    : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            <TrendingUp className="size-4" />
                            Trending
                        </button>
                        <button
                            type="button"
                            onClick={() => setSortBy("latest")}
                            className={cn(
                                "flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all",
                                sortBy === "latest"
                                    ? "bg-primary text-primary-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                                    : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            <Clock className="size-4" />
                            Latest
                        </button>
                    </div>
                </div>
            </div>

            {/* RESULTS METADATA */}
            <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                    <LayoutGrid className="size-4 text-primary/40" />
                    Catalog contains {filteredProducts.length} entries
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
                <div className="py-24 text-center bg-secondary/5 rounded-[3rem] border-2 border-dashed border-foreground/10">
                    <p className="text-lg font-bold text-muted-foreground">No projects match your search registry.</p>
                </div>
            )}
        </div>
    );
}