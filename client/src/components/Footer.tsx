import { FaFacebookF, FaWhatsapp, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { scrollToSection } from "@/lib/utils";
import logoImage from "../assets/logo.png";

const Footer = () => {
  const handleNavClick = (id: string) => {
    scrollToSection(id);
  };

  return (
    <footer className="bg-dark-custom text-white">
      <div className="container mx-auto px-4 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src={logoImage} 
                alt="Shivrai Mahila Urban Co-op. Credit Society Logo" 
                className="w-10 h-10 rounded-full mr-2 object-cover"
              />
              <div>
                <h3 className="text-lg font-bold">Shivrai Mahila <span className="text-primary">Urban</span></h3>
                <p className="text-sm text-gray-400">Est. 2014</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Thev surakashe chi vishwas Aryata
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/share/1BivBprih4" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors" 
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a 
                href="https://wa.me/9309176930" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors" 
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><button onClick={() => handleNavClick("home")} className="text-gray-400 hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => handleNavClick("about")} className="text-gray-400 hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => handleNavClick("services")} className="text-gray-400 hover:text-white transition-colors">Services</button></li>
              <li><button onClick={() => handleNavClick("accounts")} className="text-gray-400 hover:text-white transition-colors">Account Types</button></li>
              <li><button onClick={() => handleNavClick("contact")} className="text-gray-400 hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Savings Account</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Personal Loan</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Business Loan</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Fixed Deposit</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Internet Banking</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex">
                <FaMapMarkerAlt className="text-primary mt-1 mr-3" />
                <span className="text-gray-400">Buldhana, Maharashtra, India</span>
              </li>
              <li className="flex">
                <FaPhoneAlt className="text-primary mt-1 mr-3" />
                <span className="text-gray-400">+91 9527385070</span>
              </li>
              <li className="flex">
                <FaEnvelope className="text-primary mt-1 mr-3" />
                <span className="text-gray-400">vishnuambaskar111@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Shivrai Mahila Urban Co-op. Credit Society Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
