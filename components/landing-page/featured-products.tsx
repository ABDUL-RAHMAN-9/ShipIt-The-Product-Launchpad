import SectionHeader from "@/components/common/section-header"
import { Trophy } from "lucide-react";
import ProductCard from "@/components/products/product-card";
import { getFeaturedProdcuts } from "@/lib/products/product-select";


export default async function FeaturedProducts() {
    const featuredProducts = await getFeaturedProdcuts();

    return (
        <section className="py-24 bg-background/50 border-t border-foreground/5 relative">
            <div className="wrapper">
                <SectionHeader
                    title="Maker's Spotlight"
                    icon={Trophy}
                    description="Discover the most innovative projects handcrafted by our global community. Each week we feature the top 6 rising gems."
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