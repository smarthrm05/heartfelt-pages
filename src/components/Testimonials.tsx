import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";

const testimonials = [
  {
    name: "Mason Brooks",
    role: "Business Development Lead",
    avatar: avatar1,
    quote:
      "This charity's dedication to quality and excellence is truly exceeded my expectations. From the initial consultation to the final deliverables, every detail was carefully managed. Their commitment to delivering on time and on budget was impressive.",
  },
  {
    name: "Noah Smith",
    role: "Chief Operations Officer",
    avatar: avatar2,
    quote:
      "I am incredibly impressed by the professionalism and dedication of this team. They consistently demonstrate a deep understanding of community needs and translate that into transformative work. Truly inspiring.",
  },
];

const ease = [0.22, 1, 0.36, 1];

export const Testimonials = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);
  const t = testimonials[i];

  return (
    <section className="relative bg-muted py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mb-14 flex items-end justify-between gap-6"
        >
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">— Testimonial</p>
            <h2 className="font-display text-3xl font-bold leading-tight text-primary sm:text-4xl md:text-5xl">
              Community Feedback <br /> on Our Mission
            </h2>
          </div>
          <div className="hidden gap-3 sm:flex">
            <button
              onClick={() => setI((p) => (p - 1 + testimonials.length) % testimonials.length)}
              className="grid h-12 w-12 place-items-center rounded-full border border-border bg-background text-primary transition-smooth hover:scale-110 hover:bg-primary hover:text-primary-foreground"
              aria-label="Previous"
            >←</button>
            <button
              onClick={() => setI((p) => (p + 1) % testimonials.length)}
              className="grid h-12 w-12 place-items-center rounded-full border border-border bg-primary text-primary-foreground transition-smooth hover:scale-110 hover:shadow-soft"
              aria-label="Next"
            >→</button>
          </div>
        </motion.div>

        <div className="relative min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.6, ease }}
              className="rounded-3xl bg-card p-10 shadow-soft md:p-14"
            >
              <p className="mb-8 text-lg leading-relaxed text-foreground/80 md:text-xl">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} width={64} height={64} loading="lazy" className="h-14 w-14 rounded-full object-cover" />
                <div>
                  <p className="font-display font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
