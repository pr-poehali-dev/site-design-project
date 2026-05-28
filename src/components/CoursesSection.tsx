import { useState } from "react";
import Icon from "@/components/ui/icon";

const courses = [
  {
    id: 1,
    category: "Технологии",
    categoryColor: "#1E90FF",
    icon: "GraduationCap",
    title: "Fullstack-разработчик с нуля",
    desc: "От основ HTML/CSS до современного React и Node.js. Реальные проекты в портфолио.",
    level: "Начинающий",
    duration: "6 месяцев",
    lessons: 148,
    students: 843,
    rating: 4.9,
    price: "24 900 ₽",
    gradient: "from-[#1E90FF]/20 to-[#00D4FF]/10",
    border: "border-[#1E90FF]/30",
    accent: "#1E90FF",
  },
  {
    id: 2,
    category: "Бизнес",
    categoryColor: "#7B61FF",
    icon: "BarChart2",
    title: "Маркетинг и рост продукта",
    desc: "Growth hacking, воронки, аналитика, A/B-тесты. Инструменты роста от практиков.",
    level: "Средний",
    duration: "3 месяца",
    lessons: 72,
    students: 512,
    rating: 4.8,
    price: "18 500 ₽",
    gradient: "from-[#7B61FF]/20 to-[#1E90FF]/10",
    border: "border-[#7B61FF]/30",
    accent: "#7B61FF",
  },
  {
    id: 3,
    category: "Технологии",
    categoryColor: "#00D4FF",
    icon: "Target",
    title: "Искусственный интеллект",
    desc: "ML, нейросети, ChatGPT API, автоматизация. Применение ИИ в реальном бизнесе.",
    level: "Продвинутый",
    duration: "4 месяца",
    lessons: 96,
    students: 621,
    rating: 4.9,
    price: "32 000 ₽",
    gradient: "from-[#00D4FF]/20 to-[#7B61FF]/10",
    border: "border-[#00D4FF]/30",
    accent: "#00D4FF",
  },
  {
    id: 4,
    category: "Креатив",
    categoryColor: "#7B61FF",
    icon: "BriefcaseBusiness",
    title: "UX/UI Дизайн",
    desc: "Figma, дизайн-системы, прототипирование, исследования. Создавай продукты, которые любят.",
    level: "Начинающий",
    duration: "3 месяца",
    lessons: 84,
    students: 389,
    rating: 4.7,
    price: "21 000 ₽",
    gradient: "from-[#7B61FF]/20 to-[#00D4FF]/10",
    border: "border-[#7B61FF]/30",
    accent: "#7B61FF",
  },
  {
    id: 5,
    category: "Бизнес",
    categoryColor: "#1E90FF",
    icon: "Users",
    title: "Управление командой",
    desc: "Agile, OKR, найм, мотивация. Как строить высокоэффективные команды.",
    level: "Средний",
    duration: "2 месяца",
    lessons: 54,
    students: 276,
    rating: 4.8,
    price: "16 000 ₽",
    gradient: "from-[#1E90FF]/20 to-[#7B61FF]/10",
    border: "border-[#1E90FF]/30",
    accent: "#1E90FF",
  },
  {
    id: 6,
    category: "Технологии",
    categoryColor: "#00D4FF",
    icon: "Medal",
    title: "Кибербезопасность",
    desc: "Основы безопасности, пентест, защита данных. Востребованная профессия будущего.",
    level: "Средний",
    duration: "5 месяцев",
    lessons: 112,
    students: 198,
    rating: 4.9,
    price: "28 900 ₽",
    gradient: "from-[#00D4FF]/20 to-[#1E90FF]/10",
    border: "border-[#00D4FF]/30",
    accent: "#00D4FF",
  },
];

const filters = ["Все", "Технологии", "Бизнес", "Креатив"];

const CoursesSection = () => {
  const [activeFilter, setActiveFilter] = useState("Все");
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered =
    activeFilter === "Все" ? courses : courses.filter((c) => c.category === activeFilter);

  return (
    <section id="courses" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="tag-badge inline-block mb-4">КАТАЛОГ КУРСОВ</div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-montserrat font-black text-4xl md:text-5xl text-white mb-3">
                Выбери свой
                <br />
                <span className="gradient-text">вектор роста</span>
              </h2>
              <div className="section-divider" />
            </div>

            {/* Filters */}
            <div className="flex gap-2 flex-wrap">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-4 py-2 rounded-lg font-montserrat font-600 text-xs tracking-wide transition-all duration-200 ${
                    activeFilter === f
                      ? "gradient-bg text-white shadow-lg shadow-blue-500/20"
                      : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((course) => (
            <div
              key={course.id}
              className={`card-hover rounded-2xl overflow-hidden cursor-pointer ${course.border}`}
              onMouseEnter={() => setHovered(course.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Top gradient bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${course.gradient.replace("/20", "").replace("/10", "")}`}
                style={{ background: `linear-gradient(90deg, ${course.accent}, transparent)` }}
              />

              <div className="p-6">
                {/* Category + Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ background: `${course.accent}22` }}
                    >
                      <Icon name={course.icon} size={18} style={{ color: course.accent }} />
                    </div>
                    <span
                      className="font-montserrat font-700 text-xs tracking-wide"
                      style={{ color: course.accent }}
                    >
                      {course.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Icon name="Star" size={12} />
                    <span className="font-montserrat font-700 text-xs text-white">{course.rating}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-montserrat font-800 text-lg text-white mb-2 leading-tight">
                  {course.title}
                </h3>
                <p className="font-exo text-white/50 text-sm leading-relaxed mb-5">{course.desc}</p>

                {/* Meta */}
                <div className="flex gap-4 mb-5">
                  <div className="flex items-center gap-1.5 text-white/40 text-xs">
                    <Icon name="Clock" size={12} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/40 text-xs">
                    <Icon name="BookOpen" size={12} />
                    <span>{course.lessons} уроков</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/40 text-xs">
                    <Icon name="Users" size={12} />
                    <span>{course.students}</span>
                  </div>
                </div>

                {/* Level badge */}
                <div className="flex items-center justify-between">
                  <span className="tag-badge text-xs" style={{
                    background: `${course.accent}18`,
                    borderColor: `${course.accent}40`,
                    color: course.accent
                  }}>
                    {course.level}
                  </span>

                  {/* Price */}
                  <div className="flex items-center gap-3">
                    <span className="font-montserrat font-900 text-white">{course.price}</span>
                    <button
                      className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                      style={{
                        background: hovered === course.id ? course.accent : `${course.accent}22`,
                        color: hovered === course.id ? "#0a0f1e" : course.accent,
                      }}
                    >
                      <Icon name="ArrowRight" size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button className="btn-outline px-8 py-3 rounded-xl text-sm inline-flex items-center gap-2">
            <Icon name="Grid3X3" size={16} />
            Показать все 48 курсов
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;