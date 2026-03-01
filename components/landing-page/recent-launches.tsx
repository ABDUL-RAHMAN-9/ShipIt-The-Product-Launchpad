import SectionHeader from "@/components/common/section-header";
import { CalendarDays } from "lucide-react";
import ProductCard from "@/components/products/product-card";
import EmptyState from "@/components/common/empty-state";
import { getRecentProducts } from "@/lib/products/product-select";


export default async function RecentLaunches() {
    const recentProducts = await getRecentProducts();

    return (
        <section className="py-24 bg-background">
            <div className="wrapper">
                {/* Section Header stays to define the area */}
                <SectionHeader
                    title="Latest Arrivals"
                    icon={CalendarDays}
                    description="The freshest ideas from our growing community. Be the first to explore and vote on what just landed."
                    href="/explore"
                />

                {/* Simplified Ternary: Grid OR Clean Empty State */}
                {recentProducts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {recentProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <EmptyState
                        message="The catalog is quiet... for now."
                        description="No new ships have docked in the last 7 days. Check back soon for fresh community projects."
                        icon={CalendarDays}
                    />
                )}
            </div>
        </section>
    );
}