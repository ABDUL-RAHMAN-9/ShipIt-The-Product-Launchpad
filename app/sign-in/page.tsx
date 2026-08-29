"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { ArrowLeft, Eye, EyeOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import logoIcon from "@/app/icon.svg";
import Image from "next/image";

type AuthProvider = "email" | "google" | "github" | null;

export default function SignInPage() {
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loadingProvider, setLoadingProvider] = useState<AuthProvider>(null);
    const [error, setError] = useState("");

    const isLoading = loadingProvider !== null || isPending;

    useEffect(() => {
        if (session) {
            router.push("/dashboard");
        }
    }, [session, router]);

    if (isPending) {
        return (
            <div className="flex min-h-screen w-full items-center justify-center bg-[#F3F0FA] dark:bg-[#09080D]">
                <Loader2 className="size-8 animate-spin text-[#6E42F4] dark:text-[#B19CFF]" />
            </div>
        );
    }

    const handleCredentialsSignIn = async (
        event: React.FormEvent<HTMLFormElement>,
    ) => {
        event.preventDefault();

        if (isLoading) return;

        setError("");
        setLoadingProvider("email");

        try {
            const { error: signInError } = await authClient.signIn.email({
                email,
                password,
                callbackURL: "/dashboard",
            });

            if (signInError) {
                setError(signInError.message || "Invalid email or password.");
            }
        } catch {
            setError("Unable to sign in right now. Please try again.");
        } finally {
            setLoadingProvider(null);
        }
    };

    const handleSocialSignIn = async (provider: "google" | "github") => {
        if (isLoading) return;

        setError("");
        setLoadingProvider(provider);

        try {
            const { error: socialError } = await authClient.signIn.social({
                provider,
                callbackURL: "/dashboard",
            });

            if (socialError) {
                setError(
                    socialError.message ||
                        `Unable to continue with ${provider}.`,
                );
                setLoadingProvider(null);
            }
        } catch {
            setError(
                `Unable to continue with ${
                    provider === "google" ? "Google" : "GitHub"
                }. Please try again.`,
            );
            setLoadingProvider(null);
        }
    };

    return (
        <main className="flex min-h-screen w-full items-center justify-center bg-[#F3F0FA] p-4 font-sans dark:bg-[#09080D]">
            <div className="flex min-h-150 w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-[#111015] md:flex-row">
                <section className="relative hidden select-none overflow-hidden bg-[#EADEFF] p-8 dark:bg-[#1E192B] md:flex md:w-[42%] md:flex-col md:justify-between md:p-10">
                    <div className="relative z-10 space-y-8">
                        <Link href="/" className="flex items-center gap-2.5">
                            <Image
                                src={logoIcon}
                                alt="ATLASH logo"
                                width={24}
                                height={24}
                                className="size-6 shrink-0 dark:invert"
                            />
                            <span className="text-xl font-bold tracking-tight text-zinc-950 dark:text-white">
                                ATLASH
                            </span>
                        </Link>

                        <div className="space-y-3">
                            <h2 className="text-3xl font-bold leading-tight tracking-tight text-zinc-950 dark:text-white">
                                You built it. <br />
                                Now let&apos;s{" "}
                                <span className="text-[#6E42F4] dark:text-[#B19CFF]">
                                    launch it.
                                </span>
                            </h2>
                        </div>
                    </div>

                    <div className="relative z-10 my-8 flex items-center justify-center">
                        <svg
                            className="h-44 w-44 text-[#6E42F4]/80 md:h-56 md:w-52 dark:text-[#B19CFF]/80"
                            viewBox="0 0 200 200"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true">
                            <circle
                                cx="100"
                                cy="100"
                                r="70"
                                fill="currentColor"
                                fillOpacity="0.1"
                            />

                            <rect
                                x="50"
                                y="110"
                                width="100"
                                height="12"
                                rx="4"
                                fill="currentColor"
                                fillOpacity="0.3"
                            />

                            <rect
                                x="65"
                                y="70"
                                width="70"
                                height="48"
                                rx="6"
                                fill="currentColor"
                                fillOpacity="0.2"
                                className="stroke-2 stroke-[#6E42F4] dark:stroke-[#B19CFF]"
                            />

                            <circle cx="80" cy="80" r="4" fill="currentColor" />

                            <circle cx="95" cy="80" r="4" fill="currentColor" />

                            <rect
                                x="75"
                                y="94"
                                width="50"
                                height="4"
                                rx="2"
                                fill="currentColor"
                                fillOpacity="0.5"
                            />

                            <path
                                d="M120 40 L150 45 L135 60 Z"
                                fill="currentColor"
                                fillOpacity="0.4"
                            />

                            <path
                                d="M40 80 L60 75 L50 95 Z"
                                fill="currentColor"
                                fillOpacity="0.2"
                            />
                        </svg>
                    </div>

                    <div className="relative z-10">
                        <p className="text-[11px] font-semibold uppercase tracking-widest leading-none text-zinc-600 dark:text-zinc-400">
                            Build with purpose · Ship with confidence
                        </p>
                    </div>
                </section>

                <section className="flex flex-1 flex-col justify-between bg-white p-8 dark:bg-[#111015] md:p-12">
                    <div className="w-full">
                        <div className="mb-6">
                            <h1 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
                                Welcome back
                            </h1>

                            <p className="mt-1 text-xs font-medium text-muted-foreground">
                                Sign in to continue to Atlash Hub.
                            </p>
                        </div>

                        {error && (
                            <div
                                role="alert"
                                aria-live="polite"
                                className="mb-4 rounded-lg border border-destructive/20 bg-destructive/10 p-3 text-xs font-semibold text-destructive">
                                {error}
                            </div>
                        )}

                        <form
                            onSubmit={handleCredentialsSignIn}
                            className="space-y-4">
                            <div className="space-y-1.5">
                                <Label htmlFor="email">Email</Label>

                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    inputMode="email"
                                    autoComplete="email"
                                    placeholder="name@example.com"
                                    required
                                    disabled={isLoading}
                                    value={email}
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                    className="h-10 rounded-lg border-zinc-200 bg-transparent dark:border-zinc-800"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="password">Password</Label>
                                </div>

                                <div className="relative">
                                    <Input
                                        id="password"
                                        name="password"
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        autoComplete="current-password"
                                        placeholder="••••••••"
                                        required
                                        disabled={isLoading}
                                        value={password}
                                        onChange={(event) =>
                                            setPassword(event.target.value)
                                        }
                                        className="h-10 rounded-lg border-zinc-200 bg-transparent pr-10 dark:border-zinc-800"
                                    />

                                    <button
                                        type="button"
                                        aria-label={
                                            showPassword
                                                ? "Hide password"
                                                : "Show password"
                                        }
                                        aria-pressed={showPassword}
                                        disabled={isLoading}
                                        onClick={() =>
                                            setShowPassword(
                                                (current) => !current,
                                            )
                                        }
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 transition-colors hover:text-zinc-600 disabled:pointer-events-none disabled:opacity-50 dark:hover:text-zinc-200">
                                        {showPassword ? (
                                            <EyeOff
                                                size={16}
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            <Eye size={16} aria-hidden="true" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="h-10 w-full rounded-lg bg-[#6E42F4] font-semibold text-white transition-colors hover:bg-[#5C36D0]">
                                {loadingProvider === "email" && (
                                    <Loader2 className="mr-2 size-4 animate-spin" />
                                )}
                                Sign In
                            </Button>
                        </form>

                        <div className="relative my-6 text-center">
                            <span className="absolute inset-x-0 top-1/2 h-px bg-zinc-100 dark:bg-zinc-900" />

                            <span className="relative bg-white px-3 text-[10px] font-bold uppercase tracking-wider text-muted-foreground dark:bg-[#111015]">
                                Or
                            </span>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <Button
                                type="button"
                                variant="outline"
                                disabled={isLoading}
                                onClick={() => handleSocialSignIn("google")}
                                className="h-10 rounded-lg border-zinc-200 font-medium transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900">
                                {loadingProvider === "google" ? (
                                    <Loader2 className="mr-2 size-4 animate-spin" />
                                ) : (
                                    <svg
                                        className="mr-2 h-4 w-4"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true">
                                        <path
                                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                            fill="#4285F4"
                                        />
                                        <path
                                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                            fill="#34A853"
                                        />
                                        <path
                                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                            fill="#FBBC05"
                                        />
                                        <path
                                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                            fill="#EA4335"
                                        />
                                    </svg>
                                )}
                                Google
                            </Button>

                            <Button
                                type="button"
                                variant="outline"
                                disabled={isLoading}
                                onClick={() => handleSocialSignIn("github")}
                                className="h-10 rounded-lg border-zinc-200 font-medium transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900">
                                {loadingProvider === "github" ? (
                                    <Loader2 className="mr-2 size-4 animate-spin" />
                                ) : (
                                    <svg
                                        className="mr-2 h-4 w-4"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true">
                                        <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.09 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.14c-3.2.7-3.88-1.37-3.88-1.37-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.95.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.67 0-1.25.45-2.27 1.19-3.08.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.18a11.1 11.1 0 015.82 0c2.22-1.5 3.2-1.18 3.2-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.83 1.19 3.08 0 4.4-2.69 5.37-5.25 5.66.41.36.78 1.06.78 2.14v3.17c0 .31.21.66.79.55A11.52 11.52 0 0023.5 12C23.5 5.66 18.35.5 12 .5z" />
                                    </svg>
                                )}
                                GitHub
                            </Button>
                        </div>
                    </div>

                    <div className="mt-8 flex items-center justify-between border-t border-zinc-100 pt-6 dark:border-zinc-900">
                        <Link
                            href="/"
                            className="group flex items-center gap-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:text-zinc-800 dark:hover:text-zinc-200">
                            <ArrowLeft
                                size={14}
                                className="transition-transform group-hover:-translate-x-0.5"
                                aria-hidden="true"
                            />
                            Back to home
                        </Link>

                        <p className="text-xs font-medium text-muted-foreground">
                            New here?{" "}
                            <Link
                                href="/sign-up"
                                className="font-semibold text-[#6E42F4] hover:underline dark:text-[#B19CFF]">
                                Create an account
                            </Link>
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}
