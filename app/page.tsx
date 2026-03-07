import FeaturedProducts from "@/components/landing-page/featured-products";
import HeroSection from "@/components/landing-page/hero-section";
import RecentLaunches from "@/components/landing-page/recent-launches";
import ProductSkeleton from "@/components/products/product-skeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <Suspense
        fallback={<ProductSkeleton />}>
        <RecentLaunches />
      </Suspense>
    </div>
  );
}
