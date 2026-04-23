import SectionHeader from "@/components/common/section-header";
import { Activity, Calendar } from "lucide-react";
import ProductCard from "@/components/products/product-card";
import EmptyState from "@/components/common/empty-state";
import { getRecentProducts } from "@/lib/products/product-select";

export default async function RecentLaunches() {
    const recentProducts = await getRecentProducts();

    return (
        <section className="py-24 bg-background">
            <div className="wrapper">
                <SectionHeader
                    title="Recently Deployed"
                    icon={Activity}
                    description="Discover the newest infrastructure systems and digital assets added to the hub this week."
                    href="/explore"
                />

                {recentProducts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {recentProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <EmptyState
                        message="No recent deployments"
                        description="Check back soon to see the newest systems and infrastructure launched in the community."
                        icon={Calendar}
                    />
                )}
            </div>
        </section>
    );
}