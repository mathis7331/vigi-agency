"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();

    useEffect(() => {
        // If a route doesn't exist, we immediately send them back to the root page.
        router.replace("/");
    }, [router]);

    return (
        <div className="flex min-h-screen items-center justify-center bg-[var(--bg)]">
            <div className="text-center">
                <div className="mx-auto h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-[var(--accent)]"></div>
                <p className="mt-4 text-sm text-[var(--text-2)]">Redirection...</p>
            </div>
        </div>
    );
}
