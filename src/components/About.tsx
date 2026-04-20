import { motion } from "framer-motion";
import aboutImg from "@/assets/about-child.jpg";
import { JarDoodle, SparkleDoodle } from "./Doodles";
import { Eyebrow } from "./Eyebrow";

const ease = [0.22, 1, 0.36, 1] as const;

const tags = ["Charity for Foods", "Charity for Water", "Charity for Education", "Charity for Medical"];

export const About = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-secondary py-24 md:py-32">
      <JarDoodle className="pointer-events-none absolute right-8 top-10 h-20 w-20 text-secondary-foreground/30" />
      <SparkleDoodle className="pointer-events-none absolute left-12 bottom-16 h-8 w-8 text-secondary-foreground/40" />

      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[2rem] shadow-lift">
            <img
              src={aboutImg}
              alt="Child resting on hands, black and white emotional portrait"
              width={1200}
              height={1200}
              loading="lazy"
              className="aspect-square w-full object-cover transition-smooth hover:scale-105"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6, ease }}
            className="absolute -bottom-6 -right-6 rounded-2xl bg-primary px-6 py-5 text-primary-foreground shadow-lift"
          >
            <p className="font-display text-3xl font-bold">12+</p>
            <p className="text-xs uppercase tracking-wider opacity-80">Years of impact</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">— About Us</p>
          <h2 className="mb-5 font-display text-3xl font-bold leading-tight text-primary sm:text-4xl md:text-5xl">
            Committed to Compassion <br /> and Community
          </h2>
          <p className="mb-8 text-base leading-relaxed text-secondary-foreground/80">
            At the heart of our organization is a deep commitment to compassion and community. We believe every individual deserves respect, support, and the opportunity to thrive. Our mission is to create lasting change by delivering inclusive services that meet real needs across health, education, and clean water.
          </p>
          <div className="mb-8 flex flex-wrap gap-3">
            {tags.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className="rounded-full border border-primary/20 bg-background px-4 py-2 text-xs font-semibold text-primary"
              >
                ✓ {t}
              </motion.span>
            ))}
          </div>
          <a href="#causes" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-soft transition-smooth hover:scale-105 hover:shadow-lift">
            Learn More →
          </a>
        </motion.div>
      </div>
    </section>
  );
};
