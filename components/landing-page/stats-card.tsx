import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export default function StatsCard({
    icon: Icon,
    value,
    label,
    hasBorder
}: {
    icon: LucideIcon,
    value: string,
    label: string,
    hasBorder?: boolean
}) {
    return (
        <div className={cn(
            "flex flex-col items-center p-4 transition-all group",
            // The soft vertical divider looks great in the Midnight Forest theme
            hasBorder && "sm:border-x-2 border-foreground/5"
        )}>
            <div className="flex items-center justify-center gap-3 mb-2">
                {/* Changed primary/60 to primary for a "Live Status" glow effect */}
                <Icon className="size-5 text-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.2)] transition-transform group-hover:scale-110" />

                <p className="text-4xl font-extrabold tracking-tighter text-foreground leading-none">
                    {value}
                </p>
            </div>

            {/* Professional System Metric Label */}
            <p className="text-[12px] tracking-[0.25em] font-black text-muted-foreground/60">
                {label}
            </p>
        </div>
    );
}