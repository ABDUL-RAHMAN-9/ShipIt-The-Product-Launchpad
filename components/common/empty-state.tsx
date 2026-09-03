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
        <div className="relative overflow-hidden rounded-none border-2 border-foreground bg-[#F7F7F2] p-12 lg:p-20 text-center shadow-nb-md">
            <div className="relative z-10 flex flex-col items-center max-w-sm mx-auto">
                <div className="mb-6 p-4 bg-background rounded-none border-2 border-foreground shadow-[2px_2px_0px_0px_#000]">
                    <Icon className="size-10 text-[#2E4742]" />
                </div>

                <h3 className="text-2xl font-serif font-extrabold tracking-[-0.02em] mb-3 text-foreground">
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
