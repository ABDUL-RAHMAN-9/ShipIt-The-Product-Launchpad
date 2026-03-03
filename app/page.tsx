import FeaturedProducts from "@/components/landing-page/featured-products";
import HeroSection from "@/components/landing-page/hero-section";
import RecentLaunches from "@/components/landing-page/recent-launches";
import { ProductGridSkeleton } from "@/components/products/product-skeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Suspense
        fallback={<div className="wrapper py-10"><ProductGridSkeleton /></div>}>
        <FeaturedProducts />
      </Suspense>

      <Suspense
        fallback={<div className="wrapper py-10"><ProductGridSkeleton /></div>}>
        <RecentLaunches />
      </Suspense>

    </div>
  );
}
