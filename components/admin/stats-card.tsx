import { cn } from "@/lib/utils";
import { Database, ShieldAlert, ShieldCheck, XCircle } from "lucide-react"; // Icons for that "System" look

export default function AdminStatsCard({
    all,
    approved,
    pending,
    rejected,
}: {
    all: number;
    approved: number;
    pending: number;
    rejected: number;
}) {
    const stats = [
        {
            label: "Global Inventory", // High-end term for "Total"
            count: all,
            color: "border-foreground/10 bg-secondary/5",
            icon: Database,
            textColor: "text-foreground"
        },
        {
            label: "Pending Audit", // High-end term for "Awaiting Review"
            count: pending,
            color: "border-amber-500/20 bg-amber-500/5",
            icon: ShieldAlert,
            textColor: "text-amber-500"
        },
        {
            label: "Authorized Nodes", // High-end term for "Approved"
            count: approved,
            color: "border-primary/20 bg-primary/5",
            icon: ShieldCheck,
            textColor: "text-primary"
        },
        {
            label: "De-listed Nodes", // High-end term for "Rejected"
            count: rejected,
            color: "border-destructive/20 bg-destructive/5",
            icon: XCircle,
            textColor: "text-destructive"
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ label, count, color, icon: Icon, textColor }) => (
                <div
                    key={label}
                    className={cn(
                        "p-6 rounded-[2rem] border-2 shadow-sm flex flex-col justify-between h-40 transition-all hover:translate-y-[-4px] hover:shadow-md group",
                        color
                    )}
                >
                    <div className="flex items-center justify-between w-full">
                        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground/60">
                            {label}
                        </p>
                        <Icon className={cn("size-5 opacity-40 group-hover:opacity-100 transition-opacity", textColor)} />
                    </div>

                    <div className="space-y-1">
                        <p className="text-5xl font-black tracking-tighter text-foreground leading-none">
                            {count}
                        </p>
                        <p className="text-[9px] font-bold text-muted-foreground/40 uppercase tracking-widest">
                            Live System Data
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}