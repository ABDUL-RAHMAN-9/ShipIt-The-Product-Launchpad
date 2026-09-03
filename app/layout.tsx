import type { Metadata } from "next";
import { Outfit, Martian_Mono } from "next/font/google";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";

import "@/app/globals.css";

const outfit = Outfit({
    subsets: ["latin"],
});

const martianMono = Martian_Mono({
    subsets: ["latin"],
    variable: "--font-martian",
});

export const metadata: Metadata = {
    title: {
        default: "Atlash",
        template: "%s | Atlash Hub",
    },
    description:
        "Atlash is a minimal showcase platform for discovering remarkable developer products, sharing your own open-source projects, and connecting with the global builder community.",
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
                className={`${outfit.className} ${martianMono.variable} antialiased relative min-h-screen bg-[#FBF7F0]`}>
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
