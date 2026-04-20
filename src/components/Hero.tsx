import { motion } from "framer-motion";
import heroImg from "@/assets/bg_1.jpg";
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
        <div className="absolute inset-0 bg-[#6B4A34]/65" />
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
        <motion.span
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6, ease }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground backdrop-blur-md"
        >
          <span className="h-2 w-2 rounded-full bg-secondary" />
          Charity for a brighter tomorrow
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.9, ease }}
          className="max-w-4xl font-display text-5xl font-bold leading-[1.05] text-primary-foreground sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          Every Helping Hand,<br />
          <span className="relative inline-block">
            Every <span className="font-script italic text-[#D9A07B]">Heartfelt</span> Change
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
    {/* WhatsApp Icon */}
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
    >
      <path d="M16.001 3C8.821 3 3 8.82 3 16c0 2.821.92 5.437 2.48 7.56L3 29l5.57-2.43A12.94 12.94 0 0016 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 23.5c-2.26 0-4.37-.66-6.14-1.8l-.44-.28-3.3 1.44.88-3.21-.29-.46A10.44 10.44 0 015.5 16c0-5.79 4.71-10.5 10.5-10.5S26.5 10.21 26.5 16 21.79 26.5 16 26.5zm5.74-7.69c-.31-.15-1.83-.9-2.11-1.01-.28-.1-.49-.15-.7.15-.2.31-.8 1.01-.98 1.22-.18.2-.36.23-.67.08-.31-.15-1.3-.48-2.48-1.52-.91-.81-1.52-1.81-1.7-2.12-.18-.31-.02-.48.13-.63.14-.14.31-.36.46-.54.15-.18.2-.31.31-.51.1-.2.05-.38-.03-.54-.08-.15-.7-1.68-.96-2.3-.25-.6-.5-.52-.7-.53h-.6c-.2 0-.52.08-.8.38s-1.04 1.01-1.04 2.46c0 1.45 1.07 2.85 1.22 3.05.15.2 2.1 3.2 5.1 4.48.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.2-.59-.35z"/>
    </svg>

    Contact via WhatsApp

    <span className="inline-block transition-transform group-hover:translate-x-1">
      →
    </span>
  </a>

  <a
    href="#about"
    className="rounded-full border border-primary-foreground/30 bg-primary-foreground/5 px-7 py-3.5 font-semibold text-primary-foreground backdrop-blur-md transition-smooth hover:scale-105 hover:bg-primary-foreground/15"
  >
    Watch Video
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
