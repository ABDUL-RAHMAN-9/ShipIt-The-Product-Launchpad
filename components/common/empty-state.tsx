import { LucideIcon } from "lucide-react";

interface EmptyStateProps {
    message: string;
    description?: string;
    icon: LucideIcon;
}

export default function EmptyState({
    message,
    description,
    icon: Icon,
}: EmptyStateProps) {
    return (
        <div className="relative overflow-hidden rounded-3xl border-2 border-dashed border-foreground/10 bg-secondary/5 p-12 lg:p-20 text-center">
            <div className="relative z-10 flex flex-col items-center max-w-sm mx-auto">
                {/* The "Stamp" Icon */}
                <div className="mb-6 p-4 bg-background rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)] border-2 border-foreground/5">
                    <Icon className="size-10 text-primary/40" />
                </div>

                <h3 className="text-2xl font-extrabold tracking-tight mb-3 text-foreground">
                    {message}
                </h3>

                {description && (
                    <p className="text-muted-foreground font-medium leading-relaxed">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
}