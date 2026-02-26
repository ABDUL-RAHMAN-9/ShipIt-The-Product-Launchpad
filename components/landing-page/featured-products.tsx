import SectionHeader from "@/components/common/section-header"
import { Trophy } from "lucide-react";
import ProductCard from "@/components/products/product-card";

const featuredProducts = [
    {
        id: 1,
        name: "EchoMind AI",
        description: "A secondary brain for developers that automatically indexes your technical documentation and local code snippets.",
        tags: ["Productivity", "AI", "DevTools"],
        votes: 1240,
        isFeatured: true
    },
    {
        id: 2,
        name: "PulseCheck",
        description: "Real-time health monitoring for microservices with zero-config setup. Get notified before your users do.",
        tags: ["Infrastructure", "SaaS"],
        votes: 890,
        isFeatured: true
    },
    {
        id: 3,
        name: "LeafyAnalytics",
        description: "Privacy-first analytics for independent creators. No cookies, no tracking, just honest engagement data for the open web.",
        tags: ["Marketing", "Privacy"],
        votes: 520,
        isFeatured: true
    },
    {
        id: 4,
        name: "SwiftShip",
        description: "The ultimate logistics API for small e-commerce brands. Automate your shipping labels and tracking in minutes.",
        tags: ["Logistics", "API"],
        votes: 430,
        isFeatured: true
    },
    {
        id: 5,
        name: "AtlasVault",
        description: "End-to-end encrypted file sharing designed specifically for legal and financial teams. Safety first, always.",
        tags: ["Security", "FinTech"],
        votes: 310,
        isFeatured: true
    },
    {
        id: 6,
        name: "FluxEditor",
        description: "A collaborative vector design tool built directly into the browser. Fast, fluid, and completely open-source.",
        tags: ["Design", "OSS"],
        votes: 215,
        isFeatured: true
    }
];

export default function FeaturedProducts() {
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