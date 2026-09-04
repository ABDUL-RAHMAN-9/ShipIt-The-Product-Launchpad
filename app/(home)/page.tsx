import { Suspense } from "react";
import FeaturedProducts from "@/components/landing-page/featured-products";
import HeroSection from "@/components/landing-page/hero-section";
import RecentLaunches from "@/components/landing-page/recent-launches";
import ProductSkeleton from "@/components/products/product-skeleton";
import SubmitSection from "@/components/landing-page/submit-section";
import SubmitSectionSkeleton from "@/components/landing-page/submit-section-skeleton";

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

            <Suspense fallback={<SubmitSectionSkeleton />}>
                <SubmitSection />
            </Suspense>
        </div>
    );
}
