"use client";

import { ProductType } from "@/types";
import { Trash2, ExternalLink, User, Calendar, Hash, ShieldAlert, ShieldCheck, Zap } from "lucide-react";
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
        if (!confirm("CRITICAL: Permanent deletion of this node will result in immediate data purge. Continue?")) return;
        setIsDeleting(true);
        await deleteProductAction(product.id);
        setIsDeleting(false);
    };

    const launchDate = product.createAt
        ? new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(new Date(product.createAt))
        : "Draft Status";

    return (
        <Card className="border-2 border-foreground/5 rounded-[2rem] p-8 bg-background hover:border-primary/20 transition-all shadow-sm relative overflow-hidden group">
            {/* Subtle background "Authorized" watermark for approved nodes */}
            {product.status === "approved" && (
                <ShieldCheck className="absolute -right-8 -bottom-8 size-48 opacity-[0.03] text-primary rotate-12 pointer-events-none" />
            )}

            <div className="flex flex-col xl:flex-row gap-8">

                {/* 1. ARCHITECTURAL OVERVIEW COLUMN */}
                <div className="flex-1 min-w-0 space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                        <CardTitle className="text-2xl font-black tracking-tighter text-foreground">
                            {product.name}
                        </CardTitle>

                        {/* ENTERPRISE STATUS INDICATORS */}
                        <Badge
                            className={cn(
                                "px-3 py-1 text-[10px] font-black uppercase tracking-widest border-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]",
                                product.status === "pending" && "bg-amber-400 text-black border-black",
                                product.status === "approved" && "bg-primary text-primary-foreground border-black", // Using Sage for Approved
                                product.status === "rejected" && "bg-rose-500 text-white border-black"
                            )}
                        >
                            {product.status === "pending" ? "Awaiting Audit" : product.status === "approved" ? "Authorized" : "De-listed"}
                        </Badge>
                    </div>

                    <CardDescription className="text-lg font-medium text-muted-foreground leading-relaxed">
                        {product.tagline}
                    </CardDescription>

                    {/* INFRASTRUCTURE METADATA */}
                    <div className="flex flex-wrap gap-6 text-[11px] font-bold text-muted-foreground uppercase tracking-widest pt-4 border-t border-foreground/5">
                        <span className="flex items-center gap-2">
                            <User className="size-3.5 text-primary" />
                            <span className="opacity-50">Lead Architect:</span> {product.submittedBy}
                        </span>
                        <span className="flex items-center gap-2">
                            <Calendar className="size-3.5 text-primary" />
                            <span className="opacity-50">Initialized:</span> {launchDate}
                        </span>
                        <a href={product.websiteUrl ?? "#"} target="_blank" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group/link">
                            <ExternalLink className="size-3.5 transition-transform group-hover/link:-translate-y-0.5" />
                            External Access
                        </a>
                    </div>

                    {/* SYSTEM TAGS */}
                    <div className="flex flex-wrap gap-2">
                        {product.tags?.map((tag) => (
                            <Badge key={tag} variant="secondary" className="bg-secondary/40 text-foreground/70 border-none font-bold lowercase px-3 py-1">
                                <Hash className="size-3 mr-1 opacity-40 text-primary" /> {tag}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* 2. OPERATIONAL OVERSIGHT COLUMN */}
                <div className="xl:w-64 flex flex-col justify-center items-end gap-4 border-l-2 border-foreground/5 xl:pl-8">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30 w-full text-left">Audit Controls</p>

                    <AdminActions status={product.status ?? ""} productId={product.id} />

                    <div className="w-full h-px bg-foreground/5 my-2" />

                    <Button
                        variant="outline"
                        size="sm"
                        onClick={handleDelete}
                        disabled={isDeleting}
                        className="w-full text-destructive hover:bg-destructive hover:text-white border-destructive/20 font-black uppercase tracking-widest text-[10px] transition-all"
                    >
                        <Trash2 className="size-3.5 mr-2" />
                        {isDeleting ? "Purging Node..." : "Purge Infrastructure"}
                    </Button>
                </div>
            </div>
        </Card>
    );
}