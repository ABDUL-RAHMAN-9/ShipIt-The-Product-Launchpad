"use server";

import { z } from "zod";
import {
    EXPLORE_PAGE_SIZE,
    getApprovedProductsPage,
} from "@/lib/products/product-select";

const ExploreQuerySchema = z.object({
    cursor: z.string().max(500).nullable().optional(),

    search: z.string().max(100).default(""),

    sortBy: z.enum(["trending", "latest"]),
});

export async function getExploreProductsAction(input: unknown) {
    const result = ExploreQuerySchema.safeParse(input);

    if (!result.success) {
        return {
            success: false as const,
            message: "Invalid explorer request.",
            products: [],
            hasMore: false,
            nextCursor: null,
        };
    }

    try {
        const data = await getApprovedProductsPage({
            limit: EXPLORE_PAGE_SIZE,
            cursor: result.data.cursor ?? null,
            search: result.data.search,
            sortBy: result.data.sortBy,
        });

        return {
            success: true as const,
            products: data.products,
            hasMore: data.hasMore,
            nextCursor: data.nextCursor,
        };
    } catch (error) {
        console.error("Explorer query failed:", error);

        return {
            success: false as const,
            message: "Failed to load products.",
            products: [],
            hasMore: false,
            nextCursor: null,
        };
    }
}
