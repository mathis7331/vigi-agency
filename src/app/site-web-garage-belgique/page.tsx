import type { Metadata } from "next";
import { PillarPageTemplate } from "@/components/seo/PillarPageTemplate";
import { getPillarBySlug } from "@/lib/pillar-pages-data";

const SLUG = "site-web-garage-belgique";
const pillar = getPillarBySlug(SLUG)!;

export const metadata: Metadata = {
    title: pillar.metaTitle,
    description: pillar.metaDescription,
    openGraph: {
        title: pillar.ogTitle,
        description: pillar.metaDescription,
        url: `https://www.vigi-agency.be/${SLUG}`,
        type: "website",
        locale: "fr_BE",
        siteName: "VIGI AGENCY",
    },
    alternates: { canonical: `https://www.vigi-agency.be/${SLUG}` },
};

export default function Page() {
    return <PillarPageTemplate slug={SLUG} />;
}
