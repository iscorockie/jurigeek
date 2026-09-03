import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Impact } from "@/components/Impact";
import { Audience } from "@/components/Audience";
import { Services } from "@/components/Services";
import { JuriAI } from "@/components/JuriAI";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Impact />
        <Audience />
        <Services />
        <JuriAI />
        <About />
        <Education />
        <Testimonials />
        <Contact />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
