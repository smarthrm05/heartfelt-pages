import { motion } from "framer-motion";
import { HeartDoodle, LeafDoodle } from "./Doodles";

const services = [
  {
    title: "Health for All",
    desc: "Providing free health check-ups, medicine, and support for underserved populations across rural communities.",
    icon: "🩺",
    color: "bg-primary text-primary-foreground",
  },
  {
    title: "Clean Water Access",
    desc: "Installing water wells and purification systems in villages with limited access to clean, safe water.",
    icon: "💧",
    color: "bg-card text-foreground",
  },
  {
    title: "Eco Hope",
    desc: "Organizing environmental projects such as tree planting, community clean-ups, and recycling programs.",
    icon: "🌱",
    color: "bg-card text-foreground",
  },
];

const ease = [0.22, 1, 0.36, 1];

export const Services = () => {
  return (
    <section id="causes" className="relative overflow-hidden py-24 md:py-32">
      <LeafDoodle className="pointer-events-none absolute -left-6 top-10 h-20 w-20 text-primary/15" />
      <LeafDoodle className="pointer-events-none absolute right-6 bottom-10 h-16 w-16 -scale-x-100 text-primary/15" />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">— Charity Service</p>
          <h2 className="font-display text-3xl font-bold leading-tight text-primary sm:text-4xl md:text-5xl">
            Dedicated to Everyone — <br className="hidden md:block" />
            <span className="text-primary-glow">Compassionate Service for All</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.15, duration: 0.7, ease }}
              className={`group relative overflow-hidden rounded-3xl p-8 shadow-soft transition-smooth hover:-translate-y-2 hover:shadow-lift ${s.color}`}
            >
              <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-secondary text-2xl text-secondary-foreground transition-smooth group-hover:rotate-6 group-hover:scale-110">
                {s.icon}
              </div>
              <h3 className="mb-3 font-display text-2xl font-semibold">{s.title}</h3>
              <p className={`text-sm leading-relaxed ${s.color.includes("primary-foreground") ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {s.desc}
              </p>
              <HeartDoodle className="absolute -bottom-4 -right-4 h-24 w-24 opacity-10 transition-smooth group-hover:rotate-12 group-hover:opacity-20" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
