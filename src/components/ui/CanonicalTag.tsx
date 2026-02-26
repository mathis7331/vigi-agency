"use client";

import { usePathname } from "next/navigation";

export function CanonicalTag() {
    const pathname = usePathname();

    // Ensure root has a trailing slash for canonicals
    const canonicalUrl = pathname === "/"
        ? "https://www.vigi-agency.be/"
        : `https://www.vigi-agency.be${pathname}`;

    return <link rel="canonical" href={canonicalUrl} />;
}
