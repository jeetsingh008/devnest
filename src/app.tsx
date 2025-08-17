import LogoShowcase from "./components/LogoShowcase";
import NavBar from "./components/NavBar";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import AppShowcase from "./sections/ShowcaseSection";
import TechstackShow from "./sections/TechstackShow";
import InfiniteTestimonials from "./sections/Testimonials";

const app = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AppShowcase />
      <LogoShowcase />
      <Experience />
      <TechstackShow />
      <InfiniteTestimonials />
    </>
  );
};

export default app;
