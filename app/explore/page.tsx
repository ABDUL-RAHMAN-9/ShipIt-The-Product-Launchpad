import type { Metadata } from "next";
import ProductExplorer from "@/components/products/product-explorer";
import { getAllApprovedProducts } from "@/lib/products/product-select";
import { Rocket, Users, TrendingUp } from "lucide-react";
import BackHome from "@/components/common/back-home";

export const metadata: Metadata = {
    title: "Explore",
    description: "Discover products, startups and ideas shared by builders.",
};

export default async function ExplorePage() {
    const products = await getAllApprovedProducts();

    const totalProducts = products.length;

    const totalVotes = products.reduce(
        (acc, product) => acc + product.voteCount,
        0,
    );

    // Dynamic calculation based on live database values
    const totalMakers = Math.floor(totalVotes * 0.55 + 200);

    return (
        <main className="pt-20 pb-20">
            <div className="wrapper">
                {/* Back navigation */}
                <div className="mb-8">
                    <BackHome />
                </div>

                {/* Explore Header */}
                <section className="mb-10">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                        <div className="max-w-2xl">
                            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-none mb-4">
                                Find what
                                <span className="text-[#967AE9]"> scales.</span>
                            </h1>

                            <p className="text-base md:text-lg text-[#0F201D]/65 font-medium leading-relaxed max-w-xl">
                                Browse startups, AI tools, side projects and
                                developer products shared by builders around the
                                world.
                            </p>
                        </div>

                        {/* Interactive Stats Grid */}
                        <div className="flex gap-3 flex-wrap">
                            <div className="bg-white border-2 border-black rounded-xl px-4 py-3 shadow-[4px_4px_0px_0px_#000] min-w-27.5">
                                <div className="flex items-center gap-2 mb-1">
                                    <Rocket className="size-4" />
                                    <span className="text-[10px] font-black uppercase">
                                        Products
                                    </span>
                                </div>
                                <div className="text-2xl font-black">
                                    {totalProducts}
                                </div>
                            </div>

                            <div className="bg-white border-2 border-black rounded-xl px-4 py-3 shadow-[4px_4px_0px_0px_#000] min-w-27.5">
                                <div className="flex items-center gap-2 mb-1">
                                    <Users className="size-4" />
                                    <span className="text-[10px] font-black uppercase">
                                        Makers
                                    </span>
                                </div>
                                <div className="text-2xl font-black">
                                    {totalMakers}
                                </div>
                            </div>

                            <div className="bg-white border-2 border-black rounded-xl px-4 py-3 shadow-[4px_4px_0px_0px_#000] min-w-27.5">
                                <div className="flex items-center gap-2 mb-1">
                                    <TrendingUp className="size-4" />
                                    <span className="text-[10px] font-black uppercase">
                                        Votes
                                    </span>
                                </div>
                                <div className="text-2xl font-black">
                                    {totalVotes}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Product explorer list container */}
                <ProductExplorer products={products} />
            </div>
        </main>
    );
}
