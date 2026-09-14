"use client";

import Link from "next/link";
import { Terminal, Globe, Mail, Code2 } from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/woowoo-dev",
    icon: Terminal,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/woowoo-dev",
    icon: Globe,
    label: "LinkedIn",
  },
  {
    href: "mailto:hello@woowoo.dev",
    icon: Mail,
    label: "Email",
  },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/tech-stack", label: "Tech Stack" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const buildDate = new Date().toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--surface)",
        padding: "3rem 1.5rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "2rem",
            marginBottom: "2rem",
            alignItems: "start",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontWeight: 700,
                fontSize: "1.1rem",
                marginBottom: "0.75rem",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  background: "linear-gradient(135deg, #3b82f6, #6366f1)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Code2 size={18} color="white" />
              </div>
              <span>WooWoo</span>
              <span style={{ color: "var(--accent)" }}>.dev</span>
            </Link>
            <p
              style={{
                color: "var(--muted)",
                fontSize: "0.875rem",
                lineHeight: "1.6",
                maxWidth: "340px",
              }}
            >
              딥러닝·LLM Agent 엔지니어이자 프리랜서 테크 강사.
              <br />
              AI 기술로 더 나은 세상을 만들어 갑니다.
            </p>
          </div>

          {/* Nav Links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "var(--muted)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "0.25rem",
              }}
            >
              Pages
            </p>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: "0.875rem",
                  color: "var(--muted)",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--foreground)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--muted)")
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          style={{ height: "1px", background: "var(--border)", margin: "1.5rem 0" }}
        />

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ fontSize: "0.8rem", color: "var(--muted)" }}>
            © {year} 우우 (WooWoo). All rights reserved.
            <span
              style={{
                marginLeft: "0.75rem",
                padding: "0.125rem 0.5rem",
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "4px",
                fontSize: "0.7rem",
                fontFamily: "var(--font-geist-mono), monospace",
              }}
            >
              Built {buildDate}
            </span>
          </p>

          {/* Social Links */}
          <div style={{ display: "flex", gap: "0.5rem" }}>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  border: "1px solid var(--border)",
                  background: "var(--card)",
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
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
