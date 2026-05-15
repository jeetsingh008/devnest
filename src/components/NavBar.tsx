import { useState, useEffect } from "react";

import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header
      className={`glass-nav fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg shadow-[rgba(0,0,0,0.3)]" : ""
      }`}
      style={scrolled ? { backgroundColor: "rgba(12, 18, 34, 0.92)" } : undefined}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* ── Logo ── */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="shrink-0"
        >
          <img
            src="/images/logos/el-logo.png"
            alt="East Leviathans"
            className="h-10 w-auto"
          />
        </a>

        {/* ── Desktop Nav + CTA ── */}
        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {navLinks.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors text-sm font-medium cursor-pointer"
              >
                {label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => handleNavClick("contact")}
            className="shimmer-button px-5 py-2 text-sm font-medium text-white cursor-pointer"
          >
            Start a Project
          </button>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="lg:hidden relative w-6 h-5 flex flex-col justify-between cursor-pointer"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-full h-0.5 bg-[var(--color-text-primary)] rounded-full transition-all duration-300 origin-center ${
              mobileOpen ? "rotate-45 translate-y-[9px]" : ""
            }`}
          />
          <span
            className={`block w-full h-0.5 bg-[var(--color-text-primary)] rounded-full transition-all duration-300 ${
              mobileOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-full h-0.5 bg-[var(--color-text-primary)] rounded-full transition-all duration-300 origin-center ${
              mobileOpen ? "-rotate-45 -translate-y-[9px]" : ""
            }`}
          />
        </button>
      </div>

      {/* ── Mobile Dropdown ── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-4 flex flex-col gap-4 border-t border-[var(--color-border-subtle)]">
          {navLinks.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors text-sm font-medium text-left cursor-pointer py-1"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("contact")}
            className="shimmer-button px-5 py-2.5 text-sm font-medium text-white w-fit cursor-pointer mt-2"
          >
            Start a Project
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
