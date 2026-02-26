import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { ChevronUp, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface Product {
    id: number;
    name: string;
    description: string;
    tags: string[];
    votes: number;
    isFeatured: boolean;
}

export default function ProductCard({ product }: { product: Product }) {
    const hasVoted = false;

    return (
        <Link href={`/products/${product.id}`} className="block group">
            <Card className="relative h-full bg-secondary/10 border-2 border-foreground/10 transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-[6px_6px_0px_0px_var(--color-primary)] group-hover:-translate-y-1 group-hover:-translate-x-1 overflow-hidden">

                {/* Visual "Stamp" for Featured items */}
                {product.isFeatured && (
                    <div className="absolute top-0 right-0 p-1">
                        <div className="bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-bl-lg uppercase tracking-wider flex items-center gap-1">
                            <Sparkles className="size-3" />
                            Elite
                        </div>
                    </div>
                )}

                <CardHeader className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1.5">
                            <CardTitle className="text-xl font-extrabold tracking-tight group-hover:text-primary transition-colors">
                                {product.name}
                            </CardTitle>
                            <CardDescription className="text-sm leading-relaxed line-clamp-2 font-medium text-muted-foreground/90">
                                {product.description}
                            </CardDescription>
                        </div>

                        {/* TACTILE VOTE BOX: Looks like an ink stamp */}
                        <div className="flex flex-col items-center border-2 border-foreground/10 rounded-xl bg-background overflow-hidden shrink-0">
                            <Button
                                variant="ghost"
                                size="sm"
                                className={cn(
                                    "h-8 w-10 rounded-none border-b-2 border-foreground/5 transition-colors",
                                    hasVoted ? "bg-primary/20 text-primary" : "hover:bg-primary/10 hover:text-primary"
                                )}
                            >
                                <ChevronUp className="size-4 stroke-[3px]" />
                            </Button>
                            <span className="py-1 text-sm font-black text-foreground">
                                {product.votes}
                            </span>
                        </div>
                    </div>
                </CardHeader>

                <CardFooter>
                    <div className="flex flex-wrap items-center gap-2">
                        {product.tags.map((tag) => (
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