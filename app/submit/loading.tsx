import { Skeleton } from "@/components/ui/skeleton";

export default function SubmitLoading() {
    return (
        /* 
      Replicates the full-bleed, edge-to-edge background layout 
      and centering geometry of the submit form
    */
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#F3F0FA] px-4 font-sans dark:bg-[#09080D] animate-pulse">
            <div className="flex min-h-full items-center justify-center py-8 sm:py-12">
                {/* 
          Matches the exact card design width, border radius, background, 
          shadow, and responsive padding of the form card
        */}
                <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl border border-zinc-100 dark:bg-[#111015] dark:border-zinc-900 sm:p-8 md:p-10">
                    {/* Back Navigation Skeleton */}
                    <div className="mb-5 flex items-center gap-2">
                        <div className="h-7 w-7 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                        <Skeleton className="h-4 w-20 bg-zinc-200 dark:bg-zinc-800" />
                    </div>

                    {/* Heading Skeleton */}
                    <div className="mb-6 space-y-2">
                        <Skeleton className="h-3 w-28 bg-zinc-200 dark:bg-zinc-800" />
                        <Skeleton className="h-8 w-3/4 bg-zinc-200 dark:bg-zinc-800" />
                        <Skeleton className="h-4 w-full bg-zinc-200/60 dark:bg-zinc-800/60" />
                    </div>

                    {/* Form Fields Skeleton */}
                    <div className="space-y-4">
                        {/* Product Name Field */}
                        <div className="space-y-2">
                            <Skeleton className="h-3.5 w-24 bg-zinc-200 dark:bg-zinc-800" />
                            <Skeleton className="h-10 w-full bg-zinc-100 dark:bg-zinc-900/50 rounded-lg" />
                        </div>

                        {/* Website URL Field */}
                        <div className="space-y-2">
                            <Skeleton className="h-3.5 w-24 bg-zinc-200 dark:bg-zinc-800" />
                            <Skeleton className="h-10 w-full bg-zinc-100 dark:bg-zinc-900/50 rounded-lg" />
                        </div>

                        {/* Tagline Field */}
                        <div className="space-y-2">
                            <Skeleton className="h-3.5 w-24 bg-zinc-200 dark:bg-zinc-800" />
                            <Skeleton className="h-10 w-full bg-zinc-100 dark:bg-zinc-900/50 rounded-lg" />
                        </div>

                        {/* Tags Field */}
                        <div className="space-y-2">
                            <Skeleton className="h-3.5 w-16 bg-zinc-200 dark:bg-zinc-800" />
                            <Skeleton className="h-10 w-full bg-zinc-100 dark:bg-zinc-900/50 rounded-lg" />
                        </div>

                        {/* Description / Story Field */}
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <Skeleton className="h-3.5 w-24 bg-zinc-200 dark:bg-zinc-800" />
                                <Skeleton className="h-3 w-28 bg-zinc-200/60 dark:bg-zinc-800/60" />
                            </div>
                            <Skeleton className="h-24 w-full bg-zinc-100 dark:bg-zinc-900/50 rounded-lg" />
                        </div>
                    </div>

                    {/* Bottom Actions Skeleton Divider & Footer */}
                    <div className="mt-6 pt-5 border-t border-zinc-200 dark:border-zinc-800">
                        <div className="flex justify-between items-center gap-4">
                            <div className="space-y-2 min-w-0">
                                <Skeleton className="h-4 w-28 bg-zinc-200 dark:bg-zinc-800" />
                                <Skeleton className="h-3 w-48 bg-zinc-200/60 dark:bg-zinc-800/60" />
                            </div>

                            {/* Launch Button Skeleton */}
                            <Skeleton className="h-10 w-36 bg-zinc-200 dark:bg-zinc-800 rounded-lg shrink-0" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
