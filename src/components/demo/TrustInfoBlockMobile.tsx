"use client";

import { MapPin, Clock, Phone as PhoneIcon } from "lucide-react";

type TrustInfoBlockMobileProps = {
  address: string;
  hours: ReadonlyArray<{ readonly day: string; readonly hours: string }>;
  serviceArea: string;
  phoneDisplay: string;
  phoneE164: string;
};

export function TrustInfoBlockMobile({
  address,
  hours,
  serviceArea,
  phoneDisplay,
  phoneE164,
}: TrustInfoBlockMobileProps) {
  return (
    <section
      className="border-t border-[var(--border)] bg-[var(--surface)] px-4 py-8 overflow-x-hidden lg:hidden"
      aria-label="Coordonnées et horaires"
    >
      <div className="mx-auto max-w-6xl w-full min-w-0">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-2)] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.75)]">
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
            </div>
            <div className="border-t border-[var(--border)] pt-4">
              <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--text-2)]">
                <PhoneIcon className="h-3.5 w-3.5 text-[var(--accent)]" />
                Téléphone
              </p>
              <a
                href={`tel:${phoneE164}`}
                className="inline-block text-base font-semibold text-[var(--accent)] transition hover:text-[var(--accent-2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
              >
                {phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
