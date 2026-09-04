export default function SubmitSectionSkeleton() {
    return (
        <section className="relative w-full border-b-2 border-[#0F201D] bg-[#3d5f58] py-20 md:py-28 animate-pulse">
            {/* Matches the 12-column grid layout of your actual SubmitSection */}
            <div className="wrapper max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 lg:gap-24 items-start">
                {/* Left Column Skeleton */}
                <div className="flex flex-col items-start space-y-6 md:col-span-7 w-full">
                    {/* Header Tag Placeholder */}
                    <div className="h-4 w-44 bg-white/10 rounded" />

                    {/* Heading Placeholder (2 lines) */}
                    <div className="space-y-3 w-full">
                        <div className="h-10 md:h-12 w-4/5 bg-white/10 rounded" />
                        <div className="h-10 md:h-12 w-3/5 bg-white/10 rounded" />
                    </div>

                    {/* Paragraph Placeholder (3 lines) */}
                    <div className="space-y-2 w-full max-w-xl">
                        <div className="h-4 w-full bg-white/10 rounded" />
                        <div className="h-4 w-11/12 bg-white/10 rounded" />
                        <div className="h-4 w-2/3 bg-white/10 rounded" />
                    </div>

                    {/* Button Placeholder */}
                    <div className="pt-4">
                        <div className="h-12 w-44 bg-white/10 rounded-sm" />
                    </div>
                </div>

                {/* Right Column Skeleton (Timeline matching exact positions) */}
                <div className="relative space-y-10 pl-8 before:absolute before:left-1 before:top-2 before:bottom-2 before:w-[2px] before:bg-white/10 md:col-span-5 w-full">
                    {/* Step 1 Placeholder */}
                    <div className="relative w-full">
                        <span className="absolute -left-[31px] top-1.5 size-2.5 bg-white/10 border border-black" />
                        <div className="h-3.5 w-8 bg-white/10 rounded mb-2" />
                        <div className="h-5.5 w-24 bg-white/10 rounded mb-3" />
                        <div className="space-y-1.5">
                            <div className="h-3.5 w-full bg-white/10 rounded" />
                            <div className="h-3.5 w-5/6 bg-white/10 rounded" />
                        </div>
                    </div>

                    {/* Step 2 Placeholder */}
                    <div className="relative w-full">
                        <span className="absolute -left-[31px] top-1.5 size-2.5 bg-white/10 border border-black" />
                        <div className="h-3.5 w-8 bg-white/10 rounded mb-2" />
                        <div className="h-5.5 w-32 bg-white/10 rounded mb-3" />
                        <div className="space-y-1.5">
                            <div className="h-3.5 w-full bg-white/10 rounded" />
                            <div className="h-3.5 w-5/6 bg-white/10 rounded" />
                        </div>
                    </div>

                    {/* Step 3 Placeholder */}
                    <div className="relative w-full">
                        <span className="absolute -left-[31px] top-1.5 size-2.5 bg-white/10 border border-black" />
                        <div className="h-3.5 w-8 bg-white/10 rounded mb-2" />
                        <div className="h-5.5 w-28 bg-white/10 rounded mb-3" />
                        <div className="space-y-1.5">
                            <div className="h-3.5 w-full bg-white/10 rounded" />
                            <div className="h-3.5 w-5/6 bg-white/10 rounded" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
