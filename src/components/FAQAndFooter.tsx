'use client';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import {  Twitter, Github, Linkedin } from 'lucide-react';
const FAQAndFooter = () => {
    const faqData = [
      {
        question: "How does SocialStats access my Instagram data?",
        answer: "SocialStats uses Instagram's official API to securely access your account data. We never store your login credentials and you can revoke access at any time."
      },
      {
        question: "What metrics does SocialStats track?",
        answer: "We track engagement rates, follower growth, reach, impressions, and detailed post performance. Our analytics cover everything from audience demographics to optimal posting times."
      },
      {
        question: "Can I export the analytics data?",
        answer: "Yes, you can export all analytics data in various formats including CSV and PDF for your reports and presentations."
      },
      {
        question: "Is there a free trial available?",
        answer: "Yes, we offer a 14-day free trial on all plans. No credit card required to start."
      }
    ];
  
    const footerLinks = {
      product: {
        title: "Product",
        links: ["Features", "Pricing", "API", "Integration"]
      },
      resources: {
        title: "Resources",
        links: ["Documentation", "Blog", "Support", "Status"]
      },
      company: {
        title: "Company",
        links: ["About", "Careers", "Privacy", "Terms"]
      }
    };
  
    return (
      <div className="w-full bg-black text-white">
        {/* FAQ Section */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400">
              Everything you need to know about SocialStats
            </p>
          </div>
  
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-zinc-900 rounded-lg px-6"
                >
                  <AccordionTrigger className="hover:no-underline py-4 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
  
        {/* Footer */}
        <footer className="border-t border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Brand Section */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold">SocialStats</h2>
                <p className="text-gray-400 text-sm">
                  Making Instagram analytics simple and actionable for creators and businesses.
                </p>
                <div className="flex space-x-4">
                  <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                  <Github className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                  <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                </div>
              </div>
  
              {/* Links Sections */}
              {Object.entries(footerLinks).map(([key, section]) => (
                <div key={key}>
                  <h3 className="font-semibold mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.links.map((link, index) => (
                      <li key={index}>
                        <a 
                          href="#" 
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </footer>
      </div>
    );
  };
  export default FAQAndFooter;