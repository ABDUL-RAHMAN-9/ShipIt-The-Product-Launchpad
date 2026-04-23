import type { Metadata } from 'next';
import SectionHeader from "@/components/common/section-header";
import ProductExplorer from "@/components/products/product-explorer";
import { getAllApprovedProducts } from "@/lib/products/product-select";
import { Compass } from "lucide-react";

export const metadata: Metadata = {
    title: "Explore Products | Atlash Hub",
    description: "Browse and discover amazing projects from the Atlash community."
};

export default async function ExplorePage() {
    const products = await getAllApprovedProducts();

    return (
        <main className="py-12 lg:py-24 bg-background">
            <div className="wrapper">
                <SectionHeader
                    title="Explore All Products"
                    icon={Compass}
                    description="Browse and discover amazing projects from our community."
                    hideButton={true}
                />
                <ProductExplorer products={products} />
            </div>
        </main>
    );
}