import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Activity,   // Changed from Box
    Zap,        // Changed from Navigation
    ShieldCheck, // Changed from Users
    Server,      // Changed from Hammer
    Compass
} from "lucide-react";
import Link from "next/link";
import StatsCard from "./stats-card";

const DiscoveryBadge = () => {
    return (
        <Badge
            variant="default"
            className="mb-8 py-1.5 border-2"
        >
            <span className="relative flex h-2 w-2 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>

            <span className="pl-1 text-primary">ENTERPRISE PERFORMANCE OPTIMIZED</span>
        </Badge>
    )
}

const statsData = [
    {
        icon: Server, // High-tech replacement for Hammer
        value: "2,480",
        label: "Verified Assets" // Professional label
    },
    {
        icon: ShieldCheck, // Trust icon replacement for Users
        value: "1,240",
        label: "Security Audits", // Industry term
        hasBorder: true,
    },
    {
        icon: Activity, // Live data icon replacement for Box
        value: "15k+",
        label: "Active Deployments" // Professional label
    },
]

export default function HeroSection() {
    return (
        <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
            <div className="wrapper relative z-10">
                <div className="flex flex-col items-center justify-center text-center">

                    <DiscoveryBadge />

                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-8 max-w-4xl text-foreground leading-[0.95]">
                        The High-Velocity <br />
                        <span className="text-primary drop-shadow-sm">
                            Deployment Hub
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed font-medium">
                        Experience the high-velocity deployment hub designed to eliminate infrastructure silos. Atlash integrates fragmented assets into a single dashboard, reducing operational friction by 70% and reclaiming 30% of lost engineering time.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 mb-20">
                        <Button asChild size="lg">
                            <Link href="/submit">
                                {/* Changed Navigation to Zap to match the "High Velocity" brand */}
                                <Zap className="mr-2 size-5 fill-current" />
                                Initialize Deployment
                            </Link>
                        </Button>

                        <Button asChild variant="outline" size="lg">
                            <Link href="/explore">
                                Analyze Infrastructure
                                <Compass className="ml-2 size-5" />
                            </Link>
                        </Button>
                    </div>

                    {/* These Stats now look like a real System Dashboard */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 max-w-3xl w-full">
                        {statsData.map((stat) => (
                            <StatsCard key={stat.label} {...stat} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}