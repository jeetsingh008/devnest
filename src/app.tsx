import NavBar from "./components/NavBar";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
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
      {/* <LogoShowcase /> */}
      <Experience />
      <TechstackShow />
      <InfiniteTestimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default app;
