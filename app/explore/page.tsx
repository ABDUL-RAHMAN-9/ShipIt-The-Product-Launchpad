import type { Metadata } from "next";
import ProductExplorer from "@/components/products/product-explorer";
import { getAllApprovedProducts } from "@/lib/products/product-select";
import BackHome from "@/components/common/back-home";
import SectionHeader from "@/components/common/section-header";

export const metadata: Metadata = {
    title: "Explore",
    description: "Discover products, startups and ideas shared by builders.",
};

export default async function ExplorePage() {
    const products = await getAllApprovedProducts();

    return (
        <main className="pt-20 pb-20">
            <div className="wrapper">
                {/* Back navigation */}
                <div className="mb-8">
                    <BackHome />
                </div>

                {/* Explore Header */}
                <SectionHeader
                    title={
                        <>
                            Find what{" "}
                            <span className="text-[#F5B726]">scales.</span>
                        </>
                    }
                    description=" Browse startups, AI tools, side projects and
                                developer products shared by builders around the
                                world."
                    hideButton={true}
                />

                {/* Product explorer list container */}
                <ProductExplorer products={products} />
            </div>
        </main>
    );
}
