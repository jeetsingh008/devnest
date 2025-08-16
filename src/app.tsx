import LogoShowcase from "./components/LogoShowcase";
import NavBar from "./components/NavBar";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import AppShowcase from "./sections/ShowcaseSection";

const app = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AppShowcase />
      <LogoShowcase />
      <Experience />
    </>
  );
};

export default app;
