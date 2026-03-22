import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { ShieldCheck, Hash } from "lucide-react"; // Swapped Sparkles for ShieldCheck
import { InferSelectModel } from "drizzle-orm";
import { products } from "@/db/schema";
import VotingButtons from "./voting-buttons";

type Product = InferSelectModel<typeof products>;

export default function ProductCard({ product }: { product: Product }) {
    const hasVoted = false;

    return (
        <Link href={`/products/${product.slug}`} className="block group">
            {/* 1. THE CARD: Modern "Brutalist" Enterprise Styling */}
            <Card className="relative h-full bg-secondary/5 border-2 border-foreground/5 transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-[6px_6px_0px_0px_rgba(var(--primary),0.2)] group-hover:-translate-y-1 overflow-hidden">

                {/* 2. ELITE STATUS: Rebranded as "Verified Node" */}
                {product.voteCount > 100 && (
                    <div className="absolute top-0 right-0 p-1">
                        <div className="bg-primary text-primary-foreground text-[9px] font-black px-2 py-0.5 rounded-bl-lg uppercase tracking-widest flex items-center gap-1 shadow-sm">
                            <ShieldCheck className="size-3" />
                            Elite Node
                        </div>
                    </div>
                )}

                <CardHeader className="space-y-4 pt-8">
                    <div className="flex items-start justify-between gap-4">
                        <div className="space-y-2 flex-1 min-w-0">
                            {/* System Title */}
                            <CardTitle className="text-xl font-black tracking-tighter text-foreground group-hover:text-primary transition-colors truncate uppercase">
                                {product.name}
                            </CardTitle>

                            {/* Using Tagline for the grid to keep it clean (Above the Fold logic) */}
                            <CardDescription className="text-sm leading-relaxed line-clamp-2 font-bold text-muted-foreground/70 uppercase tracking-tight">
                                {product.tagline}
                            </CardDescription>
                        </div>

                        {/* Reliability Index (formerly Upvotes) */}
                        <VotingButtons
                            productId={product.id}
                            voteCount={product.voteCount}
                            hasVoted={hasVoted}
                        />
                    </div>
                </CardHeader>

                <CardFooter className="pb-6">
                    <div className="flex flex-wrap items-center gap-2">
                        {product.tags?.map((tag) => (
                            <Badge
                                variant="outline"
                                key={tag}
                                className="bg-background/20 border-foreground/5 lowercase font-bold text-[10px] px-2 py-0 text-muted-foreground/60 flex items-center gap-1"
                            >
                                <Hash className="size-2.5 opacity-30" />
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </CardFooter>
            </Card>
        </Link>
    );
}