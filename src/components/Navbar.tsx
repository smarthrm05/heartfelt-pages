import { motion } from "framer-motion";
import { HeartDoodle } from "./Doodles";

export const Navbar = () => {

  const links = ["Home", "About", "Gallery", "Focus Areas", "Contact"];

  const message =
    "Assalamualaikum, I would like to know more about Inaayah SG";

  const waLink = `https://wa.me/6590620969?text=${encodeURIComponent(message)}`;

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-x-0 top-0 z-30"
    >
      <div className="container flex items-center justify-between py-6">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-primary-foreground">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-secondary text-secondary-foreground">
            <HeartDoodle className="h-5 w-5" />
          </span>

          <span className="font-display text-xl font-bold">
            Raha
          </span>
        </a>

        {/* Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l}
              href={
                l === "Focus Areas"
                  ? "#focus"
                  : `#${l.toLowerCase().replace(/\s+/g, "-")}`
              }
              className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-[#D9A07B]"
            >
              {l}
            </a>
          ))}
        </nav>

        {/* WhatsApp Button */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 rounded-full bg-[#D9A07B] px-5 py-2.5 text-sm font-semibold text-black shadow-soft transition-smooth hover:scale-105 hover:bg-[#D9A07B]"
        >
          <svg
            viewBox="0 0 32 32"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            <path d="M16.001 3C8.821 3 3 8.82 3 16c0 2.821.92 5.437 2.48 7.56L3 29l5.57-2.43A12.94 12.94 0 0016 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 23.5c-2.26 0-4.37-.66-6.14-1.8l-.44-.28-3.3 1.44.88-3.21-.29-.46A10.44 10.44 0 015.5 16c0-5.79 4.71-10.5 10.5-10.5S26.5 10.21 26.5 16 21.79 26.5 16 26.5zm5.74-7.69c-.31-.15-1.83-.9-2.11-1.01-.28-.1-.49-.15-.7.15-.2.31-.8 1.01-.98 1.22-.18.2-.36.23-.67.08-.31-.15-1.3-.48-2.48-1.52-.91-.81-1.52-1.81-1.7-2.12-.18-.31-.02-.48.13-.63.14-.14.31-.36.46-.54.15-.18.2-.31.31-.51.1-.2.05-.38-.03-.54-.08-.15-.7-1.68-.96-2.3-.25-.6-.5-.52-.7-.53h-.6c-.2 0-.52.08-.8.38s-1.04 1.01-1.04 2.46c0 1.45 1.07 2.85 1.22 3.05.15.2 2.1 3.2 5.1 4.48.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.2-.59-.35z"/>
          </svg>

          WhatsApp
        </a>

      </div>
    </motion.header>
  );
};