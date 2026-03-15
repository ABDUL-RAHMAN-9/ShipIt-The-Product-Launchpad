import { Skeleton } from "@/components/ui/skeleton";

export default function AdminLoading() {
    return (
        <main className="py-16 lg:py-24 bg-background">
            <div className="wrapper space-y-16">

                {/* 1. Header Skeleton */}
                <div className="space-y-4 border-b-2 border-foreground/5 pb-8">
                    <div className="flex items-center gap-2">
                        <Skeleton className="size-6 rounded-md bg-primary/20" />
                        <Skeleton className="h-3 w-32 bg-foreground/10" />
                    </div>
                    <Skeleton className="h-10 w-full max-w-md rounded-lg bg-foreground/30" />
                    <Skeleton className="h-4 w-full max-w-xl rounded-md bg-foreground/10" />
                </div>

                {/* 2. Stats Grid Skeleton (4 Boxes) */}
                <div className="p-2 bg-secondary/5 rounded-[2rem] border-2 border-foreground/5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="h-32 rounded-3xl border-2 border-foreground/5 bg-background p-6 space-y-4">
                                <Skeleton className="h-2 w-16 bg-foreground/10" />
                                <Skeleton className="h-8 w-12 bg-foreground/20" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. Moderation Queue Header Skeleton */}
                <section className="space-y-10">
                    <div className="flex items-center gap-3">
                        <Skeleton className="h-8 w-1.5 bg-amber-400/40 rounded-full" />
                        <Skeleton className="h-6 w-64 bg-foreground/20" />
                    </div>

                    {/* List of 3 Admin Cards */}
                    <div className="space-y-6">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="h-40 w-full rounded-[2rem] border-2 border-foreground/5 bg-background p-8">
                                <div className="flex justify-between items-start">
                                    <div className="space-y-4 flex-1">
                                        <Skeleton className="h-7 w-1/3 bg-foreground/20" />
                                        <Skeleton className="h-4 w-2/3 bg-foreground/10" />
                                    </div>
                                    <div className="flex gap-2">
                                        <Skeleton className="h-10 w-24 rounded-xl bg-foreground/5" />
                                        <Skeleton className="h-10 w-24 rounded-xl bg-foreground/5" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}