"use cache";

import SectionHeader from "@/components/common/section-header"
import { Zap } from "lucide-react"; // Swapped Trophy for Zap
import ProductCard from "@/components/products/product-card";
import { getFeaturedProducts } from "@/lib/products/product-select";


export default async function FeaturedProducts() {
    const featuredProducts = await getFeaturedProducts();

    return (
        <section className="py-24 bg-background/50 border-t border-foreground/5 relative">
            <div className="wrapper">
                <SectionHeader
                    title="Strategic Infrastructure" // Professional Title
                    icon={Zap} // Matches the "Atlash" high-velocity brand
                    description="Monitor high-performance systems currently optimizing global workflows. These verified assets represent the highest standard of architectural efficiency and 70% reduced operational overhead."
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