import { Skeleton } from "@/components/ui/skeleton";

export default function ExploreLoading() {
    return (
        <main className="pt-20 pb-20 bg-background">
            <div className="wrapper space-y-12">
                {/* Back navigation skeleton */}
                <div className="mb-8">
                    <Skeleton className="h-6 w-24 rounded-xl bg-foreground/10" />
                </div>

                {/* Explore Header Skeleton */}
                <section className="mb-10">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                        <div className="max-w-2xl w-full space-y-4">
                            {/* Title skeleton */}
                            <Skeleton className="h-10 md:h-12 w-3/4 max-w-md rounded-lg bg-foreground/30" />

                            {/* Description skeleton */}
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-full max-w-xl rounded-md bg-foreground/10" />
                                <Skeleton className="h-4 w-2/3 max-w-md rounded-md bg-foreground/10" />
                            </div>
                        </div>

                        {/* Interactive Stats Grid Skeleton */}
                        <div className="flex gap-3 flex-wrap">
                            {[...Array(3)].map((_, i) => (
                                <div
                                    key={i}
                                    className="rounded-xl px-4 py-3 min-w-[110px] h-[76px] flex flex-col justify-between">
                                    <div className="flex items-center gap-2">
                                        <Skeleton className="h-3 w-full bg-foreground/10 rounded-md" />
                                    </div>
                                    <Skeleton className="h-6 w-12 bg-foreground/10 rounded-md mt-1" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 2. Control Panel Skeleton (Search & Filter) */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 p-6 rounded-4xl">
                    {/* Search Bar Skeleton */}
                    <div className="flex-1 max-w-full">
                        <Skeleton className="h-14 rounded-2xl bg-foreground/10" />
                    </div>
                    {/* Filter Toggle Skeleton */}
                    <div className="flex items-center gap-4">
                        <Skeleton className="h-12 w-35 rounded-2xl bg-foreground/10" />
                        <Skeleton className="h-12 w-35 rounded-2xl bg-foreground/10" />
                    </div>
                </div>

                <div className="flex flex-col rounded-2xl pl-6">
                    <div className="flex-1 max-w-full">
                        <Skeleton className="h-3 w-30 rounded-2xl bg-foreground/10" />
                    </div>
                </div>

                {/* 3. Product Grid Skeleton (Reverted to original setup) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="h-64 w-full rounded-[2.5rem]  p-8 flex flex-col justify-between">
                            <div className="flex justify-between items-start gap-4">
                                <div className="space-y-4 flex-1">
                                    <Skeleton className="h-7 w-3/4 bg-foreground/20 rounded-lg" />
                                    <div className="space-y-2">
                                        <Skeleton className="h-3 w-full bg-foreground/10 rounded-md" />
                                        <Skeleton className="h-3 w-2/3 bg-foreground/10 rounded-md" />
                                    </div>
                                </div>
                                <Skeleton className="h-16 w-14 rounded-xl bg-background" />
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
