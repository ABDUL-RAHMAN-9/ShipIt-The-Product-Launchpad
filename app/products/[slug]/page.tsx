import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { hasUserVoted } from "@/lib/products/product-select";
import type { Metadata } from "next";
import VotingButtons from "@/components/products/voting-buttons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProductBySlug } from "@/lib/products/product-select";
import {
    ChevronLeft,
    Calendar,
    Box,
    User,
    ExternalLink,
    Sparkles,
    TrendingUp,
} from "lucide-react";
import Link from "next/link";

/**
 * SEO Metadata
 */
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const product = await getProductBySlug(slug);

    if (!product) {
        return {
            title: "Project Not Found",
        };
    }

    const productDescription =
        product.tagline ?? "Discover this builder's project on Atlash.";

    return {
        title: `${product.name} — Atlash`,
        description: productDescription,
        keywords: [
            product.name,
            ...(product.tags ?? []),
            "builder community",
            "atlash hub",
            "software launch",
        ],
        openGraph: {
            title: `${product.name} | Atlash`,
            description: productDescription,
            type: "website",
            images: [{ url: "/banner.png" }],
        },
        twitter: {
            card: "summary_large_image",
            title: `${product.name} | Atlash`,
            description: productDescription,
        },
    };
}

export default async function ProductDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const product = await getProductBySlug(slug);

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const hasVotedStatus = session?.user?.id
        ? await hasUserVoted(product.id, session.user.id)
        : false;

    const launchDate = product.createAt
        ? new Intl.DateTimeFormat("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
          }).format(new Date(product.createAt))
        : "recently launched";

    const communityScore = Math.floor(product.voteCount * 1.8 + 120);

    return (
        <main className="pt-34 pb-34">
            <div className="wrapper">
                {/* back */}
                <div className="mb-8">
                    <Link
                        href="/explore"
                        className="inline-flex items-center gap-3 group">
                        <div
                            className="
                        p-2
                        rounded-xl
                        bg-[#FFB38A]
                        border-2
                        border-black
                        shadow-[3px_3px_0px_0px_#000]
                        transition-all
                        group-hover:shadow-none
                        group-hover:translate-x-0.5
                        group-hover:translate-y-0.5
                    ">
                            <ChevronLeft className="size-4" />
                        </div>

                        <span className="font-black text-black/60 group-hover:text-black">
                            Back to explore
                        </span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
                    {/* LEFT */}
                    <div className="lg:col-span-8 space-y-10">
                        {/* Hero */}
                        <div className="space-y-7">
                            <div className="inline-flex items-center gap-2 bg-[#B19CFF] border-2 border-black rounded-full px-4 py-2 shadow-[3px_3px_0px_0px_#000]">
                                <Sparkles className="size-4" />
                                <span className="font-black text-sm">
                                    community launch
                                </span>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="p-5 bg-[#FFB38A] rounded-3xl border-2 border-black shadow-[5px_5px_0px_0px_#000]">
                                    <Box className="size-10" />
                                </div>

                                <div className="flex-1">
                                    <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none">
                                        {product.name}
                                    </h1>

                                    <p className="mt-5 text-xl md:text-2xl text-black/65 font-medium leading-relaxed max-w-3xl">
                                        {product.tagline}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {product.tags?.map((tag) => (
                                    <Badge
                                        key={tag}
                                        variant="outline"
                                        className="rounded-md border-black/10 bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide">
                                        #{tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Description */}
                        <div className="bg-white border-2 border-black rounded-4xl p-8 md:p-10 shadow-[8px_8px_0px_0px_#000]">
                            <div className="flex items-center gap-3 mb-8">
                                <span className="text-xs font-black uppercase tracking-wider text-black/40">
                                    about this project
                                </span>

                                <div className="flex-1 h-px bg-black/10" />
                            </div>

                            <p className="text-lg md:text-xl leading-9 text-black/80">
                                {product.description}
                            </p>

                            {/* stats */}
                            <div className="grid md:grid-cols-2 gap-6 mt-12 pt-8 border-t border-black/10">
                                <div className="bg-[#F9F7F0] border-2 border-black rounded-2xl p-5">
                                    <div className="flex items-center gap-4">
                                        <Calendar className="size-5 text-[#B19CFF]" />

                                        <div>
                                            <p className="text-[10px] uppercase font-black text-black/40">
                                                launched
                                            </p>

                                            <p className="font-black">
                                                {launchDate}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-[#F9F7F0] border-2 border-black rounded-2xl p-5">
                                    <div className="flex items-center gap-4">
                                        <User className="size-5 text-[#B19CFF]" />

                                        <div>
                                            <p className="text-[10px] uppercase font-black text-black/40">
                                                builder
                                            </p>

                                            <p className="font-black truncate">
                                                {product.submittedBy}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="lg:col-span-4 sticky top-32 space-y-6">
                        {/* voting */}
                        <div className="bg-[#B19CFF] border-2 border-black rounded-4xl p-8 shadow-[8px_8px_0px_0px_#000]">
                            <div className="flex items-center gap-2 mb-4">
                                <TrendingUp className="size-4" />

                                <span className="font-black">
                                    community score
                                </span>
                            </div>

                            <div className="text-5xl font-black mb-6">
                                {communityScore}
                            </div>

                            <VotingButtons
                                productId={product.id}
                                voteCount={product.voteCount}
                                hasVoted={hasVotedStatus}
                            />

                            <p className="mt-6 text-sm font-medium text-black/60">
                                Support this project and help it reach the
                                featured leaderboard.
                            </p>
                        </div>

                        {/* website */}
                        {product.websiteUrl && (
                            <Button
                                asChild
                                size="lg"
                                className="w-full h-16 bg-[#FFB38A]">
                                <a
                                    href={product.websiteUrl}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Launch Product
                                    <ExternalLink className="ml-2 size-5" />
                                </a>
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
