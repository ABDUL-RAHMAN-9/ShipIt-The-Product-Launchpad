import { Compass, Home, Rocket, Navigation } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import {
    SignedIn,
    SignedOut,
    SignInButton,
    SignUpButton,
} from "@clerk/nextjs";
import { Suspense } from "react";
import CustomUserButton from "./custom-user-button";

const Logo = () => {
    return (
        <Link href="/" className="flex items-center gap-2 group transition-transform hover:scale-105 shrink-0">
            <div className="size-8 md:size-9 rounded-xl bg-primary flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] border-2 border-foreground">
                <Rocket className="size-4 md:size-5 text-primary-foreground" />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tighter text-foreground">
                ShipIt
            </span>
        </Link>
    );
}

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b-2 border-foreground/5 bg-background/80 backdrop-blur-md">
            <div className="wrapper h-16 flex items-center justify-between gap-4">
                <Logo />

                <nav className="flex items-center gap-3">
                    <Suspense fallback={<div className="h-9 w-20 bg-secondary/10 rounded-xl animate-pulse" />}>

                        {/* 1. GUEST VIEW: No navigation links, just the Join button */}
                        <SignedOut>
                            <div className="flex items-center gap-3">
                                <SignInButton mode="modal">
                                    <Button variant="ghost" size="sm" className="hidden sm:flex font-bold border-transparent shadow-none hover:bg-primary/5">
                                        Sign In
                                    </Button>
                                </SignInButton>

                                <SignUpButton mode="modal">
                                    <Button size="sm" className="font-bold px-5">
                                        Join Community
                                    </Button>
                                </SignUpButton>
                            </div>
                        </SignedOut>

                        {/* 2. MEMBER VIEW: Full navigation + Profile */}
                        <SignedIn>
                            <div className="flex items-center gap-2 md:gap-6">
                                {/* Navigation links only appear when signed in */}
                                <div className="flex items-center gap-1 border-r border-foreground/10 pr-4 mr-2">
                                    <Link
                                        href="/"
                                        className="flex items-center gap-2 px-3 py-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
                                    >
                                        <Home className="size-5" />
                                        <span className="hidden md:inline">Home</span>
                                    </Link>
                                    <Link
                                        href="/explore"
                                        className="flex items-center gap-2 px-3 py-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
                                    >
                                        <Compass className="size-5" />
                                        <span className="hidden md:inline">Explore</span>
                                    </Link>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Button asChild size="sm" className="hidden xs:flex font-bold h-9">
                                        <Link href="/submit">
                                            <Navigation className="size-4 rotate-45 md:mr-1" />
                                            <span className="hidden sm:inline">Launch</span>
                                        </Link>
                                    </Button>
                                    <CustomUserButton />
                                </div>
                            </div>
                        </SignedIn>

                    </Suspense>
                </nav>
            </div>
        </header>
    );
}