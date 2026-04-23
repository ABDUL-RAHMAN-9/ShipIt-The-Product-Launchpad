import SectionHeader from "@/components/common/section-header"
import { Stars } from "lucide-react";
import ProductCard from "@/components/products/product-card";
import { getFeaturedProducts } from "@/lib/products/product-select";

export default async function FeaturedProducts() {
    const featuredProducts = await getFeaturedProducts();

    return (
        <section className="py-24 bg-background/50 border-t border-foreground/5 relative">
            <div className="wrapper">
                <SectionHeader
                    title="Featured Today"
                    icon={Stars}
                    description="Top picks from our community of architects this week."
                    href="/explore"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}