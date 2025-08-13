import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "overview",
        "history",
        "vision",
        "quality",
        "service",
        "gallery",
        "video",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (


      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#B0A990] to-[#7D7461] rounded-xl flex items-center justify-center">
                <p className="font-bold text-white text-xl">P</p>
              </div>
              <div>
                <span className="text-xl font-bold text-[#39304A]">
                  PIZY LINKS
                </span>
                <div className="text-xs text-[#7D7461] font-medium">
                  RENEWABLE ENERGY
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {[
                { id: "home", label: "Home" },
                { id: "overview", label: "About" },
                { id: "service", label: "Services" },
                { id: "gallery", label: "Projects" },
                { id: "contact", label: "Contact" },
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-[#B0A990] ${
                    activeSection === id
                      ? "text-[#B0A990] border-b-2 border-[#B0A990] pb-1"
                      : "text-[#39304A]"
                  }`}
                >
                  {label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-[#B0A990] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#7D7461] transition-all duration-300 hover:shadow-lg"
              >
                Get Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-[#B0A990] text-white"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-100">
              {[
                { id: "home", label: "Home" },
                { id: "overview", label: "About" },
                { id: "service", label: "Services" },
                { id: "gallery", label: "Projects" },
                { id: "contact", label: "Contact" },
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="block w-full text-left px-4 py-3 text-[#39304A] hover:text-[#B0A990] hover:bg-gray-50 rounded-lg"
                >
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

  );
};

export default NavBar;
