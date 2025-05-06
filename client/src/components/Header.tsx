import { useState, useEffect } from "react";
import { FaBars, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { scrollToSection } from "@/lib/utils";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white ${isScrolled ? "shadow-md" : ""} transition-shadow duration-300`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mr-2">
              S
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-primary">Shivrai Mahila</h1>
              <p className="text-xs md:text-sm text-dark">Urban Co-op. Credit Society Ltd.</p>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-primary focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <FaBars className="text-2xl" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <button onClick={() => handleNavClick("home")} className="font-semibold hover:text-primary transition-colors">Home</button>
            <button onClick={() => handleNavClick("about")} className="font-semibold hover:text-primary transition-colors">About Us</button>
            <button onClick={() => handleNavClick("services")} className="font-semibold hover:text-primary transition-colors">Services</button>
            <button onClick={() => handleNavClick("accounts")} className="font-semibold hover:text-primary transition-colors">Account Types</button>
            <button onClick={() => handleNavClick("contact")} className="font-semibold hover:text-primary transition-colors">Contact</button>
          </nav>

          {/* Social Media Links */}
          <div className="hidden md:flex items-center space-x-3">
            <a href="#" className="text-primary hover:text-primary/80 transition-colors" aria-label="Facebook">
              <FaFacebookF className="text-xl" />
            </a>
            <a href="#" className="text-green-500 hover:text-green-600 transition-colors" aria-label="WhatsApp">
              <FaWhatsapp className="text-xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden bg-white ${mobileMenuOpen ? "block" : "hidden"} shadow-md`}>
        <div className="container mx-auto px-4 py-3 space-y-3">
          <button onClick={() => handleNavClick("home")} className="block w-full text-left font-semibold hover:text-primary transition-colors">Home</button>
          <button onClick={() => handleNavClick("about")} className="block w-full text-left font-semibold hover:text-primary transition-colors">About Us</button>
          <button onClick={() => handleNavClick("services")} className="block w-full text-left font-semibold hover:text-primary transition-colors">Services</button>
          <button onClick={() => handleNavClick("accounts")} className="block w-full text-left font-semibold hover:text-primary transition-colors">Account Types</button>
          <button onClick={() => handleNavClick("contact")} className="block w-full text-left font-semibold hover:text-primary transition-colors">Contact</button>
          
          <div className="flex items-center space-x-3 pt-2 border-t border-gray-200">
            <a href="#" className="text-primary hover:text-primary/80 transition-colors" aria-label="Facebook">
              <FaFacebookF className="text-xl" />
            </a>
            <a href="#" className="text-green-500 hover:text-green-600 transition-colors" aria-label="WhatsApp">
              <FaWhatsapp className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
