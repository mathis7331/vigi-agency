import type { MetadataRoute } from "next";
import { CITIES, METIERS } from "@/lib/local-landing-data";

const BASE_URL = "https://www.vigi-agency.be";

const STATIC_PAGES = [
  "/",
  "/expertise-garage",
  "/creation-site",
  "/creation-site-garage-mons",
  "/creation-site-depannage-charleroi",
  "/creation-site-carrosserie-hainaut",
  "/demo-garage",
  "/demo-depannage",
  "/demo-carrosserie",
  "/demo-detailing",
] as const;

function makeEntry(
  path: string,
  lastModified: Date,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
): MetadataRoute.Sitemap[number] {
  const normalizedPath = path === "/" ? "" : path;

  return {
    url: `${BASE_URL}${normalizedPath}`,
    lastModified,
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries = STATIC_PAGES.map((path) =>
    makeEntry(path, lastModified, path === "/" ? 1 : 0.9, "weekly")
  );

  const dynamicLocalEntries = METIERS.flatMap((metier) =>
    CITIES.map((city) =>
      makeEntry(`/creation-site/${metier.slug}/${city.slug}`, lastModified, 0.8, "weekly")
    )
  );

  return [...staticEntries, ...dynamicLocalEntries];
}
