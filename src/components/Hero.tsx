import { motion } from "framer-motion";
import heroImg from "@/assets/charity.png";
import { HandDoodle, JarDoodle, SparkleDoodle, HeartDoodle } from "./Doodles";

const ease = [0.22, 1, 0.36, 1] as const;

export const Hero = () => {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      {/* Background image with slow zoom */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Smiling children in a community"
          width={1920}
          height={1280}
          className="h-full w-full animate-hero-zoom object-cover"
        />
        <div className="absolute inset-0 bg-[#0000]/65" />
      </div>

      {/* Floating decorative doodles */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }}
        className="pointer-events-none absolute right-10 top-28 hidden text-secondary/80 md:block"
      >
        <HandDoodle className="h-20 w-20 animate-float-slow" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
        className="pointer-events-none absolute bottom-24 left-10 hidden text-secondary/70 md:block"
      >
        <JarDoodle className="h-24 w-24 animate-float-slow" style={{ animationDelay: "1.5s" }} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2, duration: 0.8 }}
        className="pointer-events-none absolute right-1/4 top-40 text-secondary"
      >
        <SparkleDoodle className="h-6 w-6 animate-float-slow" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.4, duration: 0.8 }}
        className="pointer-events-none absolute bottom-32 right-1/3 text-secondary/80"
      >
        <HeartDoodle className="h-10 w-10 animate-float-slow" style={{ animationDelay: "0.8s" }} />
      </motion.div>

      <div className="container relative flex min-h-[100svh] flex-col items-center justify-center pt-32 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.9, ease }}
          className="max-w-4xl font-display text-5xl font-bold leading-[1.05] text-primary-foreground sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          Every Helping Hand,<br />
          <span className="relative inline-block">
            Every <span className="font-script italic text-[#C9A961]">Heartfelt</span> Change
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8, ease }}
          className="mt-6 max-w-2xl text-base text-primary-foreground/80 sm:text-lg"
        >
          Every donation you make brings hopeful, lasting change. Each act of kindness lifts lives, inspires others, and writes a new chapter in our shared story of compassion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6, ease }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#donate"
            className="group inline-flex items-center gap-3 rounded-full bg-[#D9A07B] px-7 py-3.5 font-semibold text-black shadow-glow transition-smooth hover:scale-105 hover:bg-[#D9A07B]"
          >
            Join With Us

            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-primary-foreground/60"
        >
          <span className="block animate-bounce">scroll ↓</span>
        </motion.div>
      </div>
    </section>
  );
};