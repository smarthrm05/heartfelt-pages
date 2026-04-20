import { motion } from "framer-motion";
import g1 from "@/assets/img1.jpeg";
import g2 from "@/assets/img3.jpeg";
import g3 from "@/assets/img4.jpeg";
import g4 from "@/assets/img5.jpeg";
import g5 from "@/assets/img2.jpeg";
import g6 from "@/assets/img6.jpeg";
import { LeafDoodle, SparkleDoodle } from "./Doodles";

const ease = [0.22, 1, 0.36, 1] as const;

const photos = [
  { src: g1, label: "Iftar @ Uganda" },
  { src: g2, label: "Iftar @ Gambia" },
  { src: g3, label: "Iftar @ Gaza" },
  { src: g4, label: "Food Distribution" },
  { src: g5, label: "Iftar @ Uganda" },
  { src: g6, label: "Iftar @ Gaza" },
];

export const Gallery = () => {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden py-24 md:py-32 bg-[#FCE8DD]"
    >
      {/* Decorative doodles */}
      <LeafDoodle className="pointer-events-none absolute -left-4 top-12 h-20 w-20 text-[#D9A07B]/30" />

      <SparkleDoodle className="pointer-events-none absolute right-12 top-24 h-8 w-8 text-[#D9A07B]" />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mb-14 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#8B5E3C]">
              — Gallery
            </p>

            <h2 className="font-display text-3xl font-bold leading-tight text-[#6B4A34] sm:text-4xl md:text-5xl">
              Moments of Kindness <br />
              <span className="text-[#D9A07B]">
                Captured Together
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#6B4A34]/70">
            Explore the stories behind every smile. Each photo represents a life touched by your generosity.
          </p>
        </motion.div>

        <div className="grid auto-rows-[320px] grid-cols-1 gap-6 sm:grid-cols-2 md:auto-rows-[360px] md:grid-cols-3">
          {photos.map((p, i) => (
            <motion.figure
              key={p.label}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.08,
                duration: 0.6,
                ease
              }}
              className="group relative overflow-hidden rounded-3xl shadow-soft transition-smooth hover:shadow-lift"
            >
              <img
                src={p.src}
                alt={p.label}
                width={800}
                height={800}
                loading="lazy"
                className="h-full w-full object-cover transition-smooth duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#8B5E3C]/90 via-[#8B5E3C]/30 to-transparent opacity-0 transition-smooth group-hover:opacity-100" />

              <figcaption className="absolute bottom-5 left-5 translate-y-2 font-display text-lg font-semibold text-white opacity-0 transition-smooth group-hover:translate-y-0 group-hover:opacity-100">
                {p.label}
              </figcaption>

            </motion.figure>
          ))}
        </div>

      </div>
    </section>
  );
};