"use client";

import { upvoteProductAction } from "@/lib/products/product-actions";
import { cn } from "@/lib/utils";
import { ShieldCheck, Loader2, ArrowBigUpDash } from "lucide-react"; // Swapped Chevron for ArrowBigUpDash
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
        // Math.min 999 becomes "Max Confidence Level"
        (state, newState: number) => Math.min(999, state + newState)
    );

    const handleVerification = async (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        // LOGIC: Verify the reliability of the node
        if (localHasVoted || isPending || optimisticVoteCount >= 999) return;

        setLocalHasVoted(true);

        startTransition(async () => {
            addOptimisticVote(1);
            try {
                await upvoteProductAction(productId);
            } catch (error) {
                setLocalHasVoted(false);
                console.error("Verification protocol failed", error);
            }
        });
    };

    return (
        <div className={cn(
            "flex flex-col items-center border-2 rounded-xl bg-background overflow-hidden shrink-0 transition-all w-14 h-fit group",
            localHasVoted
                ? "border-primary shadow-none translate-x-[1px] translate-y-[1px]"
                : "border-foreground/10 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:border-primary/40"
        )}>
            {/* 1. THE ACTION: Verify Node */}
            <Button
                onClick={handleVerification}
                variant="ghost"
                size="sm"
                title="Verify Infrastructure Reliability"
                disabled={localHasVoted || isPending || optimisticVoteCount >= 999}
                className={cn(
                    "h-9 w-full rounded-none border-b-2 border-foreground/5 transition-colors px-2",
                    localHasVoted
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-primary/5 hover:text-primary"
                )}
            >
                {isPending ? (
                    <Loader2 className="size-4 animate-spin" />
                ) : localHasVoted ? (
                    <ShieldCheck className="size-4 stroke-[3px]" />
                ) : (
                    <ArrowBigUpDash className="size-4 stroke-[2px] transition-transform group-hover:-translate-y-0.5" />
                )}
            </Button>

            {/* 2. THE METRIC: Reliability Index */}
            <div className="flex flex-col items-center py-1.5 w-full">
                <span className={cn(
                    "text-sm font-black tabular-nums leading-none",
                    localHasVoted ? "text-primary" : "text-foreground"
                )}>
                    {optimisticVoteCount}
                </span>
                <span className="text-[7px] font-bold uppercase tracking-tighter text-muted-foreground/40 mt-1">
                    Index
                </span>
            </div>
        </div>
    );
}