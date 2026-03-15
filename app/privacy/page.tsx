import { ChevronLeft, Lock } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
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
                            <Lock className="size-4" />
                            Security Protocol
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">Privacy Policy</h1>
                        <p className="text-muted-foreground font-medium">Last updated: March 2026</p>
                    </div>

                    <div className="space-y-8 text-lg text-muted-foreground leading-relaxed font-medium">
                        <section className="space-y-4">
                            <h2 className="text-xl font-black text-foreground uppercase tracking-tight">1. Data Collection</h2>
                            <p>We only collect information necessary to provide the ShipIt experience. This includes your email and name provided through our authentication partner, Clerk.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-black text-foreground uppercase tracking-tight">2. Project Information</h2>
                            <p>When you register a project, the data is stored securely in our Neon PostgreSQL cluster. This information is public and intended for community discovery.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-black text-foreground uppercase tracking-tight">3. Third-Party Services</h2>
                            <p>We utilize Clerk for identity orchestration and Neon for serverless data storage. We do not sell your personal data to advertisers or third parties.</p>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}