"use client";

import { Clock, Search, TrendingUp, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import ProductCard from "@/components/products/product-card";
import { useMemo, useState } from "react";
import { products } from "@/db/schema";
import { InferSelectModel } from "drizzle-orm";
import { cn } from "@/lib/utils";

type Product = InferSelectModel<typeof products>;

export default function ProductExplorer({
    products: initialProducts,
}: {
    products: Product[];
}) {
    const [sortBy, setSortBy] = useState<"trending" | "latest">("trending");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProducts = useMemo(() => {
        let result = [...initialProducts];

        if (searchQuery.length > 0) {
            const query = searchQuery.toLowerCase().trim();

            result = result.filter((p) => {
                // 1. Check Name
                const nameMatch = p.name.toLowerCase().includes(query);

                // 2. Check Tagline
                const taglineMatch = p.tagline?.toLowerCase().includes(query);

                // 3. Check Tags Array (This was the missing piece!)
                const tagsMatch = p.tags?.some((tag) =>
                    tag.toLowerCase().includes(query),
                );

                return nameMatch || taglineMatch || tagsMatch;
            });
        }

        // Sorting Logic
        return result.sort((a, b) => {
            if (sortBy === "trending") return b.voteCount - a.voteCount;
            const dateA = a.createAt ? new Date(a.createAt).getTime() : 0;
            const dateB = b.createAt ? new Date(b.createAt).getTime() : 0;
            return dateB - dateA;
        });
    }, [searchQuery, initialProducts, sortBy]);

    return (
        <div className="space-y-10">
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0F201D]/20 size-5" />
                    <Input
                        type="text"
                        placeholder="Search by name, tagline, or tags (e.g. #saas)..."
                        className="h-14 pl-12 bg-white border-2 border-black rounded-2xl focus:ring-0 focus:ring-offset-0 placeholder:text-[#0F201D]/20 text-base shadow-none w-full lowercase"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={() => setSortBy("trending")}
                        className={cn(
                            "flex-1 md:flex-none flex items-center justify-center gap-2 px-6 h-14 rounded-2xl text-sm font-black transition-all border-2 border-black",
                            sortBy === "trending"
                                ? "bg-[#FFB38A] text-[#0F201D] shadow-[4px_4px_0px_0px_#000]"
                                : "bg-white text-[#0F201D]/40 hover:bg-black/5",
                        )}>
                        <TrendingUp className="size-4" />
                        Trending
                    </button>
                    <button
                        type="button"
                        onClick={() => setSortBy("latest")}
                        className={cn(
                            "flex-1 md:flex-none flex items-center justify-center gap-2 px-6 h-14 rounded-2xl text-sm font-black transition-all border-2 border-black",
                            sortBy === "latest"
                                ? "bg-[#B19CFF] text-[#0F201D] shadow-[4px_4px_0px_0px_#000]"
                                : "bg-white text-[#0F201D]/40 hover:bg-black/5",
                        )}>
                        <Clock className="size-4" />
                        Recents
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-between px-1">
                <p className="text-[10px] text-[#0F201D]/40 font-black uppercase tracking-widest">
                    Showing {filteredProducts.length} results
                </p>

                {searchQuery && (
                    <button
                        onClick={() => setSearchQuery("")}
                        className="text-[10px] font-black uppercase tracking-widest text-[#B19CFF] hover:text-[#0F201D] transition-colors">
                        Clear Search
                    </button>
                )}
            </div>

            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="py-32 text-center bg-black/2 rounded-4xl border-2 border-dashed border-black/5">
                    <div className="inline-flex p-4 bg-white border border-black/5 rounded-2xl mb-4">
                        <Filter className="size-6 text-[#0F201D]/20" />
                    </div>
                    <p className="text-sm font-bold text-[#0F201D]/40 uppercase tracking-tighter">
                        No products match your search criteria
                    </p>
                </div>
            )}
        </div>
    );
}
