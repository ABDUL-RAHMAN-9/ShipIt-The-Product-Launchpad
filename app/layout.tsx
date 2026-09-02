import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "sonner";

const outfit = Outfit({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Atlash",
        template: "%s | Atlash Hub",
    },
    description:
        "Atlash is the industry-standard intelligence layer for scaling digital infrastructure. By centralizing product lifecycles and simplifying multi-stack verification, Atlash reduces operational overhead by 70% and accelerates time-to-market by 45%.",
    keywords: [
        "Infrastructure Registry",
        "Deployment Control Plane",
        "Reliability Index",
        "Enterprise Digital Assets",
        "Architectural Integrity",
    ],
    icons: {
        icon: "/icon.svg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${outfit.className} antialiased relative min-h-screen bg-[#F9F7F0]`}>
                <div
                    className="texture pointer-events-none fixed inset-0 z-[-1] opacity-40"
                    aria-hidden="true"
                />

                {children}

                <Toaster
                    position="bottom-right"
                    richColors
                    closeButton
                    expand
                />

                <Analytics />
            </body>
        </html>
    );
}
