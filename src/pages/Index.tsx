import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

type Page = "home" | "courses" | "team" | "contact";

const Index = () => {
  const [page, setPage] = useState<Page>("home");

  const handleNavigate = (p: string) => {
    const valid = ["home", "courses", "team", "contact"];
    if (valid.includes(p)) {
      setPage(p as Page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f1e]">
      <Navbar currentPage={page} onNavigate={handleNavigate} />

      {/* HOME */}
      {page === "home" && (
        <div>
          <HeroSection onNavigate={handleNavigate} />

          {/* Features strip */}
          <section className="py-16 px-6 border-y border-[#1E90FF]/10">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: "Zap", label: "Живые менторы", desc: "Онлайн-сессии с практиками", color: "#1E90FF" },
                { icon: "Award", label: "Сертификаты", desc: "Признаются работодателями", color: "#7B61FF" },
                { icon: "Users", label: "Сообщество", desc: "2400+ активных студентов", color: "#00D4FF" },
                { icon: "TrendingUp", label: "Гарантия роста", desc: "96% завершают курс", color: "#1E90FF" },
              ].map((f, i) => (
                <div key={i} className="text-center group">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${f.color}18`, border: `1px solid ${f.color}30` }}
                  >
                    <Icon name={f.icon} size={22} style={{ color: f.color }} />
                  </div>
                  <div className="font-montserrat font-700 text-white text-sm mb-1">{f.label}</div>
                  <div className="font-exo text-white/40 text-xs leading-relaxed">{f.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Preview of courses */}
          <CoursesSection />

          {/* CTA Banner */}
          <section className="py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div
                className="rounded-3xl p-12 relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(30,144,255,0.12), rgba(123,97,255,0.12))",
                  border: "1px solid rgba(30,144,255,0.2)",
                }}
              >
                <div className="absolute inset-0 opacity-10 pixel-grid" />
                <div className="relative z-10">
                  <div className="tag-badge inline-block mb-6">ОГРАНИЧЕННОЕ ПРЕДЛОЖЕНИЕ</div>
                  <h2 className="font-montserrat font-900 text-3xl md:text-5xl text-white mb-4">
                    Начни обучение
                    <br />
                    <span className="gradient-text">со скидкой 30%</span>
                  </h2>
                  <p className="font-exo text-white/55 text-lg mb-8 max-w-lg mx-auto">
                    Только до конца месяца. Выбери любой курс и получи доступ к сообществу навсегда.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <button
                      onClick={() => handleNavigate("courses")}
                      className="btn-primary px-10 py-4 rounded-xl flex items-center gap-2"
                    >
                      <Icon name="Rocket" size={18} />
                      Выбрать курс
                    </button>
                    <button
                      onClick={() => handleNavigate("contact")}
                      className="btn-outline px-8 py-4 rounded-xl flex items-center gap-2"
                    >
                      <Icon name="MessageCircle" size={18} />
                      Задать вопрос
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Footer onNavigate={handleNavigate} />
        </div>
      )}

      {/* COURSES */}
      {page === "courses" && (
        <div className="pt-16">
          <CoursesSection />
          <Footer onNavigate={handleNavigate} />
        </div>
      )}

      {/* TEAM */}
      {page === "team" && (
        <div className="pt-16">
          <TeamSection />
          <Footer onNavigate={handleNavigate} />
        </div>
      )}

      {/* CONTACT */}
      {page === "contact" && (
        <div className="pt-16">
          <ContactSection />
          <Footer onNavigate={handleNavigate} />
        </div>
      )}
    </div>
  );
};

export default Index;
