import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShipIt | The Community Platform for Independent Creators",
  description: "A professional showcase for developers to launch projects, gather community feedback, and connect with other builders. Ship your next big idea today.",
  keywords: ["Project Showcase", "Developer Community", "SaaS Launches", "Fullstack Portfolio", "Product Discovery"],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.className} antialiased relative min-h-screen`}
      >
        {/* THE TEXTURE OVERLAY  */}
        <div className="texture" aria-hidden="true" />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}