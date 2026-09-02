import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import logoIcon from "@/app/icon.svg";

import { Button } from "../ui/button";
import UserMenu from "./user-menu";
import { getCurrentSession } from "@/lib/auth-session";
import { isAdmin } from "@/lib/admin/admin-config";

export default function Header() {
    return (
        <div className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8">
            <header className="max-w-6xl mx-auto h-16 bg-white border-2 border-black rounded-2xl shadow-[4px_4px_0px_0px_#000] flex items-center justify-between px-6 relative dark:bg-[#111015] dark:border-zinc-800">
                {/* Brand Logo  */}
                <Link
                    href="/"
                    className="flex items-center gap-2 group transition-transform active:scale-95 shrink-0 z-10">
                    <Image
                        src={logoIcon}
                        alt="ATLASH Logo"
                        width={26}
                        height={26}
                        className="size-6.5"
                        priority
                    />
                    <span className="text-[22px] font-[1000] uppercase tracking-tighter leading-none text-black selection:bg-[#B19CFF] dark:text-white">
                        Atlash
                    </span>
                </Link>

                {/* Navigation Links  */}
                <nav className="hidden md:flex items-center justify-center gap-8 absolute left-1/2 -translate-x-1/2 z-0">
                    <Link
                        href="/explore"
                        className="text-sm font-bold text-black/60 hover:text-black transition-colors dark:text-zinc-400 dark:hover:text-white">
                        Explore
                    </Link>
                    <Link
                        href="/submit"
                        className="text-sm font-bold text-black/60 hover:text-black transition-colors dark:text-zinc-400 dark:hover:text-white">
                        Submit
                    </Link>
                    <Link
                        href="/support"
                        className="text-sm font-bold text-black/60 hover:text-black transition-colors dark:text-zinc-400 dark:hover:text-white">
                        Support
                    </Link>
                </nav>

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
        <div className="flex items-center gap-3">
            <Link href="/sign-in">
                <Button
                    variant="outline"
                    size="sm"
                    className="font-bold shadow-[2px_2px_0px_0px_#000] cursor-pointer">
                    Log in
                </Button>
            </Link>

            <Link href="/sign-up">
                <Button
                    size="sm"
                    className="font-bold shadow-[2px_2px_0px_0px_#000] cursor-pointer active:shadow-none active:translate-x-px active:translate-y-px">
                    Get started
                </Button>
            </Link>
        </div>
    );
}

function AuthAreaSkeleton() {
    return (
        <div className="flex items-center gap-3 animate-pulse">
            <div className="h-9 w-16 bg-stone-100 rounded-lg dark:bg-zinc-800" />
            <div className="h-9 w-24 bg-stone-100 rounded-lg dark:bg-zinc-800" />
        </div>
    );
}
