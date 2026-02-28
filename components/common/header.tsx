import { Compass, Home, Rocket, Navigation } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    SignedIn,
    SignedOut,
    SignInButton,
    SignUpButton,
    UserButton
} from "@clerk/nextjs";

const Logo = () => {
    return (
        <Link href="/" className="flex items-center gap-2 group transition-transform hover:scale-105">
            <div className="size-9 rounded-xl bg-primary flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] border-2 border-foreground">
                <Rocket className="size-5 text-primary-foreground" /> {/* Changed to Rocket */}
            </div>
            <span className="text-2xl font-black tracking-tighter text-foreground">
                ShipIt
            </span>
        </Link>
    );
}

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b-2 border-foreground/5 bg-background/80 backdrop-blur-md">
            <div className="wrapper h-16 flex items-center justify-between">
                <Logo />

                <nav className="flex items-center gap-6">
                    {/* Main Nav - Hidden on mobile, shown on md+ */}
                    <div className="hidden md:flex items-center gap-1">
                        <Link
                            href="/"
                            className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
                        >
                            <Home className="size-4" />
                            <span>Home</span>
                        </Link>
                        <Link
                            href="/explore"
                            className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
                        >
                            <Compass className="size-4" />
                            <span>Explore</span>
                        </Link>
                    </div>

                    <div className="flex items-center gap-3 border-l border-foreground/10 pl-6">
                        <SignedOut>
                            {/* 
                               FIX: Adding mode="modal" prevents the full page reload 
                               and opens the Clerk UI in a nice overlay.
                            */}
                            <SignInButton mode="modal">
                                <Button variant="ghost" size="sm" className="font-bold border-transparent shadow-none hover:bg-primary/5">
                                    Sign In
                                </Button>
                            </SignInButton>

                            <SignUpButton mode="modal">
                                <Button size="sm" className="font-bold">
                                    Join Community
                                </Button>
                            </SignUpButton>
                        </SignedOut>

                        <SignedIn>
                            <div className="flex items-center gap-4">

                                <Button asChild size="sm" className="hidden sm:flex font-bold">
                                    <Link href="/submit">
                                        <Navigation className="size-4 rotate-45" /> {/* Changed to Navigation/Paper Plane */}
                                        Launch Project
                                    </Link>
                                </Button>

                                <div className="h-10 w-10 rounded-xl border-2 border-foreground bg-background flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all cursor-pointer overflow-hidden">
                                    <UserButton afterSignOutUrl="/" />
                                </div>
                            </div>
                        </SignedIn>
                    </div>
                </nav>
            </div>
        </header>
    );
}