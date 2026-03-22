import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import { ClerkProvider } from '@clerk/nextjs'
import Footer from "@/components/common/footer";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata: Metadata = {

  title: {
    default: "Atlash | High-Velocity Deployment Hub",
    template: "%s | ShipIt"
  },
  description: "Atlash is the industry-standard intelligence layer for scaling digital infrastructure. By centralizing product lifecycles and simplifying multi-stack verification, Atlash reduces operational overhead by 70% and accelerates time-to-market by 45%.",
  keywords: ["Project Showcase", "Developer Community", "SaaS Launches", "Fullstack Portfolio", "Product Discovery"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${outfit.className} antialiased relative min-h-screen`}
        >
          {/* THE TEXTURE OVERLAY  */}
          <div className="texture" aria-hidden="true" />
          <main className="relative z-10">
            <Header />
            {children}
            <Footer />
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}