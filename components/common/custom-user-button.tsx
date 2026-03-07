"use client";

import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Building2, ShieldCheck } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function CustomUserButton() {
    return (
      
        <div className="h-10 w-10 rounded-xl border-2 border-foreground bg-background flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all cursor-pointer overflow-hidden">
            <UserButton
                appearance={{
                    elements: {
                        userButtonAvatarBox: "h-9 w-9 rounded-lg", // Internal avatar also matches the square look
                        userButtonTrigger: "focus:shadow-none focus:outline-none",
                    }
                }}
            >
                <UserButton.UserProfilePage
                    label="Organizations"
                    labelIcon={<Building2 className="size-4" />}
                    url="organization"
                >
                    <div className="p-4 space-y-4">
                        <h2 className="text-xl font-extrabold tracking-tight">Manage Organizations</h2>
                        <OrganizationSwitcher
                            hidePersonal={true}
                            afterCreateOrganizationUrl="/submit"
                            afterSelectPersonalUrl="/submit"
                            appearance={{
                                elements: {
                                    rootBox: "w-full",
                                },
                            }}
                        />
                    </div>
                </UserButton.UserProfilePage>

                <UserButton.UserProfilePage
                    label="Admin"
                    labelIcon={<ShieldCheck className="size-4" />}
                    url="admin"
                >
                    <div className="p-4 space-y-4">
                        <h2 className="text-xl font-extrabold tracking-tight">Admin Control</h2>
                        <p className="text-sm text-muted-foreground font-medium">Review and moderate pending ships.</p>
                        <Link href="/admin" className="block">
                            <Button size="default" className="w-full justify-start">
                                Open Admin Panel
                            </Button>
                        </Link>
                    </div>
                </UserButton.UserProfilePage>
            </UserButton>
        </div>
    );
}