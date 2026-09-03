// app/guidelines/page.tsx
import type { Metadata } from "next";
import BackHome from "@/components/common/back-home";

export const metadata: Metadata = {
    title: "Community Guidelines",
    description:
        "Learn the principles that keep Atlash Hub a trusted place for builders, creators, and innovators to share products and collaborate.",
    keywords: [
        "Atlash community",
        "community guidelines",
        "product submission rules",
        "builder community",
        "startup showcase rules",
        "creator guidelines",
        "ethical product sharing",
        "Atlash Hub standards",
    ],
};

export default function GuidelinesPage() {
    return (
        <main className="pt-20 pb-20 bg-[#F3F0FA] dark:bg-[#09080D] min-h-screen font-sans">
            <div className="mx-auto max-w-4xl px-6 md:px-8">
                {/* Back navigation */}
                <div className="mb-10">
                    <BackHome />
                </div>

                {/* Main Content Layout */}
                <article className="space-y-12">
                    {/* Header */}
                    <header>
                        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-950 dark:text-white mb-4">
                            Community Guidelines
                        </h1>
                        <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                            Build with integrity.
                        </p>
                    </header>

                    {/* Introductory Left-Bordered Callout Box */}
                    <div className="border-l-4 border-[#B19CFF] bg-white p-6 rounded-r-2xl dark:bg-[#111015]">
                        <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium">
                            Atlash exists to celebrate builders shipping
                            meaningful products. These guidelines help us keep
                            the community authentic, supportive, and valuable
                            for everyone.
                        </p>
                    </div>

                    {/* Section: Share what you've built */}
                    <section className="space-y-3">
                        <h2 className="text-2xl font-black tracking-tight text-zinc-950 dark:text-white">
                            Share what you have built
                        </h2>
                        <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                            Submit products that you have personally created,
                            contributed to, or helped launch. Authentic
                            ownership builds genuine trust, and trust builds
                            communities worth joining. Because every submission
                            is linked directly to your secure Better Auth
                            session, submitting plagiarized, misleading, or
                            stolen work will result in immediate account
                            suspension and removal of all listed products.
                        </p>
                    </section>

                    {/* Section: Support fellow builders */}
                    <section className="space-y-3">
                        <h2 className="text-2xl font-black tracking-tight text-zinc-950 dark:text-white">
                            Support fellow builders
                        </h2>
                        <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                            Great products come from healthy, collaborative
                            communities. Offer constructive, thoughtful feedback
                            on other builders&apos; product launches, engage in
                            productive discussions, and help others improve.
                            Coordinated upvote manipulation, botting, or using
                            fake sessions violates our core values of fairness
                            and will trigger database-level audit flags.
                        </p>
                    </section>

                    {/* Section: Maintain quality */}
                    <section className="space-y-3">
                        <h2 className="text-2xl font-black tracking-tight text-zinc-950 dark:text-white">
                            Maintain submission quality
                        </h2>
                        <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                            Ensure your submissions contain clear project names,
                            descriptive taglines, accurate tags, and active,
                            functioning URLs. Every product goes through our
                            server-side validation pipeline (using Zod schemas)
                            to prevent broken links or spam metadata.
                            High-quality listings help the entire community
                            discover better tools and startups.
                        </p>
                    </section>

                    {/* Section: Protect the ecosystem */}
                    <section className="space-y-3">
                        <h2 className="text-2xl font-black tracking-tight text-zinc-950 dark:text-white">
                            Protect the ecosystem
                        </h2>
                        <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                            We have zero tolerance for malicious software,
                            phishing links, misleading redirects, or spam. To
                            protect builders, we operate a scalable, multi-stage
                            administrator moderation pipeline. Administrators
                            actively review submissions and reserve the right to
                            modify tags, reject listings, or remove products to
                            preserve the integrity and security of the Atlash
                            Hub index.
                        </p>
                    </section>
                </article>
            </div>
        </main>
    );
}
