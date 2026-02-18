"use client";

import Link from "next/link";

type DemoFooterProps = {
  businessName: string;
  demoType: string;
  /** Contact link param (e.g. "demo-depannage") for /#contact?from= */
  contactFrom?: string;
};

export function DemoFooter({ businessName, demoType, contactFrom = "demo-garage" }: DemoFooterProps) {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)] px-4 py-10 text-xs text-[var(--text-2)] sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-[var(--text)]">
            {businessName}
          </p>
          <p className="mt-1 text-[11px] text-[var(--text-2)]">
            Ceci est une démonstration réalisée par VIGI AGENCY. Aucun {demoType.toLowerCase()} réel, aucune
            donnée de contact réelle.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-[11px]">
          <Link
            href={`/#contact?from=${contactFrom}`}
            className="text-[var(--accent)] transition hover:text-[var(--accent-2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
          >
            Obtenir un site comme celui-ci
          </Link>
          <p className="text-[var(--text-2)]">
            VIGI AGENCY · Sites pour garages & urgences
          </p>
        </div>
      </div>
    </footer>
  );
}
