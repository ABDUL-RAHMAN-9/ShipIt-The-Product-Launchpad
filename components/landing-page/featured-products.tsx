import SectionHeader from "@/components/common/section-header";
import ProductCard from "@/components/products/product-card";
import { getFeaturedProducts } from "@/lib/products/product-select";

export default async function FeaturedProducts() {
    const featuredProducts = await getFeaturedProducts();

    return (
        <section className="relative w-full border-b-2 border-[#10201D] bg-[#F2F2EB] py-20 md:py-28">
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
