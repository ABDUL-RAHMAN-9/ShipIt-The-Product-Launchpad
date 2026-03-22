import type { Metadata } from 'next';
import AdminProductCard from "@/components/admin/admin-product-card";
import AdminStatsCard from "@/components/admin/stats-card"; // Renamed for clarity
import EmptyState from "@/components/common/empty-state";
import SectionHeader from "@/components/common/section-header";
import { getAllProducts } from "@/lib/products/product-select";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { History, ShieldAlert, ShieldCheck } from "lucide-react"; // Swapped for Oversight icons
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "System Oversight Hub | Atlash Hub",
};

export default async function AdminPage() {
    const { userId } = await auth();

    if (!userId) {
        redirect("/sign-in");
    }

    const client = await clerkClient();
    const user = await client.users.getUser(userId!);

    const metadata = user.publicMetadata;
    const isAdmin = metadata?.isAdmin ?? false;

    if (!isAdmin) {
        redirect("/");
    }

    const allProducts = await getAllProducts();

    const pendingProducts = allProducts.filter(
        (product) => product.status === "pending"
    );

    return (
        <main className="py-16 lg:py-24 bg-background">
            <div className="wrapper">
                {/* 1. PROFESSIONAL COMMAND HEADER */}
                <div className="mb-16">
                    <SectionHeader
                        title="System Oversight Hub"
                        icon={ShieldCheck}
                        description="Infrastructure Audit & Deployment Authorization Control Plane. Maintain 100% architectural compliance across the global registry."
                        hideButton={true}
                        tagline="Administrative Control"
                    />
                </div>

                {/* 2. INFRASTRUCTURE TELEMETRY (STATS) */}
                <div className="p-2 bg-secondary/5 rounded-[2.5rem] border-2 border-foreground/5 mb-20">
                    <AdminStatsCard
                        approved={allProducts.filter(p => p.status === "approved").length}
                        pending={pendingProducts.length}
                        rejected={allProducts.filter(p => p.status === "rejected").length}
                        all={allProducts.length}
                    />
                </div>

                {/* 3. PENDING AUDIT LOGS */}
                <section className="my-16 space-y-10">
                    <div className="flex items-center gap-3">
                        <div className="size-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                            <ShieldAlert className="size-5 text-amber-500" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-black uppercase tracking-tight text-foreground">
                                Pending Infrastructure Audit
                            </h2>
                            <p className="text-[10px] font-bold text-muted-foreground/50 uppercase tracking-[0.2em]">
                                {pendingProducts.length} Deployment nodes awaiting authorization
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {pendingProducts.length === 0 ? (
                            <EmptyState
                                message="Infrastructure Pipeline: Optimal"
                                description="All pending deployment logs have been authorized. System registry is currently synchronized."
                                icon={ShieldCheck}
                            />
                        ) : (
                            pendingProducts.map((product) => (
                                <AdminProductCard key={product.id} product={product} />
                            ))
                        )}
                    </div>
                </section>

                {/* 4. HISTORICAL AUDIT LOGS */}
                <section className="my-16 pt-16 border-t-2 border-foreground/5 space-y-10">
                    <div className="flex items-center gap-3">
                        <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                            <History className="size-5 text-primary" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-black uppercase tracking-tight text-foreground">
                                Global Audit Logs
                            </h2>
                            <p className="text-[10px] font-bold text-muted-foreground/50 uppercase tracking-[0.2em]">
                                Full history of processed infrastructure nodes
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4 opacity-80 hover:opacity-100 transition-opacity">
                        {allProducts.map((product) => (
                            <AdminProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}