import AdminProductCard from "@/components/admin/admin-product-card";
import StatsCard from "@/components/admin/stats-card";
import EmptyState from "@/components/common/empty-state";
import SectionHeader from "@/components/common/section-header";
import { getAllProducts } from "@/lib/products/product-select";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { InboxIcon, ShieldIcon } from "lucide-react";
import { redirect } from "next/navigation";


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

    const approvedProducts = allProducts.filter(
        (product) => product.status === "approved"
    );
    const pendingProducts = allProducts.filter(
        (product) => product.status === "pending"
    );
    const rejectedProducts = allProducts.filter(
        (product) => product.status === "rejected"
    );

    return (
        <div className="py-16 lg:py-24 bg-background">
            <div className="wrapper">
                <div className="mb-16">
                    <SectionHeader
                        title="Control Center"
                        icon={ShieldIcon}
                        description="Administrative workspace for project moderation and registry management."
                        hideButton={true}
                    />
                </div>

                <div className="p-2 bg-secondary/5 rounded-[2rem] border-2 border-foreground/5 mb-20">
                    <StatsCard
                        approved={approvedProducts.length}
                        pending={pendingProducts.length}
                        rejected={rejectedProducts.length}
                        all={allProducts.length}
                    />
                </div>

                <section className="my-16 space-y-10">
                    <div className="flex items-center gap-3">
                        <div className="h-8 w-1.5 bg-amber-400 rounded-full" />
                        <h2 className="text-2xl font-black uppercase tracking-tight text-foreground">
                            Awaiting Review ({pendingProducts.length})
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {pendingProducts.length === 0 ? (
                            <EmptyState
                                message="The queue is clear. No pending ships."
                                icon={InboxIcon}
                            />
                        ) : (
                            pendingProducts.map((product) => (
                                <AdminProductCard key={product.id} product={product} />
                            ))
                        )}
                    </div>
                </section>

                <section className="my-16 pt-16 border-t-2 border-foreground/5 space-y-10">
                    <div className="flex items-center gap-3">
                        <div className="h-8 w-1.5 bg-primary/40 rounded-full" />
                        <h2 className="text-2xl font-black uppercase tracking-tight text-foreground">
                            Processed Registry
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {allProducts.map((product) => (
                            <AdminProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}