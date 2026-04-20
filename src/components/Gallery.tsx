import { motion } from "framer-motion";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import { LeafDoodle, SparkleDoodle } from "./Doodles";
import { Eyebrow } from "./Eyebrow";

const ease = [0.22, 1, 0.36, 1] as const;

const photos = [
  { src: g1, label: "Iftar @ Uganda" },
  { src: g2, label: "Iftar @ Gambia" },
  { src: g3, label: "Food Distribution" },
  { src: g4, label: "Community Iftar" },
  { src: g5, label: "Aid for Children" },
  { src: g6, label: "Ramadhan Blessings" },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="relative overflow-hidden py-24 md:py-32">
      <LeafDoodle className="pointer-events-none absolute -left-4 top-12 h-20 w-20 text-primary/15" />
      <SparkleDoodle className="pointer-events-none absolute right-12 top-24 h-8 w-8 text-secondary" />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="mb-14 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end"
        >
          <div>
            <Eyebrow label="Gallery" className="mb-3" />
            <h2 className="font-display text-3xl font-bold leading-tight text-primary sm:text-4xl md:text-5xl">
              Moments of Kindness <br /> Captured Together
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Explore the stories behind every smile. Each photo represents a life touched by your generosity.
          </p>
        </motion.div>

        <div className="grid auto-rows-[320px] grid-cols-1 gap-6 sm:grid-cols-2 md:auto-rows-[360px] md:grid-cols-3">
          {photos.map((p, i) => (
            <motion.figure
              key={p.label}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.6, ease }}
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
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent opacity-0 transition-smooth group-hover:opacity-100" />
              <figcaption className="absolute bottom-5 left-5 translate-y-2 font-display text-lg font-semibold text-primary-foreground opacity-0 transition-smooth group-hover:translate-y-0 group-hover:opacity-100">
                {p.label}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};
