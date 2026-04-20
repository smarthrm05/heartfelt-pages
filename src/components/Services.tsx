import { motion } from "framer-motion";
import { HeartDoodle, LeafDoodle } from "./Doodles";
import { Eyebrow } from "./Eyebrow";

const services = [
  { title: "Quran Services", desc: "Distributing Holy Qurans and supporting recitation programs across communities.", icon: "📖" },
  { title: "Waqaf Water Well", desc: "Building lasting water wells for villages without access to clean, safe drinking water.", icon: "💧" },
  { title: "Korban", desc: "Coordinating Qurban distribution to share blessed meat with families in need worldwide.", icon: "🐑" },
  { title: "Hafiz Education", desc: "Sponsoring memorization scholars and providing full support for future Hafiz generations.", icon: "🎓" },
  { title: "Waqaf Madrasah", desc: "Constructing madrasahs to deliver Islamic education to underserved children.", icon: "🏫" },
  { title: "Waqaf Masjid", desc: "Funding the building and maintenance of mosques as vibrant centers of community life.", icon: "🕌" },
  { title: "Iftar", desc: "Serving warm iftar meals to fasting families during the blessed month of Ramadan.", icon: "🌙" },
  { title: "Braille Quran", desc: "Providing Braille Qurans so the visually impaired can read the Holy Quran themselves.", icon: "✋" },
  { title: "Badal Haji & Umrah", desc: "Performing Hajj and Umrah on behalf of those who are unable to make the journey.", icon: "🕋" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export const Services = () => {
  return (
   <section id="causes" className="relative overflow-hidden py-24 md:py-32 bg-[#FCFAF7]">

      <LeafDoodle className="pointer-events-none absolute -left-6 top-10 h-20 w-20 text-[#8B5E3C]/20" />
      <LeafDoodle className="pointer-events-none absolute right-6 bottom-10 h-16 w-16 -scale-x-100 text-[#8B5E3C]/20" />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="mb-14 max-w-2xl"
        >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#8B5E3C]">
            — Charity Services
          </p>

          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            <span className="text-[#6B4A34]">
              Compassionate Programs
            </span>

            <br className="hidden md:block" />

            <span className="text-[#D9A07B]">
              Built on Faith and Care
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const isAccent = i === 0 || i === 4 || i === 8;

            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  delay: (i % 3) * 0.12,
                  duration: 0.6,
                  ease
                }}
                className={`group relative overflow-hidden rounded-3xl p-8 shadow-soft transition-smooth hover:-translate-y-2 hover:shadow-lift ${
                  isAccent
                    ? "bg-[#8B5E3C] text-white"
                    : "bg-white text-[#6B4A34]"
                }`}
              >
                <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-[#F8F1EB] text-2xl transition-smooth group-hover:rotate-6 group-hover:scale-110">
                  {s.icon}
                </div>

                <h3 className="mb-3 font-display text-xl font-semibold">
                  {s.title}
                </h3>

                <p className={`text-sm leading-relaxed ${
                  isAccent
                    ? "text-white/80"
                    : "text-[#6B4A34]/80"
                }`}>
                  {s.desc}
                </p>

                <HeartDoodle className="absolute -bottom-4 -right-4 h-24 w-24 opacity-10 transition-smooth group-hover:rotate-12 group-hover:opacity-20" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};