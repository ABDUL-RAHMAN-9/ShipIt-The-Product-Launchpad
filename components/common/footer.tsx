import Link from "next/link";
import Image from "next/image";
import logoIcon from "@/app/icon.svg";

const footerLinks = [
    {
        title: "explore",
        links: [
            { label: "directory", href: "/explore" },
            { label: "freshly baked", href: "/explore?sort=recent" },
            { label: "top picks", href: "/explore?sort=featured" },
        ],
    },
    {
        title: "community",
        links: [
            { label: "share work", href: "/submit" },
            { label: "guidelines", href: "/guidelines" },
            { label: "get help", href: "/support" },
        ],
    },
    {
        title: "legal",
        links: [
            { label: "privacy", href: "/privacy" },
            { label: "terms", href: "/terms" },
        ],
    },
    {
        title: "get in touch",
        links: [{ label: "email us", href: "mailto:hello.abdul.in@gmail.com" }],
    },
];

export default function Footer() {
    return (
        <footer className="bg-[#0C0C0C] text-white pt-24 pb-12 overflow-hidden font-sans">
            <div className="wrapper relative z-10 max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12 mb-20">
                    {/* Brand Section */}
                    <div className="col-span-2 space-y-6">
                        <Link
                            href="/"
                            className="flex items-center gap-3 group w-fit">
                            <Image
                                src={logoIcon}
                                alt="ATLASH Logo"
                                width={28}
                                height={32}
                                className="size-7 shrink-0 invert"
                            />
                            <span className="text-lg font-bold tracking-tight text-white select-none">
                                ATLASH
                            </span>
                        </Link>

                        <p className="text-white/50 text-sm font-medium max-w-xs leading-relaxed">
                            A place to share what you build and find cool new
                            things made by builders like you.
                        </p>
                    </div>

                    {/* Dynamic Navigation Columns */}
                    {footerLinks.map((section) => (
                        <div key={section.title} className="space-y-5">
                            <h4 className="text-[11px] font-bold uppercase tracking-wider text-white/40">
                                {section.title}
                            </h4>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-white/50 hover:text-white transition-colors capitalize">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar / Slogan Signature */}
                <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-xs font-medium text-white/40 tracking-wider">
                        © 2026{" "}
                        <span className="text-white/40 font-semibold">
                            Atlash Hub. All rights reserved.
                        </span>
                    </p>

                    <div className="flex items-center gap-1.5 text-xs font-medium text-white/20">
                        <span className="text-white/40 font-semibold">
                            Build by Abdul Rahman.
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
