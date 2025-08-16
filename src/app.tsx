import LogoShowcase from "./components/LogoShowcase";
import NavBar from "./components/NavBar";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import AppShowcase from "./sections/ShowcaseSection";
import TechstackShow from "./sections/TechstackShow";

const app = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AppShowcase />
      <LogoShowcase />
      <Experience />
      <TechstackShow />
    </>
  );
};

export default app;
