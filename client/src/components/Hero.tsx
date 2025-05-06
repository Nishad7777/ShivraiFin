import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";

const Hero = () => {
  const handleNavClick = (id: string) => {
    scrollToSection(id);
  };

  return (
    <section id="home" className="relative bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to Shivrai Mahila Urban Co-op. Credit Society</h1>
          <p className="text-xl md:text-2xl font-semibold mb-6">Thev surakashe chi vishwas Aryata</p>
          <p className="mb-8 text-lg opacity-90">Serving our community with trust and reliability since 2014</p>
          <div className="flex flex-wrap gap-4">
            <Button 
              variant="secondary" 
              size="xl"
              onClick={() => handleNavClick("services")}
              className="text-dark font-bold transition-colors"
            >
              Our Services
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => handleNavClick("contact")}
              className="bg-white hover:bg-neutral text-primary font-bold transition-colors"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
