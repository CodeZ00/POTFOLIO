"use client";

import { Brain, Code2, GitMerge, Zap } from "lucide-react";

const areas = [
  {
    icon: Brain,
    color: "#3b82f6",
    title: "머신러닝 & 딥러닝",
    target: "데이터 사이언티스트 지망생 / AI 실무자",
    description:
      "데이터 전처리부터 모델 학습, 파인튜닝, 실무 배포까지 전 과정을 다룹니다. PyTorch 기반의 실전 프로젝트 중심 커리큘럼으로 운영합니다.",
    topics: [
      "PyTorch 딥러닝 기초 ~ 심화",
      "Transformer & Attention 메커니즘",
      "LLM 파인튜닝 (LoRA, QLoRA)",
      "RAG 파이프라인 구축 실습",
      "Hugging Face 생태계 활용",
    ],
  },
  {
    icon: Code2,
    color: "#6366f1",
    title: "자료구조 & 알고리즘",
    target: "취업 준비생 / 코딩 테스트 대비",
    description:
      "코딩 테스트 합격을 위한 핵심 알고리즘과 자료구조를 직관적으로 설명합니다. 단순 암기가 아닌 원리 이해 중심의 커리큘럼입니다.",
    topics: [
      "시간/공간 복잡도 분석",
      "그래프, 트리, DP 핵심 패턴",
      "코딩 테스트 빈출 유형 총정리",
      "C++/Python 언어별 풀이 전략",
      "기업별 기출 문제 분석",
    ],
  },
  {
    icon: GitMerge,
    color: "#06b6d4",
    title: "풀스택 개발",
    target: "웹 개발 입문자 / 백엔드·프론트엔드 분리 경험자",
    description:
      "API 설계, 데이터베이스 모델링, 모던 프론트엔드까지 한 번에 익히는 실전 풀스택 커리큘럼. 실제 서비스 수준의 프로젝트를 함께 만듭니다.",
    topics: [
      "FastAPI 기반 RESTful API 설계",
      "PostgreSQL & Redis 데이터베이스",
      "Next.js + TypeScript 프론트엔드",
      "Docker 기반 배포 파이프라인",
      "인증·인가 및 보안 기초",
    ],
  },
  {
    icon: Zap,
    color: "#f59e0b",
    title: "바이브 코딩 (Vibe Coding)",
    target: "개발자 / 스타트업 창업자 / 1인 개발자",
    description:
      "최신 LLM 툴링(Cursor, Claude Code, Copilot)을 결합한 초고속 프로토타이핑 방법론. AI와 협업하여 개발 속도를 10배 높이는 실전 워크플로우를 전수합니다.",
    topics: [
      "Cursor & Claude Code 고급 활용",
      "AI 기반 코드 리뷰 & 리팩터링",
      "프롬프트 엔지니어링 실전",
      "주 1개 앱 출시 워크플로우",
      "AI 네이티브 개발 팀 문화",
    ],
  },
];

export default function TeachingAreas() {
  return (
    <section style={{ padding: "4rem 1.5rem", background: "var(--surface)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
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
            Teaching Areas
          </p>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            전문{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #3b82f6, #6366f1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              강의 분야
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {areas.map((area) => (
            <div
              key={area.title}
              style={{
                borderRadius: "16px",
                background: "var(--card)",
                border: "1px solid var(--card-border)",
                padding: "1.75rem",
                transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = `0 12px 40px ${area.color}20`;
                el.style.borderColor = `${area.color}40`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
                el.style.borderColor = "var(--card-border)";
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: `${area.color}15`,
                  border: `1px solid ${area.color}30`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.25rem",
                }}
              >
                <area.icon size={24} color={area.color} />
              </div>

              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  marginBottom: "0.375rem",
                  letterSpacing: "-0.01em",
                }}
              >
                {area.title}
              </h3>
              <p
                style={{
                  fontSize: "0.75rem",
                  color: area.color,
                  fontWeight: 500,
                  marginBottom: "0.875rem",
                  padding: "0.2rem 0.625rem",
                  background: `${area.color}10`,
                  borderRadius: "6px",
                  display: "inline-block",
                  border: `1px solid ${area.color}25`,
                }}
              >
                {area.target}
              </p>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--muted)",
                  lineHeight: 1.7,
                  marginBottom: "1.25rem",
                }}
              >
                {area.description}
              </p>

              {/* Topics */}
              <ul style={{ listStyle: "none" }}>
                {area.topics.map((topic) => (
                  <li
                    key={topic}
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--foreground)",
                      padding: "0.3rem 0",
                      borderBottom: "1px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span style={{ color: area.color, fontWeight: 700, fontSize: "0.9rem" }}>
                      ·
                    </span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
