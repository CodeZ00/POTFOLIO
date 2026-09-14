"use client";

import { useState } from "react";

type Tab = "all" | "ai" | "backend" | "frontend" | "cs";

const tabs: { id: Tab; label: string }[] = [
  { id: "all", label: "All" },
  { id: "ai", label: "Deep Learning & LLM" },
  { id: "backend", label: "Backend & Infra" },
  { id: "frontend", label: "Frontend" },
  { id: "cs", label: "CS & Tools" },
];

type SkillLevel = "Expert" | "Advanced" | "Proficient";

interface Skill {
  name: string;
  level: SkillLevel;
  desc: string;
  emoji: string;
}

interface StackGroup {
  id: Tab;
  title: string;
  subtitle: string;
  color: string;
  overview: string;
  skills: Skill[];
}

const stacks: StackGroup[] = [
  {
    id: "ai",
    title: "AI & Deep Learning",
    subtitle: "Core Focus",
    color: "#3b82f6",
    overview:
      "프롬프트 엔지니어링부터 RAG 구축, 다중 도구 연계 자율형 Agent 설계까지 LLM 풀스택 개발 역량을 보유하고 있습니다.",
    skills: [
      { name: "Python", level: "Expert", desc: "주력 언어. 데이터 처리 및 ML 파이프라인", emoji: "🐍" },
      { name: "PyTorch", level: "Expert", desc: "모델 학습, 파인튜닝, 커스텀 레이어 구현", emoji: "🔥" },
      { name: "LangChain / LangGraph", level: "Expert", desc: "Agent 오케스트레이션, Multi-Agent 시스템", emoji: "🔗" },
      { name: "LlamaIndex", level: "Advanced", desc: "RAG 파이프라인, 문서 인덱싱 최적화", emoji: "🦙" },
      { name: "Hugging Face", level: "Advanced", desc: "Transformers, PEFT, LoRA 파인튜닝", emoji: "🤗" },
      { name: "Vector DB", level: "Advanced", desc: "Chroma, Pinecone, Weaviate 운용", emoji: "📦" },
      { name: "OpenAI API", level: "Expert", desc: "GPT-4, Function Calling, Assistants API", emoji: "✨" },
      { name: "Prompt Engineering", level: "Expert", desc: "Chain-of-Thought, Few-shot, RAG 프롬프팅", emoji: "💬" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Infra",
    subtitle: "Production Grade",
    color: "#06b6d4",
    overview:
      "고성능 비동기 API 서빙, 데이터베이스 설계 및 배포 파이프라인을 구축합니다. FastAPI와 Docker를 활용한 프로덕션 수준 시스템 운용 경험 보유.",
    skills: [
      { name: "FastAPI", level: "Expert", desc: "비동기 REST API, WebSocket, 미들웨어 설계", emoji: "⚡" },
      { name: "Node.js", level: "Advanced", desc: "Express, Hono 기반 서버 개발", emoji: "🟩" },
      { name: "PostgreSQL", level: "Advanced", desc: "스키마 설계, 쿼리 최적화, 인덱싱", emoji: "🐘" },
      { name: "Redis", level: "Advanced", desc: "캐싱, 세션 관리, Pub/Sub", emoji: "🔴" },
      { name: "Docker", level: "Advanced", desc: "멀티 스테이지 빌드, Compose 오케스트레이션", emoji: "🐳" },
      { name: "SQLAlchemy / Prisma", level: "Proficient", desc: "ORM 기반 데이터베이스 레이어 설계", emoji: "🗄️" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    subtitle: "SEO & Modern UX",
    color: "#6366f1",
    overview:
      "SEO 친화적인 반응형 웹 아키텍처와 상태 관리를 구현합니다. Next.js App Router 기반 SSG/SSR 최적화에 능숙합니다.",
    skills: [
      { name: "Next.js", level: "Expert", desc: "App Router, SSG/SSR, 정적 최적화", emoji: "▲" },
      { name: "React", level: "Expert", desc: "Hook, Context, 상태 관리 패턴", emoji: "⚛️" },
      { name: "TypeScript", level: "Advanced", desc: "타입 시스템 설계, 제네릭 활용", emoji: "📘" },
      { name: "Tailwind CSS", level: "Expert", desc: "유틸리티 퍼스트 스타일링, 반응형 디자인", emoji: "🎨" },
      { name: "Framer Motion", level: "Proficient", desc: "페이지 트랜지션, 마이크로 애니메이션", emoji: "🎭" },
    ],
  },
  {
    id: "cs",
    title: "CS & Vibe Coding",
    subtitle: "Foundation & Workflow",
    color: "#f59e0b",
    overview:
      "탄탄한 CS 기초 위에 AI 네이티브 개발 워크플로우를 결합합니다. 알고리즘 설계 능력과 최신 AI 툴링 활용 능력을 동시에 보유.",
    skills: [
      { name: "C / C++", level: "Advanced", desc: "알고리즘, 포인터, 메모리 관리", emoji: "⚙️" },
      { name: "Python Algorithms", level: "Expert", desc: "코딩 테스트, 그래프, DP, 분할 정복", emoji: "🧮" },
      { name: "Cursor IDE", level: "Expert", desc: "AI 기반 코딩, Composer 멀티파일 편집", emoji: "🖱️" },
      { name: "Claude Code", level: "Expert", desc: "터미널 기반 AI 개발 자동화", emoji: "🤖" },
      { name: "GitHub Copilot", level: "Advanced", desc: "인라인 완성, Chat, 리뷰 자동화", emoji: "👾" },
      { name: "Git / GitHub", level: "Expert", desc: "브랜치 전략, PR 리뷰, CI/CD", emoji: "📂" },
    ],
  },
];

const levelColors: Record<SkillLevel, { bg: string; text: string; border: string }> = {
  Expert:    { bg: "rgba(59,130,246,0.12)",  text: "#3b82f6", border: "rgba(59,130,246,0.3)" },
  Advanced:  { bg: "rgba(99,102,241,0.12)",  text: "#6366f1", border: "rgba(99,102,241,0.3)" },
  Proficient:{ bg: "rgba(100,116,139,0.12)", text: "#64748b", border: "rgba(100,116,139,0.3)" },
};

export default function TechStackTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("all");

  const filtered = activeTab === "all" ? stacks : stacks.filter((s) => s.id === activeTab);

  return (
    <div>
      {/* Tab Bar */}
      <div
        style={{
          display: "flex",
          gap: "0.375rem",
          flexWrap: "wrap",
          padding: "0.375rem",
          background: "var(--surface)",
          borderRadius: "12px",
          border: "1px solid var(--border)",
          marginBottom: "2.5rem",
          width: "fit-content",
          maxWidth: "100%",
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              border: "none",
              background: activeTab === tab.id ? "var(--accent)" : "transparent",
              color: activeTab === tab.id ? "white" : "var(--muted)",
              fontWeight: activeTab === tab.id ? 600 : 400,
              fontSize: "0.85rem",
              cursor: "pointer",
              transition: "all 0.2s ease",
              whiteSpace: "nowrap",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Stack Groups */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {filtered.map((group) => (
          <div
            key={group.id}
            style={{
              borderRadius: "16px",
              border: "1px solid var(--card-border)",
              background: "var(--card)",
              overflow: "hidden",
            }}
          >
            {/* Group Header */}
            <div
              style={{
                padding: "1.5rem 1.75rem",
                borderBottom: "1px solid var(--border)",
                background: `${group.color}08`,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: group.color }}>
                  {group.title}
                </h2>
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    color: group.color,
                    padding: "0.2rem 0.625rem",
                    background: `${group.color}15`,
                    borderRadius: "6px",
                    border: `1px solid ${group.color}30`,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  {group.subtitle}
                </span>
              </div>
              <p style={{ fontSize: "0.875rem", color: "var(--muted)", lineHeight: 1.65 }}>
                {group.overview}
              </p>
            </div>

            {/* Skills Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                gap: "1px",
                background: "var(--border)",
              }}
            >
              {group.skills.map((skill) => {
                const lc = levelColors[skill.level];
                return (
                  <div
                    key={skill.name}
                    style={{
                      padding: "1.125rem 1.25rem",
                      background: "var(--card)",
                      transition: "background 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = `${group.color}08`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "var(--card)";
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "0.375rem",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <span style={{ fontSize: "1.1rem" }}>{skill.emoji}</span>
                        <span style={{ fontWeight: 600, fontSize: "0.95rem" }}>{skill.name}</span>
                      </div>
                      <span
                        style={{
                          fontSize: "0.65rem",
                          fontWeight: 600,
                          color: lc.text,
                          background: lc.bg,
                          border: `1px solid ${lc.border}`,
                          padding: "0.15rem 0.5rem",
                          borderRadius: "4px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {skill.level}
                      </span>
                    </div>
                    <p style={{ fontSize: "0.78rem", color: "var(--muted)", lineHeight: 1.5 }}>
                      {skill.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
