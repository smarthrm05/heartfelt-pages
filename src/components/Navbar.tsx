import { motion } from "framer-motion";
import { HeartDoodle } from "./Doodles";

export const Navbar = () => {
  const links = ["Home", "About", "Causes", "Projects", "Blog", "Contact"];
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-x-0 top-0 z-30"
    >
      <div className="container flex items-center justify-between py-6">
        <a href="#" className="flex items-center gap-2 text-primary-foreground">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-secondary text-secondary-foreground">
            <HeartDoodle className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-bold">Raha</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-secondary">
              {l}
            </a>
          ))}
        </nav>
        <a href="#donate" className="rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground shadow-soft transition-smooth hover:scale-105 hover:shadow-glow">
          Donate Now
        </a>
      </div>
    </motion.header>
  );
};
