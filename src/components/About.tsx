import { motion } from "framer-motion";
import aboutImg from "@/assets/image_1.jpg";
import { JarDoodle, SparkleDoodle } from "./Doodles";
import { Eyebrow } from "./Eyebrow";

const ease = [0.22, 1, 0.36, 1] as const;

const tags = [
  "Global Sadaqah Opportunities",
  "Transparent Donation Platform",
  "Simple & Accessible Giving",
  "Trustworthy Humanitarian Initiatives"
];

export const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F4EEE8] py-24 md:py-32"
    >
      <JarDoodle className="pointer-events-none absolute right-8 top-10 h-20 w-20 text-[#C8A98D]/40" />
      <SparkleDoodle className="pointer-events-none absolute left-12 bottom-16 h-8 w-8 text-[#C8A98D]/50" />

      <div className="container grid items-center gap-12 lg:grid-cols-2">
        
        {/* Image Section */}
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
              alt="Humanitarian support through Inaayah SG sadaqah initiatives"
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
            className="absolute -bottom-6 -right-6 rounded-2xl bg-[#8B5E3C] px-6 py-5 text-[#F4EEE8] shadow-lift"
          >
            <p className="font-display text-3xl font-bold">100%</p>
            <p className="text-xs uppercase tracking-wider opacity-80">
              Transparent Giving
            </p>
          </motion.div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#8B5E3C]">
            — About Us
          </p>
          <h2 className="mb-5 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            <span className="text-[#6B4A34]">
              Connecting You to  Meaningful
            </span>{" "}
            <span className="text-[#D9A07B]">
              Sadaqah Worldwide
            </span>
            <br />
          </h2>

          <p className="mb-8 text-base leading-relaxed text-[#6B4A34]">
            Inaayah SG is a Singapore-based online donation platform that connects
            individuals with meaningful sadaqah opportunities around the world.
            We provide an accessible and trustworthy platform for those who wish
            to participate in impactful humanitarian initiatives.
          </p>

          <p className="mb-8 text-base leading-relaxed text-[#6B4A34]">
            Our sadaqah platforms and initiatives are designed to make participation
            simple, clear and transparent for everyone.
          </p>

          <div className="mb-8 flex flex-wrap gap-3">
            {tags.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.3 + i * 0.1,
                  duration: 0.5
                }}
                className="rounded-full border border-[#C8A98D] bg-[#FFF9F4] px-4 py-2 text-xs font-semibold text-[#8B5E3C]"
              >
                ✓ {t}
              </motion.span>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};