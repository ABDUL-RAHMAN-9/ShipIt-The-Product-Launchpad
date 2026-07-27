import Link from "next/link";
import Image from "next/image";
import { Github, Mail, Linkedin } from "lucide-react";
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
];

export default function Footer() {
    return (
        <footer className="bg-[#0C0C0C] text-white pt-24 pb-12 overflow-hidden relative font-sans">
            <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none z-0">
                <p
                    className="text-center text-[8rem] md:text-[16rem] lg:text-[20rem] font-extrabold leading-none tracking-tight"
                    style={{
                        background:
                            "linear-gradient(rgba(255, 255, 255, 0.07) 0%, transparent 80%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}>
                    ATLASH
                </p>
            </div>

            <div className="wrapper relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
                    {/* brand section */}
                    <div className="lg:col-span-2 space-y-8">
                        <Link
                            href="/"
                            className="flex items-center gap-3 group w-fit">
                            {/* Uses dynamic Next.js Image component with clean invert filters on dark bg */}
                            <Image
                                src={logoIcon}
                                alt="ATLASH Logo"
                                width={32}
                                height={32}
                                className="size-8 shrink-0 invert"
                            />
                            <span className="text-xl font-black tracking-tighter">
                                ATLASH
                            </span>
                        </Link>

                        <p className="text-white/50 font-medium max-w-sm leading-relaxed">
                            A place to share what you build and find cool new
                            things made by people like you.
                        </p>

                        <div className="flex items-center gap-3">
                            <Link
                                href="https://www.linkedin.com/in/ar-rahman-in/"
                                className="size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#B19CFF] hover:text-black transition-all">
                                <Linkedin className="size-4" />
                            </Link>
                            <Link
                                href="https://github.com/abdul-rahman-0x"
                                className="size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#B19CFF] hover:text-black transition-all">
                                <Github className="size-4" />
                            </Link>
                            <Link
                                href="mailto:hello.abdul.in@gmail.com"
                                className="size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#B19CFF] hover:text-black transition-all">
                                <Mail className="size-4" />
                            </Link>
                        </div>
                    </div>

                    {/* links groups */}
                    {footerLinks.map((section) => (
                        <div key={section.title} className="space-y-6">
                            <h4 className="text-[13px] font-black uppercase text-white">
                                {section.title}
                            </h4>
                            <ul className="space-y-4">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-white/50 hover:text-[#B19CFF] capitalize transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* bottom bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[11px] font-medium text-white/30 tracking-widest">
                        © 2026{" "}
                        <span className="text-white/60 font-black">
                            Atlash Hub Inc.
                        </span>
                    </p>

                    {/* Right Side: Signature */}
                    <div className="flex items-center gap-2 text-[11px] font-medium text-white/30">
                        <span className="tracking-widest">Crafted by</span>
                        <Link
                            href="https://abdul-folio-in.vercel.app"
                            target="_blank"
                            className="text-white/60 hover:text-[#B19CFF] font-black transition-colors flex items-center gap-1.5 group">
                            Abdul Rahman
                            <span className="size-1 rounded-full bg-[#FFB38A] group-hover:animate-ping" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
