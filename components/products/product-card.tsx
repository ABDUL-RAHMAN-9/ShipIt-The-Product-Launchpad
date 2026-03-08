import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { InferSelectModel } from "drizzle-orm";
import { products } from "@/db/schema";
import VotingButtons from "./voting-buttons";

type Product = InferSelectModel<typeof products>;

export default function ProductCard({ product }: { product: Product }) {
    // Note: In the future, this will come from a real database check
    const hasVoted = false;

    return (
        <Link href={`/products/${product.slug}`} className="block group">
            <Card className="relative h-full bg-secondary/10 border-2 border-foreground/10 transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-[6px_6px_0px_0px_var(--color-primary)] group-hover:-translate-y-1 group-hover:-translate-x-1 overflow-hidden">

                {/* Elite Badge for high-performing projects */}
                {product.voteCount > 100 && (
                    <div className="absolute top-0 right-0 p-1">
                        <div className="bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-bl-lg uppercase tracking-wider flex items-center gap-1">
                            <Sparkles className="size-3" />
                            Elite
                        </div>
                    </div>
                )}

                {/* Find the CardHeader in your product-card.tsx and update it to this */}
                <CardHeader className="space-y-4">
                    <div className="flex items-start justify-between gap-6"> {/* Added larger gap */}
                        <div className="space-y-1.5 flex-1 min-w-0"> {/* min-w-0 is the CSS secret for truncating text */}
                            <CardTitle className="text-xl font-extrabold tracking-tight group-hover:text-primary transition-colors truncate">
                                {product.name}
                            </CardTitle>
                            <CardDescription className="text-sm leading-relaxed line-clamp-2 font-medium text-muted-foreground/90">
                                {product.description}
                            </CardDescription>
                        </div>

                        <VotingButtons
                            productId={product.id}
                            voteCount={product.voteCount}
                            hasVoted={hasVoted}
                        />
                    </div>
                </CardHeader>

                <CardFooter>
                    <div className="flex flex-wrap items-center gap-2">
                        {product.tags?.map((tag) => (
                            <Badge
                                variant="outline"
                                key={tag}
                                className="bg-background/50 border-foreground/5 lowercase font-semibold text-[11px]"
                            >
                                #{tag}
                            </Badge>
                        ))}
                    </div>
                </CardFooter>
            </Card>
        </Link>
    );
}