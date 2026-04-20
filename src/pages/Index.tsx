import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Campaigns } from "@/components/Campaigns";
import { Impact } from "@/components/Impact";
import { Testimonials } from "@/components/Testimonials";
import { Projects } from "@/components/Projects";
import { Newsletter } from "@/components/Newsletter";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Raha — Every Helping Hand, Every Heartfelt Change";
    const meta = document.querySelector('meta[name="description"]');
    const desc = "Join Raha — a charity creating lasting impact through education, clean water, healthcare and community programs. Donate today.";
    if (meta) meta.setAttribute("content", desc);
    else {
      const m = document.createElement("meta");
      m.name = "description"; m.content = desc;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Campaigns />
      <Impact />
      <Testimonials />
      <Projects />
      <Newsletter />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
