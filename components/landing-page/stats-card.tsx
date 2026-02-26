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
            "flex flex-col items-center p-4 transition-all",
            // Use a soft vertical divider instead of a harsh box
            hasBorder && "sm:border-x-2 border-foreground/5"
        )}>
            <div className="flex items-center justify-center gap-3 mb-1">
                <Icon className="size-5 text-primary/60" />
                <p className="text-4xl font-extrabold tracking-tighter text-foreground">
                    {value}
                </p>
            </div>
            <p className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground/80">
                {label}
            </p>
        </div>
    );
}