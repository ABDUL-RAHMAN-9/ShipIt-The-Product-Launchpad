import { Skeleton } from "@/components/ui/skeleton";

export default function ExploreLoading() {
    return (
        <main className="py-12 lg:py-24 bg-background">
            <div className="wrapper space-y-12">

                {/* 1. Header Skeleton - Discovery Hub Title */}
                <div className="space-y-4 border-b-2 border-foreground/5 pb-8">
                    <div className="flex items-center gap-2">
                        <Skeleton className="size-6 rounded-md bg-primary/20" />
                        <Skeleton className="h-3 w-32 bg-foreground/10" />
                    </div>
                    <Skeleton className="h-10 w-full max-w-md rounded-lg bg-foreground/30" />
                    <Skeleton className="h-4 w-full max-w-xl rounded-md bg-foreground/10" />
                </div>

                {/* 2. Control Panel Skeleton (Search & Filter) */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 bg-secondary/5 p-6 rounded-[2rem] border-2 border-foreground/5">
                    {/* Search Bar Skeleton */}
                    <div className="flex-1 max-w-xl">
                        <Skeleton className="h-14 w-full rounded-2xl bg-background border-2 border-foreground/5" />
                    </div>
                    {/* Filter Toggle Skeleton */}
                    <div className="flex items-center gap-4">
                        <Skeleton className="h-3 w-16 bg-foreground/10" />
                        <Skeleton className="h-12 w-48 rounded-2xl bg-background border-2 border-foreground/5" />
                    </div>
                </div>

                {/* 3. Product Grid Skeleton (Showing 6 items for density) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="h-64 w-full rounded-[2.5rem] border-2 border-foreground/5 bg-secondary/5 p-8 flex flex-col justify-between">
                            <div className="flex justify-between items-start gap-4">
                                <div className="space-y-4 flex-1">
                                    <Skeleton className="h-7 w-3/4 bg-foreground/20 rounded-lg" />
                                    <div className="space-y-2">
                                        <Skeleton className="h-3 w-full bg-foreground/10 rounded-md" />
                                        <Skeleton className="h-3 w-2/3 bg-foreground/10 rounded-md" />
                                    </div>
                                </div>
                                <Skeleton className="h-16 w-14 rounded-xl bg-background border-2 border-foreground/5" />
                            </div>
                            <div className="flex gap-2">
                                <Skeleton className="h-6 w-16 rounded-full bg-foreground/5" />
                                <Skeleton className="h-6 w-16 rounded-full bg-foreground/5" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}