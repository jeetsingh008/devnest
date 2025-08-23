import NavBar from "./components/NavBar";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import TechstackShow from "./sections/TechstackShow";
import InfiniteTestimonials from "./sections/Testimonials";

const app = () => {
  return (
    <>
      {/* <LogoShowcase /> */}
      {/* <InfiniteTestimonials /> */}
      {/* <Experience /> */}
      <NavBar />
      <Hero />
      <TechstackShow />
      <Contact />
      <Footer />
    </>
  );
};

export default app;
