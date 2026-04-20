import { motion } from "framer-motion";
import campaign1 from "@/assets/campaign-1.jpg";
import campaign2 from "@/assets/campaign-2.jpg";
import campaign3 from "@/assets/campaign-3.jpg";

const projects = [
  { img: campaign1, title: "Mission to Educate Underprivileged Children", desc: "Providing quality education to children in need." },
  { img: campaign2, title: "School-Building Initiative for Vulnerable Youth", desc: "Through dedicated efforts, this initiative empowers youth." },
  { img: campaign3, title: "Build Schools to Uplift Communities", desc: "This charity believes every child deserves a quality education." },
];

const ease = [0.22, 1, 0.36, 1] as const;

export const Projects = () => {
  return (
    <section id="projects" className="relative bg-secondary py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">— Our Completed Projects</p>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight text-primary sm:text-4xl md:text-5xl">
            A Comprehensive Collection of Projects That Reflect Our Dedication
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.15, duration: 0.7, ease }}
              className="group overflow-hidden rounded-3xl bg-background shadow-soft transition-smooth hover:-translate-y-2 hover:shadow-lift"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} width={800} height={600} loading="lazy" className="h-full w-full object-cover transition-smooth duration-700 group-hover:scale-110" />
              </div>
              <div className="p-7">
                <h3 className="mb-2 font-display text-xl font-semibold text-foreground">{p.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <a href="#" className="inline-block rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-smooth hover:scale-105">
                  See Project →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
