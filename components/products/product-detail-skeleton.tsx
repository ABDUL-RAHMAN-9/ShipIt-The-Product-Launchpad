import { Skeleton } from "../ui/skeleton";

export default function ProductDetailSkeleton() {
    return (
        <main className="py-12 lg:py-24 bg-background">
            <div className="wrapper">

                {/* 1. BREADCRUMB SKELETON */}
                <div className="flex items-center gap-2 mb-16">
                    <Skeleton className="size-7 rounded-md bg-foreground/10" />
                    <Skeleton className="h-4 w-32 bg-foreground/10" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                    {/* LEFT SECTION: Narrative & Data */}
                    <div className="lg:col-span-8 space-y-16">

                        {/* Header Identity */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-5">
                                <Skeleton className="size-14 rounded-2xl bg-primary/20 border-2 border-primary/10 shrink-0" />
                                <div className="space-y-3 flex-1">
                                    <Skeleton className="h-12 w-3/4 rounded-lg bg-foreground/30" />
                                    <Skeleton className="h-6 w-full max-w-lg rounded-md bg-foreground/10" />
                                </div>
                            </div>

                            {/* Tags Pills */}
                            <div className="flex flex-wrap gap-2 pt-2">
                                <Skeleton className="h-7 w-20 rounded-full bg-foreground/10" />
                                <Skeleton className="h-7 w-16 rounded-full bg-foreground/10" />
                                <Skeleton className="h-7 w-24 rounded-full bg-foreground/10" />
                            </div>
                        </div>

                        {/* About/Story Section */}
                        <div className="space-y-6">
                            <Skeleton className="h-4 w-32 bg-foreground/20" />
                            <div className="space-y-3">
                                <Skeleton className="h-4 w-full rounded-md bg-foreground/10" />
                                <Skeleton className="h-4 w-full rounded-md bg-foreground/10" />
                                <Skeleton className="h-4 w-2/3 rounded-md bg-foreground/10" />
                            </div>
                        </div>

                        {/* Handcrafted Details Box (Shipping Records) */}
                        <div className="bg-secondary/10 border-2 border-foreground/5 rounded-[2rem] p-10 space-y-8">
                            <Skeleton className="h-6 w-40 bg-foreground/20" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="flex items-center gap-4">
                                    <Skeleton className="size-12 rounded-xl bg-background border-2 border-foreground/5" />
                                    <div className="space-y-2">
                                        <Skeleton className="h-2 w-16 bg-foreground/10" />
                                        <Skeleton className="h-4 w-24 bg-foreground/20" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Skeleton className="size-12 rounded-xl bg-background border-2 border-foreground/5" />
                                    <div className="space-y-2">
                                        <Skeleton className="h-2 w-16 bg-foreground/10" />
                                        <Skeleton className="h-4 w-32 bg-foreground/20" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SECTION: Sidebar (The Action Hub) */}
                    <div className="lg:col-span-4 space-y-8">
                        {/* Support Module Card */}
                        <div className="bg-background border-2 border-foreground/10 rounded-[2rem] p-10 flex flex-col items-center space-y-8 shadow-sm">
                            <div className="space-y-2 w-full flex flex-col items-center">
                                <Skeleton className="h-3 w-32 bg-foreground/20" />
                                <Skeleton className="h-2 w-48 bg-foreground/10" />
                            </div>

                            {/* Vote Stamp Skeleton */}
                            <Skeleton className="h-20 w-16 rounded-xl border-2 border-foreground/10" />

                            <Skeleton className="h-10 w-full rounded-xl bg-primary/10 border-2 border-primary/5" />
                        </div>

                        {/* CTA Button */}
                        <Skeleton className="h-16 w-full rounded-xl border-2 border-foreground/10 bg-foreground/5" />
                    </div>

                </div>
            </div>
        </main>
    );
}