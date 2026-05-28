import VektorLogo from "./VektorLogo";
import Icon from "@/components/ui/icon";

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer = ({ onNavigate }: FooterProps) => {
  const links = {
    Платформа: [
      { label: "Все курсы", page: "courses" },
      { label: "Команда", page: "team" },
      { label: "Связаться", page: "contact" },
    ],
    Направления: [
      { label: "Технологии", page: "courses" },
      { label: "Бизнес", page: "courses" },
      { label: "Креатив", page: "courses" },
    ],
    Компания: [
      { label: "О нас", page: "home" },
      { label: "Вакансии", page: "contact" },
      { label: "Блог", page: "home" },
    ],
  };

  return (
    <footer className="border-t border-[#1E90FF]/10 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <VektorLogo size="md" />
            <p className="font-exo text-white/45 text-sm leading-relaxed mt-4 max-w-xs">
              Образовательная платформа нового поколения. Движение вперёд — это вектор.
              Выбирай направление и достигай большего.
            </p>

            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: "Send", color: "#00D4FF" },
                { icon: "Youtube", color: "#1E90FF" },
                { icon: "Instagram", color: "#7B61FF" },
                { icon: "Linkedin", color: "#1E90FF" },
              ].map((s, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ background: `${s.color}18`, border: `1px solid ${s.color}30` }}
                >
                  <Icon name={s.icon} size={15} style={{ color: s.color }} />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <div className="font-montserrat font-800 text-white text-sm mb-4 tracking-wide">
                {title}
              </div>
              <div className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => onNavigate(item.page)}
                    className="font-exo text-sm text-white/45 hover:text-[#1E90FF] transition-colors text-left"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <div className="font-exo text-white/30 text-xs">
            © 2025 VEKTOR. Все права защищены.
          </div>

          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#1E90FF] animate-pulse" />
            <span className="font-montserrat font-600 text-xs text-white/30 tracking-wide">
              НАПРАВЛЕНИЕ К УСПЕХУ. VEKTOR.
            </span>
          </div>

          <div className="flex gap-4">
            <button className="font-exo text-white/30 hover:text-white/60 text-xs transition-colors">
              Политика конфиденциальности
            </button>
            <button className="font-exo text-white/30 hover:text-white/60 text-xs transition-colors">
              Условия использования
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
