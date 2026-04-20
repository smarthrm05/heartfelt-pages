import { motion } from "framer-motion";
import campaign1 from "@/assets/alquran.jpg";
import campaign2 from "@/assets/khatamul.jpg";
import campaign3 from "@/assets/gallery-1.jpg";
import campaign4 from "@/assets/masjib.jpg";

const focusAreas = [
{
img: campaign1,
title: "Quranic Projects",
desc: "Supporting Quran distribution, memorisation programmes, and access to Islamic education."
},

{
img: campaign2,
title: "Khatamul Quran",
desc: "Facilitating Quran completion initiatives that unite communities in worship and reflection."
},

{
img: campaign3,
title: "Waqaf Projects",
desc: "Building sustainable charitable impact through long-term waqaf initiatives."
},

{
img: campaign4,
title: "Madrasah and Masjid Developments",
desc: "Supporting the growth of Islamic institutions through development and restoration."
}
];

const ease = [0.22, 1, 0.36, 1] as const;

export const Focus = () => {
return (
<section
id="focus"
className="relative bg-[#F8F5F1] py-24 md:py-32"
>
<div className="container">

<motion.div
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.7, ease }}
className="mb-14 text-center"
>

<p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#D9A07B]">
— Our Focus Areas
</p>

<h2 className="mx-auto max-w-3xl font-display text-3xl font-bold leading-tight text-[#6B4A34] sm:text-4xl md:text-5xl">
Our Focus in
<br />

<span className="text-[#D9A07B]">
Faith & Community
</span>

</h2>

<p className="mx-auto mt-4 max-w-2xl text-sm text-[#6B4A34]/100">
Rooted in faith and driven by compassion, our initiatives are dedicated to uplifting communities and creating lasting impact where it matters most.
</p>

</motion.div>

<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
{focusAreas.map((item, i) => (
<motion.article
key={item.title}
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{
delay: i * 0.15,
duration: 0.7,
ease
}}
className="group overflow-hidden rounded-3xl bg-white shadow-soft transition-smooth hover:-translate-y-2 hover:shadow-lift"
>

<div className="aspect-[4/3] overflow-hidden">
<img
src={item.img}
alt={item.title}
className="h-full w-full object-cover transition-smooth duration-700 group-hover:scale-110"
/>
</div>

<div className="p-7">
<h3 className="mb-3 font-display text-xl font-semibold text-[#6B4A34]">
{item.title}
</h3>

<p className="text-sm leading-relaxed text-[#6B4A34]/70">
{item.desc}
</p>
</div>

</motion.article>
))}
</div>

</div>
</section>
);
};