import LogoShowcase from "./components/LogoShowcase";
import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import AppShowcase from "./sections/ShowcaseSection";

const app = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AppShowcase />
      <LogoShowcase />
    </>
  );
};

export default app;
