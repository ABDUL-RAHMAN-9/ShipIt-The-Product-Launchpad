"use server";

import { db } from "@/db";
import { products } from "@/db/schema";
import { FormState } from "@/types";
import { auth, currentUser } from "@clerk/nextjs/server";
import { eq, sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { productSchema } from "./product-validations";

export const addProductAction = async (
    prevState: FormState,
    formData: FormData,
): Promise<FormState> => {
    try {
        const { userId, orgId } = await auth();

        if (!userId || !orgId) {
            return {
                success: false,
                message: "You must be signed in and part of an organization.",
            };
        }

        const user = await currentUser();
        const userEmail =
            user?.primaryEmailAddress?.emailAddress || "anonymous";

        const rawFormData = Object.fromEntries(formData.entries());
        const validatedData = productSchema.safeParse(rawFormData);

        if (!validatedData.success) {
            return {
                success: false,
                errors: validatedData.error.flatten().fieldErrors,
                message: "Invalid data",
            };
        }

        const { name, slug, tagline, description, websiteUrl, tags } =
            validatedData.data;

        await db.insert(products).values({
            name,
            slug,
            tagline,
            description,
            websiteUrl,
            tags: tags,
            status: "pending",
            submittedBy: userEmail,
            organizationId: orgId,
            userId,
        });

        revalidatePath("/");

        return {
            success: true,
            message: "Product submitted successfully!",
        };
    } catch (error: unknown) {
        console.error(error);
        return {
            success: false,
            message: "Failed to submit product",
        };
    }
};

export const upvoteProductAction = async (productId: number) => {
    try {
        const { userId } = await auth();

        if (!userId) {
            return { success: false, message: "User not signed in" };
        }

        await db
            .update(products)
            .set({
                // atomic increment
                voteCount: sql`vote_count + 1`,
            })
            .where(eq(products.id, productId));

        revalidatePath("/");

        return { success: true, message: "Upvoted!" };
    } catch (error: unknown) {
        console.error(error);
        return { success: false, message: "Failed to upvote" };
    }
};
