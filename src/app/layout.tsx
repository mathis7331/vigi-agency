import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { CanonicalTag } from "@/components/ui/CanonicalTag";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vigi-agency.be'),
  title: {
    default: 'VIGI AGENCY — Sites web qui génèrent des appels pour garages & artisans auto',
    template: '%s — VIGI AGENCY',
  },
  description:
    'Sites web premium pour garages, dépannage, carrosserie et detailing. Appel en 1 clic, WhatsApp intégré et SEO local. Déploiement rapide en Belgique.',
  keywords: [
    'site web garage',
    'site garage Mons',
    'site dépannage Charleroi',
    'site carrosserie',
    'création site garage',
    'site urgence',
    'agence web garage',
  ],
  authors: [{ name: 'VIGI AGENCY' }],
  creator: 'VIGI AGENCY',
  publisher: 'VIGI AGENCY',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_BE',
    url: 'https://www.vigi-agency.be',
    siteName: 'VIGI AGENCY',
    title: 'VIGI AGENCY — Sites web qui génèrent des appels pour garages & artisans auto',
    description:
      'Sites web premium pour garages, dépannage, carrosserie et detailing. Appel en 1 clic, WhatsApp intégré et SEO local. Déploiement rapide en Belgique.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VIGI AGENCY — Sites web pour garages & urgences',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VIGI AGENCY — Sites web qui génèrent des appels pour garages & artisans auto',
    description:
      'Sites web premium pour garages, dépannage, carrosserie et detailing. Appel en 1 clic, WhatsApp intégré et SEO local. Déploiement rapide en Belgique.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover' as const,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={inter.variable}
    >
      <body className="font-sans antialiased">
        <CanonicalTag />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
