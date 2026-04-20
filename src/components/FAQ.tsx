import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import aboutImg from "@/assets/about-child.jpg";

const faqs = [
  { q: "How can I donate to your charity?", a: "You can donate through our website, by making a check, or through fundraising events. Every contribution, big or small, helps us achieve our mission." },
  { q: "How can I claim my donation tax-deductible?", a: "We provide tax receipts for all qualifying donations. Receipts are emailed within 24 hours of your contribution." },
  { q: "How do you ensure that donations are used effectively?", a: "We publish annual transparency reports and undergo independent audits. Over 90% of every dollar goes directly to our programs." },
  { q: "Can I volunteer with your charity?", a: "Yes! We welcome volunteers locally and internationally. Visit our volunteer page to view current opportunities." },
  { q: "What types of programs does your charity support?", a: "We focus on education, clean water access, healthcare, and environmental sustainability across 40+ countries." },
  { q: "How can I stay updated on your charity's activities?", a: "Subscribe to our newsletter, follow us on social media, or visit our blog for regular updates and stories." },
];

const ease = [0.22, 1, 0.36, 1];

export const FAQ = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container grid items-start gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">— Frequently Asked Questions</p>
          <h2 className="mb-8 font-display text-3xl font-bold leading-tight text-primary sm:text-4xl md:text-5xl">
            Have any question For Us?
          </h2>
          <Accordion type="single" collapsible defaultValue="0" className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={String(i)}
                className="overflow-hidden rounded-2xl border border-border bg-card px-5 data-[state=open]:bg-primary data-[state=open]:text-primary-foreground"
              >
                <AccordionTrigger className="text-left font-display text-base font-semibold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm opacity-80">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="overflow-hidden rounded-[2rem] shadow-lift lg:sticky lg:top-24"
        >
          <img src={aboutImg} alt="Child looking with hope" width={1200} height={1200} loading="lazy" className="aspect-[4/5] w-full object-cover" />
        </motion.div>
      </div>
    </section>
  );
};
