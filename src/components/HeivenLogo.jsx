import React from "react";

// All Heiven logos use the same sky blue: #29ABE2
// Rendered as inline SVG so backgrounds are always transparent
// The globe icon is the distinctive "concentric arcs" globe from the actual logos

const BLUE = "#29ABE2";

function GlobeIcon({ size = 40 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle */}
      <circle
        cx="20"
        cy="20"
        r="18"
        stroke={BLUE}
        strokeWidth="2.5"
        fill="none"
      />
      {/* Horizontal lines - concentric arc effect */}
      <path
        d="M3 14 Q20 10 37 14"
        stroke={BLUE}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M2 20 Q20 16 38 20"
        stroke={BLUE}
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M3 26 Q20 30 37 26"
        stroke={BLUE}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      {/* Inner oval arcs */}
      <ellipse
        cx="20"
        cy="20"
        rx="8"
        ry="18"
        stroke={BLUE}
        strokeWidth="1.8"
        fill="none"
      />
      {/* Center dot */}
      <circle cx="20" cy="20" r="2.5" fill={BLUE} />
    </svg>
  );
}

function WordMark({ text, size = "text-2xl" }) {
  return (
    <span
      className={`${size} font-bold tracking-tight leading-none`}
      style={{ color: BLUE, fontFamily: "'Space Grotesk', sans-serif" }}
    >
      {text}
    </span>
  );
}

// variant: "group" | "technology" | "energy" | "minerals"
// size: "sm" | "md" | "lg" | "xl"
// inverted: if true, renders white (for use on dark/colored backgrounds)
export default function HeivenLogo({
  variant = "group",
  size = "md",
  inverted = false,
  className = "",
}) {
  const color = inverted ? "#FFFFFF" : BLUE;

  const sizes = {
    sm: { globe: 24, text: "text-base", gap: "gap-2" },
    md: { globe: 32, text: "text-xl", gap: "gap-2.5" },
    lg: { globe: 40, text: "text-2xl", gap: "gap-3" },
    xl: { globe: 56, text: "text-4xl", gap: "gap-4" },
  };
  const s = sizes[size] || sizes.md;

  const labels = {
    group: ["Heiven", "Group"],
    technology: ["Heiven", "Telecoms"],
    energy: ["Heiven", "Energy"],
    minerals: ["Heiven", "Minerals"],
  };
  const [line1, line2] = labels[variant] || labels.group;

  return (
    <div className={`flex items-center ${s.gap} ${className}`}>
      {/* Globe SVG — redrawn inline, color-swappable */}
      <svg
        width={s.globe}
        height={s.globe}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <circle
          cx="20"
          cy="20"
          r="18"
          stroke={color}
          strokeWidth="2.5"
          fill="none"
        />
        <path
          d="M3 14 Q20 10 37 14"
          stroke={color}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M2 20 Q20 16 38 20"
          stroke={color}
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M3 26 Q20 30 37 26"
          stroke={color}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <ellipse
          cx="20"
          cy="20"
          rx="8"
          ry="18"
          stroke={color}
          strokeWidth="1.8"
          fill="none"
        />
        <circle cx="20" cy="20" r="2.5" fill={color} />
      </svg>

      {/* Text */}
      <div className="flex flex-col leading-none" style={{ gap: "1px" }}>
        <span
          className={`${s.text} font-bold tracking-tight`}
          style={{
            color,
            fontFamily: "'Space Grotesk', sans-serif",
            lineHeight: 1,
          }}
        >
          {line1}
        </span>
        <span
          className={`${s.text} font-bold tracking-tight`}
          style={{
            color,
            fontFamily: "'Space Grotesk', sans-serif",
            lineHeight: 1,
          }}
        >
          {line2}
        </span>
      </div>
    </div>
  );
}
