// app/support/page.tsx
import type { Metadata } from "next";
import { Mail } from "lucide-react";
import BackHome from "@/components/common/back-home";

export const metadata: Metadata = {
    title: "Help & Support",
    description:
        "Get answers, contact support, and learn how to make the most of your experience on Atlash Hub.",
    keywords: [
        "Atlash support",
        "help center",
        "FAQ",
        "customer support",
        "builder assistance",
        "product submission help",
        "community support",
        "Atlash Hub help",
    ],
};

export default function SupportPage() {
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
                            Help & Support
                        </h1>
                        <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                            Atlash Hub has got you covered.
                        </p>
                    </header>

                    {/* Introductory Left-Bordered Callout Box */}
                    <div className="border-l-4 border-[#B19CFF] bg-white p-6 rounded-r-2xl dark:bg-[#111015]">
                        <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium">
                            Find answers, get support, and connect directly with
                            me. Atlash Hub is designed to help you launch,
                            showcase, and discover digital products.
                        </p>
                    </div>

                    {/* Section: FAQ 1 */}
                    <section className="space-y-3">
                        <h2 className="text-2xl font-black tracking-tight text-zinc-950 dark:text-white">
                            How do products get featured?
                        </h2>
                        <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                            Products with strong community engagement, verified
                            launches, and high-quality metadata are highlighted
                            in our trending and featured sections following
                            administrative review. The platform moderation
                            pipeline ensures that authentic products receive the
                            discoverability they deserve.
                        </p>
                    </section>

                    {/* Section: FAQ 2 */}
                    <section className="space-y-3">
                        <h2 className="text-2xl font-black tracking-tight text-zinc-950 dark:text-white">
                            Can I update my submission?
                        </h2>
                        <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                            Yes. If you need to edit your project&apos;s title,
                            description, or links, send an email with your
                            project name and the changes you would like to make.
                            I will review and update the database listing for
                            you.
                        </p>
                    </section>

                    {/* Section: FAQ 3 */}
                    <section className="space-y-3">
                        <h2 className="text-2xl font-black tracking-tight text-zinc-950 dark:text-white">
                            Is Atlash Hub free?
                        </h2>
                        <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                            Yes. Atlash Hub is 100% free to use. It was built by
                            a solo creator (Abdul Rahman) to help you showcase
                            your work, gain traction, and connect with other
                            builders.
                        </p>
                    </section>

                    {/* Section: Contact Us (Singular elegant card) */}
                    <section className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                        <h2 className="text-2xl font-black tracking-tight text-zinc-950 dark:text-white">
                            Contact me directly
                        </h2>
                        <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                            Have a question that isn&apos;t covered here? Or
                            experiencing an authentication issue with Better
                            Auth? Reach out directly via email.
                        </p>

                        <a
                            href="mailto:support@atlash.hub"
                            className="inline-flex items-center gap-4 p-4 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-[#111015] hover:border-[#B19CFF] transition-colors group">
                            <div className="size-10 rounded-xl bg-[#FFB38A] flex items-center justify-center text-[#0F201D] shrink-0">
                                <Mail className="size-5" />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                                    Email Support
                                </p>
                                <p className="font-bold text-zinc-950 dark:text-white group-hover:text-[#6E42F4] dark:group-hover:text-[#B19CFF] transition-colors">
                                    support@atlash.hub
                                </p>
                            </div>
                        </a>
                    </section>
                </article>
            </div>
        </main>
    );
}
