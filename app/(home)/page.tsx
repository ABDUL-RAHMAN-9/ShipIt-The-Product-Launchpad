import { Suspense } from "react";
import FeaturedProducts from "@/components/landing-page/featured-products";
import HeroSection from "@/components/landing-page/hero-section";
import RecentLaunches from "@/components/landing-page/recent-launches";
import ProductSkeleton from "@/components/products/product-skeleton";
import SubmitSection from "@/components/landing-page/submit-section";

// This temporary placeholder prevents layout layout jumps during streaming
function SubmitSectionFallback() {
    return (
        <div
            className="w-full bg-[#3d5f58] h-[550px] border-b-2 border-[#0F201D]"
            aria-hidden="true"
        />
    );
}

export default function Home() {
    return (
        <div className="flex flex-col">
            <HeroSection />

            {/* Featured Section */}
            <Suspense
                fallback={
                    <ProductSkeleton
                        itemCount={6}
                        sectionClassName="py-24 bg-background/50 border-t border-foreground/5 relative"
                    />
                }>
                <FeaturedProducts />
            </Suspense>

            {/* Recent Section */}
            <Suspense
                fallback={
                    <ProductSkeleton
                        itemCount={3}
                        titleWidth="w-80"
                        sectionClassName="py-24 bg-background"
                    />
                }>
                <RecentLaunches />
            </Suspense>

            <Suspense fallback={<SubmitSectionFallback />}>
                <SubmitSection />
            </Suspense>
        </div>
    );
}
