"use client";

import React, { useOptimistic, useTransition, useState } from "react";
import { upvoteProductAction } from "@/lib/products/product-actions";
import { cn } from "@/lib/utils";
import { ShieldCheck, Loader2, ArrowBigUpDash } from "lucide-react";

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
        (state, newState: number) => Math.min(999, state + newState),
    );

    const handleVerification = async (
        e: React.MouseEvent<HTMLButtonElement>,
    ) => {
        e.preventDefault();
        e.stopPropagation();

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
        <button
            onClick={handleVerification}
            disabled={localHasVoted || isPending || optimisticVoteCount >= 999}
            title="Verify Infrastructure Reliability"
            className={cn(
                "flex items-center gap-1.5 border-2 px-3 py-1.5 rounded-md font-mono text-xs font-black uppercase transition-all select-none h-9 shrink-0",
                localHasVoted
                    ? "bg-[#E97B77] text-[#0F201D] border-foreground shadow-none translate-x-[2px] translate-y-[2px]"
                    : "bg-white text-[#0F201D] border-foreground shadow-[2px_2px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none cursor-pointer",
            )}>
            {isPending ? (
                <Loader2 className="size-4 animate-spin shrink-0" />
            ) : localHasVoted ? (
                <ArrowBigUpDash className="size-4 shrink-0 stroke-[2.5px] fill-current" />
            ) : (
                <ArrowBigUpDash className="size-4 shrink-0 stroke-[2.5px] transition-transform group-hover:-translate-y-0.5" />
            )}
            <span className="tabular-nums leading-none">
                {optimisticVoteCount}
            </span>
        </button>
    );
}
