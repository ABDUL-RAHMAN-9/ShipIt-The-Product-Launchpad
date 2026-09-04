"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronDown, LayoutDashboard, LogOut } from "lucide-react";

import { authClient } from "@/lib/auth-client";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type UserMenuProps = {
    name: string;
    image?: string | null;
    isAdmin: boolean;
};

export default function UserMenu({ name, image, isAdmin }: UserMenuProps) {
    const router = useRouter();

    async function handleLogout() {
        await authClient.signOut();
        router.refresh();
    }

    const initial = name.charAt(0).toUpperCase();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                    type="button"
                    aria-label="Open user menu"
                    className="group flex items-center gap-2 rounded-full p-0.5 pr-2 outline-none transition-colors duration-150 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#F7F7F2]/30">
                    {image ? (
                        <Image
                            src={image}
                            alt={name}
                            width={32}
                            height={32}
                            className="size-8 rounded-full object-cover"
                        />
                    ) : (
                        <div
                            className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#F7F7F2] text-sm font-bold text-[#3d5f58]"
                            aria-hidden="true">
                            {initial}
                        </div>
                    )}

                    <span className="hidden max-w-28 truncate text-[14.5px] font-semibold text-[#F7F7F2] sm:block">
                        {name}
                    </span>

                    <ChevronDown
                        className="size-3.5 text-[#F7F7F2]/70 transition-transform duration-200 group-data-[state=open]:rotate-180"
                        strokeWidth={2}
                        aria-hidden="true"
                    />
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align="end"
                sideOffset={7}
                className="w-48 rounded-xl border border-[#10201D]/10 bg-white p-1 shadow-[0_10px_30px_rgba(16,32,29,0.12)]">
                {isAdmin && (
                    <>
                        <DropdownMenuItem
                            asChild
                            className="cursor-pointer rounded-lg px-2.5 py-2 text-[13.5px] font-medium text-[#10201D] outline-none focus:bg-[#3d5f58]/[0.07]">
                            <Link
                                href="/admin"
                                className="flex items-center gap-2.5">
                                <LayoutDashboard
                                    className="size-4 text-[#3d5f58]"
                                    strokeWidth={2}
                                />

                                <span>Admin Dashboard</span>
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuSeparator className="my-1 bg-[#10201D]/10" />
                    </>
                )}

                <DropdownMenuItem
                    onClick={handleLogout}
                    className="cursor-pointer rounded-lg px-2.5 py-2 text-[13.5px] font-medium text-[#10201D] outline-none focus:bg-[#3d5f58]/[0.07]">
                    <LogOut className="size-4 text-[#3d5f58]" strokeWidth={2} />

                    <span>Sign Out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
