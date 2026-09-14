"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: 1200, suffix: "+", label: "누적 강의 시간", unit: "시간" },
  { value: 98, suffix: "%", label: "수강생 만족도", unit: "" },
  { value: 30, suffix: "+", label: "진행 프로젝트", unit: "개" },
  { value: 5, suffix: "+", label: "기업 강의 출강", unit: "곳" },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section style={{ padding: "5rem 1.5rem" }}>
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
            Social Proof
          </p>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            숫자로 보는{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #3b82f6, #6366f1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              실적
            </span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
            marginBottom: "4rem",
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              style={{
                textAlign: "center",
                padding: "2rem 1.5rem",
                borderRadius: "16px",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 12px 40px rgba(59,130,246,0.12)";
                el.style.borderColor = "rgba(59,130,246,0.3)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
                el.style.borderColor = "var(--border)";
              }}
            >
              <div
                style={{
                  fontSize: "clamp(2.25rem, 5vw, 3rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  background: "linear-gradient(135deg, #3b82f6, #6366f1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  marginBottom: "0.5rem",
                  lineHeight: 1,
                }}
              >
                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              </div>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--muted)",
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div
          style={{
            borderRadius: "20px",
            background: "linear-gradient(135deg, #1e3a5f 0%, #1e1b4b 100%)",
            border: "1px solid rgba(99,102,241,0.3)",
            padding: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "1.35rem",
                fontWeight: 700,
                color: "white",
                marginBottom: "0.5rem",
              }}
            >
              강의 또는 협업을 고민 중이신가요?
            </h3>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>
              기업 출강, 온라인 멘토링, 외주 개발 등 다양한 형태로 함께합니다.
            </p>
          </div>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.75rem 1.5rem",
              borderRadius: "10px",
              background: "white",
              color: "#1e1b4b",
              fontWeight: 700,
              fontSize: "0.9rem",
              transition: "all 0.2s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 8px 24px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            지금 바로 문의하기
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
