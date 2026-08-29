import Link from "next/link";
import Image from "next/image";
import UserMenu from "./user-menu";
import logoIcon from "@/app/icon.svg";

import { Button } from "../ui/button";
import { getCurrentSession } from "@/lib/auth-session";
import { isAdmin } from "@/lib/admin/admin-config";

export default async function Header() {
    const session = await getCurrentSession();

    return (
        <div className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8">
            <header className="max-w-6xl mx-auto h-16 bg-white border-2 border-black rounded-2xl shadow-[4px_4px_0px_0px_#000] flex items-center justify-between px-6">
                <Link
                    href="/"
                    className="flex items-center gap-2 group transition-transform active:scale-95">
                    <Image
                        src={logoIcon}
                        alt="ATLASH Logo"
                        width={26}
                        height={26}
                        className="size-6.5"
                        priority
                    />
                    <span className="text-[22px] font-[1000] uppercase tracking-tighter leading-none text-black selection:bg-[#B19CFF]">
                        Atlash
                    </span>
                </Link>

                {session ? (
                    <UserMenu
                        name={session.user.name}
                        image={session.user.image}
                        isAdmin={isAdmin(session.user.email)}
                    />
                ) : (
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
                )}
            </header>
        </div>
    );
}
