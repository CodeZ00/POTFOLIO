import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // 모든 크롤러: 전체 허용, API/내부 경로 차단
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/"],
      },
      {
        // Googlebot: 이미지 크롤링 허용
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        // Bingbot: 동일하게 허용
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://potfolio-ace-761a.vercel.app/sitemap.xml",
    host: "https://potfolio-ace-761a.vercel.app",
  };
}
