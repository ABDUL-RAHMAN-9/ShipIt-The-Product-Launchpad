import SectionHeader from "@/components/common/section-header";
import ProductExplorer from "@/components/products/product-explorer";
import { getAllApprovedProducts } from "@/lib/products/product-select";
import { Compass } from "lucide-react";

export default async function ExplorePage() {
    const products = await getAllApprovedProducts();

    return (
        <main className="py-12 lg:py-24 bg-background">
            <div className="wrapper">
                <SectionHeader
                    title="The Discovery Hub"
                    icon={Compass}
                    description="Browse the complete catalog of community-built projects. Filter by popularity or recency to find your next inspiration."
                    hideButton={true} 
                />

                <ProductExplorer products={products} />
            </div>
        </main>
    );
}