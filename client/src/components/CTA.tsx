import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";

const CTA = () => {
  const handleNavClick = (id: string) => {
    scrollToSection(id);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Join Shivrai Mahila Urban Co-op. Credit Society today and experience secure banking with personalized service.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            variant="outline"
            size="xl"
            onClick={() => handleNavClick("contact")}
            className="bg-white text-primary hover:bg-neutral font-bold transition-colors"
          >
            Contact Us
          </Button>
          <Button
            variant="secondary"
            size="xl"
            onClick={() => handleNavClick("accounts")}
            className="text-dark font-bold transition-colors"
          >
            Open an Account
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
