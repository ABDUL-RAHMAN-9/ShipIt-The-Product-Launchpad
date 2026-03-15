"use client";

import { FormField } from "@/components/forms/form-field";
import { Button } from "@/components/ui/button";
import { addProductAction } from "@/lib/products/product-actions";
import { cn } from "@/lib/utils";
import { FormState } from "@/types";
import { Loader2, Navigation, NotebookPen } from "lucide-react";
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
        <div className="w-full max-w-2xl mx-auto">
            {/* HEADER: Smaller text, better spacing */}
            <div className="mb-10 space-y-3 border-l-4 border-primary/20 pl-6">
                <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-[0.2em] text-[10px]">
                    <div className="p-1 bg-primary/10 rounded-md">
                        <NotebookPen className="size-3.5" />
                    </div>
                    New Submission
                </div>

                {/* 2. THE TITLE: The name of the institutional system */}
                <div className="space-y-2">
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
                        The Project Registry
                    </h1>
                    <p className="text-sm text-muted-foreground font-medium max-w-lg leading-relaxed">
                        Record your latest craft in the community archives. Every entry is manually reviewed to ensure a high-quality showcase.
                    </p>
                </div>
            </div>
            <form action={formAction} className="flex flex-col gap-10 bg-secondary/5 p-8 md:p-10 rounded-3xl border-2 border-foreground/5 relative overflow-hidden">

                {/* Decorative background element */}
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                    <Navigation className="size-32 rotate-12" />
                </div>

                {message && (
                    <div
                        className={cn(
                            "p-4 rounded-xl border-2 font-bold text-sm animate-in fade-in zoom-in-95 duration-300",
                            success
                                ? "bg-primary/10 border-primary/20 text-primary"
                                : "bg-destructive/10 border-destructive/20 text-destructive"
                        )}
                        role="alert"
                    >
                        {message}
                    </div>
                )}

                {/* SECTION 1: Identity */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                        label="Product Name"
                        name="name"
                        id="name"
                        placeholder="e.g. EchoMind AI"
                        required
                        onChange={() => { }}
                        error={getFieldErrors("name")}
                    />
                    <FormField
                        label="URL Slug"
                        name="slug"
                        id="slug"
                        placeholder="echomind-ai"
                        required
                        onChange={() => { }}
                        helperText="Used in your project's URL"
                        error={getFieldErrors("slug")}
                    />
                </div>

                {/* SECTION 2: The Pitch */}
                <div className="space-y-6">
                    <FormField
                        label="One-line Tagline"
                        name="tagline"
                        id="tagline"
                        placeholder="A brief, catchy description of your ship"
                        required
                        onChange={() => { }}
                        error={getFieldErrors("tagline")}
                    />

                    <FormField
                        label="Detailed Description"
                        name="description"
                        id="description"
                        placeholder="What problem does it solve? Who is it for?"
                        required
                        onChange={() => { }}
                        error={getFieldErrors("description")}
                        textarea
                    />
                </div>

                {/* SECTION 3: Links & Meta */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                        label="Website URL"
                        name="websiteUrl"
                        id="websiteUrl"
                        placeholder="https://yourproduct.com"
                        required
                        onChange={() => { }}
                        error={getFieldErrors("websiteUrl")}
                    />
                    <FormField
                        label="Tags"
                        name="tags"
                        id="tags"
                        placeholder="AI, SaaS, Productivity"
                        required
                        onChange={() => { }}
                        error={getFieldErrors("tags")}
                        helperText="Comma separated list"
                    />
                </div>

                {/* SUBMIT ACTION */}
                <div>
                    <Button
                        type="submit"
                        size="lg"
                        disabled={isPending}
                        className="w-full text-base font-bold uppercase tracking-wider"
                    >
                        {isPending ? (
                            <Loader2 className="size-5 animate-spin" />
                        ) : (
                            <>
                                <Navigation className="size-5 rotate-45 mr-2" />
                                Launch to Community
                            </>
                        )}
                    </Button>
                </div>
            </form>
        </div>
    );
}