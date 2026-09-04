import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BackHomeProps {
    href?: string;
    label?: string;
}

export default function BackHome({
    href = "/",
    label = "Back to home",
}: BackHomeProps) {
    return (
        <Link
            href={href}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-opacity hover:opacity-70">
            <ArrowLeft
                className="size-4 transition-transform duration-150 group-hover:-translate-x-0.5"
                aria-hidden="true"
            />
            {label}
        </Link>
    );
}
