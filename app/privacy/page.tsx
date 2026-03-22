import { ChevronLeft, Lock, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
    return (
        <main className="py-16 lg:py-24 bg-background">
            <div className="wrapper max-w-3xl">
                {/* Updated Back Link to Hub */}
                <Link href="/" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-primary mb-12 transition-all group">
                    <div className="p-1 rounded-md bg-secondary/50 group-hover:bg-primary/10 border border-foreground/5">
                        <ChevronLeft className="size-4" />
                    </div>
                    Back to Hub
                </Link>

                <div className="space-y-12">
                    <div className="space-y-4 border-b-2 border-foreground/5 pb-8">
                        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-[0.2em] text-[10px]">
                            <Lock className="size-4" />
                            Infrastructure Security Protocol
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">Privacy Policy</h1>
                        <p className="text-muted-foreground font-medium">Protocol Updated: March 2026</p>
                    </div>

                    <div className="space-y-8 text-lg text-muted-foreground leading-relaxed font-medium">
                        <section className="space-y-4">
                            {/* FIX: Removed text-foreground to resolve CSS conflict */}
                            <h2 className="text-xl font-black uppercase tracking-tight text-primary flex items-center gap-2">
                                <ShieldCheck className="size-5" />
                                1. Identity Orchestration
                            </h2>
                            <p>We utilize enterprise-grade identity providers (Clerk) to manage authenticated access to the Atlash Hub. We only collect the minimal dataset required for secure session management, including corporate email and Lead Architect identifiers.</p>
                        </section>

                        <section className="space-y-4">
                            {/* FIX: Removed text-foreground to resolve CSS conflict */}
                            <h2 className="text-xl font-black uppercase tracking-tight text-primary flex items-center gap-2">
                                <ShieldCheck className="size-5" />
                                2. Node Deployment Data
                            </h2>
                            <p>When a deployment node is initialized on Atlash, metadata—including system tags, architectural descriptions, and URLs—is indexed within our high-performance Neon PostgreSQL cluster. This data is intended for public indexing within the System Directory.</p>
                        </section>

                        <section className="space-y-4">
                            {/* FIX: Removed text-foreground to resolve CSS conflict */}
                            <h2 className="text-xl font-black uppercase tracking-tight text-primary flex items-center gap-2">
                                <ShieldCheck className="size-5" />
                                3. Strategic Infrastructure Partners
                            </h2>
                            <p>Atlash maintains zero-trust data integrity. We utilize Clerk for identity management and Neon for serverless data storage. Your professional credentials are never liquidated or shared with 3rd-party advertising networks.</p>
                        </section>

                        <section className="space-y-4 border-t border-foreground/5 pt-8">
                            <h2 className="text-sm font-black text-foreground uppercase tracking-widest">Compliance Statement</h2>
                            <p className="text-sm">Atlash Hub is engineered with the T3 Stack to ensure sub-100ms data retrieval while maintaining strict adherence to modern data privacy standards and 100% architectural integrity.</p>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}