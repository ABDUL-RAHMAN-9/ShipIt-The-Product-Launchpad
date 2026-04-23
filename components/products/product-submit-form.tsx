"use client";

import { FormField } from "@/components/forms/form-field";
import { Button } from "@/components/ui/button";
import { addProductAction } from "@/lib/products/product-actions";
import { cn } from "@/lib/utils";
import { FormState } from "@/types";
import { Loader2, Zap, LayoutPanelTop } from "lucide-react";
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
        <div className="w-full max-w-4xl mx-auto px-4">

            <div className="mb-6 space-y-1 border-l-4 border-primary/20 pl-4">
                <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-[0.2em] text-[10px]">
                    <div className="p-1 bg-primary/10 rounded-md">
                        <LayoutPanelTop className="size-3.5" />
                    </div>
                    Submit Product
                </div>

                <h1 className="text-2xl md:text-3xl font-black tracking-tight text-foreground uppercase">
                    Share your creation
                </h1>
            </div>

            <form action={formAction} className="flex flex-col gap-6 bg-secondary/5 p-6 md:p-8 rounded-2xl border-2 border-foreground/5 overflow-hidden shadow-xl">

                {message && (
                    <div className={cn(
                        "p-3 rounded-lg border font-bold text-xs animate-in slide-in-from-top-2 duration-300",
                        success ? "bg-primary/10 border-primary/20 text-primary" : "bg-destructive/10 border-destructive/20 text-destructive"
                    )}>
                        {message}
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">

                    {/* LEFT COLUMN */}
                    <div className="space-y-5">
                        <FormField
                            label="Product Name"
                            name="name"
                            id="name"
                            placeholder="My Awesome Product"
                            required
                            onChange={() => { }}
                            error={getFieldErrors("name")}
                        />
                        <FormField
                            label="Slug"
                            name="slug"
                            id="slug"
                            placeholder="my-product-slug"
                            required
                            onChange={() => { }}
                            error={getFieldErrors("slug")}
                        />
                        <FormField
                            label="Tags"
                            name="tags"
                            id="tags"
                            placeholder="AI, Productivity, SaaS"
                            required
                            onChange={() => { }}
                            error={getFieldErrors("tags")}
                        />
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="space-y-5">
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
                            label="Tagline"
                            name="tagline"
                            id="tagline"
                            placeholder="A brief, catchy description"
                            required
                            onChange={() => { }}
                            error={getFieldErrors("tagline")}
                        />
                    </div>

                    <div className="md:col-span-2">
                        <FormField
                            label="Description"
                            name="description"
                            id="description"
                            placeholder="Tell us more about your product..."
                            required
                            onChange={() => { }}
                            error={getFieldErrors("description")}
                            textarea
                        />
                    </div>
                </div>

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
                                Submit Product
                            </>
                        )}
                    </Button>
                </div>
            </form>
        </div>
    );
}