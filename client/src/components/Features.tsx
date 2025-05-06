import { FaShieldAlt, FaHandHoldingUsd, FaUsers } from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt className="text-2xl text-primary" />,
    title: "Secure Banking",
    description: "Your money is safe with our reliable banking solutions."
  },
  {
    icon: <FaHandHoldingUsd className="text-2xl text-primary" />,
    title: "Competitive Rates",
    description: "Benefit from our attractive interest rates on loans and deposits."
  },
  {
    icon: <FaUsers className="text-2xl text-primary" />,
    title: "Community Focused",
    description: "We're committed to supporting the growth of our local community."
  }
];

const Features = () => {
  return (
    <section className="py-12 bg-neutral-custom">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
