import { motion } from "framer-motion";
import { Counter } from "./Counter";
import { HeartDoodle, SparkleDoodle } from "./Doodles";

const ease = [0.22, 1, 0.36, 1];

export const Impact = () => {
  return (
    <section className="relative overflow-hidden bg-impact-gradient py-24 text-primary-foreground md:py-32">
      <HeartDoodle className="pointer-events-none absolute left-8 top-12 h-16 w-16 text-secondary/40 animate-float-slow" />
      <SparkleDoodle className="pointer-events-none absolute right-12 top-20 h-8 w-8 text-secondary/60 animate-float-slow" />
      <SparkleDoodle className="pointer-events-none absolute left-1/3 bottom-12 h-6 w-6 text-secondary/50 animate-float-slow" />

      <div className="container text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto mb-8 max-w-2xl font-display text-3xl font-bold leading-tight sm:text-4xl"
        >
          Join Our Community of Donors and Volunteers — <br className="hidden md:block" />
          Be Part of Positive Change in the World
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease }}
          className="mb-4 font-display text-7xl font-bold text-secondary sm:text-8xl md:text-[8rem]"
        >
          <Counter end={154859} suffix="+" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7, ease }}
          className="mx-auto mb-10 max-w-md text-primary-foreground/80"
        >
          Join the many who already support our mission across 40+ countries worldwide.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6, ease }}
          href="#donate"
          className="inline-block rounded-full bg-secondary px-8 py-4 font-semibold text-secondary-foreground shadow-glow transition-smooth hover:scale-105"
        >
          Join our Community →
        </motion.a>
      </div>
    </section>
  );
};
