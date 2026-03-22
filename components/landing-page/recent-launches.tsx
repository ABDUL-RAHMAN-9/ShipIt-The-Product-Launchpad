import SectionHeader from "@/components/common/section-header";
import { Activity } from "lucide-react"; // Changed from CalendarDays to Activity
import ProductCard from "@/components/products/product-card";
import EmptyState from "@/components/common/empty-state";
import { getRecentProducts } from "@/lib/products/product-select";


export default async function RecentLaunches() {
    const recentProducts = await getRecentProducts();

    return (
        <section className="py-24 bg-background">
            <div className="wrapper">
                {/* Updated Header for Atlash Branding */}
                <SectionHeader
                    title="Recent Integrations" // Professional Title
                    icon={Activity} // Matches the "System Monitoring" vibe
                    description="Real-time audit of newly initialized infrastructure. Monitor early-stage reliability logs and preliminary performance data for the latest system nodes."
                    href="/explore"
                />

                {/* Simplified Ternary: Grid OR Enterprise Empty State */}
                {recentProducts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {recentProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <EmptyState
                        message="Integration Queue: Optimal" // Professional Message
                        description="No new deployment logs recorded in the last 7 days. Systems are currently stable with 100% architectural uptime across existing nodes."
                        icon={Activity}
                    />
                )}
            </div>
        </section>
    );
}