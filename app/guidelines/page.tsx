import { ChevronLeft, Heart } from "lucide-react";
import Link from "next/link";

export default function GuidelinesPage() {
    return (
        <main className="py-16 lg:py-24 bg-background">
            <div className="wrapper max-w-3xl">
                {/* Back Link */}
                <Link href="/" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-primary mb-12 transition-all group">
                    <div className="p-1 rounded-md bg-secondary/50 group-hover:bg-primary/10 border border-foreground/5">
                        <ChevronLeft className="size-4" />
                    </div>
                    Back to Home
                </Link>

                <div className="space-y-12">
                    <div className="space-y-4 border-b-2 border-foreground/5 pb-8">
                        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-[0.2em] text-[10px]">
                            <Heart className="size-4 fill-current" />
                            Community Standards
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">Community Rules</h1>
                        <p className="text-muted-foreground font-medium lowercase">how we build, share, and grow together at atlash hub.</p>
                    </div>

                    <div className="space-y-8 text-lg text-muted-foreground leading-relaxed font-medium">
                        <section className="space-y-4">
                            <h2 className="text-xl font-black text-foreground uppercase tracking-tight">1. Honest Submissions</h2>
                            <p className="lowercase">we value authenticity. please only submit projects you have built or have a significant role in. ensure your descriptions and taglines accurately reflect what your infrastructure does.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-black text-foreground uppercase tracking-tight">2. Respectful Interaction</h2>
                            <p className="lowercase">atlash is a space for architects to support one another. keep feedback constructive and kind. harassment or exclusionary behavior will result in immediate removal from the community.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-black text-foreground uppercase tracking-tight">3. Quality Standards</h2>
                            <p className="lowercase">while we welcome all levels of builders, we strive for high-quality listings. please ensure your links are active, your tags are relevant, and your descriptions provide real value to other architects.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-black text-foreground uppercase tracking-tight">4. Safety & Integrity</h2>
                            <p className="lowercase">do not upload malicious code, phishing links, or unauthorized assets. we take system integrity seriously to maintain the trust of everyone in the atlash ecosystem.</p>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}