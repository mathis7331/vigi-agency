"use client";

import Link from "next/link";

type DemoHeaderProps = {
  businessName: string;
  businessInitials: string;
  demoType: string;
  /** Optional subtitle under business name (e.g. "Dépannage & remorquage — 24h/7") */
  subtitle?: string;
  /** Desktop: primary CTA (e.g. Appeler maintenant) */
  primaryCta?: { label: string; href: string };
  /** Desktop: secondary CTA (e.g. WhatsApp) */
  secondaryCta?: { label: string; href: string };
};

export function DemoHeader({
  businessName,
  businessInitials,
  demoType,
  subtitle,
  primaryCta,
  secondaryCta,
}: DemoHeaderProps) {
  const showDesktopCtas = !!primaryCta;

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--bg)_92%,transparent)] py-4 backdrop-blur-md md:py-4 overflow-x-hidden">
      <div className="mx-auto flex h-auto min-h-14 max-w-6xl w-full min-w-0 flex-wrap items-center justify-between gap-3 px-4 md:px-8 sm:min-h-16">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] text-xs font-bold text-black shadow-sm">
            {businessInitials}
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-tight text-[var(--text)]">
              {businessName}
            </p>
            <p className="text-[10px] text-[var(--text-2)]">
              {subtitle ?? `Démo ${demoType} · VIGI AGENCY`}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {showDesktopCtas && (
            <>
              <a
                href={primaryCta.href}
                className="hidden rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-black shadow-[0_18px_50px_rgba(245,158,11,0.25)] transition hover:translate-y-[-1px] hover:shadow-[0_22px_60px_rgba(245,158,11,0.33)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] md:inline-flex md:items-center md:gap-2"
              >
                {primaryCta.label}
              </a>
              {secondaryCta && (
                <a
                  href={secondaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-4 py-2 text-sm font-medium text-[var(--text)] transition hover:border-[var(--accent)] hover:bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] md:inline-flex md:items-center md:gap-2"
                >
                  {secondaryCta.label}
                </a>
              )}
            </>
          )}
          <Link
            href="/"
            className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-3 py-1.5 text-xs font-medium text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
          >
            Retour au site VIGI AGENCY
          </Link>
        </div>
      </div>
    </header>
  );
}
