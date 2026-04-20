import { motion } from "framer-motion";
import { JarDoodle, HeartDoodle } from "./Doodles";

const ease = [0.22, 1, 0.36, 1] as const;

export const Newsletter = () => {
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground md:py-24">
      <JarDoodle className="pointer-events-none absolute right-8 top-8 h-20 w-20 text-secondary/40 animate-float-slow" />
      <HeartDoodle className="pointer-events-none absolute left-10 bottom-8 h-16 w-16 text-secondary/40 animate-float-slow" style={{ animationDelay: "1.5s" }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease }}
        className="container max-w-2xl text-center"
      >
        <h2 className="mb-3 font-display text-3xl font-bold sm:text-4xl">Subscribe to our Newsletter</h2>
        <p className="mb-8 text-primary-foreground/70">
          Stay updated with the latest news, exclusive content, and special offers. Join our community today.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            placeholder="Enter your email here"
            className="flex-1 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-5 py-3.5 text-sm placeholder:text-primary-foreground/50 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-secondary"
          />
          <button
            type="submit"
            className="rounded-full bg-secondary px-7 py-3.5 text-sm font-semibold text-secondary-foreground transition-smooth hover:scale-105 hover:shadow-glow"
          >
            Subscribe
          </button>
        </form>
      </motion.div>
    </section>
  );
};
