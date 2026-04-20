import { motion } from "framer-motion";
import { HeartDoodle } from "./Doodles";

const cols = [
  { title: "Our Work", links: ["Causes", "Projects", "Volunteers", "Events"] },
  { title: "Our Story", links: ["About", "Careers", "Press", "Contact"] },
  { title: "Partner with us", links: ["Corporate", "Internships", "Foundations", "Media"] },
];

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-primary pt-20 pb-10 text-primary-foreground"
    >
      <div className="container">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <a href="#" className="mb-5 flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-secondary text-secondary-foreground">
                <HeartDoodle className="h-5 w-5" />
              </span>
              <span className="font-display text-xl font-bold">Raha</span>
            </a>
            <p className="mb-6 text-sm text-primary-foreground/70">
              Great brands connect with the support of small charities that create meaningful change in the communities they serve.
            </p>
            <div className="flex gap-3">
              <a href="#donate" className="rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground transition-smooth hover:scale-105">
                Donate Now
              </a>
              <a href="#contact" className="rounded-full border border-primary-foreground/30 px-5 py-2.5 text-sm font-semibold transition-smooth hover:bg-primary-foreground/10">
                Contact us
              </a>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="mb-4 font-display text-base font-semibold">{c.title}</h4>
              <ul className="space-y-2.5 text-sm text-primary-foreground/70">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="transition-colors hover:text-secondary">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/60 sm:flex-row">
          <p>© Copyright 2026 Raha. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-secondary">Privacy</a>
            <a href="#" className="hover:text-secondary">Terms</a>
            <a href="#" className="hover:text-secondary">Cookies</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
