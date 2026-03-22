"use client";

import { FormField } from "@/components/forms/form-field";
import { Button } from "@/components/ui/button";
import { addProductAction } from "@/lib/products/product-actions";
import { cn } from "@/lib/utils";
import { FormState } from "@/types";
import { Loader2, Zap, LayoutPanelTop } from "lucide-react"; // Swapped icons
import { useActionState } from "react";

const initialState: FormState = {
    success: false,
    errors: undefined,
    message: "",
};

export default function ProductSubmitForm() {
    const [state, formAction, isPending] = useActionState(
        addProductAction,
        initialState
    );

    const { errors, message, success } = state;

    const getFieldErrors = (fieldName: string): string[] => {
        if (!errors) return [];
        return (errors as Record<string, string[]>)[fieldName] ?? [];
    };

    return (
        <div className="w-full max-w-4xl mx-auto px-4"> {/* Increased max-width for better horizontal use */}

            {/* COMPACT HEADER: Paragraph removed for maximum vertical efficiency */}
            <div className="mb-6 space-y-1 border-l-4 border-primary/20 pl-4">
                <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-[0.2em] text-[10px]">
                    <div className="p-1 bg-primary/10 rounded-md">
                        <LayoutPanelTop className="size-3.5" />
                    </div>
                    System Initialization
                </div>

                {/* Simplified Title - No description to save space */}
                <h1 className="text-2xl md:text-3xl font-black tracking-tight text-foreground uppercase">
                    Initialize Infrastructure
                </h1>
            </div>

            <form action={formAction} className="flex flex-col gap-6 bg-secondary/5 p-6 md:p-8 rounded-2xl border-2 border-foreground/5 relative overflow-hidden shadow-xl">

                {/* Subtle Background Icon */}
                <div className="absolute -top-4 -right-4 opacity-[0.03] pointer-events-none">
                    <Zap className="size-48 rotate-12 fill-current" />
                </div>

                {message && (
                    <div className={cn(
                        "p-3 rounded-lg border font-bold text-xs animate-in slide-in-from-top-2 duration-300",
                        success ? "bg-primary/10 border-primary/20 text-primary" : "bg-destructive/10 border-destructive/20 text-destructive"
                    )}>
                        {message}
                    </div>
                )}

                {/* MAIN FORM GRID - Optimized to reduce height */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">

                    {/* LEFT COLUMN: Identity & Tags */}
                    <div className="space-y-5">
                        <FormField
                            label="Node / Product Name"
                            name="name"
                            id="name"
                            placeholder="e.g. EchoMind AI"
                            required
                            onChange={() => { }}
                            error={getFieldErrors("name")}
                        />
                        <FormField
                            label="System Slug"
                            name="slug"
                            id="slug"
                            placeholder="echomind-ai"
                            required
                            onChange={() => { }}
                            error={getFieldErrors("slug")}
                        />
                        <FormField
                            label="Primary Tags"
                            name="tags"
                            id="tags"
                            placeholder="AI, SaaS, DevOps"
                            required
                            onChange={() => { }}
                            error={getFieldErrors("tags")}
                        />
                    </div>

                    {/* RIGHT COLUMN: URL & One-Liner */}
                    <div className="space-y-5">
                        <FormField
                            label="Access URL"
                            name="websiteUrl"
                            id="websiteUrl"
                            placeholder="https://atlash.io/node-1"
                            required
                            onChange={() => { }}
                            error={getFieldErrors("websiteUrl")}
                        />
                        <FormField
                            label="System Tagline"
                            name="tagline"
                            id="tagline"
                            placeholder="High-velocity data orchestration layer"
                            required
                            onChange={() => { }}
                            error={getFieldErrors("tagline")}
                        />
                        {/* MOVED DESCRIPTION HERE TO BALANCE GRID HEIGHT IF NEEDED */}
                    </div>

                    {/* FULL WIDTH: Detailed Specification */}
                    <div className="md:col-span-2">
                        <FormField
                            label="Deployment Specification (Detailed Description)"
                            name="description"
                            id="description"
                            placeholder="Detail the problem solved and the architectural impact..."
                            required
                            onChange={() => { }}
                            error={getFieldErrors("description")}
                            textarea
                        />
                    </div>
                </div>

                {/* COMPACT SUBMIT ACTION */}
                <div className="pt-2 border-t border-foreground/5">
                    <Button
                        type="submit"
                        size="lg"
                        disabled={isPending}
                        className="w-full h-12 text-sm font-black uppercase tracking-[0.15em] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all"
                    >
                        {isPending ? (
                            <Loader2 className="size-5 animate-spin" />
                        ) : (
                            <>
                                <Zap className="size-4 mr-2 fill-current" />
                                Deploy to Global Registry
                            </>
                        )}
                    </Button>
                </div>
            </form>
        </div>
    );
}