"use client";

import { authClient } from "@/lib/auth-client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function SignInPage() {
    const handleGoogle = async () => {
        await authClient.signIn.social({ provider: "google" });
    };

    const handleGithub = async () => {
        await authClient.signIn.social({ provider: "github" });
    };

    return (
        <main className="flex min-h-screen w-full flex-col bg-[#0D0D0D] lg:flex-row">
            {/* LEFT PANEL: BRANDING */}
            <section className="relative hidden w-full flex-col overflow-hidden bg-[#B19CFF] p-12 lg:flex lg:w-[55%]">
                {/* Subtle Depth Background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />

                <div className="relative z-10 flex flex-1 flex-col justify-center">
                    <h2 className="max-w-xl text-7xl font-black leading-[0.9] tracking-tighter text-black xl:text-8xl">
                        LAUNCH. <br />
                        DISCOVER. <br />
                        BUILD.
                    </h2>
                    <p className="mt-8 max-w-sm text-lg font-medium leading-relaxed text-black/70">
                        A curated community for builders to ship products and
                        find their next big idea.
                    </p>

                    {/* Stats */}
                    <div className="mt-12 flex gap-10">
                        <div className="flex flex-col">
                            <span className="text-4xl font-black text-black">
                                500+
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                                Products Shipped
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-4xl font-black text-black">
                                12k+
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                                Active Builders
                            </span>
                        </div>
                    </div>
                </div>

                {/* FOOTER  */}
                <div className="relative z-10 pt-10">
                    <Link
                        href="/"
                        className="group flex items-center gap-2 text-sm font-bold text-black/50 transition-colors hover:text-black">
                        <ArrowLeft
                            size={16}
                            className="transition-transform group-hover:-translate-x-1"
                        />
                        Back to home
                    </Link>
                </div>

                {/* Decorative Shape */}
                <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-black/5 blur-3xl" />
            </section>

            {/* RIGHT PANEL: AUTH */}
            <section className="flex flex-1 flex-col items-center justify-center px-6 py-12 lg:px-20">
                <div className="w-full max-w-90">
                    <div className="mb-10 text-center lg:text-left">
                        <h1 className="text-3xl font-bold tracking-tight text-white">
                            Sign in to Atlash
                        </h1>
                        <p className="mt-2 text-neutral-500">
                            Choose your preferred method to continue.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <button
                            onClick={handleGoogle}
                            className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl border border-neutral-800 bg-[#141414] px-4 py-3.5 text-sm font-semibold text-white transition-all hover:bg-neutral-800 active:scale-[0.98]">
                            <svg
                                className="h-5 w-5"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    fill="#4285F4"
                                />
                                <path
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    fill="#34A853"
                                />
                                <path
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.08-.21-.19-.42-.19-.63z"
                                    fill="#FBBC05"
                                />
                                <path
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    fill="#EA4335"
                                />
                            </svg>
                            Continue with Google
                        </button>

                        <button
                            onClick={handleGithub}
                            className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl border border-neutral-800 bg-[#141414] px-4 py-3.5 text-sm font-semibold text-white transition-all hover:bg-neutral-800 active:scale-[0.98]">
                            <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.09 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.14c-3.2.7-3.88-1.37-3.88-1.37-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.95.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.67 0-1.25.45-2.27 1.19-3.08-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.18a11.1 11.1 0 015.82 0c2.22-1.5 3.2-1.18 3.2-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.83 1.19 3.08 0 4.4-2.69 5.37-5.25 5.66.41.36.78 1.06.78 2.14v3.17c0 .31.21.66.79.55A11.52 11.52 0 0023.5 12C23.5 5.66 18.35.5 12 .5z" />
                            </svg>
                            Continue with GitHub
                        </button>
                    </div>

                    <footer className="mt-12 text-center">
                        <p className="text-xs text-neutral-600">
                            By continuing, you agree to our{" "}
                            <Link
                                href="/terms"
                                className="text-neutral-400 hover:underline hover:text-white">
                                Terms
                            </Link>{" "}
                            &{" "}
                            <Link
                                href="/privacy"
                                className="text-neutral-400 hover:underline hover:text-white">
                                Privacy
                            </Link>
                        </p>
                    </footer>
                </div>
            </section>
        </main>
    );
}
