import { useState } from "react";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1500);
  };

  const contacts = [
    { icon: "Mail", label: "Email", value: "hello@vektor.ru", color: "#1E90FF" },
    { icon: "Send", label: "Telegram", value: "@vektor_edu", color: "#00D4FF" },
    { icon: "Phone", label: "Телефон", value: "+7 (800) 555-01-01", color: "#7B61FF" },
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="tag-badge inline-block mb-4">СВЯЗАТЬСЯ</div>
          <h2 className="font-montserrat font-black text-4xl md:text-5xl text-white mb-4">
            Есть вопросы?
            <br />
            <span className="gradient-text">Напишите нам</span>
          </h2>
          <p className="font-exo text-white/50 max-w-lg mx-auto text-lg leading-relaxed">
            Ответим в течение 2 часов в рабочее время. Поможем выбрать курс и ответим на любой вопрос.
          </p>
          <div className="section-divider mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="card-hover rounded-2xl p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-scale-in">
                <div className="w-16 h-16 rounded-full bg-[#1E90FF]/15 border border-[#1E90FF]/30 flex items-center justify-center mb-4">
                  <Icon name="CheckCircle" size={32} className="text-[#1E90FF]" />
                </div>
                <h3 className="font-montserrat font-800 text-xl text-white mb-2">
                  Сообщение отправлено!
                </h3>
                <p className="font-exo text-white/50 text-sm">
                  Мы ответим вам в течение 2 часов.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
                  className="mt-6 btn-outline px-6 py-2 rounded-lg text-sm"
                >
                  Отправить ещё
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="font-montserrat font-600 text-xs tracking-wide text-white/50 uppercase mb-2 block">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Иван Иванов"
                    className="input-vektor w-full px-4 py-3 text-sm"
                  />
                </div>

                <div>
                  <label className="font-montserrat font-600 text-xs tracking-wide text-white/50 uppercase mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="ivan@example.com"
                    className="input-vektor w-full px-4 py-3 text-sm"
                  />
                </div>

                <div>
                  <label className="font-montserrat font-600 text-xs tracking-wide text-white/50 uppercase mb-2 block">
                    Сообщение
                  </label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Расскажите, как мы можем помочь..."
                    rows={5}
                    className="input-vektor w-full px-4 py-3 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {sending ? (
                    <>
                      <Icon name="Loader2" size={16} className="animate-spin" />
                      Отправляем...
                    </>
                  ) : (
                    <>
                      <Icon name="Send" size={16} />
                      Отправить сообщение
                    </>
                  )}
                </button>

                <p className="font-exo text-white/30 text-xs text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </div>

          {/* Right info */}
          <div className="flex flex-col gap-6">
            {/* Contact cards */}
            {contacts.map((c, i) => (
              <div key={i} className="card-hover rounded-xl p-5 flex items-center gap-4 cursor-pointer">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${c.color}22`, border: `1px solid ${c.color}30` }}
                >
                  <Icon name={c.icon} size={20} style={{ color: c.color }} />
                </div>
                <div>
                  <div className="font-montserrat font-600 text-xs tracking-wide text-white/40 uppercase mb-0.5">
                    {c.label}
                  </div>
                  <div className="font-montserrat font-700 text-white">{c.value}</div>
                </div>
                <Icon name="ArrowRight" size={16} className="text-white/20 ml-auto" />
              </div>
            ))}

            {/* Working hours */}
            <div className="card-hover rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Clock" size={20} className="text-[#1E90FF]" />
                <span className="font-montserrat font-700 text-white">Режим работы</span>
              </div>
              <div className="flex flex-col gap-2">
                {[
                  { day: "Пн–Пт", time: "09:00 – 20:00", active: true },
                  { day: "Суббота", time: "10:00 – 16:00", active: false },
                  { day: "Воскресенье", time: "Выходной", active: false },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-1.5 border-b border-white/5 last:border-0">
                    <span className="font-exo text-sm text-white/60">{item.day}</span>
                    <span
                      className={`font-montserrat font-600 text-sm ${
                        item.active ? "text-[#1E90FF]" : "text-white/30"
                      }`}
                    >
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Values */}
            <div className="flex gap-3 flex-wrap">
              {["Рост", "Прогресс", "Инновации", "Открытость"].map((v) => (
                <div key={v} className="tag-badge">{v}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
