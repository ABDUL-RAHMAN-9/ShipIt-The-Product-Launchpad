"use client";

import React, { useActionState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, Loader2, Rocket } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { addProductAction } from "@/lib/products/product-actions";
import { FormState } from "@/types";

const initialState: FormState = {
    success: false,
    errors: undefined,
    message: "",
    timestamp: undefined,
};

const LIMITS = {
    name: 50,
    websiteUrl: 200,
    tagline: 80,
    tags: 100,
    description: 400,
} as const;

export default function ProductSubmitForm() {
    const [state, formAction, isPending] = useActionState(
        addProductAction,
        initialState,
    );

    const { errors, success } = state;

    useEffect(() => {
        if (!success) return;

        toast.success("Product submitted successfully", {
            description: "Your project is now under review.",
            duration: 5000,
        });

        const form = document.getElementById(
            "product-submit-form",
        ) as HTMLFormElement | null;

        form?.reset();
    }, [success, state.timestamp]);

    const getFieldErrors = (fieldName: string): string[] => {
        if (!errors) return [];

        const typedErrors = errors as Record<string, string[]>;

        return typedErrors[fieldName] ?? [];
    };

    const fieldError = (fieldName: string) => {
        const fieldErrors = getFieldErrors(fieldName);

        return (
            <div aria-live="polite" className="min-h-4 pt-1">
                {fieldErrors.length > 0 && (
                    <p className="text-[11px] font-medium leading-4 text-destructive">
                        {fieldErrors[0]}
                    </p>
                )}
            </div>
        );
    };

    return (
        /* 
          Using 'fixed inset-0 z-50' forces this container to span full-screen,
          bypassing any parent container constraints or padding wrapper classes.
          'overflow-y-auto' ensures vertical scrolling remains functional if content overflows.
        */
        <main className="fixed inset-0 z-50 overflow-y-auto bg-[#F3F0FA] px-4 font-sans dark:bg-[#09080D]">
            <div className="flex min-h-full items-center justify-center py-8 sm:py-12">
                {/* 
                  Sleek white/dark card containing the submit form, borders, and shadows
                */}
                <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl border border-zinc-100 dark:bg-[#111015] dark:border-zinc-900 sm:p-8 md:p-10">
                    {/* Top navigation */}
                    <div className="mb-5">
                        <Link
                            href="/"
                            className="group flex items-center gap-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:text-zinc-800 dark:hover:text-zinc-200">
                            <ChevronLeft
                                size={14}
                                className="transition-transform group-hover:-translate-x-0.5"
                                aria-hidden="true"
                            />
                            Back to home
                        </Link>
                    </div>

                    {/* Page heading */}
                    <header className="mb-6">
                        <h1 className="text-3xl font-bold leading-tight tracking-tight text-zinc-950 dark:text-white">
                            Share what you&apos;ve{" "}
                            <span className="text-[#6E42F4] dark:text-[#B19CFF]">
                                built.
                            </span>
                        </h1>

                        <p className="mt-1 text-xs font-medium text-muted-foreground">
                            Tell the community about your product and get it
                            discovered by other builders.
                        </p>
                    </header>

                    {/* Form */}
                    <form
                        id="product-submit-form"
                        action={formAction}
                        className="space-y-4">
                        <div className="space-y-3">
                            {/* Product name */}
                            <div>
                                <Label
                                    htmlFor="name"
                                    className="text-zinc-950 dark:text-white">
                                    Product name
                                    <span className="ml-1 text-destructive">
                                        *
                                    </span>
                                </Label>

                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    maxLength={LIMITS.name}
                                    autoComplete="off"
                                    placeholder="e.g. Atlash"
                                    className="mt-1.5 h-10 rounded-lg border-zinc-200 bg-transparent px-3 text-sm shadow-none focus-visible:border-[#6E42F4] focus-visible:ring-1 focus-visible:ring-[#6E42F4]/20 dark:border-zinc-800"
                                />

                                {fieldError("name")}
                            </div>

                            {/* Website */}
                            <div>
                                <Label
                                    htmlFor="websiteUrl"
                                    className="text-zinc-950 dark:text-white">
                                    Website URL
                                    <span className="ml-1 text-destructive">
                                        *
                                    </span>
                                </Label>

                                <Input
                                    id="websiteUrl"
                                    name="websiteUrl"
                                    type="url"
                                    required
                                    maxLength={LIMITS.websiteUrl}
                                    inputMode="url"
                                    autoComplete="url"
                                    placeholder="https://yourproduct.com"
                                    className="mt-1.5 h-10 rounded-lg border-zinc-200 bg-transparent px-3 text-sm shadow-none focus-visible:border-[#6E42F4] focus-visible:ring-1 focus-visible:ring-[#6E42F4]/20 dark:border-zinc-800"
                                />

                                {fieldError("websiteUrl")}
                            </div>

                            {/* Tagline */}
                            <div>
                                <Label
                                    htmlFor="tagline"
                                    className="text-zinc-950 dark:text-white">
                                    Tagline
                                    <span className="ml-1 text-destructive">
                                        *
                                    </span>
                                </Label>

                                <Input
                                    id="tagline"
                                    name="tagline"
                                    type="text"
                                    required
                                    maxLength={LIMITS.tagline}
                                    placeholder="What does your product do?"
                                    className="mt-1.5 h-10 rounded-lg border-zinc-200 bg-transparent px-3 text-sm shadow-none focus-visible:border-[#6E42F4] focus-visible:ring-1 focus-visible:ring-[#6E42F4]/20 dark:border-zinc-800"
                                />

                                {fieldError("tagline")}
                            </div>

                            {/* Tags */}
                            <div>
                                <Label
                                    htmlFor="tags"
                                    className="text-zinc-950 dark:text-white">
                                    Tags
                                    <span className="ml-1 text-muted-foreground">
                                        (up to 6)
                                    </span>
                                    <span className="ml-1 text-destructive">
                                        *
                                    </span>
                                </Label>

                                <Input
                                    id="tags"
                                    name="tags"
                                    type="text"
                                    required
                                    maxLength={LIMITS.tags}
                                    placeholder="AI, SaaS, Developer Tools"
                                    className="mt-1.5 h-10 rounded-lg border-zinc-200 bg-transparent px-3 text-sm shadow-none focus-visible:border-[#6E42F4] focus-visible:ring-1 focus-visible:ring-[#6E42F4]/20 dark:border-zinc-800"
                                />

                                {fieldError("tags")}
                            </div>

                            {/* Description */}
                            <div>
                                <div className="flex items-center justify-between">
                                    <Label
                                        htmlFor="description"
                                        className="text-zinc-950 dark:text-white">
                                        Product story
                                        <span className="ml-1 text-destructive">
                                            *
                                        </span>
                                    </Label>

                                    <span className="text-[10px] font-medium text-muted-foreground">
                                        Max {LIMITS.description} characters
                                    </span>
                                </div>

                                <Textarea
                                    id="description"
                                    name="description"
                                    required
                                    maxLength={LIMITS.description}
                                    placeholder="Tell builders what you built, why you built it, and what makes it useful."
                                    className="mt-1.5 h-24 resize-none rounded-lg border-zinc-200 bg-transparent px-3 py-2.5 text-sm leading-5 shadow-none focus-visible:border-[#6E42F4] focus-visible:ring-1 focus-visible:ring-[#6E42F4]/20 dark:border-zinc-800"
                                />

                                {fieldError("description")}
                            </div>
                        </div>

                        {/* Bottom action */}
                        <div className="mt-6 pt-5 border-t border-zinc-100 dark:border-zinc-900">
                            <div className="flex items-center justify-between gap-4">
                                <div className="min-w-0">
                                    <p className="text-xs font-semibold text-zinc-950 dark:text-white">
                                        Ready to launch?
                                    </p>

                                    <p className="mt-0.5 text-[11px] text-muted-foreground">
                                        Your submission will be reviewed before
                                        publication.
                                    </p>
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isPending}
                                    className="h-10 shrink-0 rounded-lg bg-[#6E42F4] hover:bg-[#5C36D0] px-5 text-sm font-semibold text-white transition-colors">
                                    {isPending ? (
                                        <>
                                            <Loader2 className="mr-2 size-4 animate-spin" />
                                            Submitting
                                        </>
                                    ) : (
                                        <>
                                            <Rocket className="mr-2 size-4" />
                                            Launch project
                                        </>
                                    )}
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}
