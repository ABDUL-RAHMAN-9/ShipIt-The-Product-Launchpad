import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";

import logoIcon from "@/app/icon.svg";
import { Button } from "../ui/button";
import UserMenu from "./user-menu";
import { getCurrentSession } from "@/lib/auth-session";
import { isAdmin } from "@/lib/admin/admin-config";

export default function Header() {
    return (
        <div className="fixed top-4 right-0 left-0 z-50 px-4 sm:px-6 md:px-8">
            <header className="relative mx-auto flex h-14 max-w-240 items-center justify-between rounded-xl border-2 border-[#10201D] bg-[#F7F7F2] px-4 shadow-[4px_4px_0_#10201D] sm:px-5 md:px-6">
                {/* Brand */}
                <Link
                    href="/"
                    aria-label="Atlash home"
                    className="group z-10 flex shrink-0 items-center gap-2 transition-transform duration-150 active:scale-95">
                    <Image
                        src={logoIcon}
                        alt="ATLASH Logo"
                        width={26}
                        height={26}
                        className="size-6.5"
                        priority
                    />

                    <span className="text-[21px] font-black uppercase leading-none tracking-[-0.04em] text-[#10201D]">
                        Atlash
                    </span>
                </Link>

                {/* Desktop navigation */}
                <nav
                    aria-label="Main navigation"
                    className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex">
                    <Link
                        href="/explore"
                        className="text-[13px] font-semibold text-[#10201D]/60 transition-colors duration-150 hover:text-[#10201D]">
                        Explore
                    </Link>

                    <Link
                        href="/submit"
                        className="text-[13px] font-semibold text-[#10201D]/60 transition-colors duration-150 hover:text-[#10201D]">
                        Submit
                    </Link>

                    <Link
                        href="/support"
                        className="text-[13px] font-semibold text-[#10201D]/60 transition-colors duration-150 hover:text-[#10201D]">
                        Support
                    </Link>
                </nav>

                {/* Authentication */}
                <div className="z-10 shrink-0">
                    <Suspense fallback={<AuthAreaSkeleton />}>
                        <AuthArea />
                    </Suspense>
                </div>
            </header>
        </div>
    );
}

async function AuthArea() {
    const session = await getCurrentSession();

    if (session) {
        return (
            <UserMenu
                name={session.user.name}
                image={session.user.image}
                isAdmin={isAdmin(session.user.email)}
            />
        );
    }

    return (
        <div className="flex items-center gap-2.5">
            <Link href="/sign-in">
                <Button
                    variant="outline"
                    size="sm"
                    className="h-9 rounded-md border-[#10201D] bg-transparent px-4 text-xs font-bold text-[#10201D] shadow-[2px_2px_0_#10201D] transition-all duration-150 hover:bg-[#10201D]/5 hover:shadow-[1px_1px_0_#10201D] active:translate-x-px active:translate-y-px active:shadow-none">
                    Log in
                </Button>
            </Link>

            <Link href="/sign-up">
                <Button
                    size="sm"
                    className="h-9 rounded-md border-2 border-[#10201D] bg-[#E97B77] px-4 text-xs font-bold text-[#10201D] shadow-[2px_2px_0_#10201D] transition-all duration-150 hover:bg-[#E97B77] hover:shadow-[1px_1px_0_#10201D] active:translate-x-px active:translate-y-px active:shadow-none">
                    Get started
                </Button>
            </Link>
        </div>
    );
}

function AuthAreaSkeleton() {
    return (
        <div className="flex items-center gap-2.5">
            <div className="h-9 w-16 animate-pulse rounded-md bg-[#10201D]/5" />
            <div className="h-9 w-24 animate-pulse rounded-md bg-[#10201D]/5" />
        </div>
    );
}
