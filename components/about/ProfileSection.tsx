"use client";

import { Terminal, Globe, Mail, MapPin, Briefcase } from "lucide-react";

export default function ProfileSection() {
  return (
    <section style={{ padding: "5rem 1.5rem 3rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: "3rem",
            alignItems: "start",
          }}
          className="profile-grid"
        >
          {/* Avatar */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
            <div
              style={{
                width: "160px",
                height: "160px",
                borderRadius: "24px",
                background: "linear-gradient(135deg, #1e3a5f, #1e1b4b)",
                border: "2px solid rgba(59,130,246,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "5rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <span>🧑‍💻</span>
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "40%",
                  background: "linear-gradient(to top, rgba(59,130,246,0.2), transparent)",
                }}
              />
            </div>

            {/* Social Links */}
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {[
                { icon: Terminal, href: "https://github.com/woowoo-dev", label: "GitHub" },
                { icon: Globe, href: "https://linkedin.com/in/woowoo-dev", label: "LinkedIn" },
                { icon: Mail, href: "mailto:hello@woowoo.dev", label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    border: "1px solid var(--border)",
                    background: "var(--surface)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--muted)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "var(--accent)";
                    el.style.borderColor = "var(--accent)";
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "var(--muted)";
                    el.style.borderColor = "var(--border)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <h1
                style={{
                  fontSize: "clamp(2rem, 4vw, 2.75rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                }}
              >
                우우 (WooWoo)
              </h1>
              <span
                style={{
                  padding: "0.25rem 0.75rem",
                  borderRadius: "100px",
                  background: "rgba(34,197,94,0.1)",
                  border: "1px solid rgba(34,197,94,0.3)",
                  color: "#22c55e",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                }}
              >
                ● 활동 중
              </span>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "1.5rem" }}>
              <span
                style={{ display: "flex", alignItems: "center", gap: "0.375rem", color: "var(--muted)", fontSize: "0.9rem" }}
              >
                <Briefcase size={14} />
                딥러닝·LLM Agent 엔지니어
              </span>
              <span
                style={{ display: "flex", alignItems: "center", gap: "0.375rem", color: "var(--muted)", fontSize: "0.9rem" }}
              >
                <MapPin size={14} />
                대한민국
              </span>
            </div>

            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--foreground)",
                lineHeight: 1.8,
                marginBottom: "1.75rem",
                maxWidth: "600px",
              }}
            >
              현업에서 딥러닝과 LLM Agent 시스템을 개발하며, 그 경험을 강의를 통해 나누는{" "}
              <strong>실무형 테크 강사</strong>입니다.
              <br />
              <br />
              복잡한 AI 기술을 직관적으로 설명하는 것을 좋아합니다. RAG 파이프라인부터 바이브 코딩까지,
              최신 기술 트렌드를 누구나 이해할 수 있는 언어로 전달합니다.
            </p>

            {/* Philosophy */}
            <div
              style={{
                padding: "1.25rem 1.5rem",
                borderRadius: "12px",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderLeft: "3px solid var(--accent)",
              }}
            >
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--foreground)",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                }}
              >
                "좋은 강의는 정보를 전달하는 것이 아니라,{" "}
                <strong style={{ color: "var(--accent)", fontStyle: "normal" }}>
                  직관을 심어주는 것
                </strong>
                입니다. 원리를 이해하면 어떤 문제도 스스로 풀 수 있습니다."
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .profile-grid {
            grid-template-columns: 1fr !important;
            justify-items: center;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
