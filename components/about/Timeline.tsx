"use client";

const events = [
  {
    year: "2024",
    type: "engineering",
    title: "LLM Agent 플랫폼 개발",
    org: "스타트업 A사",
    desc: "LangGraph 기반 Multi-Agent 오케스트레이션 시스템 설계 및 개발. RAG 파이프라인 최적화로 답변 정확도 37% 향상.",
  },
  {
    year: "2024",
    type: "education",
    title: "AI 부트캠프 딥러닝 과정 출강",
    org: "부트캠프 B",
    desc: "240시간 딥러닝 커리큘럼 설계 및 강의. PyTorch 기초부터 LLM 파인튜닝까지 60명 수료.",
  },
  {
    year: "2023",
    type: "engineering",
    title: "엔터프라이즈 RAG 시스템 구축",
    org: "대기업 C사 컨설팅",
    desc: "사내 문서 기반 QA 시스템 PoC 개발. Vector DB(Chroma) + OpenAI GPT-4 연동, FastAPI 배포.",
  },
  {
    year: "2023",
    type: "education",
    title: "기업 사내 AI 교육 진행",
    org: "IT 기업 D사",
    desc: "개발팀 30명 대상 LLM 활용 개발 생산성 향상 특강. 바이브 코딩 방법론 소개 및 실습.",
  },
  {
    year: "2022",
    type: "engineering",
    title: "추천 시스템 ML 파이프라인 개발",
    org: "이커머스 E사",
    desc: "사용자 행동 데이터 기반 실시간 추천 모델 개발 및 FastAPI 서빙. CTR 22% 개선.",
  },
  {
    year: "2022",
    type: "education",
    title: "대학교 특강 - 자료구조 & 알고리즘",
    org: "대학교 F",
    desc: "컴퓨터공학과 학부생 대상 코딩 테스트 대비 알고리즘 특강. 3회 연속 요청 강의.",
  },
  {
    year: "2021",
    type: "engineering",
    title: "풀스택 SaaS 플랫폼 개발",
    org: "개인 프로젝트",
    desc: "Next.js + FastAPI + PostgreSQL 기반 AI 글쓰기 보조 SaaS. 베타 출시 후 월 300+ 사용자 확보.",
  },
];

export default function Timeline() {
  return (
    <section style={{ padding: "4rem 1.5rem 6rem" }}>
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
            Career Timeline
          </p>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            경력 & 활동{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #3b82f6, #6366f1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              타임라인
            </span>
          </h2>
        </div>

        {/* Legend */}
        <div
          style={{
            display: "flex",
            gap: "1.25rem",
            justifyContent: "center",
            marginBottom: "2.5rem",
            flexWrap: "wrap",
          }}
        >
          {[
            { type: "engineering", label: "Engineering", color: "#3b82f6" },
            { type: "education", label: "Education", color: "#f59e0b" },
          ].map((item) => (
            <span
              key={item.type}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.85rem",
                color: "var(--muted)",
              }}
            >
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: item.color,
                  display: "inline-block",
                }}
              />
              {item.label}
            </span>
          ))}
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Center Line */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: "1px",
              background: "var(--border)",
              transform: "translateX(-50%)",
            }}
            className="timeline-line"
          />

          {events.map((event, i) => {
            const isEng = event.type === "engineering";
            const color = isEng ? "#3b82f6" : "#f59e0b";
            const isLeft = i % 2 === 0;

            return (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 40px 1fr",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                  alignItems: "center",
                }}
                className="timeline-row"
              >
                {/* Left Content */}
                <div style={{ textAlign: "right" }} className={isLeft ? "timeline-content" : "timeline-empty"}>
                  {isLeft && (
                    <div
                      style={{
                        background: "var(--card)",
                        border: "1px solid var(--card-border)",
                        borderRadius: "12px",
                        padding: "1.25rem",
                        transition: "transform 0.2s ease, border-color 0.2s ease",
                        textAlign: "left",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.transform = "translateY(-2px)";
                        el.style.borderColor = `${color}40`;
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.transform = "translateY(0)";
                        el.style.borderColor = "var(--card-border)";
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                        <span
                          style={{
                            fontSize: "0.7rem",
                            fontWeight: 600,
                            color,
                            padding: "0.15rem 0.5rem",
                            background: `${color}15`,
                            borderRadius: "4px",
                            border: `1px solid ${color}30`,
                          }}
                        >
                          {event.year}
                        </span>
                        <span style={{ fontSize: "0.7rem", color: "var(--muted)" }}>
                          {event.org}
                        </span>
                      </div>
                      <h3 style={{ fontSize: "0.95rem", fontWeight: 700, marginBottom: "0.375rem" }}>
                        {event.title}
                      </h3>
                      <p style={{ fontSize: "0.8rem", color: "var(--muted)", lineHeight: 1.6 }}>
                        {event.desc}
                      </p>
                    </div>
                  )}
                </div>

                {/* Center Dot */}
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div
                    style={{
                      width: "14px",
                      height: "14px",
                      borderRadius: "50%",
                      background: color,
                      border: "2px solid var(--background)",
                      boxShadow: `0 0 0 3px ${color}30`,
                      zIndex: 1,
                      flexShrink: 0,
                    }}
                  />
                </div>

                {/* Right Content */}
                <div className={!isLeft ? "timeline-content" : "timeline-empty"}>
                  {!isLeft && (
                    <div
                      style={{
                        background: "var(--card)",
                        border: "1px solid var(--card-border)",
                        borderRadius: "12px",
                        padding: "1.25rem",
                        transition: "transform 0.2s ease, border-color 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.transform = "translateY(-2px)";
                        el.style.borderColor = `${color}40`;
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.transform = "translateY(0)";
                        el.style.borderColor = "var(--card-border)";
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                        <span
                          style={{
                            fontSize: "0.7rem",
                            fontWeight: 600,
                            color,
                            padding: "0.15rem 0.5rem",
                            background: `${color}15`,
                            borderRadius: "4px",
                            border: `1px solid ${color}30`,
                          }}
                        >
                          {event.year}
                        </span>
                        <span style={{ fontSize: "0.7rem", color: "var(--muted)" }}>
                          {event.org}
                        </span>
                      </div>
                      <h3 style={{ fontSize: "0.95rem", fontWeight: 700, marginBottom: "0.375rem" }}>
                        {event.title}
                      </h3>
                      <p style={{ fontSize: "0.8rem", color: "var(--muted)", lineHeight: 1.6 }}>
                        {event.desc}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-line { left: 20px !important; }
          .timeline-row {
            grid-template-columns: 40px 1fr !important;
            gap: 0.75rem !important;
          }
          .timeline-empty { display: none !important; }
          .timeline-content { display: block !important; }
        }
      `}</style>
    </section>
  );
}
