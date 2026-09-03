import SectionHeader from "@/components/common/section-header";
import { Inbox } from "lucide-react";
import ProductCard from "@/components/products/product-card";
import EmptyState from "@/components/common/empty-state";
import { getRecentProducts } from "@/lib/products/product-select";

export default async function RecentLaunches() {
    const recentProducts = await getRecentProducts();

    return (
        <section className="relative w-full border-b-2 border-[#0F201D] bg-background py-20 md:py-28">
            <div className="wrapper">
                <SectionHeader
                    title={
                        <>
                            Fresh products newly{" "}
                            <span className="text-[#E53A28]">launched</span>
                        </>
                    }
                    description="Explore the newest side projects, SaaS startups, and digital experiments built by our global community."
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
                        message="it's a quiet week!"
                        description="We're waiting for the next great launch. Check back soon or become the first builder to ship something new."
                        icon={Inbox}
                    />
                )}
            </div>
        </section>
    );
}
