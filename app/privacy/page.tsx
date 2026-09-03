// app/privacy/page.tsx
import type { Metadata } from "next";
import BackHome from "@/components/common/back-home";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "Discover how Atlash Hub protects your data, secures your identity, and maintains transparency across our platform.",
    keywords: [
        "Atlash privacy",
        "privacy policy",
        "data protection",
        "user privacy",
        "secure authentication",
        "Better Auth",
        "Neon PostgreSQL",
        "platform security",
        "Atlash Hub privacy",
    ],
};

export default function PrivacyPage() {
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
                            Privacy Policy
                        </h1>
                        <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                            Your data stays yours.
                        </p>
                    </header>

                    {/* Introductory Left-Bordered Callout Box */}
                    <div className="border-l-4 border-[#B19CFF] bg-white p-6 rounded-r-2xl dark:bg-[#111015] ">
                        <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium">
                            Atlash is designed with privacy, transparency, and
                            trust at its core. By maintaining a server-first
                            architecture, we minimize client-side trust
                            assumptions and collect only what&apos;s necessary
                            to operate the platform securely.
                        </p>
                    </div>

                    {/* Section: Authentication */}
                    <section className="space-y-3">
                        <h2 className="text-2xl font-black tracking-tight text-zinc-950 dark:text-white">
                            Authentication
                        </h2>
                        <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                            We use Better Auth to securely handle user sessions
                            and manage login flows via Google and GitHub OAuth
                            providers. This server-side session architecture is
                            integrated directly with our relational database,
                            ensuring complete application ownership over user
                            credentials and avoiding dependency on unnecessary
                            external abstractions.
                        </p>
                    </section>

                    {/* Section: Product Data */}
                    <section className="space-y-3">
                        <h2 className="text-2xl font-black tracking-tight text-zinc-950 dark:text-white">
                            Product data
                        </h2>
                        <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                            Submitted projects, descriptions, tags, website
                            links, and upvote events are processed through a
                            strict server-side validation pipeline (using Zod
                            schemas) before being stored in our Neon PostgreSQL
                            database. Once approved through our moderation
                            pipeline, this information is displayed publicly as
                            part of the Atlash ecosystem.
                        </p>
                    </section>

                    {/* Section: Security Architecture */}
                    <section className="space-y-3">
                        <h2 className="text-2xl font-black tracking-tight text-zinc-950 dark:text-white">
                            Security Architecture
                        </h2>
                        <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                            Security influences nearly every architectural
                            decision within Atlash Hub. We implement server-side
                            session validation, route protection, strict schema
                            validations via Drizzle and Zod, database-level
                            integrity constraints, and complete environment
                            isolation. Our goals are to minimize attack surfaces
                            while protecting the integrity of community
                            submissions.
                        </p>
                    </section>

                    {/* Section: Third-party services */}
                    <section className="space-y-3">
                        <h2 className="text-2xl font-black tracking-tight text-zinc-950 dark:text-white">
                            Third-party services
                        </h2>
                        <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                            Atlash relies on trusted infrastructure partners
                            including Neon for serverless PostgreSQL database
                            services and Vercel for hosting and application
                            delivery. We never sell your personal data or share
                            it with third-party advertising networks.
                        </p>
                    </section>

                    {/* Section: Data Portability & Deletion */}
                    <section className="space-y-3">
                        <h2 className="text-2xl font-black tracking-tight text-zinc-950 dark:text-white">
                            Data Portability & Deletion
                        </h2>
                        <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                            We believe builders should own their contributions.
                            You can update or delete your submitted projects and
                            drafts directly from your dashboard. Requesting full
                            account deletion will permanently purge your user
                            profile, active session records, and associated
                            platform upvotes from our Neon database within 30
                            days.
                        </p>
                    </section>

                    {/* Section: Our commitment */}
                    <section className="space-y-3">
                        <h2 className="text-2xl font-black tracking-tight text-zinc-950 dark:text-white">
                            Our commitment
                        </h2>
                        <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                            We believe privacy is a feature, not an
                            afterthought. Atlash is built to showcase builders
                            and their work while protecting the trust that makes
                            communities thrive.
                        </p>
                    </section>
                </article>
            </div>
        </main>
    );
}
