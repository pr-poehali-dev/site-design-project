import Icon from "@/components/ui/icon";

const team = [
  {
    name: "Алексей Дронов",
    role: "Основатель & CEO",
    bio: "10+ лет в EdTech. Экс-CTO Яндекс.Образование. Строит системы, которые меняют людей.",
    tags: ["Стратегия", "Продукт", "EdTech"],
    avatar: "АД",
    color: "#1E90FF",
    socials: { linkedin: true, telegram: true },
  },
  {
    name: "Мария Соколова",
    role: "Директор по контенту",
    bio: "Методолог с PhD в педагогике. Разработала 30+ курсов с конверсией завершения 94%.",
    tags: ["Методология", "Курсы", "Педагогика"],
    avatar: "МС",
    color: "#7B61FF",
    socials: { linkedin: true, telegram: false },
  },
  {
    name: "Дмитрий Карпов",
    role: "Lead Engineer",
    bio: "Fullstack в крови. React, Python, AWS. Архитектор платформы VEKTOR с первого дня.",
    tags: ["React", "Python", "DevOps"],
    avatar: "ДК",
    color: "#00D4FF",
    socials: { linkedin: true, telegram: true },
  },
  {
    name: "Анна Беляева",
    role: "Head of Marketing",
    bio: "Growth-маркетолог. x5 рост аудитории за год. Экс-Skillbox, Нетология.",
    tags: ["Growth", "SMM", "Аналитика"],
    avatar: "АБ",
    color: "#1E90FF",
    socials: { linkedin: false, telegram: true },
  },
  {
    name: "Игорь Петров",
    role: "Технический ментор",
    bio: "Senior в Google 6 лет. Теперь учит других строить продукты мирового уровня.",
    tags: ["Менторство", "Backend", "ML"],
    avatar: "ИП",
    color: "#7B61FF",
    socials: { linkedin: true, telegram: true },
  },
  {
    name: "Екатерина Лим",
    role: "Community Manager",
    bio: "Строит сообщества, которые живут и помогают друг другу. 2400+ студентов в тёплой среде.",
    tags: ["Сообщество", "Мотивация", "HR"],
    avatar: "ЕЛ",
    color: "#00D4FF",
    socials: { linkedin: false, telegram: true },
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="tag-badge inline-block mb-4">НАША КОМАНДА</div>
          <h2 className="font-montserrat font-black text-4xl md:text-5xl text-white mb-4">
            Люди, которые двигают
            <br />
            <span className="gradient-text">VEKTOR вперёд</span>
          </h2>
          <p className="font-exo text-white/50 max-w-xl mx-auto text-lg leading-relaxed">
            Практики из индустрии — не теоретики. Каждый прошёл путь, которому учит.
          </p>
          <div className="section-divider mx-auto mt-6" />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className="card-hover rounded-2xl p-6 group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Avatar + Name */}
              <div className="flex items-start gap-4 mb-4">
                <div className="relative flex-shrink-0">
                  {/* Avatar circle */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center font-montserrat font-900 text-lg text-white"
                    style={{
                      background: `linear-gradient(135deg, ${member.color}44, ${member.color}22)`,
                      border: `1.5px solid ${member.color}40`,
                    }}
                  >
                    {member.avatar}
                  </div>
                  {/* Online dot */}
                  <div
                    className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-[#0a0f1e]"
                    style={{ background: member.color }}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="font-montserrat font-800 text-white text-base leading-tight">
                    {member.name}
                  </div>
                  <div
                    className="font-exo text-sm mt-0.5 font-500"
                    style={{ color: member.color }}
                  >
                    {member.role}
                  </div>
                </div>

                {/* Socials */}
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {member.socials.linkedin && (
                    <button
                      className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors"
                      style={{ background: `${member.color}22` }}
                    >
                      <Icon name="Linkedin" size={12} style={{ color: member.color }} />
                    </button>
                  )}
                  {member.socials.telegram && (
                    <button
                      className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors"
                      style={{ background: `${member.color}22` }}
                    >
                      <Icon name="Send" size={12} style={{ color: member.color }} />
                    </button>
                  )}
                </div>
              </div>

              {/* Bio */}
              <p className="font-exo text-white/55 text-sm leading-relaxed mb-4">{member.bio}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {member.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="text-xs px-2.5 py-1 rounded-md font-montserrat font-600"
                    style={{
                      background: `${member.color}15`,
                      border: `1px solid ${member.color}30`,
                      color: member.color,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Join CTA */}
        <div className="mt-12 text-center">
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#1E90FF]/20 bg-[#1E90FF]/5 cursor-pointer hover:bg-[#1E90FF]/10 transition-colors"
          >
            <Icon name="UserPlus" size={16} className="text-[#1E90FF]" />
            <span className="font-montserrat font-600 text-sm text-white/70">
              Хочешь в команду?{" "}
              <span className="text-[#1E90FF]">Мы нанимаем →</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
