import { Suspense } from "react";
import FeaturedProducts from "@/components/landing-page/featured-products";
import HeroSection from "@/components/landing-page/hero-section";
import RecentLaunches from "@/components/landing-page/recent-launches";
import ProductSkeleton from "@/components/products/product-skeleton";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />

      {/* Featured Section: 6 Cards + Top Border */}
      <Suspense
        fallback={
          <ProductSkeleton
            itemCount={6}
            sectionClassName="py-24 bg-background/50 border-t border-foreground/5 relative"
          />
        }
      >
        <FeaturedProducts />
      </Suspense>

      {/* Recent Section: 3 Cards + Clean Background */}
      <Suspense
        fallback={
          <ProductSkeleton
            itemCount={3}
            titleWidth="w-80"
            sectionClassName="py-24 bg-background"
          />
        }
      >
        <RecentLaunches />
      </Suspense>
    </div>
  );
}