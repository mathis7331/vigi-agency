"use client";

import { MapPin, Clock, Phone as PhoneIcon } from "lucide-react";

type TrustInfoCardProps = {
  address: string;
  hours: ReadonlyArray<{ readonly day: string; readonly hours: string }>;
  serviceArea: string;
  phoneDisplay: string;
  phoneE164: string;
  /** Optional line below zone (e.g. "+ de 300 interventions locales") */
  extraLine?: string;
  /** Optional small badge (e.g. "Assurance acceptée") */
  badge?: string;
};

export function TrustInfoCard({
  address,
  hours,
  serviceArea,
  phoneDisplay,
  phoneE164,
  extraLine,
  badge,
}: TrustInfoCardProps) {
  return (
    <div className="hidden space-y-4 lg:block">
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.7)] md:p-6">
        <div className="space-y-4 text-sm">
          <div>
            <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--text-2)]">
              <MapPin className="h-3.5 w-3.5 text-[var(--accent)]" />
              Adresse
            </p>
            <p className="text-[var(--text)]">{address}</p>
          </div>
          <div className="border-t border-[var(--border)] pt-4">
            <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--text-2)]">
              <Clock className="h-3.5 w-3.5 text-[var(--accent)]" />
              Horaires
            </p>
            <div className="space-y-1">
              {hours.map((h) => (
                <div key={h.day} className="flex justify-between text-[var(--text)]">
                  <span>{h.day}</span>
                  <span className="font-medium">{h.hours}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-[var(--border)] pt-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--text-2)]">
              Zone
            </p>
            <p className="text-xs leading-relaxed text-[var(--text)]">{serviceArea}</p>
            {extraLine && (
              <p className="mt-2 text-xs font-medium text-[var(--accent)]">{extraLine}</p>
            )}
          </div>
          <div className="border-t border-[var(--border)] pt-4">
            <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--text-2)]">
              <PhoneIcon className="h-3.5 w-3.5 text-[var(--accent)]" />
              Téléphone
            </p>
            <a
              href={`tel:${phoneE164}`}
              className="inline-block text-[var(--accent)] transition hover:text-[var(--accent-2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
            >
              {phoneDisplay}
            </a>
          </div>
          {badge && (
            <div className="mt-4 border-t border-[var(--border)] pt-4">
              <span className="inline-flex rounded-full border border-[var(--accent)]/50 bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] px-3 py-1 text-xs font-medium text-[var(--accent)]">
                {badge}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
