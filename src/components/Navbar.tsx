import { useState, useEffect } from "react";
import VektorLogo from "./VektorLogo";
import Icon from "@/components/ui/icon";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar = ({ currentPage, onNavigate }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navItems = [
    { id: "home", label: "Главная" },
    {
      id: "courses",
      label: "Курсы",
      dropdown: [
        { id: "courses-all", label: "Все курсы", desc: "Полный каталог" },
        { id: "courses-tech", label: "Технологии", desc: "IT и разработка" },
        { id: "courses-business", label: "Бизнес", desc: "Управление и рост" },
        { id: "courses-creative", label: "Креатив", desc: "Дизайн и контент" },
      ],
    },
    { id: "team", label: "Команда" },
    { id: "contact", label: "Связаться" },
  ];

  const handleNav = (id: string) => {
    onNavigate(id === "courses-all" || id.startsWith("courses") ? "courses" : id);
    setCoursesOpen(false);
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 nav-animate transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0f1e]/90 backdrop-blur-xl border-b border-[#1E90FF]/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleNav("home")} className="outline-none">
          <VektorLogo size="sm" />
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.id} className="relative">
                <button
                  className={`nav-link flex items-center gap-1 text-sm ${
                    currentPage === item.id ? "active" : ""
                  }`}
                  onMouseEnter={() => setCoursesOpen(true)}
                  onMouseLeave={() => setCoursesOpen(false)}
                  onClick={() => handleNav(item.id)}
                >
                  {item.label}
                  <Icon
                    name="ChevronDown"
                    size={14}
                    className={`transition-transform duration-300 ${coursesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown */}
                {coursesOpen && (
                  <div
                    className="dropdown-menu-vektor absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 py-2 animate-slide-down"
                    onMouseEnter={() => setCoursesOpen(true)}
                    onMouseLeave={() => setCoursesOpen(false)}
                  >
                    {item.dropdown.map((d) => (
                      <button
                        key={d.id}
                        onClick={() => handleNav(d.id)}
                        className="w-full text-left px-4 py-2.5 hover:bg-[#1E90FF]/10 transition-colors group"
                      >
                        <div className="font-montserrat font-600 text-sm text-white group-hover:text-[#1E90FF] transition-colors">
                          {d.label}
                        </div>
                        <div className="text-xs text-white/40 mt-0.5">{d.desc}</div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`nav-link text-sm ${currentPage === item.id ? "active" : ""}`}
              >
                {item.label}
              </button>
            )
          )}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button className="btn-outline text-xs px-4 py-2 rounded-lg">Войти</button>
          <button
            onClick={() => handleNav("courses")}
            className="btn-primary text-xs px-5 py-2 rounded-lg glow-btn"
          >
            Начать
          </button>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-white/70 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <Icon name={mobileOpen ? "X" : "Menu"} size={22} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0a0f1e]/95 backdrop-blur-xl border-t border-[#1E90FF]/10 animate-slide-down">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`text-left py-3 font-montserrat font-600 text-sm border-b border-white/5 last:border-0 transition-colors ${
                  currentPage === item.id ? "text-[#1E90FF]" : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="flex gap-3 pt-3">
              <button className="btn-outline text-xs px-4 py-2 rounded-lg flex-1">Войти</button>
              <button
                onClick={() => handleNav("courses")}
                className="btn-primary text-xs px-4 py-2 rounded-lg flex-1"
              >
                Начать
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
