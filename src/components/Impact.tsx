import { motion } from "framer-motion";
import { HeartDoodle, SparkleDoodle, JarDoodle } from "./Doodles";
import impactChild from "@/assets/image_2.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

/* WhatsApp Icon sama seperti Footer */
const WhatsAppIcon = ({ className = "h-5 w-5" }) => (
  <svg
    viewBox="0 0 32 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M16.001 3C8.821 3 3 8.82 3 16c0 2.821.92 5.437 2.48 7.56L3 29l5.57-2.43A12.94 12.94 0 0016 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 23.5c-2.26 0-4.37-.66-6.14-1.8l-.44-.28-3.3 1.44.88-3.21-.29-.46A10.44 10.44 0 015.5 16c0-5.79 4.71-10.5 10.5-10.5S26.5 10.21 26.5 16 21.79 26.5 16 26.5zm5.74-7.69c-.31-.15-1.83-.9-2.11-1.01-.28-.1-.49-.15-.7.15-.2.31-.8 1.01-.98 1.22-.18.2-.36.23-.67.08-.31-.15-1.3-.48-2.48-1.52-.91-.81-1.52-1.81-1.7-2.12-.18-.31-.02-.48.13-.63.14-.14.31-.36.46-.54.15-.18.2-.31.31-.51.1-.2.05-.38-.03-.54-.08-.15-.7-1.68-.96-2.3-.25-.6-.5-.52-.7-.53h-.6c-.2 0-.52.08-.8.38s-1.04 1.01-1.04 2.46c0 1.45 1.07 2.85 1.22 3.05.15.2 2.1 3.2 5.1 4.48.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.2-.59-.35z"/>
  </svg>
);

export const Impact = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8F5F1] py-24 text-[#6B4A34] md:py-32">

      {/* Image */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-full md:w-1/2 lg:w-[45%]">
        <img
          src={impactChild}
          alt="Smiling child supported by our community"
          width={1024}
          height={1024}
          loading="lazy"
          className="h-full w-full object-cover object-left"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#F8F5F1] via-[#F8F5F1]/0 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8F5F1] via-transparent to-transparent" />
      </div>

      {/* Doodles */}
      <HeartDoodle className="absolute left-8 top-12 h-12 w-12 text-[#C8A98D]/50 animate-float-slow" />

      <HeartDoodle
        className="absolute left-16 top-28 h-10 w-10 text-[#C8A98D]/40 animate-float-slow"
        style={{ animationDelay: "1s" }}
      />

      <SparkleDoodle className="absolute left-24 top-20 h-6 w-6 text-[#C8A98D]/60 animate-float-slow" />

      <JarDoodle
        className="absolute left-10 bottom-16 h-20 w-20 text-[#C8A98D]/40 animate-float-slow"
        style={{ animationDelay: "1.5s" }}
      />

      <SparkleDoodle className="absolute left-32 bottom-24 h-5 w-5 text-[#C8A98D]/50 animate-float-slow" />

      <div className="container relative">
        <div className="max-w-2xl text-center md:text-left">

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="mb-8 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
          >
            <span className="text-[#6B4A34]">
              Every Good Deed Begins
            </span>

            <br className="hidden md:block" />

            <span className="text-[#D9A07B]">
              with a First Step
            </span>
          </motion.h2>

          {/* Sub text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7, ease }}
            className="mb-10 max-w-md text-lg text-[#6B4A34]/80 md:text-xl"
          >
            Give with purpose. Start your sadaqah journey today.
          </motion.p>

          {/* Button */}
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6, ease }}
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#8B5E3C] px-8 py-4 font-semibold text-white shadow-glow transition-smooth hover:scale-105 hover:bg-[#6B4A34]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Chat with Admin on WhatsApp
          </motion.a>

        </div>
      </div>

    </section>
  );
};