import { ArrowRight, Leaf, Play } from "lucide-react";
import React from "react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    // setIsMenuOpen(false);
    // setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <section
        id="home"
        className="relative h-[10000PX] flex items-center justify-center overflow-hidden"
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-[#39304A]"></div>

        {/* Modern Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="relative z-10 text-center px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium">
              <Leaf className="w-4 h-4 mr-2" />
              Leading Renewable Energy Solutions
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              PIZY LINKS
              <span className="block text-3xl lg:text-4xl mt-4 text-white/90 font-light">
                RENEWABLE ENERGY & ELECTRICAL INSTALLATIONS
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto font-light">
              PROFICIENCY AND WHERE SKILL MEETS PURPOSE
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <button
                onClick={() => scrollToSection("contact")}
                className="group bg-white text-[#39304A] px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("overview")}
                className="group border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center"
              >
                Learn More
                <Play className="ml-2 w-5 h-5" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white">
                  100+
                </div>
                <div className="text-white/70 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white">
                  5+
                </div>
                <div className="text-white/70 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white">
                  24/7
                </div>
                <div className="text-white/70 text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
