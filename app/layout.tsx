import type { Metadata } from "next";
import { Inter, Noto_Sans_KR, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-kr",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://woowoo.dev"),
  title: {
    default: "우우(WooWoo) - 딥러닝·LLM Agent 개발자 & 테크 강사",
    template: "%s | 우우(WooWoo)",
  },
  description:
    "실무형 딥러닝·LLM Agent 엔지니어이자 프리랜서 테크 강사 우우의 공식 포트폴리오. AI 개발, 풀스택 웹, 바이브 코딩 강의 문의 환영합니다.",
  keywords: [
    "LLM Agent",
    "딥러닝 강의",
    "바이브 코딩",
    "AI 개발자",
    "테크 강사",
    "우우",
    "WooWoo",
    "LangChain",
    "RAG",
    "풀스택 개발",
  ],
  authors: [{ name: "우우 (WooWoo)", url: "https://woowoo.dev" }],
  creator: "우우 (WooWoo)",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://woowoo.dev",
    title: "우우(WooWoo) - 딥러닝·LLM Agent 개발자 & 테크 강사",
    description:
      "실무형 딥러닝·LLM Agent 엔지니어이자 프리랜서 테크 강사 우우의 공식 포트폴리오.",
    siteName: "WooWoo.dev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "우우(WooWoo) 포트폴리오",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "우우(WooWoo) - 딥러닝·LLM Agent 개발자 & 테크 강사",
    description:
      "실무형 딥러닝·LLM Agent 엔지니어이자 프리랜서 테크 강사 우우의 공식 포트폴리오.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "우우 (WooWoo)",
              url: "https://woowoo.dev",
              jobTitle: "딥러닝·LLM Agent 개발자 & 테크 강사",
              description:
                "실무형 딥러닝·LLM Agent 엔지니어이자 프리랜서 테크 강사",
              sameAs: [
                "https://github.com/woowoo-dev",
                "https://linkedin.com/in/woowoo-dev",
              ],
              knowsAbout: [
                "딥러닝",
                "LLM Agent",
                "LangChain",
                "RAG",
                "풀스택 개발",
                "바이브 코딩",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${notoSansKR.variable} ${geistMono.variable}`}
        style={{ fontFamily: "var(--font-inter), var(--font-noto-kr), sans-serif" }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Navbar />
            <main style={{ flex: 1 }}>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
