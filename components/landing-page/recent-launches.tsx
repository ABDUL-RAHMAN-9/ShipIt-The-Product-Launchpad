import SectionHeader from "@/components/common/section-header";
import { Inbox } from "lucide-react";

import ProductCard from "@/components/products/product-card";
import EmptyState from "@/components/common/empty-state";

import { getRecentProducts } from "@/lib/products/product-select";
import { getCurrentSession } from "@/lib/auth-session";

export default async function RecentLaunches() {
    const session = await getCurrentSession();

    const recentProducts = await getRecentProducts(session?.user?.id ?? null);

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
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {recentProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                hasVoted={product.hasVoted}
                            />
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
