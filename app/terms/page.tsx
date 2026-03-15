import { Scale, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
    return (
        <main className="py-16 lg:py-24 bg-background">
            <div className="wrapper max-w-3xl">
                <Link href="/" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-primary mb-12 transition-all group">
                    <div className="p-1 rounded-md bg-secondary/50 group-hover:bg-primary/10 border border-foreground/5">
                        <ChevronLeft className="size-4" />
                    </div>
                    Back to Home
                </Link>

                <div className="space-y-12">
                    <div className="space-y-4 border-b-2 border-foreground/5 pb-8">
                        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-[0.2em] text-[10px]">
                            <Scale className="size-4" />
                            Legal Framework
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">Terms of Service</h1>
                        <p className="text-muted-foreground font-medium">Effective: March 2026</p>
                    </div>

                    <div className="space-y-8 text-lg text-muted-foreground leading-relaxed font-medium">
                        <section className="space-y-4">
                            <h2 className="text-xl font-black text-foreground uppercase tracking-tight">1. Usage Agreement</h2>
                            <p>By using ShipIt, you agree to participate in a respectful community of makers. Any content found to be malicious, fraudulent, or hateful will be removed immediately.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-black text-foreground uppercase tracking-tight">2. Ownership</h2>
                            <p>You retain full intellectual property rights to the projects you submit. By posting, you grant ShipIt the right to display your project to our community.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-black text-foreground uppercase tracking-tight">3. Moderation</h2>
                            <p>All submissions to the Project Registry are subject to review by our administrative team. We reserve the right to approve or reject entries based on quality standards.</p>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}