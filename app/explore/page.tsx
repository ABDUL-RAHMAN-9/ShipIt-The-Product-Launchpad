import type { Metadata } from 'next';
import SectionHeader from "@/components/common/section-header";
import ProductExplorer from "@/components/products/product-explorer";
import { getAllApprovedProducts } from "@/lib/products/product-select";
import { Network } from "lucide-react"; // Swapped Compass for Network for an "Interconnected" feel

export const metadata: Metadata = {
    title: "System Directory | Atlash Hub",
    description: "Access the global registry of high-performance infrastructure nodes and verified deployments."
};

export default async function ExplorePage() {
    const products = await getAllApprovedProducts();

    return (
        <main className="py-12 lg:py-24 bg-background">
            <div className="wrapper">
                {/* Updated Section Header for Enterprise Branding */}
                <SectionHeader
                    title="System Directory" // Professional Title
                    icon={Network} // Matches the "Industrial Infrastructure" vibe
                    description="Access the centralized registry of verified high-performance infrastructure nodes. Filter by Reliability Index or Integration Timestamp to optimize your procurement discovery."
                    hideButton={true}
                    tagline="Infrastructure Intelligence" // Reinforces the brand
                />

                <ProductExplorer products={products} />
            </div>
        </main>
    );
}