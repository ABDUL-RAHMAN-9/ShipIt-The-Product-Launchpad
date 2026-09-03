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
        <header className="fixed top-0 left-0 right-0 z-50 flex h-20 w-full items-center border-b-2 border-[#10201D] bg-[#3d5f58] text-[#F7F7F2]">
            <nav
                aria-label="Main navigation"
                className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 sm:px-6 md:px-8">
                <Link
                    href="/"
                    aria-label="Atlash home"
                    className="group z-10 flex shrink-0 items-center gap-2 transition-transform duration-150 active:scale-95">
                    <Image
                        src={logoIcon}
                        alt="ATLASH Logo"
                        width={28}
                        height={28}
                        className="size-7 invert"
                        priority
                    />
                    <span className="text-2xl font-black uppercase leading-none tracking-[-0.04em] text-[#F7F7F2]">
                        Atlash
                    </span>
                </Link>

                <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex">
                    <Link
                        href="/explore"
                        className="text-[14.5px] font-semibold text-[#F7F7F2] transition-colors duration-150 hover:underline">
                        Explore
                    </Link>
                    <Link
                        href="/submit"
                        className="text-[14.5px] font-semibold text-[#F7F7F2] transition-colors duration-150 hover:underline">
                        Submit
                    </Link>
                    <Link
                        href="/support"
                        className="text-[14.5px] font-semibold text-[#F7F7F2] transition-colors duration-150 hover:underline">
                        Support
                    </Link>
                </div>

                <div className="z-10 shrink-0">
                    <Suspense fallback={<AuthAreaSkeleton />}>
                        <AuthArea />
                    </Suspense>
                </div>
            </nav>
        </header>
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
                <Button variant="default" size="default">
                    Sign in
                </Button>
            </Link>
        </div>
    );
}

function AuthAreaSkeleton() {
    return (
        <div className="flex items-center gap-2.5">
            <div className="h-11 w-24 animate-pulse bg-white/10" />
        </div>
    );
}
