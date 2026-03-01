import { db } from "@/db";
import { products } from "@/db/schema";
import { desc, eq, and, gte } from "drizzle-orm";

// 1. SPOTLIGHT: Sorted by most popular (Votes)
export async function getFeaturedProdcuts() {
    const productsData = await db
        .select()
        .from(products)
        .where(eq(products.status, "approved"))
        .orderBy(desc(products.voteCount))
        .limit(6); // only need the top 6

    return productsData;
}

// 2. LATEST: Sorted by newest (CreateAt)
export async function getRecentProducts() {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    return await db
        .select()
        .from(products)
        .where(
            and(
                eq(products.status, "approved"),
                gte(products.createAt, oneWeekAgo), // only items from the last 7 days
            ),
        )
        .orderBy(desc(products.createAt)) // sort by newest first
        .limit(3); // just show the 3 fresh one
}
