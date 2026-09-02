import { InferSelectModel } from "drizzle-orm";
import { products } from "@/db/schema";

export type FormState = {
    timestamp: unknown;
    success: boolean;
    errors?: Record<string, string[]>;
    message: string;
};

export type ProductType = InferSelectModel<typeof products>;
