"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Brain, Code, Zap } from "lucide-react";

const badges = [
  { label: "LLM Agent", icon: Brain, color: "#3b82f6" },
  { label: "Deep Learning", icon: Sparkles, color: "#6366f1" },
  { label: "Full-Stack", icon: Code, color: "#06b6d4" },
  { label: "Vibe Coding 강사", icon: Zap, color: "#f59e0b" },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = ((e.clientX - left) / width - 0.5) * 20;
      const y = ((e.clientY - top) / height - 0.5) * 20;
      const glow = el.querySelector<HTMLElement>(".hero-glow");
      if (glow) {
        glow.style.transform = `translate(${x}px, ${y}px)`;
      }
    };
    el.addEventListener("mousemove", handleMouseMove);
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      style={{
        position: "relative",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "4rem 1.5rem",
      }}
    >
      {/* Background Glow */}
      <div
        className="hero-glow"
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, 0)",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.12) 0%, rgba(99,102,241,0.06) 50%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          transition: "transform 0.3s ease",
          zIndex: 0,
        }}
      />

      {/* Grid Pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "800px",
          width: "100%",
          textAlign: "center",
        }}
      >
        {/* Status Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.375rem 1rem",
            borderRadius: "100px",
            border: "1px solid rgba(59,130,246,0.3)",
            background: "rgba(59,130,246,0.08)",
            marginBottom: "2rem",
            fontSize: "0.8rem",
            color: "var(--accent)",
            fontWeight: 500,
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#22c55e",
              display: "inline-block",
              animation: "pulse-glow 2s infinite",
            }}
          />
          강의 및 협업 문의 수락 중
        </div>

        {/* Main Heading */}
        <h1
          style={{
            fontSize: "clamp(2.25rem, 6vw, 4rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: "1.5rem",
          }}
        >
          실무형{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            딥러닝 & LLM Agent
          </span>
          <br />
          엔지니어,{" "}
          <span style={{ color: "var(--muted)" }}>직관을 전달하는</span>
          <br />
          테크 강사 <span style={{ color: "var(--accent)" }}>우우</span>입니다.
        </h1>

        {/* Sub Description */}
        <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
            color: "var(--muted)",
            maxWidth: "560px",
            margin: "0 auto 2.5rem",
            lineHeight: 1.7,
          }}
        >
          현업에서 쌓은 실전 경험을 바탕으로, AI 에이전트 개발부터
          풀스택 웹·바이브 코딩까지 폭넓게 강의합니다.
        </p>

        {/* Badges */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.625rem",
            justifyContent: "center",
            marginBottom: "2.5rem",
          }}
        >
          {badges.map((badge) => (
            <span
              key={badge.label}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                padding: "0.375rem 0.875rem",
                borderRadius: "8px",
                border: `1px solid ${badge.color}30`,
                background: `${badge.color}10`,
                color: badge.color,
                fontSize: "0.85rem",
                fontWeight: 500,
              }}
            >
              <badge.icon size={14} />
              {badge.label}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.75rem 1.75rem",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #3b82f6, #6366f1)",
              color: "white",
              fontWeight: 600,
              fontSize: "0.95rem",
              transition: "all 0.2s ease",
              boxShadow: "0 4px 20px rgba(59,130,246,0.35)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 8px 30px rgba(59,130,246,0.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 4px 20px rgba(59,130,246,0.35)";
            }}
          >
            강의/협업 문의하기
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/tech-stack"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.75rem 1.75rem",
              borderRadius: "10px",
              background: "var(--surface)",
              color: "var(--foreground)",
              fontWeight: 600,
              fontSize: "0.95rem",
              border: "1px solid var(--border)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
            }}
          >
            기술 스택 살펴보기
          </Link>
        </div>
      </div>
    </section>
  );
}
