import SectionHeader from "@/components/common/section-header";
import ProductCard from "@/components/products/product-card";
import { getFeaturedProducts } from "@/lib/products/product-select";
import { getCurrentSession } from "@/lib/auth-session";

export default async function FeaturedProducts() {
    const session = await getCurrentSession();

    const featuredProducts = await getFeaturedProducts(
        session?.user?.id ?? null,
    );

    return (
        <section className="relative w-full bg-background py-20 md:py-28">
            <div className="wrapper">
                <SectionHeader
                    title={
                        <>
                            Top Picks of the{" "}
                            <span className="text-[#E53A28]">Week</span>
                        </>
                    }
                    description="A curated selection of products gaining momentum across the builder community."
                    href="/explore"
                />

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {featuredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            hasVoted={product.hasVoted}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
