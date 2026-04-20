import { motion } from "framer-motion";
import { Counter } from "./Counter";
import { HeartDoodle, SparkleDoodle, JarDoodle } from "./Doodles";
import impactChild from "@/assets/impact-child.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

export const Impact = () => {
  return (
    <section className="relative overflow-hidden bg-impact-gradient py-24 text-primary-foreground md:py-32">
      {/* Right-side child photo blended into background */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-full md:w-1/2 lg:w-[45%]">
        <img
          src={impactChild}
          alt="Smiling child supported by our community"
          width={1024}
          height={1024}
          loading="lazy"
          className="h-full w-full object-cover object-left opacity-90"
        />
        {/* Gradient overlay to blend image into the green background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(155_60%_12%)] via-[hsl(155_55%_16%/0.55)] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(155_60%_12%)] via-transparent to-transparent" />
      </div>

      {/* Decorative doodles */}
      <HeartDoodle className="pointer-events-none absolute left-8 top-12 h-12 w-12 text-secondary/50 animate-float-slow" />
      <HeartDoodle className="pointer-events-none absolute left-16 top-28 h-10 w-10 text-secondary/40 animate-float-slow" style={{ animationDelay: "1s" }} />
      <SparkleDoodle className="pointer-events-none absolute left-24 top-20 h-6 w-6 text-secondary/60 animate-float-slow" />
      <JarDoodle className="pointer-events-none absolute left-10 bottom-16 h-20 w-20 text-secondary/40 animate-float-slow" style={{ animationDelay: "1.5s" }} />
      <SparkleDoodle className="pointer-events-none absolute left-32 bottom-24 h-5 w-5 text-secondary/50 animate-float-slow" />

      <div className="container relative">
        <div className="max-w-2xl text-center md:mx-0 md:max-w-xl md:pr-8 md:text-left lg:max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="mb-8 font-display text-3xl font-bold leading-tight sm:text-4xl"
          >
            Join Our Community of Donors and Volunteers — <br className="hidden md:block" />
            Be Part of Positive Change in the World
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease }}
            className="mb-4 font-display text-7xl font-bold text-secondary sm:text-8xl md:text-[7rem]"
          >
            <Counter end={154859} suffix="+" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.7, ease }}
            className="mx-auto mb-10 max-w-md text-primary-foreground/80 md:mx-0"
          >
            Join the many who already support our mission across 40+ countries worldwide.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6, ease }}
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-4 font-semibold text-secondary-foreground shadow-glow transition-smooth hover:scale-105"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2"/>
            </svg>
            Contact via WhatsApp
          </motion.a>
        </div>
      </div>
    </section>
  );
};
