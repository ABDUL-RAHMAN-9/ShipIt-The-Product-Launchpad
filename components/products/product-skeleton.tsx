import { Skeleton } from "@/components/ui/skeleton";

export default function ProductSkeleton() {
    return (
        <section className="py-24 bg-background">
            <div className="wrapper">

                {/* 1. HEADER: Curated Discovery / Latest Arrivals */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b-2 border-foreground/10 pb-8">
                    <div className="space-y-6 flex-1">

                        {/* ICON + LABEL */}
                        <div className="flex items-center gap-3">
                            <Skeleton className="size-8 rounded-lg bg-primary/30" />
                            <Skeleton className="h-4 w-40 bg-primary/20" />
                        </div>

                        {/* MAIN HEADING: Latest Arrivals */}
                        <Skeleton className="h-12 w-full max-w-md bg-foreground/40" />

                        {/* HEADER DESCRIPTION: 3 Specific Lines */}
                        <div className="space-y-3">
                            <Skeleton className="h-4 w-full max-w-2xl" />
                            <Skeleton className="h-4 w-full max-w-xl" />
                            <Skeleton className="h-4 w-[60%] max-w-md" />
                        </div>
                    </div>

                    {/* VIEW THE ARCHIVE BUTTON */}
                    <div className="shrink-0 hidden md:block">
                        <Skeleton className="h-12 w-48 rounded-xl border-2 border-foreground/20 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)]" />
                    </div>
                </div>

                {/* 2. PRODUCT GRID: 3 CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div
                            key={index}
                            className="bg-secondary/10 border-2 border-foreground/15 rounded-3xl p-8 min-h-[280px] flex flex-col justify-between"
                        >
                            <div className="flex justify-between items-start gap-4">
                                <div className="space-y-6 flex-1">
                                    {/* CARD TITLE */}
                                    <Skeleton className="h-8 w-3/4 bg-foreground/40" />

                                    {/* THE 3 LINES INSIDE THE CARD  */}
                                    <div className="space-y-3">
                                        <Skeleton className="h-3 w-full" />
                                        <Skeleton className="h-3 w-full" />
                                        <Skeleton className="h-3 w-2/3" />
                                    </div>
                                </div>

                                {/* VOTE BOX STAMP */}
                                <div className="flex flex-col border-2 border-foreground/20 rounded-xl bg-background overflow-hidden shrink-0">
                                    <Skeleton className="h-8 w-10 rounded-none" />
                                    <div className="py-2 flex justify-center">
                                        <Skeleton className="size-3 rounded-sm" />
                                    </div>
                                </div>
                            </div>

                            {/* TAG PILLS */}
                            <div className="flex gap-2 pt-8">
                                <Skeleton className="h-7 w-16 rounded-full bg-primary/25" />
                                <Skeleton className="h-7 w-20 rounded-full bg-primary/25" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}