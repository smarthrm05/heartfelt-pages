import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Focus } from "@/components/Focus";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Raha — Every Helping Hand, Every Heartfelt Change";
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Focus />
      <Gallery />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;