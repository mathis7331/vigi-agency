"use client";

import { LocalLandingPreview } from "@/components/LocalLandingPreview";

interface Props {
  metierId: string;
  zoneId: string;
  villeId: string;
  backHref: string;
  showPreviewLabel: boolean;
  compact: boolean;
}

export function LocalLandingPreviewClient({
  metierId,
  zoneId,
  villeId,
  backHref,
  showPreviewLabel,
  compact,
}: Props) {
  return (
    <LocalLandingPreview
      metierId={metierId}
      zoneId={zoneId}
      villeId={villeId}
      backHref={backHref}
      showPreviewLabel={showPreviewLabel}
      compact={compact}
    />
  );
}
