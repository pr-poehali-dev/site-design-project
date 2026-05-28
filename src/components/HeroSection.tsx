import { useEffect, useState } from "react";
import VektorLogo from "./VektorLogo";
import Icon from "@/components/ui/icon";

interface HeroProps {
  onNavigate: (page: string) => void;
}

const PixelParticle = ({ delay, x, y }: { delay: number; x: number; y: number }) => (
  <div
    className="absolute w-1.5 h-1.5 rounded-sm opacity-0"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      background: `hsl(${210 + Math.random() * 60}, 100%, 70%)`,
      animation: `pixel-rain 3s ease-in-out ${delay}s infinite`,
    }}
  />
);

const StatCard = ({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: number;
}) => (
  <div
    className="text-center animate-fade-in"
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="stats-number text-3xl md:text-4xl">{value}</div>
    <div className="text-white/50 text-xs font-exo mt-1 tracking-wide">{label}</div>
  </div>
);

const HeroSection = ({ onNavigate }: HeroProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    delay: (i * 0.4) % 3,
    x: 5 + (i * 37) % 90,
    y: 10 + (i * 23) % 80,
  }));

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pixel-grid">
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <PixelParticle key={p.id} delay={p.delay} x={p.x} y={p.y} />
        ))}
      </div>

      {/* Background glow orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(30,144,255,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(123,97,255,0.10) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)",
            filter: "blur(30px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Tag */}
            <div
              className={`tag-badge inline-flex items-center gap-2 mb-6 ${
                loaded ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: "0.1s" }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
              ОБРАЗОВАТЕЛЬНАЯ ПЛАТФОРМА
            </div>

            {/* Headline */}
            <h1
              className={`font-montserrat font-black text-5xl md:text-6xl xl:text-7xl leading-[1.05] mb-6 ${
                loaded ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              <span className="text-white">Двигайся.</span>
              <br />
              <span className="text-white">Развивайся.</span>
              <br />
              <span className="gradient-text">Достигай.</span>
            </h1>

            {/* Description */}
            <p
              className={`font-exo text-white/60 text-lg leading-relaxed mb-8 max-w-lg ${
                loaded ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: "0.35s" }}
            >
              Образовательная платформа нового поколения. Прокачай навыки в технологиях, 
              бизнесе и творчестве — с экспертами-практиками.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap gap-4 mb-12 ${
                loaded ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: "0.5s" }}
            >
              <button
                onClick={() => onNavigate("courses")}
                className="btn-primary px-8 py-3.5 rounded-xl text-sm flex items-center gap-2"
              >
                <Icon name="Zap" size={16} />
                Выбрать курс
              </button>
              <button className="btn-outline px-8 py-3.5 rounded-xl text-sm flex items-center gap-2">
                <Icon name="Play" size={16} />
                Смотреть видео
              </button>
            </div>

            {/* Stats */}
            <div
              className={`flex gap-8 pt-8 border-t border-white/10 ${
                loaded ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: "0.65s" }}
            >
              <StatCard value="2400+" label="Студентов" delay={0.7} />
              <StatCard value="48" label="Курсов" delay={0.8} />
              <StatCard value="96%" label="Завершают" delay={0.9} />
            </div>
          </div>

          {/* Right: Big logo + visual */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              {/* Outer ring */}
              <div
                className="absolute inset-0 rounded-full border border-[#1E90FF]/20"
                style={{ width: 380, height: 380, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
              />
              <div
                className="absolute inset-0 rounded-full border border-[#7B61FF]/10"
                style={{ width: 440, height: 440, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
              />

              {/* Center logo */}
              <div className={`${loaded ? "logo-animate" : "opacity-0"}`}>
                <VektorLogo size="lg" animated={false} />
              </div>

              {/* Floating badges */}
              <div
                className={`absolute -top-4 -right-16 card-hover px-4 py-2.5 rounded-xl ${
                  loaded ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: "0.8s" }}
              >
                <div className="flex items-center gap-2">
                  <Icon name="TrendingUp" size={16} className="text-[#1E90FF]" />
                  <span className="font-montserrat font-700 text-sm text-white">+340%</span>
                </div>
                <div className="text-xs text-white/40 mt-0.5">Рост студентов</div>
              </div>

              <div
                className={`absolute -bottom-4 -left-16 card-hover px-4 py-2.5 rounded-xl ${
                  loaded ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center gap-2">
                  <Icon name="Award" size={16} className="text-[#7B61FF]" />
                  <span className="font-montserrat font-700 text-sm text-white">Топ-1</span>
                </div>
                <div className="text-xs text-white/40 mt-0.5">Платформа 2025</div>
              </div>

              <div
                className={`absolute top-1/2 -right-20 -translate-y-1/2 card-hover px-4 py-2.5 rounded-xl ${
                  loaded ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: "1.1s" }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {["#1E90FF", "#7B61FF", "#00D4FF"].map((c, i) => (
                      <div
                        key={i}
                        className="w-5 h-5 rounded-full border border-[#0a0f1e]"
                        style={{ background: c }}
                      />
                    ))}
                  </div>
                  <span className="font-montserrat font-700 text-xs text-white">Online</span>
                </div>
                <div className="text-xs text-white/40 mt-0.5">128 сейчас</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="font-exo text-xs tracking-widest text-white/60">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
