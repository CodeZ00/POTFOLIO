import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import DualTrack from "@/components/home/DualTrack";
import StatsSection from "@/components/home/StatsSection";

export const metadata: Metadata = {
  title: "우우(WooWoo) - 딥러닝·LLM Agent 개발자 & 테크 강사",
  description:
    "실무형 딥러닝·LLM Agent 엔지니어이자 프리랜서 테크 강사 우우의 공식 포트폴리오. LangChain, RAG, 풀스택 개발, 바이브 코딩 강의 문의 환영합니다.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DualTrack />
      <StatsSection />
    </>
  );
}
