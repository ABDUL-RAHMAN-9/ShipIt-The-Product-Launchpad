import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Users, ArrowUpRight } from "lucide-react";
import { InferSelectModel } from "drizzle-orm";
import { products } from "@/db/schema";
import VotingButtons from "./voting-buttons";

type Product = InferSelectModel<typeof products>;

export default function ProductCard({
    product,
    hasVoted = false,
}: {
    product: Product;
    hasVoted?: boolean;
}) {
    const getStatus = () => {
        if (product.voteCount >= 500) {
            return {
                label: "Trending",
                color: "bg-[#FAC9C2]",
            };
        }

        if (product.voteCount >= 100) {
            return {
                label: "Community Pick",
                color: "bg-[#D7E5F4]",
            };
        }

        return {
            label: "New Launch",
            color: "bg-[#D2ECDB]",
        };
    };

    const status = getStatus();
    const makers = Math.floor(product.voteCount * 0.55 + 40);

    return (
        <Link href={`/products/${product.slug}`} className="group block h-full">
            <Card className="relative h-full bg-white border-2 border-[#0F201D] rounded-3xl transition-all duration-300 shadow-[6px_6px_0px_0px_#0F201D] group-hover:shadow-[2px_2px_0px_0px_#0F201D] group-hover:translate-x-1 group-hover:translate-y-1 flex flex-col overflow-hidden">
                <div className="flex items-start justify-between px-6 pt-4">
                    <div
                        className={`${status.color} flex items-center justify-center rounded-[6px] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] font-mono`}>
                        {status.label}
                    </div>

                    <VotingButtons
                        productId={product.id}
                        voteCount={product.voteCount}
                        hasVoted={hasVoted}
                    />
                </div>

                <div className="flex flex-1 flex-col px-6 pt-4">
                    <div className="flex items-start justify-between gap-3">
                        <CardTitle className="text-2xl font-black leading-tight text-[#0F201D]">
                            {product.name}
                        </CardTitle>

                        <ArrowUpRight className="mt-1 size-4 shrink-0 text-black/20 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-hover:text-black" />
                    </div>

                    <CardDescription className="mt-2 line-clamp-2 text-sm font-semibold leading-relaxed text-[#0F201D]/70">
                        {product.tagline}
                    </CardDescription>

                    <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-black/45">
                        <Users className="size-3.5" />
                        <span>{makers} makers using this</span>
                    </div>

                    <div className="mt-auto pt-5">
                        <div className="rounded-xl border border-black/10 bg-black/3 px-3 py-3">
                            <div className="flex flex-wrap items-center gap-2">
                                {product.tags?.slice(0, 2).map((tag) => (
                                    <Badge
                                        key={tag}
                                        variant="outline"
                                        className="rounded-md border-black/10 bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide">
                                        #{tag}
                                    </Badge>
                                ))}

                                {product.tags && product.tags.length > 2 && (
                                    <span className="text-[10px] font-semibold text-black/40">
                                        +{product.tags.length - 2} more
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </Link>
    );
}
