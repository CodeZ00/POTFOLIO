"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "이름/기업명을 2자 이상 입력해주세요."),
  email: z.string().email("올바른 이메일 주소를 입력해주세요."),
  type: z.enum(["lecture", "mentoring", "outsourcing", "other"], {
    required_error: "문의 유형을 선택해주세요.",
  }),
  message: z.string().min(20, "메시지를 20자 이상 입력해주세요."),
});

type FormData = z.infer<typeof schema>;

const inquiryTypes = [
  { value: "lecture", label: "🏢 기업 강의 출강" },
  { value: "mentoring", label: "👤 1:1 멘토링" },
  { value: "outsourcing", label: "💼 외주·컨설팅" },
  { value: "other", label: "💬 기타 문의" },
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("https://formspree.io/f/xdoqpnvk", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputStyle = (hasError: boolean) => ({
    width: "100%",
    padding: "0.75rem 1rem",
    borderRadius: "10px",
    border: `1px solid ${hasError ? "#ef4444" : "var(--border)"}`,
    background: "var(--surface)",
    color: "var(--foreground)",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s ease",
    boxSizing: "border-box" as const,
  });

  const labelStyle = {
    display: "block" as const,
    fontSize: "0.85rem",
    fontWeight: 600,
    marginBottom: "0.5rem",
    color: "var(--foreground)",
  };

  return (
    <div
      style={{
        background: "var(--card)",
        border: "1px solid var(--card-border)",
        borderRadius: "20px",
        padding: "2rem",
      }}
    >
      <h2 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.375rem" }}>
        문의 양식
      </h2>
      <p style={{ fontSize: "0.85rem", color: "var(--muted)", marginBottom: "1.75rem" }}>
        보통 24시간 내 회신드립니다.
      </p>

      {status === "success" && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "1rem 1.25rem",
            borderRadius: "10px",
            background: "rgba(34,197,94,0.1)",
            border: "1px solid rgba(34,197,94,0.3)",
            color: "#22c55e",
            marginBottom: "1.5rem",
          }}
        >
          <CheckCircle2 size={18} />
          <span style={{ fontSize: "0.9rem", fontWeight: 500 }}>
            문의가 성공적으로 전송됐습니다! 빠르게 연락드리겠습니다. 🎉
          </span>
        </div>
      )}

      {status === "error" && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "1rem 1.25rem",
            borderRadius: "10px",
            background: "rgba(239,68,68,0.1)",
            border: "1px solid rgba(239,68,68,0.3)",
            color: "#ef4444",
            marginBottom: "1.5rem",
          }}
        >
          <AlertCircle size={18} />
          <span style={{ fontSize: "0.9rem" }}>
            전송 중 오류가 발생했습니다. 이메일로 직접 연락해 주세요.
          </span>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        {/* Name */}
        <div>
          <label style={labelStyle}>이름 / 기업명 *</label>
          <input
            {...register("name")}
            placeholder="홍길동 / (주)테크컴퍼니"
            style={inputStyle(!!errors.name)}
            onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "var(--accent)"; }}
            onBlur={(e) => { (e.target as HTMLElement).style.borderColor = errors.name ? "#ef4444" : "var(--border)"; }}
          />
          {errors.name && (
            <p style={{ fontSize: "0.78rem", color: "#ef4444", marginTop: "0.375rem" }}>
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label style={labelStyle}>회신받을 이메일 *</label>
          <input
            {...register("email")}
            type="email"
            placeholder="your@email.com"
            style={inputStyle(!!errors.email)}
            onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "var(--accent)"; }}
            onBlur={(e) => { (e.target as HTMLElement).style.borderColor = errors.email ? "#ef4444" : "var(--border)"; }}
          />
          {errors.email && (
            <p style={{ fontSize: "0.78rem", color: "#ef4444", marginTop: "0.375rem" }}>
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Type */}
        <div>
          <label style={labelStyle}>문의 유형 *</label>
          <select
            {...register("type")}
            style={{
              ...inputStyle(!!errors.type),
              cursor: "pointer",
              appearance: "none" as const,
            }}
            onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "var(--accent)"; }}
            onBlur={(e) => { (e.target as HTMLElement).style.borderColor = errors.type ? "#ef4444" : "var(--border)"; }}
          >
            <option value="">유형을 선택해주세요</option>
            {inquiryTypes.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
          {errors.type && (
            <p style={{ fontSize: "0.78rem", color: "#ef4444", marginTop: "0.375rem" }}>
              {errors.type.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label style={labelStyle}>메시지 *</label>
          <textarea
            {...register("message")}
            rows={5}
            placeholder="강의 주제, 대상, 일정, 협업 내용 등을 자유롭게 작성해주세요."
            style={{
              ...inputStyle(!!errors.message),
              resize: "vertical",
              minHeight: "120px",
              fontFamily: "inherit",
            }}
            onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "var(--accent)"; }}
            onBlur={(e) => { (e.target as HTMLElement).style.borderColor = errors.message ? "#ef4444" : "var(--border)"; }}
          />
          {errors.message && (
            <p style={{ fontSize: "0.78rem", color: "#ef4444", marginTop: "0.375rem" }}>
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "loading"}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            padding: "0.875rem 1.5rem",
            borderRadius: "10px",
            background:
              status === "loading"
                ? "var(--border)"
                : "linear-gradient(135deg, #3b82f6, #6366f1)",
            color: "white",
            fontWeight: 700,
            fontSize: "0.95rem",
            border: "none",
            cursor: status === "loading" ? "not-allowed" : "pointer",
            transition: "all 0.2s ease",
            boxShadow: status === "loading" ? "none" : "0 4px 20px rgba(59,130,246,0.3)",
          }}
          onMouseEnter={(e) => {
            if (status !== "loading") {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(59,130,246,0.45)";
            }
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(59,130,246,0.3)";
          }}
        >
          {status === "loading" ? (
            <>
              <Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} />
              전송 중...
            </>
          ) : (
            <>
              <Send size={16} />
              문의 보내기
            </>
          )}
        </button>
      </form>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
