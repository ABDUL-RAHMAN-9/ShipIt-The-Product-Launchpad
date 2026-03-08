"use client";

import { upvoteProductAction } from "@/lib/products/product-actions";
import { cn } from "@/lib/utils";
import { ChevronUp, Loader2 } from "lucide-react";
import { useOptimistic, useTransition, useState } from "react";
import { Button } from "@/components/ui/button";

export default function VotingButtons({
    hasVoted: initialHasVoted,
    voteCount: initialVoteCount,
    productId,
}: {
    hasVoted: boolean;
    voteCount: number;
    productId: number;
}) {
    const [isPending, startTransition] = useTransition();
    const [localHasVoted, setLocalHasVoted] = useState(initialHasVoted);

    const [optimisticVoteCount, addOptimisticVote] = useOptimistic(
        initialVoteCount,
        // Math.min ensures the count never exceeds 999
        (state, newState: number) => Math.min(999, state + newState)
    );

    const handleVote = async (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        // 999 LIMIT: If it's already 999, stop voting
        if (localHasVoted || isPending || optimisticVoteCount >= 999) return;

        setLocalHasVoted(true);

        startTransition(async () => {
            addOptimisticVote(1);
            try {
                await upvoteProductAction(productId);
            } catch (error) {
                setLocalHasVoted(false);
                console.error("Voting failed", error);
            }
        });
    };

    return (
        <div className={cn(
            "flex flex-col items-center border-2 rounded-xl bg-background overflow-hidden shrink-0 transition-all w-14 h-fit",
            localHasVoted
                ? "border-primary shadow-none translate-x-[1px] translate-y-[1px]"
                : "border-foreground/10 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.1)] hover:border-primary/50"
        )}>
            <Button
                onClick={handleVote}
                variant="ghost"
                size="sm"
                disabled={localHasVoted || isPending || optimisticVoteCount >= 999}
                className={cn(
                    "h-8 w-full rounded-none border-b-2 border-foreground/5 transition-colors px-2",
                    localHasVoted
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-primary/10 hover:text-primary"
                )}
            >
                {isPending ? (
                    <Loader2 className="size-4 animate-spin" />
                ) : (
                    <ChevronUp className={cn("size-4 stroke-[3px]", localHasVoted && "text-primary-foreground")} />
                )}
            </Button>

            <span className={cn(
                "py-1.5 text-sm font-black text-center w-full tabular-nums",
                localHasVoted ? "text-primary" : "text-foreground"
            )}>
                {optimisticVoteCount}
            </span>
        </div>
    );
}