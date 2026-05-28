import { useState, useEffect } from "react";

interface VektorLogoProps {
  size?: "sm" | "md" | "lg";
  animated?: boolean;
}

const VektorLogo = ({ size = "md", animated = false }: VektorLogoProps) => {
  const [ready, setReady] = useState(!animated);

  useEffect(() => {
    if (animated) {
      const t = setTimeout(() => setReady(true), 50);
      return () => clearTimeout(t);
    }
  }, [animated]);

  const sizes = {
    sm: { icon: 28, text: "text-lg", sub: "text-[8px]" },
    md: { icon: 40, text: "text-2xl", sub: "text-[10px]" },
    lg: { icon: 72, text: "text-5xl", sub: "text-sm" },
  };

  const s = sizes[size];

  return (
    <div
      className={`flex items-center gap-3 ${animated && ready ? "logo-animate" : animated ? "opacity-0" : ""}`}
    >
      {/* Icon */}
      <div className="relative" style={{ width: s.icon, height: s.icon }}>
        {/* Background glow */}
        <div
          className="absolute inset-0 rounded-lg"
          style={{
            background: "linear-gradient(135deg, #1E90FF22, #7B61FF22)",
            filter: "blur(4px)",
          }}
        />
        {/* SVG Arrow */}
        <svg
          width={s.icon}
          height={s.icon}
          viewBox="0 0 40 40"
          fill="none"
          className={animated && ready ? "logo-arrow-animate" : ""}
        >
          {/* Pixel dots */}
          <rect x="2" y="30" width="3" height="3" fill="#1E90FF" opacity="0.4" rx="0.5" />
          <rect x="7" y="26" width="3" height="3" fill="#7B61FF" opacity="0.5" rx="0.5" />
          <rect x="12" y="22" width="3" height="3" fill="#1E90FF" opacity="0.6" rx="0.5" />
          <rect x="5" y="34" width="2" height="2" fill="#00D4FF" opacity="0.3" rx="0.3" />
          <rect x="10" y="30" width="2" height="2" fill="#7B61FF" opacity="0.4" rx="0.3" />
          {/* Main arrow */}
          <defs>
            <linearGradient id="arrowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1E90FF" />
              <stop offset="50%" stopColor="#7B61FF" />
              <stop offset="100%" stopColor="#00D4FF" />
            </linearGradient>
          </defs>
          <path
            d="M10 32 L28 8 M28 8 L18 8 M28 8 L28 18"
            stroke="url(#arrowGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 28 L26 10"
            stroke="url(#arrowGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Text */}
      <div className="flex flex-col leading-none">
        <div className={`font-montserrat font-black ${s.text} tracking-wider flex items-baseline`}>
          <span className="text-white">VEK</span>
          <span className="gradient-text">TOR</span>
        </div>
        {size !== "sm" && (
          <div
            className={`font-montserrat font-semibold ${s.sub} tracking-[0.2em] text-white/40 mt-0.5`}
          >
            ДВИГАЙСЯ · РАЗВИВАЙСЯ
          </div>
        )}
      </div>
    </div>
  );
};

export default VektorLogo;
