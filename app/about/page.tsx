import type { Metadata } from "next";
import ProfileSection from "@/components/about/ProfileSection";
import TeachingAreas from "@/components/about/TeachingAreas";
import Timeline from "@/components/about/Timeline";

export const metadata: Metadata = {
  title: "About - 우우 소개 & 강의 분야",
  description:
    "딥러닝·LLM Agent 엔지니어 우우의 커리어 스토리, 교육 철학, 강의 분야(머신러닝, 자료구조, 풀스택, 바이브 코딩)를 소개합니다.",
};

export default function AboutPage() {
  return (
    <>
      <ProfileSection />
      <TeachingAreas />
      <Timeline />
    </>
  );
}
