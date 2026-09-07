"use server";

import { db } from "@/db";
import { products, productVotes } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { getCurrentSession } from "@/lib/auth-session";
import { FormState } from "@/types";
import { eq, sql } from "drizzle-orm";
import { z } from "zod";

function sanitizeUrl(url: string): string {
    let sanitized = url.trim();

    if (!sanitized) return "";

    if (!/^https?:\/\//i.test(sanitized)) {
        sanitized = `https://${sanitized}`;
    }

    return sanitized;
}

const ProductSubmitSchema = z.object({
    name: z
        .string()
        .min(2, "Product name must be at least 2 characters.")
        .max(50, "Product name can be at most 50 characters."),

    websiteUrl: z
        .string()
        .transform((val) => sanitizeUrl(val))
        .pipe(z.string().url("Please enter a valid URL.")),

    tagline: z
        .string()
        .min(3, "Tagline must be at least 3 characters.")
        .max(80, "Tagline must be at most 80 characters."),

    tags: z.string().min(1, "Please provide at least one category tag."),

    description: z
        .string()
        .min(10, "Full story must be at least 10 characters.")
        .max(400, "Full story can be at most 400 characters."),
});

const ProductIdSchema = z.number().int().positive("Invalid product ID.");

function slugify(text: string): string {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]+/g, "")
        .replace(/\-\-+/g, "-");
}

async function generateUniqueSlug(name: string): Promise<string> {
    const baseSlug = slugify(name);

    let slug = baseSlug;
    let counter = 0;

    while (true) {
        const existing = await db
            .select()
            .from(products)
            .where(eq(products.slug, slug))
            .limit(1);

        if (existing.length === 0) {
            break;
        }

        const shortId = Math.random().toString(36).substring(2, 6);

        slug = `${baseSlug}-${shortId}`;

        counter++;

        if (counter > 5) {
            break;
        }
    }

    return slug;
}

export async function addProductAction(
    prevState: FormState,
    formData: FormData,
): Promise<FormState> {
    const session = await getCurrentSession();

    if (!session?.user) {
        return {
            success: false,
            message: "Unauthenticated. Please log in to submit a product.",
            errors: {
                auth: ["Unauthenticated"],
            },
            timestamp: Date.now(),
        };
    }

    const name = formData.get("name") as string;
    const websiteUrl = formData.get("websiteUrl") as string;
    const tagline = formData.get("tagline") as string;
    const tagsRaw = formData.get("tags") as string;
    const description = formData.get("description") as string;

    const result = ProductSubmitSchema.safeParse({
        name,
        websiteUrl,
        tagline,
        tags: tagsRaw,
        description,
    });

    if (!result.success) {
        return {
            success: false,
            message: "Please correct the validation errors in the form.",
            errors: result.error.flatten().fieldErrors,
            timestamp: Date.now(),
        };
    }

    try {
        const uniqueSlug = await generateUniqueSlug(result.data.name);

        const cleanTags = result.data.tags
            .split(",")
            .map((tag) => tag.trim().toLowerCase())
            .filter(Boolean)
            .slice(0, 6);

        await db.insert(products).values({
            name: result.data.name,
            slug: uniqueSlug,
            tagline: result.data.tagline,
            description: result.data.description,
            websiteUrl: result.data.websiteUrl,
            tags: cleanTags,
            userId: session.user.id,
            submittedBy: session.user.name || "Anonymous",
            status: "pending",
        });

        revalidatePath("/");
        revalidatePath("/explore");
        revalidatePath("/submit");

        return {
            success: true,
            message: "Product submitted successfully!",
            errors: undefined,
            timestamp: Date.now(),
        };
    } catch (err) {
        console.error("Database submission crash:", err);

        return {
            success: false,
            message: "An unexpected database error occurred. Please try again.",
            errors: undefined,
            timestamp: Date.now(),
        };
    }
}

export async function upvoteProductAction(
    productId: number,
): Promise<FormState> {
    const session = await getCurrentSession();

    if (!session?.user) {
        return {
            success: false,
            message: "You must be logged in to upvote a project.",
            errors: {
                auth: ["Unauthenticated"],
            },
            timestamp: Date.now(),
        };
    }

    const parsedProductId = ProductIdSchema.safeParse(productId);

    if (!parsedProductId.success) {
        return {
            success: false,
            message: "Invalid product.",
            errors: {
                productId: ["Invalid product ID."],
            },
            timestamp: Date.now(),
        };
    }

    try {
        const product = await db
            .select({
                id: products.id,
            })
            .from(products)
            .where(eq(products.id, parsedProductId.data))
            .limit(1);

        if (product.length === 0) {
            return {
                success: false,
                message: "Product not found.",
                errors: {
                    productId: ["Product not found."],
                },
                timestamp: Date.now(),
            };
        }

        const insertedVote = await db
            .insert(productVotes)
            .values({
                productId: parsedProductId.data,
                userId: session.user.id,
            })
            .onConflictDoNothing({
                target: [productVotes.productId, productVotes.userId],
            })
            .returning({
                id: productVotes.id,
            });

        if (insertedVote.length === 0) {
            return {
                success: false,
                message: "You have already upvoted this project.",
                errors: {
                    vote: ["Already voted"],
                },
                timestamp: Date.now(),
            };
        }

        await db
            .update(products)
            .set({
                voteCount: sql`${products.voteCount} + 1`,
            })
            .where(eq(products.id, parsedProductId.data));

        revalidatePath("/");
        revalidatePath("/explore");
        revalidatePath(`/products/${parsedProductId.data}`);

        return {
            success: true,
            message: "Upvote registered!",
            errors: undefined,
            timestamp: Date.now(),
        };
    } catch (err) {
        console.error("Upvote action crash:", err);

        return {
            success: false,
            message: "Unable to record your vote right now. Please try again.",
            errors: undefined,
            timestamp: Date.now(),
        };
    }
}
