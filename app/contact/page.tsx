import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contact - 강의 & 협업 문의",
  description:
    "기업 강의, 1:1 멘토링, AI 외주 개발 문의를 받습니다. 딥러닝·LLM Agent 엔지니어 우우에게 지금 연락하세요.",
};

export default function ContactPage() {
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
            Get In Touch
          </p>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              marginBottom: "1rem",
            }}
          >
            강의 & 협업{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #3b82f6, #6366f1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              문의
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
            기업 출강, 멘토링, 외주 개발 등 다양한 형태의 협업을 환영합니다.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 420px",
            gap: "2.5rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          <ContactForm />
          <ContactInfo />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
