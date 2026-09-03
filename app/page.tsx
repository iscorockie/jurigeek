import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Impact } from "@/components/Impact";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Impact />
        <Services />
        <About />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
