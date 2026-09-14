"use client";

import { useState } from "react";
import { Terminal, Globe, Mail, Copy, CheckCheck, MessageSquare, Building2, User, Code } from "lucide-react";

const directLinks = [
  {
    icon: Mail,
    label: "이메일",
    value: "hello@woowoo.dev",
    href: "mailto:hello@woowoo.dev",
    copyable: true,
    color: "#3b82f6",
  },
  {
    icon: Terminal,
    label: "GitHub",
    value: "github.com/woowoo-dev",
    href: "https://github.com/woowoo-dev",
    copyable: false,
    color: "#6366f1",
  },
  {
    icon: Globe,
    label: "LinkedIn",
    value: "linkedin.com/in/woowoo-dev",
    href: "https://linkedin.com/in/woowoo-dev",
    copyable: false,
    color: "#0ea5e9",
  },
];

const lectureTypes = [
  { icon: Building2, label: "기업 출강 특강", desc: "오프라인 사내 교육, 워크숍" },
  { icon: User,      label: "1:1 온라인 멘토링", desc: "Zoom/Meet 화상 세션" },
  { icon: MessageSquare, label: "AI 외주·컨설팅", desc: "LLM Agent PoC, 기술 자문" },
  { icon: Code,      label: "팀/그룹 스터디 코칭", desc: "팀 단위 코드 리뷰 & 세션" },
];

export default function ContactInfo() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (val: string) => {
    navigator.clipboard.writeText(val).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      {/* Response Time Banner */}
      <div
        style={{
          padding: "1rem 1.25rem",
          borderRadius: "12px",
          background: "rgba(59,130,246,0.08)",
          border: "1px solid rgba(59,130,246,0.2)",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        <span style={{ fontSize: "1.4rem" }}>⚡</span>
        <div>
          <p style={{ fontSize: "0.875rem", fontWeight: 600 }}>빠른 회신</p>
          <p style={{ fontSize: "0.78rem", color: "var(--muted)" }}>
            평균 24시간 이내 답변드립니다.
          </p>
        </div>
      </div>

      {/* Direct Contact */}
      <div
        style={{
          background: "var(--card)",
          border: "1px solid var(--card-border)",
          borderRadius: "16px",
          padding: "1.5rem",
        }}
      >
        <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "1rem" }}>
          다이렉트 연락처
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {directLinks.map((link) => (
            <div
              key={link.label}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0.75rem 1rem",
                borderRadius: "10px",
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <a
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  flex: 1,
                  minWidth: 0,
                }}
              >
                <div
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "8px",
                    background: `${link.color}15`,
                    border: `1px solid ${link.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <link.icon size={16} color={link.color} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <p style={{ fontSize: "0.75rem", color: "var(--muted)", marginBottom: "0.1rem" }}>
                    {link.label}
                  </p>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {link.value}
                  </p>
                </div>
              </a>
              {link.copyable && (
                <button
                  onClick={() => handleCopy(link.value)}
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "6px",
                    border: "1px solid var(--border)",
                    background: "transparent",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: copied ? "#22c55e" : "var(--muted)",
                    transition: "all 0.2s ease",
                    flexShrink: 0,
                    marginLeft: "0.5rem",
                  }}
                  title="이메일 복사"
                >
                  {copied ? <CheckCheck size={13} /> : <Copy size={13} />}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lecture Types */}
      <div
        style={{
          background: "var(--card)",
          border: "1px solid var(--card-border)",
          borderRadius: "16px",
          padding: "1.5rem",
        }}
      >
        <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.375rem" }}>
          가능한 협업 형태
        </h3>
        <p style={{ fontSize: "0.8rem", color: "var(--muted)", marginBottom: "1rem" }}>
          아래 유형 중 원하시는 형태로 문의해 주세요.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
          {lectureTypes.map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0.625rem 0",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  background: "rgba(59,130,246,0.1)",
                  border: "1px solid rgba(59,130,246,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <item.icon size={15} color="#3b82f6" />
              </div>
              <div>
                <p style={{ fontSize: "0.875rem", fontWeight: 600 }}>{item.label}</p>
                <p style={{ fontSize: "0.75rem", color: "var(--muted)" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
