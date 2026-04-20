import { motion } from "framer-motion";
import { HeartDoodle } from "./Doodles";

// ✅ WhatsApp Icon (SVG asli)
const WhatsAppIcon = ({ className = "h-4 w-4" }) => (
  <svg
    viewBox="0 0 32 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M16.001 3C8.821 3 3 8.82 3 16c0 2.821.92 5.437 2.48 7.56L3 29l5.57-2.43A12.94 12.94 0 0016 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 23.5c-2.26 0-4.37-.66-6.14-1.8l-.44-.28-3.3 1.44.88-3.21-.29-.46A10.44 10.44 0 015.5 16c0-5.79 4.71-10.5 10.5-10.5S26.5 10.21 26.5 16 21.79 26.5 16 26.5zm5.74-7.69c-.31-.15-1.83-.9-2.11-1.01-.28-.1-.49-.15-.7.15-.2.31-.8 1.01-.98 1.22-.18.2-.36.23-.67.08-.31-.15-1.3-.48-2.48-1.52-.91-.81-1.52-1.81-1.7-2.12-.18-.31-.02-.48.13-.63.14-.14.31-.36.46-.54.15-.18.2-.31.31-.51.1-.2.05-.38-.03-.54-.08-.15-.7-1.68-.96-2.3-.25-.6-.5-.52-.7-.53h-.6c-.2 0-.52.08-.8.38s-1.04 1.01-1.04 2.46c0 1.45 1.07 2.85 1.22 3.05.15.2 2.1 3.2 5.1 4.48.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.2-.59-.35z" />
  </svg>
);

const cols = [
  { title: "Our Work", links: ["Causes", "Projects", "Volunteers", "Events"] },
  { title: "Our Story", links: ["About", "Careers", "Press", "Contact"] },
  { title: "Partner with us", links: ["Corporate", "Internships", "Foundations", "Media"] },
];

export const Footer = () => {
  // ✅ WhatsApp Config
  const message = "Assalamualaikum, I would like to know more about Inaayah SG";

  const wa1 = `https://wa.me/6590620969?text=${encodeURIComponent(message)}`;
  const wa2 = `https://wa.me/6592426981?text=${encodeURIComponent(message)}`;

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

            {/* ✅ WhatsApp Buttons */}
            <div className="flex flex-col gap-3">

              {/* WA 1 */}
              <a
                href={wa1}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#25D366]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                +65 9062 0969
              </a>

              {/* WA 2 */}
              <a
                href={wa2}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-secondary px-5 py-2.5 text-sm font-semibold text-secondary transition-all duration-300 hover:scale-105 hover:bg-[#25D366] hover:text-white"
              >
                <WhatsAppIcon className="h-4 w-4" />
                +65 9242 6981
              </a>

            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="mb-4 font-display text-base font-semibold">{c.title}</h4>
              <ul className="space-y-2.5 text-sm text-primary-foreground/70">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="transition-colors hover:text-secondary">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/60 sm:flex-row">
          <p>© Copyright 2026 Inaayah SG. All rights reserved.</p>
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