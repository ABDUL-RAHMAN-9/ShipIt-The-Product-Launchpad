"use client";

import { ProductType } from "@/types";
import { Trash2, ExternalLink, User, Calendar, Hash } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardDescription, CardTitle } from "../ui/card";
import AdminActions from "./admin-actions";
import { cn } from "@/lib/utils";
import { deleteProductAction } from "@/lib/admin/admin-actions";
import { useState } from "react";

export default function AdminProductCard({ product }: { product: ProductType }) {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        if (!confirm("Are you sure? This action is permanent.")) return;
        setIsDeleting(true);
        await deleteProductAction(product.id);
        setIsDeleting(false);
    };

    const launchDate = product.createAt
        ? new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(new Date(product.createAt))
        : "Draft";

    return (
        <Card className="border-2 border-foreground/5 rounded-[2rem] p-8 bg-background hover:border-foreground/10 transition-all shadow-sm relative overflow-hidden">
            <div className="flex flex-col xl:flex-row gap-8">

                {/* 1. Main Info Column */}
                <div className="flex-1 min-w-0 space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                        <CardTitle className="text-2xl font-black tracking-tighter text-foreground">
                            {product.name}
                        </CardTitle>

                        {/* AGGRESSIVE BADGES: High contrast for quick scanning */}
                        <Badge
                            className={cn(
                                "px-3 py-1 text-[10px] font-black uppercase tracking-widest border-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
                                product.status === "pending" && "bg-amber-400 text-black border-black",
                                product.status === "approved" && "bg-emerald-500 text-white border-black",
                                product.status === "rejected" && "bg-rose-500 text-white border-black"
                            )}
                        >
                            {product.status}
                        </Badge>
                    </div>

                    <CardDescription className="text-lg font-medium text-muted-foreground leading-relaxed">
                        {product.tagline}
                    </CardDescription>

                    {/* Metadata Row */}
                    <div className="flex flex-wrap gap-6 text-[11px] font-bold text-muted-foreground uppercase tracking-widest pt-4 border-t border-foreground/5">
                        <span className="flex items-center gap-2"><User className="size-3.5 text-primary" /> {product.submittedBy}</span>
                        <span className="flex items-center gap-2"><Calendar className="size-3.5 text-primary" /> {launchDate}</span>
                        <a href={product.websiteUrl ?? "#"} target="_blank" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                            <ExternalLink className="size-3.5" /> Visit Site
                        </a>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {product.tags?.map((tag) => (
                            <Badge key={tag} variant="secondary" className="bg-secondary/40 text-foreground/70 border-none font-bold lowercase">
                                <Hash className="size-3 mr-1 opacity-40" /> {tag}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* 2. Moderation Action Column */}
                <div className="xl:w-64 flex flex-col justify-center items-end gap-4 border-l-2 border-foreground/5 xl:pl-8">
                    <AdminActions status={product.status ?? ""} productId={product.id} />

                    <Button
                        variant="outline"
                        size="sm"
                        onClick={handleDelete}
                        disabled={isDeleting}
                        className="w-full xl:w-fit text-destructive hover:bg-destructive hover:text-white border-destructive/20 font-bold transition-all"
                    >
                        <Trash2 className="size-4 mr-2" />
                        {isDeleting ? "Purging..." : "Delete Permanently"}
                    </Button>
                </div>
            </div>
        </Card>
    );
}