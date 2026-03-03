export function CardSkeleton() {
    return (
        <div className="h-[200px] w-full rounded-xl bg-secondary/10 animate-pulse border-2 border-foreground/5 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.02)]" />
    );
}

export function ProductGridSkeleton() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
        </div>
    );
}