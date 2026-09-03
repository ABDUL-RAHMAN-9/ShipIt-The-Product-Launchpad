import Link from "next/link";
import { Barlow_Semi_Condensed } from "next/font/google";
import { Button } from "@/components/ui/button";

const heroHeadingFont = Barlow_Semi_Condensed({
    subsets: ["latin"],
    weight: ["700", "800"],
    display: "swap",
});

export default function HeroSection() {
    return (
        <section className="relative min-h-svh overflow-hidden bg-[#3D5F58] text-[#F7F7F2]">
            {/* Subtle dotted background */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.35]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, rgba(247, 247, 242, 0.28) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                    maskImage:
                        "linear-gradient(to bottom, black 0%, black 82%, transparent 100%)",
                    WebkitMaskImage:
                        "linear-gradient(to bottom, black 0%, black 82%, transparent 100%)",
                }}
            />

            {/* Main hero content */}
            <div className="relative z-10 flex min-h-svh flex-col items-center justify-center px-6 py-[clamp(60px,6vw,100px)] text-center sm:px-8">
                <div className="flex w-full max-w-5xl flex-col items-center">
                    {/* Eyebrow */}
                    <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.22em] text-[#F6C4C1] sm:text-xs">
                        BUILT BY MAKERS · DISCOVERED BY PEOPLE
                    </p>

                    {/* Main heading */}
                    <h1
                        className={`${heroHeadingFont.className} mb-7 max-w-5xl text-[clamp(2.5rem,9vw,6.2rem)] font-extrabold tracking-[-0.03em] leading-[0.92] text-balance`}>
                        Discover what
                        <br />
                        <span className="text-[#8BB2DE]">
                            builders are building.
                        </span>
                    </h1>

                    {/* Supporting description */}
                    <p className="mb-9 max-w-2xl text-base font-medium leading-7 text-[#F7F7F2]/80 sm:text-lg sm:leading-8">
                        A place to discover remarkable products, follow what
                        builders are creating, and find ideas worth paying
                        attention to. Share what you’re building and connect
                        with the people behind it.{" "}
                    </p>

                    {/* Call-to-action buttons */}
                    <div className="flex flex-col items-center gap-4 sm:flex-row">
                        {/* Primary CTA */}
                        <Button
                            asChild
                            size="lg"
                            className="h-12 min-w-43.75 rounded-sm border-2 border-[#10201D] bg-[#E97B77] px-7 text-sm font-bold text-[#10201D] shadow-[3px_3px_0_#10201D] transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-[#E97B77] hover:shadow-[1px_1px_0_#10201D] active:translate-x-0.75 active:translate-y-0.75 active:shadow-none">
                            <Link href="/submit">Share your project</Link>
                        </Button>

                        {/* Secondary CTA */}
                        <Button
                            asChild
                            size="lg"
                            className="h-12 min-w-43.75 rounded-sm border-2 border-[#F7F7F2] bg-transparent px-7 text-sm font-bold text-[#F7F7F2] shadow-[3px_3px_0_#F7F7F2] transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-[#F7F7F2] hover:text-[#10201D] hover:shadow-[1px_1px_0_#F7F7F2] active:translate-x-0.75 active:translate-y-0.75 active:shadow-none">
                            <Link href="/explore">Explore projects</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
