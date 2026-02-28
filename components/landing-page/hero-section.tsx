import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Box,
    Compass,
    Hammer,
    Navigation,
    Users
} from "lucide-react";
import Link from "next/link";
import StatsCard from "./stats-card";

const DiscoveryBadge = () => {
    return (
        <Badge
            variant="default"
            className="mb-8 py-1.5 border-2"
        >
            {/* Keeping the pulse dot loop as it doesn't affect text visibility */}
            <span className="relative flex h-2 w-2 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>

            <span className="pl-1 text-primary">Community is shipping now</span>
        </Badge>
    )
}

const statsData = [
    {
        icon: Hammer,
        value: "2,480",
        label: "Handcrafted Tools"
    },
    {
        icon: Users,
        value: "1,240",
        label: "Kind Souls Building",
        hasBorder: true,
    },
    {
        icon: Box,
        value: "15k+",
        label: "Monthly Ships"
    },
]

export default function HeroSection() {
    return (
        <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
            <div className="wrapper relative z-10">
                <div className="flex flex-col items-center justify-center text-center">

                    <DiscoveryBadge />

                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-8 max-w-4xl text-foreground leading-[0.95]">
                        Where Great Ideas <br />
                        <span className="text-primary drop-shadow-sm">Find Their Home.</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed font-medium">
                        ShipIt is a cozy corner of the internet for creators to showcase their craft.
                        Whether it’s an AI tool, a SaaS, or a side project—share it with a community that values the art of building.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 mb-20">
                        <Button asChild size="lg">
                            <Link href="/submit">
                                <Navigation className="mr-2 size-5 rotate-45" />
                                Launch Your Project
                            </Link>
                        </Button>

                        <Button asChild variant="outline" size="lg">
                            <Link href="/explore">
                                Explore the Gallery
                                <Compass className="ml-2 size-5" />
                            </Link>
                        </Button>
                    </div>

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