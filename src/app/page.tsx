import ScrollRevealInit from "@/components/ScrollReveal";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import HowIWork from "@/components/HowIWork";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <ScrollRevealInit />
      <Nav />
      <Hero />
      <Profile />
      <Skills />
      <Projects />
      {/* <About />
      <Testimonials /> */}
      <HowIWork />
      <Contact />
    </>
  );
}
