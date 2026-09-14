import type { Metadata } from "next";
import TechStackTabs from "@/components/tech-stack/TechStackTabs";

export const metadata: Metadata = {
  title: "Tech Stack - 기술 스택",
  description:
    "딥러닝·LLM Agent 엔지니어 우우의 기술 스택. Python, PyTorch, LangChain, LangGraph, FastAPI, Next.js, Docker 등 도메인별 상세 기술 역량을 확인하세요.",
};

export default function TechStackPage() {
  return (
    <section style={{ padding: "4rem 1.5rem 6rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p
            style={{
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "var(--accent)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "0.75rem",
            }}
          >
            Skills & Stack
          </p>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              marginBottom: "1rem",
            }}
          >
            기술{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #3b82f6, #6366f1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              스택
            </span>
          </h1>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "1rem",
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            나열식이 아닌, 도메인별 맥락과 숙련도를 체계적으로 정리했습니다.
          </p>
        </div>

        <TechStackTabs />
      </div>
    </section>
  );
}
