import VotingButtons from "@/components/products/voting-buttons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    getFeaturedProducts,
    getProductBySlug,
} from "@/lib/products/product-select";
import {
    ChevronLeft,
    Calendar,
    ExternalLink,
    Star,
    User,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
    const products = await getFeaturedProducts();
    return products.map((product) => ({
        slug: product.slug,
    }));
};

export default async function ProductDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const product = await getProductBySlug(slug);

    if (!product) notFound();

    const { name, description, websiteUrl, tags, voteCount, tagline, createAt, submittedBy } = product;

    // Standardized date formatting
    const launchDate = createAt ? new Intl.DateTimeFormat('en-US', {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric'
    }).format(new Date(createAt)) : "Pending";

    return (
        <main className="py-12 lg:py-20 bg-background">
            <div className="wrapper">
                {/* 1. BREADCRUMB - Top Left */}
                <Link
                    href="/explore"
                    className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary mb-12 transition-colors group"
                >
                    <ChevronLeft className="size-4 transition-transform group-hover:-translate-x-1" />
                    Back to Explore
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">

                    {/* LEFT SECTION (Main Content) */}
                    <div className="lg:col-span-2 space-y-10">

                        {/* Header Area */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                
                                <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-foreground">
                                    {name}
                                </h1>
                            </div>
                            <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-tight">
                                {tagline}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 pt-2">
                                {tags?.map((tag) => (
                                    <Badge key={tag} variant="secondary" className="px-3 py-1 text-xs font-bold rounded-lg border-none bg-secondary/60">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* About Section */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-black uppercase tracking-tight text-foreground">About</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                                {description}
                            </p>
                        </div>

                        {/* Product Details Box - Colored Background */}
                        <div className="bg-[#f2ebe0] dark:bg-secondary/10 border-2 border-foreground/5 rounded-3xl p-8 space-y-6 shadow-sm">
                            <h2 className="text-lg font-black tracking-tight text-foreground">Product Details</h2>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-sm">
                                    <Calendar className="size-4 text-muted-foreground" />
                                    <span className="text-muted-foreground font-bold uppercase tracking-wider text-[10px]">Launched:</span>
                                    <span className="font-bold text-foreground">{launchDate}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <User className="size-4 text-muted-foreground" />
                                    <span className="text-muted-foreground font-bold uppercase tracking-wider text-[10px]">Submitted by:</span>
                                    <span className="font-bold text-foreground">{submittedBy}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SECTION (Sidebar) */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 space-y-6">

                            {/* Support Card */}
                            <div className="bg-background border-2 border-foreground/10 rounded-3xl p-10 flex flex-col items-center justify-center text-center space-y-6">
                                <p className="text-sm font-bold text-muted-foreground">Support this product</p>

                                <VotingButtons
                                    productId={product.id}
                                    voteCount={voteCount}
                                    hasVoted={false}
                                />

                                {voteCount > 100 && (
                                    <div className="w-full pt-6 border-t border-foreground/5">
                                        <Badge className="w-full justify-center py-2.5 bg-primary text-primary-foreground font-black tracking-widest uppercase text-[10px]">
                                            🔥 Featured Product
                                        </Badge>
                                    </div>
                                )}
                            </div>

                            {/* Visit Website Button */}
                            {websiteUrl && (
                                <Button asChild variant="outline" size="lg" className="w-full h-14 font-black uppercase tracking-widest bg-background">
                                    <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
                                        Visit Website <ExternalLink className="ml-2 size-5" />
                                    </a>
                                </Button>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}