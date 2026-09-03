import Link from "next/link";
import { getCurrentSession } from "@/lib/auth-session";
import { Button } from "@/components/ui/button";
import HeaderTag from "../common/header-tag";

export default async function SubmitSection() {
    const session = await getCurrentSession();
    const href = session
        ? "/submit"
        : `/sign-in?callbackUrl=${encodeURIComponent("/submit")}`;

    return (
        <section className="relative w-full border-b-2 border-[#0F201D] bg-[#3d5f58] py-20 md:py-28 text-[#F7F7F2]">
            <div className="wrapper max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 lg:gap-24 items-start">
                <div className="flex flex-col items-start space-y-6 md:col-span-7">
                    <HeaderTag firstTitle="Join the index" />

                    <h2 className="font-serif font-extrabold text-[clamp(2.2rem,4vw,3.5rem)] tracking-[-0.04em] leading-[1.05] text-balance text-[#F7F7F2]">
                        Ready to showcase{" "}
                        <span className="text-[#8BB2DE] whitespace-nowrap">
                            your project?
                        </span>
                    </h2>

                    <p className="text-sm md:text-base text-[#D6DCD6] leading-relaxed max-w-xl">
                        Atlash is community-curated. Submit your work in minutes
                        to get verified, receive feedback, and reach global
                        builders.
                    </p>

                    <div className="pt-4">
                        <Button asChild variant="default">
                            <Link href={href}>Submit a project</Link>
                        </Button>
                    </div>
                </div>

                <ol className="relative space-y-10 pl-8 before:absolute before:left-1 before:top-2 before:bottom-2 before:w-[2px] before:bg-white/20 md:col-span-5">
                    <li className="relative">
                        <span className="absolute -left-[33px] top-1.5 size-3.5 bg-[#8BB2DE] border-2 border-foreground" />
                        <span className="font-mono text-xs font-bold text-[#8BB2DE] tracking-wider">
                            01
                        </span>
                        <h3 className="text-xl font-bold font-serif mt-1 text-[#F7F7F2]">
                            Submit
                        </h3>
                        <p className="text-sm text-[#D6DCD6] mt-2 leading-relaxed">
                            Share your project details, landing page, and
                            repository link using our standard template.
                        </p>
                    </li>

                    <li className="relative">
                        <span className="absolute -left-[33px] top-1.5 size-3.5 bg-[#8BB2DE] border-2 border-foreground" />
                        <span className="font-mono text-xs font-bold text-[#8BB2DE] tracking-wider">
                            02
                        </span>
                        <h3 className="text-xl font-bold font-serif mt-1 text-[#F7F7F2]">
                            Get reviewed
                        </h3>
                        <p className="text-sm text-[#D6DCD6] mt-2 leading-relaxed">
                            Our community contributors verify your
                            infrastructure, reliability index, and stack
                            alignment.
                        </p>
                    </li>

                    <li className="relative">
                        <span className="absolute -left-[33px] top-1.5 size-3.5 bg-[#8BB2DE] border-2 border-foreground" />
                        <span className="font-mono text-xs font-bold text-[#8BB2DE] tracking-wider">
                            03
                        </span>
                        <h3 className="text-xl font-bold font-serif mt-1 text-[#F7F7F2]">
                            Showcase
                        </h3>
                        <p className="text-sm text-[#D6DCD6] mt-2 leading-relaxed">
                            Once verified, your product goes live on the active
                            feed and is featured in weekly top picks.
                        </p>
                    </li>
                </ol>
            </div>
        </section>
    );
}
