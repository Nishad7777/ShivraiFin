import { FaPiggyBank, FaHandHoldingUsd, FaStore, FaLock, FaLaptop, FaCoins } from "react-icons/fa";

const services = [
  {
    icon: <FaPiggyBank className="text-xl text-primary" />,
    title: "Savings Account",
    description: "Secure your future with our high-interest savings accounts. Multiple options available to suit your financial goals."
  },
  {
    icon: <FaHandHoldingUsd className="text-xl text-primary" />,
    title: "Personal Loan",
    description: "Get financial assistance for your personal needs with our flexible personal loan options at competitive interest rates."
  },
  {
    icon: <FaStore className="text-xl text-primary" />,
    title: "Business Loan",
    description: "Fuel your business growth with our tailored business financing solutions. Quick approval process."
  },
  {
    icon: <FaLock className="text-xl text-primary" />,
    title: "Fixed Deposit",
    description: "Invest your money securely with our fixed deposit schemes offering attractive interest rates and flexible tenures."
  },
  {
    icon: <FaLaptop className="text-xl text-primary" />,
    title: "Internet Banking",
    description: "Access your accounts anytime, anywhere with our secure and user-friendly internet banking platform."
  },
  {
    icon: <FaCoins className="text-xl text-primary" />,
    title: "Various Loan Types",
    description: "Explore our range of specialized loans including education loans, vehicle loans, and more, designed for specific needs."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-neutral-custom">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dark mb-2">Our Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of financial services designed to meet your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-3 bg-primary"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <a href="#" className="text-primary font-semibold hover:text-primary/80 flex items-center">
                  Learn more <i className="fas fa-chevron-right ml-2 text-sm"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
