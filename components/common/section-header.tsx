import { ArrowRight, LucideIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

interface SectionHeaderProps {
    title: string;
    icon: LucideIcon;
    description?: string;
    href?: string;
}

export default function SectionHeader({
    title,
    icon: Icon,
    description,
    href = "/explore", // Default link
}: SectionHeaderProps) {
    return (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-foreground/5 pb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">

            {/* Left Side: Identity & Text */}
            <div className="space-y-3">
                <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-[0.2em] text-[10px]">
                    <div className="p-1.5 bg-primary/10 rounded-lg border border-primary/20">
                        <Icon className="size-4" />
                    </div>
                    Curated Discovery
                </div>

                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground">
                    {title}
                </h2>

                {description && (
                    <p className="text-muted-foreground font-medium max-w-xl leading-relaxed">
                        {description}
                    </p>
                )}
            </div>

            {/* Right Side: Action Button */}
            <div className="shrink-0">
                <Button variant="outline" asChild className="font-bold">
                    <Link href={href} className="group">
                        View the Archive
                        <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
            </div>
        </div>
    );
}