import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Zap,
  Leaf,
  Shield,
  Camera,
  Play,
  CheckCircle,
  Battery,
  Sun,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

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
    <div className="min-h-screen bg-white">
      {/* Modern Navigation */}
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

      {/* Modern Hero Section */}
      <section
        id="home"
        className="relative min-h-[800px] mt-16 flex items-center justify-center overflow-hidden"
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-[#7D7461]"></div>

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

      {/* Modern Company Overview */}
      <section id="overview" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-[#B0A990]/10 rounded-full text-[#B0A990] text-sm font-medium mb-6">
                  <Shield className="w-4 h-4 mr-2" />
                  About Our Company
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#39304A] leading-tight">
                  Powering Nigeria's
                  <span className="text-[#B0A990]"> Sustainable Future</span>
                </h2>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                At PIZY LINKS RENEWABLE ENERGY & ELECTRICAL INSTALLATIONS LTD,
                we are committed to delivering high-quality services with
                expertise and dedication. We specialize in sustainable energy
                solutions and professional electrical installations.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center text-[#B0A990]">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Certified Experts</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Industry-certified professionals
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-[#B0A990]">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Quality Guaranteed</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Premium materials & workmanship
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-[#B0A990]">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span className="font-semibold">24/7 Support</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Round-the-clock assistance
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-[#B0A990]">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Eco-Friendly</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Sustainable energy solutions
                  </p>
                </div>
              </div>

              <button
                onClick={() => scrollToSection("contact")}
                className="bg-[#B0A990] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#7D7461] transition-all duration-300 hover:shadow-lg"
              >
                Get Started Today
              </button>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Renewable Energy Solutions"
                  className="rounded-3xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-[#B0A990] to-[#7D7461] rounded-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Services Section */}
      <section id="service" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#B0A990]/10 rounded-full text-[#B0A990] text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Our Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#39304A] mb-6">
              What We Do Best
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From residential solar installations to large-scale commercial
              projects, we deliver comprehensive energy solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#B0A990] to-[#7D7461] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sun className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#39304A] mb-4">
                Solar Installation
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Complete solar energy systems for residential and commercial
                properties, including design, installation, and maintenance.
              </p>
              <div className="flex items-center text-[#B0A990] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>

            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#7D7461] to-[#635C51] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#39304A] mb-4">
                Electrical Installation
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Professional electrical wiring, lighting systems, and power
                distribution for new construction and renovations.
              </p>
              <div className="flex items-center text-[#B0A990] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>

            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#635C51] to-[#39304A] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Battery className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#39304A] mb-4">
                Energy Management
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Smart energy management solutions, battery storage systems, and
                energy efficiency consulting services.
              </p>
              <div className="flex items-center text-[#B0A990] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Gallery */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#B0A990]/10 rounded-full text-[#B0A990] text-sm font-medium mb-6">
              <Camera className="w-4 h-4 mr-2" />
              Our Work
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#39304A] mb-6">
              Project Gallery
            </h2>
            <p className="text-xl text-gray-600">
              Take a look at some of our recent projects and installations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "https://images.pexels.com/photos/9875344/pexels-photo-9875344.jpeg?auto=compress&cs=tinysrgb&w=800",
              "https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=800",
              "https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=800",
              "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800",
              "https://images.pexels.com/photos/9800028/pexels-photo-9800028.jpeg?auto=compress&cs=tinysrgb&w=800",
              "https://images.pexels.com/photos/8853501/pexels-photo-8853501.jpeg?auto=compress&cs=tinysrgb&w=800",
            ].map((src, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <img
                  src={src}
                  alt={`Project ${index + 1}`}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#39304A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 text-white">
                    <h4 className="text-lg font-semibold mb-2">
                      Project {index + 1}
                    </h4>
                    <p className="text-sm text-white/80">
                      Renewable Energy Installation
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Video Section */}
      <section id="video" className="py-24 bg-[#39304A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-white/80 text-sm font-medium mb-6">
              <Play className="w-4 h-4 mr-2" />
              Watch Our Work
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              See Us in Action
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Watch how our expert team delivers exceptional renewable energy
              solutions.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/9875344/pexels-photo-9875344.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Video Thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <button className="w-24 h-24 bg-white/90 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-2xl">
                  <Play className="w-8 h-8 text-[#39304A] ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#B0A990]/10 rounded-full text-[#B0A990] text-sm font-medium mb-6">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#39304A] mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contact us today for a consultation and let's discuss how we can
              power your future with renewable energy.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#39304A] mb-6">
                Send us a Message
              </h3>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-[#39304A] mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#B0A990] focus:border-[#B0A990] text-[#39304A] placeholder-gray-400 transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-[#39304A] mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#B0A990] focus:border-[#B0A990] text-[#39304A] placeholder-gray-400 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-[#39304A] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#B0A990] focus:border-[#B0A990] text-[#39304A] placeholder-gray-400 resize-none transition-all duration-300"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#B0A990] text-white py-4 px-6 rounded-2xl font-semibold hover:bg-[#7D7461] transition-all duration-300 hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[#39304A] mb-6">
                  Contact Information
                </h3>
                <p className="text-gray-600 mb-8">
                  Get in touch with us through any of these channels. We're here
                  to help you with all your renewable energy needs.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#B0A990] to-[#7D7461] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#39304A] mb-1">
                      Address
                    </h4>
                    <p className="text-gray-600">
                      Nerat Shopping Complex, Shop No. 1<br />
                      Latya Rayfield, Jos, Plateau State
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#7D7461] to-[#635C51] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#39304A] mb-1">Phone</h4>
                    <p className="text-gray-600">+2348109056624</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#635C51] to-[#39304A] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#39304A] mb-1">Email</h4>
                    <p className="text-gray-600">pizylinksenergy@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#B0A990] to-[#7D7461] p-6 rounded-2xl text-white">
                <h4 className="font-semibold mb-3">Business Hours</h4>
                <div className="space-y-2 text-white/90">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Emergency Only</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="bg-[#202030] text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8 mb-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#B0A990] to-[#7D7461] rounded-xl flex items-center justify-center">
                  <p className="font-bold text-white text-xl">P</p>
                </div>
                <div>
                  <span className="text-xl font-bold">PIZY LINKS</span>
                  <div className="text-sm text-gray-400">RENEWABLE ENERGY</div>
                </div>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Leading renewable energy solutions provider in Nigeria,
                committed to sustainable development and exceptional service
                delivery.
              </p>
              <p className="text-[#B0A990] font-medium">
                PROFICIENCY AND WHERE SKILL MEETS PURPOSE
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {["About Us", "Services", "Projects", "Contact"].map((link) => (
                  <button
                    key={link}
                    className="block text-gray-400 hover:text-[#B0A990] transition-colors"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2">
                {[
                  "Solar Installation",
                  "Electrical Work",
                  "Energy Management",
                  "Maintenance",
                ].map((service) => (
                  <div key={service} className="text-gray-400">
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 PIZY LINKS RENEWABLE ENERGY & ELECTRICAL INSTALLATIONS LTD.
              All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <button className="text-gray-400 hover:text-[#B0A990] transition-colors">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-[#B0A990] transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
