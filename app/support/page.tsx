import { MessageCircle, ChevronLeft, Mail, Linkedin } from "lucide-react";
import Link from "next/link";

export default function SupportPage() {
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
                            <MessageCircle className="size-4" />
                            User Assistance Portal
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">Help & Support</h1>
                        <p className="text-muted-foreground font-medium lowercase">find answers to common questions or get in touch with our team.</p>
                    </div>

                    <div className="space-y-12">
                        {/* FAQ Section */}
                        <div className="space-y-8">
                            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-foreground/30 flex items-center gap-4">
                                Frequently Asked Questions <span className="flex-1 h-px bg-foreground/5" />
                            </h2>

                            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-medium">
                                <section className="space-y-2">
                                    <h3 className="text-xl font-black text-foreground uppercase tracking-tight">How do I get my project featured?</h3>
                                    <p className="lowercase">projects that receive over 100 upvotes from the community are automatically reviewed for our featured list. ensure your submission is high-quality and includes a live website link.</p>
                                </section>

                                <section className="space-y-2">
                                    <h3 className="text-xl font-black text-foreground uppercase tracking-tight">Can I edit my submission?</h3>
                                    <p className="lowercase">currently, submissions are final once they are live. if you need to update a link or description, please reach out to us via email with your project slug and the requested changes.</p>
                                </section>

                                <section className="space-y-2">
                                    <h3 className="text-xl font-black text-foreground uppercase tracking-tight">Is Atlash Hub free to use?</h3>
                                    <p className="lowercase">yes, sharing and discovering projects on atlash hub is completely free for the community. our goal is to help architects showcase their work and grow their network.</p>
                                </section>
                            </div>
                        </div>

                        {/* Contact Section */}
                        <div className="bg-secondary/10 dark:bg-secondary/5 border-2 border-foreground/5 rounded-[2.5rem] p-10 space-y-8 shadow-sm">
                            <h3 className="text-lg font-black tracking-tight text-foreground uppercase">Direct Contact</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <Link href="mailto:support@atlash.hub" className="flex items-center gap-4 group">
                                    <div className="size-12 rounded-xl bg-background border-2 border-foreground/5 flex items-center justify-center shadow-sm group-hover:border-primary/30 transition-colors">
                                        <Mail className="size-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Email Support</p>
                                        <p className="font-bold text-foreground text-sm group-hover:text-primary transition-colors">support@atlash.hub</p>
                                    </div>
                                </Link>
                                <Link href="https://www.linkedin.com/in/abdulrahman-in/" target="_blank" className="flex items-center gap-4 group">
                                    <div className="size-12 rounded-xl bg-background border-2 border-foreground/5 flex items-center justify-center shadow-sm group-hover:border-primary/30 transition-colors">
                                        <Linkedin className="size-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">LinkedIn</p>
                                        <p className="font-bold text-foreground text-sm group-hover:text-primary transition-colors">Abdul Rahman</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}