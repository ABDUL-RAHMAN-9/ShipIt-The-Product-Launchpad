"use client";

import { Clock, Search, ShieldCheck, Activity } from "lucide-react"; // Swapped TrendingUp for ShieldCheck
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
        <div className="space-y-12">
            {/* SEARCH & FILTER CONTROL PANEL */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 bg-secondary/5 p-6 rounded-[2rem] border-2 border-foreground/5 shadow-sm">

                {/* Tactical Query Bar */}
                <div className="flex-1 relative max-w-xl">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary size-5 opacity-50" />
                    <Input
                        type="text"
                        placeholder="Query System Nodes..." // Professional Label
                        className="h-14 pl-12 bg-background border-2 border-foreground/10 rounded-2xl focus:border-primary transition-all text-base font-medium shadow-none"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {/* Infrastructure Filter (Tactile Toggle) */}
                <div className="flex items-center gap-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 ml-2">Intelligence Filter:</span>
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
                            <ShieldCheck className="size-4" />
                            Reliability Index {/* High-end Enterprise term for Upvotes */}
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
                            Audit Log {/* High-end Enterprise term for Recent */}
                        </button>
                    </div>
                </div>
            </div>

            {/* SYSTEM TELEMETRY */}
            <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                    <Activity className="size-4 text-primary/40" />
                    Registry Status: {filteredProducts.length} Active Nodes Online
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
                    <p className="text-lg font-bold text-muted-foreground italic">No infrastructure nodes discovered in the current registry segment.</p>
                </div>
            )}
        </div>
    );
}