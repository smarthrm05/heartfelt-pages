import { motion } from "framer-motion";
import campaign1 from "@/assets/campaign-1.jpg";
import campaign2 from "@/assets/campaign-2.jpg";
import campaign3 from "@/assets/campaign-3.jpg";
import { Counter } from "./Counter";
import { ProgressBar } from "./ProgressBar";

const campaigns = [
  { img: campaign1, title: "Educate Underprivileged Children", desc: "Providing quality education to children in need.", raised: 75234, goal: 100000, progress: 75 },
  { img: campaign2, title: "School-Building Initiative for Vulnerable Youth", desc: "Through dedicated efforts, this initiative aims to give underprivileged youth.", raised: 75234, goal: 100000, progress: 75 },
  { img: campaign3, title: "Build Schools to Uplift Communities", desc: "This charity believes every child deserves a quality education.", raised: 45034, goal: 100000, progress: 45 },
];

const ease = [0.22, 1, 0.36, 1];

export const Campaigns = () => {
  return (
    <section id="donate" className="relative py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">— Start Donations</p>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight text-primary sm:text-4xl md:text-5xl">
            Transparent Donations: See How You Make a Difference
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {campaigns.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.15, duration: 0.7, ease }}
              className="group overflow-hidden rounded-3xl bg-card shadow-soft transition-smooth hover:-translate-y-2 hover:shadow-lift"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition-smooth duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-7">
                <h3 className="mb-2 font-display text-xl font-semibold text-foreground">{c.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                <div className="mb-2 flex items-baseline justify-between text-sm">
                  <span className="font-display text-2xl font-bold text-primary">
                    $<Counter end={c.raised} />
                  </span>
                  <span className="text-xs text-muted-foreground">raised of ${c.goal.toLocaleString()}</span>
                </div>
                <ProgressBar value={c.progress} />
                <button className="mt-6 w-full rounded-full bg-secondary py-3 text-sm font-semibold text-secondary-foreground transition-smooth hover:scale-[1.02] hover:bg-secondary/90 hover:shadow-glow">
                  Donate Now
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
