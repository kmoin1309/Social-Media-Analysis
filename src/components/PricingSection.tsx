'use client';
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "9",
      period: "/month",
      features: [
        "Basic Analytics Dashboard",
        "Weekly Reports",
        "Up to 1 Account",
      ],
      buttonText: "Get Started",
      buttonVariant: "secondary",
    },
    {
      name: "Professional",
      price: "29",
      period: "/month",
      features: [
        "Advanced Analytics Dashboard",
        "Daily Reports",
        "Up to 5 Accounts",
        "Competitor Analysis",
      ],
      buttonText: "Get Started",
      buttonVariant: "default",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "99",
      period: "/month",
      features: [
        "Custom Analytics Dashboard",
        "Real-time Reports",
        "Unlimited Accounts",
        "Priority Support",
      ],
      buttonText: "Contact Sales",
      buttonVariant: "secondary",
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600">
            Choose the perfect plan for your Instagram growth journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                plan.popular ? "bg-violet-600 text-white" : "bg-white"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-violet-100 text-violet-600 px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">$</span>
                  <span className="text-6xl font-bold">{plan.price}</span>
                  <span
                    className={`ml-2 ${
                      plan.popular ? "text-violet-100" : "text-gray-500"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3"
                  >
                    <Check
                      className={`w-5 h-5 ${
                        plan.popular ? "text-violet-100" : "text-violet-600"
                      }`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-white text-violet-600 hover:bg-gray-100"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
                variant={plan.buttonVariant}
              >
                {plan.buttonText}
              </Button>
            </Card>
          ))}
        </div>

        <p className="text-center text-gray-500">
          All plans include 14-day free trial. No credit card required.
        </p>
      </div>
    </div>
  );
};
export default PricingSection;
