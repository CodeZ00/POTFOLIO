import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://potfolio-ace-761a.vercel.app";

  const pages: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    { path: "/",           priority: 1.0, changeFrequency: "weekly"  },
    { path: "/about",      priority: 0.9, changeFrequency: "monthly" },
    { path: "/tech-stack", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact",    priority: 0.7, changeFrequency: "yearly"  },
  ];

  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date("2026-09-14"),
    changeFrequency,
    priority,
  }));
}
