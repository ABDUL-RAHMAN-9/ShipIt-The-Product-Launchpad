"use server";

import { auth } from "@clerk/nextjs/server";

type FormState = {
    success: boolean;
    errors?: Record<string, string[]>;
    message: string;
};

export const addProductAction = async (
    prevState: FormState,
    formData: FormData,
) => {
    console.log(formData);

    // auth
    try {
        const { userId } = await auth();

        if (!userId) {
            return {
                success: false,
                message: "You must be logged in to submit a product.",
                error: undefined,
            };
        }
    } catch (error) {
        console.error("Authentication error:", error);
        return {
            success: false,
            message:
                "An error occurred during authentication. Please try again.",
            error: undefined,
        };
    }
};
