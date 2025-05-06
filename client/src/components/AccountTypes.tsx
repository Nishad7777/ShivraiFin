import { FaCheck } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const accountTypes = [
  {
    title: "Savings Account",
    interestRate: "4.5%",
    features: [
      "Minimum balance requirements",
      "Free ATM card",
      "Internet banking access",
      "Quarterly interest payout"
    ]
  },
  {
    title: "Current Account",
    interestRate: "0%",
    features: [
      "Unlimited transactions",
      "Overdraft facility",
      "Cheque book facility",
      "Statement of accounts"
    ]
  },
  {
    title: "Fixed Deposit",
    interestRate: "7.0%",
    features: [
      "Flexible tenure options",
      "Higher interest rates",
      "Loan against FD facility",
      "Auto-renewal option"
    ]
  },
  {
    title: "Recurring Deposit",
    interestRate: "6.5%",
    features: [
      "Monthly deposit scheme",
      "Flexible tenure options",
      "Systematic saving habit",
      "Loan against RD available"
    ]
  }
];

const AccountTypes = () => {
  return (
    <section id="accounts" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dark mb-2">Account Types</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the account that best suits your financial needs and goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {accountTypes.map((account, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-primary text-white p-4 text-center">
                <h3 className="text-xl font-bold">{account.title}</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold text-primary">{account.interestRate}</span>
                  <span className="text-gray-600 text-sm">Interest p.a.</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {account.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <FaCheck className="text-green-500 mt-1 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full font-bold">
                  Open {account.title.includes("Account") ? "Account" : account.title === "Fixed Deposit" ? "FD" : "RD"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccountTypes;
