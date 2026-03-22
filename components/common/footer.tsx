import Link from "next/link";
import { Activity, Linkedin, Mail } from "lucide-react"; // Swapped Rocket for Activity

const footerLinks = [
    {
        title: "Infrastructure", // Changed from Platform
        links: [
            { label: "System Directory", href: "/explore" }, // Changed from Explore Projects
            { label: "Recent Integrations", href: "/explore?sort=recent" }, // Changed from Latest Arrivals
            { label: "Strategic Assets", href: "/explore?sort=featured" }, // Changed from Maker Spotlight
        ],
    },
    {
        title: "Operations", // Changed from Community
        links: [
            { label: "Initialize Deployment", href: "/submit" }, // Changed from Submit a Ship
            { label: "Compliance Guide", href: "/guidelines" }, // Changed from Guidelines
            { label: "System Status", href: "#" }, // Changed from Discord
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
                                <Activity className="size-5 text-primary-foreground" />
                            </div>
                            <span className="text-2xl font-black tracking-tighter text-foreground">
                                Atlash
                            </span>
                        </Link>

                        <p className="text-muted-foreground font-medium max-w-sm leading-relaxed">
                            A high-velocity infrastructure management platform built by <span className="text-foreground font-bold underline decoration-primary/30 underline-offset-4">Abdul Rahman</span>.
                            Engineered to consolidate fragmented digital assets and optimize operational efficiency by 70%.
                        </p>

                        {/* PROFESSIONAL CONTACT LINKS */}
                        <div className="space-y-4">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40">Network & Support</p>
                            <div className="flex items-center gap-4">
                                <Link
                                    href="https://www.linkedin.com/in/abdulrahman-in/"
                                    target="_blank"
                                    className="p-2.5 rounded-xl bg-secondary/50 text-muted-foreground hover:text-primary transition-all border-2 border-transparent hover:border-primary/20 hover:shadow-sm"
                                >
                                    <Linkedin className="size-5" />
                                </Link>

                                <Link
                                    href="mailto:abdulrahman161004@gmail.com"
                                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-bold text-sm border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
                                >
                                    <Mail className="size-4" />
                                    Get in Touch
                                </Link>
                            </div>
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
                        © 2026 ATLASH HUB. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground/40 uppercase tracking-widest">
                        <span>Architecture</span>
                        <div className="px-2 py-0.5 bg-primary/10 text-primary rounded border border-primary/20">
                            T3 STACK / NEXT.JS 15
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}