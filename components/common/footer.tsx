import Link from "next/link";
import { Rocket, Github, Twitter, Globe, Linkedin } from "lucide-react";

const footerLinks = [
    {
        title: "Platform",
        links: [
            { label: "Explore Projects", href: "/explore" },
            { label: "Latest Arrivals", href: "/explore?sort=recent" },
            { label: "Maker Spotlight", href: "/explore?sort=featured" },
        ],
    },
    {
        title: "Community",
        links: [
            { label: "Submit a Ship", href: "/submit" },
            { label: "Guidelines", href: "/guidelines" },
            { label: "Discord", href: "#" },
        ],
    },
    {
        title: "Legal",
        links: [
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms of Service", href: "/terms" },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="bg-background border-t-2 border-foreground/5 pt-20 pb-10">
            <div className="wrapper">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

                    {/* Brand Section */}
                    <div className="lg:col-span-2 space-y-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="size-10 rounded-xl bg-primary flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] border-2 border-foreground transition-transform group-hover:scale-105">
                                <Rocket className="size-5 text-primary-foreground" />
                            </div>
                            <span className="text-2xl font-black tracking-tighter text-foreground">
                                ShipIt
                            </span>
                        </Link>

                        {/* PERSONALIZED BIO */}
                        <p className="text-muted-foreground font-medium max-w-sm leading-relaxed">
                            A handcrafted community platform built by <span className="text-foreground font-bold underline decoration-primary/30 underline-offset-4">Abdul Rahman</span>.
                            Designed for makers to showcase their craft and find their first 100 users.
                        </p>

                        {/* LINKS */}
                        <div className="flex items-center gap-4">
                            <Link
                                href="https://github.com/ABDUL-RAHMAN-9"
                                target="_blank"
                                className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary transition-colors border border-transparent hover:border-primary/20"
                            >
                                <Github className="size-5" />
                            </Link>

                            <Link
                                href="https://www.linkedin.com/in/abdulrahman-in/"
                                target="_blank"
                                className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary transition-colors border border-transparent hover:border-primary/20"
                            >
                                <Linkedin className="size-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Links Sections */}
                    {footerLinks.map((section) => (
                        <div key={section.title} className="space-y-6">
                            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/50">
                                {section.title}
                            </h4>
                            <ul className="space-y-4">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs font-bold text-muted-foreground/60 uppercase tracking-widest">
                        © {new Date().getFullYear()} ShipIt Inc. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground/40 uppercase tracking-widest">
                        <span>Crafted with</span>
                        <div className="px-2 py-0.5 bg-primary/10 text-primary rounded border border-primary/20">
                            Next.js 16
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}