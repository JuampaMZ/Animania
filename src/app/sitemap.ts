
import type { MetadataRoute } from "next";
import { siteUrl } from "../lib/site";
import { THEMES } from "../lib/themes";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = [{ url: `${siteUrl}/`, lastModified: now, changeFrequency: "monthly", priority: 1 }];
  const themePages = THEMES.map(t => ({
    url: `${siteUrl}/tematicas/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6
  }));
  return [...base, ...themePages];
}
