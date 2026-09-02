import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface BackHomeProps {
    href?: string;
    label?: string;
}

export default function BackHome({
    href = "/",
    label = "back home",
}: BackHomeProps) {
    return (
        <Link
            href={href}
            className="group inline-flex items-center gap-3 transition-transform active:scale-[0.98]">
            {/* icon container */}
            <div
                className="
          p-2
          rounded-xl
          border-2
          border-black
          bg-[#ffffff]
          shadow-[3px_3px_0px_0px_#000]
          transition-all
          group-hover:translate-x-0.5
          group-hover:translate-y-0.5
          group-hover:shadow-none
        ">
                <ChevronLeft className="size-4 text-black" />
            </div>

            <span className="font-black text-black/60 transition-colors group-hover:text-black">
                {label}
            </span>
        </Link>
    );
}
