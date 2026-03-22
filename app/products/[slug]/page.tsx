import type { Metadata } from 'next';
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
    Box,
    User,
    Trophy,
    Globe
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({
    params
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params;
    const product = await getProductBySlug(slug);

    if (!product) {
        return {
            title: "Product Not Found"
        };
    }

    return {
        title: product.name,
        description: product.tagline,
    };

}


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

    const launchDate = createAt ? new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    }).format(new Date(createAt)) : "Recently Shipped";

    return (
        <main className="py-12 lg:py-24 bg-background">
            <div className="wrapper">

                {/* BREADCRUMB */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-primary mb-16 transition-all group"
                >
                    <div className="p-1.5 rounded-lg bg-secondary/50 group-hover:bg-primary/10 border border-foreground/5">
                        <ChevronLeft className="size-4" />
                    </div>
                    Back to System Directory
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                    {/* LEFT SECTION */}
                    <div className="lg:col-span-8 space-y-16">
                        <div className="space-y-6">
                            <div className="flex items-start gap-6">
                                <div className="p-4 bg-primary/10 rounded-2xl border-2 border-primary/20 shadow-sm shrink-0">
                                    <Box className="size-10 text-primary" />
                                </div>
                                <div className="space-y-2">
                                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground leading-[0.85]">
                                        {name}
                                    </h1>
                                    <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl leading-relaxed">
                                        {tagline}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-2">
                                {tags?.map((tag) => (
                                    <Badge key={tag} variant="outline" className="px-4 py-1.5 bg-secondary/30 border-foreground/10 lowercase font-bold text-foreground/80 rounded-lg">
                                        #{tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-foreground/30 flex items-center gap-4">
                                Deployment Overview <span className="flex-1 h-px bg-foreground/5" />
                            </h2>
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
                                {description}
                            </p>
                        </div>

                        <div className="bg-secondary/10 dark:bg-secondary/5 border-2 border-foreground/5 rounded-[2.5rem] p-10 space-y-8 shadow-sm">
                            <h3 className="text-lg font-black tracking-tight text-foreground">Technical Log</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="flex items-center gap-4">
                                    <div className="size-12 rounded-xl bg-background border-2 border-foreground/5 flex items-center justify-center shadow-sm">
                                        <Calendar className="size-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Launched</p>
                                        <p className="font-bold text-foreground text-lg">{launchDate}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="size-12 rounded-xl bg-background border-2 border-foreground/5 flex items-center justify-center shadow-sm">
                                        <User className="size-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Architect</p>
                                        <p className="font-bold text-foreground text-lg truncate max-w-[180px]">{submittedBy}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SECTION: Sidebar */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-32 space-y-8">

                            <div className="bg-background border-4 border-foreground rounded-[2.5rem] p-10 flex flex-col items-center text-center space-y-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                                <div className="space-y-2">
                                    <h4 className="text-sm font-black uppercase tracking-widest text-foreground">Verify Reliability</h4>
                                    <p className="text-xs font-medium text-muted-foreground px-4">Help this project reach the Industry Trust Index</p>
                                </div>

                                <VotingButtons
                                    productId={product.id}
                                    voteCount={voteCount}
                                    hasVoted={false}
                                />

                                {voteCount > 100 && (
                                    <div className="w-full pt-8 border-t-2 border-foreground/5">
                                        <div className="w-full flex items-center justify-center gap-2 py-3 bg-primary/5 text-primary border-2 border-dashed border-primary/30 rounded-2xl">
                                            <Trophy className="size-4" />
                                            <span className="font-black tracking-[0.15em] uppercase text-[10px]">Elite Infrastructure Node</span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* CTA BUTTON: This is an action, so it keeps the shadow */}
                            {websiteUrl && (
                                <Button asChild size="lg" className="w-full h-16 text-lg font-black uppercase tracking-widest rounded-3xl border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                                    <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
                                        <Globe className="mr-2 size-5" />
                                        Explore Live
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