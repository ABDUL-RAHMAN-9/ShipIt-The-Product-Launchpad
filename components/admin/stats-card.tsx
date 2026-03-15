import { cn } from "@/lib/utils";

export default function StatsCard({
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
        { label: "Total registry", count: all, color: "border-foreground/10" },
        { label: "Awaiting Review", count: pending, color: "border-primary/40 bg-primary/5" },
        { label: "Approved Ships", count: approved, color: "border-green-600/20" },
        { label: "Rejected", count: rejected, color: "border-destructive/20" },
    ];
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ label, count, color }) => (
                <div className={cn("p-6 rounded-3xl border-2 shadow-sm flex flex-col justify-between h-32 transition-all hover:scale-[1.02]", color)} key={label}>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
                    <p className="text-4xl font-black tracking-tighter text-foreground">{count}</p>
                </div>
            ))}
        </div>
    );
}