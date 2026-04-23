import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { ShieldCheck, Hash } from "lucide-react";
import { InferSelectModel } from "drizzle-orm";
import { products } from "@/db/schema";
import VotingButtons from "./voting-buttons";

type Product = InferSelectModel<typeof products>;

export default function ProductCard({ product }: { product: Product }) {
    const hasVoted = false;

    return (
        <Link href={`/products/${product.slug}`} className="block group">
            <Card className="relative h-full bg-secondary/5 border-2 border-foreground/5 transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-[6px_6px_0px_0px_rgba(var(--primary),0.2)] group-hover:-translate-y-1 overflow-hidden">
                {product.voteCount > 100 && (
                    <div className="absolute top-0 right-0">
                        <div className="bg-primary/10 backdrop-blur-md text-primary border-l border-b border-primary/20 text-[9px] font-black px-3 py-1.5 rounded-bl-xl uppercase tracking-[0.15em] flex items-center gap-1.5">
                            <ShieldCheck className="size-3.5" />
                            Elite Node
                        </div>
                    </div>
                )}

                <CardHeader className="space-y-4 pt-6">
                    <div className="flex items-start justify-between gap-4">
                        <div className="space-y-2 flex-1 min-w-0">
                            <CardTitle className="text-lg font-black tracking-widest text-foreground group-hover:text-primary transition-colors truncate">
                                {product.name}
                            </CardTitle>
                            <CardDescription className="text-sm leading-relaxed line-clamp-2 font-medium text-muted-foreground/80 lowercase">
                                {product.tagline}
                            </CardDescription>
                        </div>
                        <VotingButtons
                            productId={product.id}
                            voteCount={product.voteCount}
                            hasVoted={hasVoted}
                        />
                    </div>
                </CardHeader>

                <CardFooter className="pb-2">
                    <div className="flex flex-wrap items-center gap-2">
                        {product.tags?.map((tag) => (
                            <Badge
                                variant="outline"
                                key={tag}
                                className="bg-background/10 border-foreground/10 lowercase font-bold text-[11px] px-3 py-0.5 text-muted-foreground/80 flex items-center gap-1 transition-colors hover:bg-primary/5"
                            >
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </CardFooter>
            </Card>
        </Link>
    );
}