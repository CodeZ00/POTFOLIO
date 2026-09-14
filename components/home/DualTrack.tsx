"use client";

import Link from "next/link";
import { ArrowRight, Server, GraduationCap, CheckCircle2 } from "lucide-react";

const tracks = [
  {
    id: "engineering",
    icon: Server,
    iconColor: "#3b82f6",
    label: "Track A",
    title: "Engineering",
    subtitle: "실무 AI 시스템 구축",
    description:
      "최신 딥러닝 프레임워크와 LLM 기반 자율형 에이전트를 설계·개발합니다. RAG 파이프라인 구축부터 FastAPI 기반 프로덕션 배포까지, 실전 AI 시스템 개발 역량을 보유하고 있습니다.",
    points: [
      "LLM Agent & Multi-Agent 시스템 설계",
      "RAG 파이프라인 및 Vector DB 최적화",
      "FastAPI + Docker 프로덕션 배포",
      "PyTorch 기반 모델 학습 및 파인튜닝",
    ],
    cta: { label: "기술 스택 보기", href: "/tech-stack" },
    gradient: "linear-gradient(135deg, rgba(59,130,246,0.08), rgba(99,102,241,0.04))",
    border: "rgba(59,130,246,0.2)",
  },
  {
    id: "education",
    icon: GraduationCap,
    iconColor: "#f59e0b",
    label: "Track B",
    title: "Education",
    subtitle: "맞춤형 테크 강의",
    description:
      "입문자부터 현업 개발자까지 아우르는 맞춤형 교육 트랙을 운영합니다. CS 기초, 풀스택 웹, AI 생산성 도구(바이브 코딩)까지 폭넓은 커리큘럼을 제공합니다.",
    points: [
      "머신러닝·딥러닝 입문부터 실무까지",
      "자료구조·알고리즘 코딩 테스트 대비",
      "풀스택 웹 개발 (Backend & Frontend)",
      "바이브 코딩 & AI 네이티브 개발법",
    ],
    cta: { label: "강의 문의하기", href: "/contact" },
    gradient: "linear-gradient(135deg, rgba(245,158,11,0.08), rgba(251,191,36,0.04))",
    border: "rgba(245,158,11,0.2)",
  },
];

export default function DualTrack() {
  return (
    <section
      style={{
        padding: "5rem 1.5rem",
        background: "var(--surface)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section Header */}
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
            Dual Identity
          </p>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}
          >
            엔지니어이면서,{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #3b82f6, #6366f1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              강사입니다
            </span>
          </h2>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "1rem",
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            현업 경험에서 나온 실전 지식을 강의로 전달합니다.
          </p>
        </div>

        {/* Track Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {tracks.map((track) => (
            <div
              key={track.id}
              style={{
                borderRadius: "16px",
                border: `1px solid ${track.border}`,
                background: track.gradient,
                padding: "2rem",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 12px 40px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Label + Icon */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1.25rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: track.iconColor,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    padding: "0.25rem 0.625rem",
                    background: `${track.iconColor}18`,
                    borderRadius: "6px",
                    border: `1px solid ${track.iconColor}30`,
                  }}
                >
                  {track.label}
                </span>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: `${track.iconColor}15`,
                    border: `1px solid ${track.iconColor}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <track.icon size={22} color={track.iconColor} />
                </div>
              </div>

              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  marginBottom: "0.25rem",
                }}
              >
                {track.title}
              </h3>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: track.iconColor,
                  fontWeight: 500,
                  marginBottom: "1rem",
                }}
              >
                {track.subtitle}
              </p>
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  marginBottom: "1.5rem",
                }}
              >
                {track.description}
              </p>

              {/* Check List */}
              <ul style={{ listStyle: "none", marginBottom: "1.75rem" }}>
                {track.points.map((point) => (
                  <li
                    key={point}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.625rem",
                      fontSize: "0.875rem",
                      color: "var(--foreground)",
                      marginBottom: "0.625rem",
                    }}
                  >
                    <CheckCircle2
                      size={16}
                      color={track.iconColor}
                      style={{ flexShrink: 0, marginTop: "2px" }}
                    />
                    {point}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={track.cta.href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: track.iconColor,
                  transition: "gap 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.gap = "0.625rem";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.gap = "0.375rem";
                }}
              >
                {track.cta.label}
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
