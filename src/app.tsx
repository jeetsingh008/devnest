import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Process from "./sections/Process";
import About from "./sections/About";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Services />
      <Projects />
      <Process />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
