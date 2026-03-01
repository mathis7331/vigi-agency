import type { PillarFaq } from "@/lib/pillar-pages-data";

interface FaqSchemaProps {
    faq: PillarFaq[];
}

export function FaqSchema({ faq }: FaqSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
            },
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
