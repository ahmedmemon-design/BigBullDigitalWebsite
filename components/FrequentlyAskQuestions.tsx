'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const SimpleFAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is the typical timeline for a project?",
      a: "Project timelines vary based on complexity. Small projects take 2-4 weeks, medium projects 4-8 weeks, and large solutions 8-16 weeks."
    },
    {
      q: "How do you ensure project deadlines are met?",
      a: "We use agile methodology with weekly sprints and regular check-ins to ensure timely delivery without compromising quality."
    },
    {
      q: "How do you handle website maintenance and updates?",
      a: "We offer maintenance plans including updates, security monitoring, performance optimization, and 24/7 support."
    },
    {
      q: "What strategies do you use for digital marketing?",
      a: "Our strategies include SEO, social media marketing, content marketing, PPC campaigns, and analytics tracking."
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept credit cards, bank transfers, PayPal, and offer flexible payment plans for different needs."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-red-500 mb-4">FAQ</h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Frequency & <span className="text-red-500">Questions</span>
          </h1>
          <p className="text-gray-400">
            Common questions about our services and processes
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-white/10 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 flex justify-between items-center gap-4 hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-medium text-left">
                  {faq.q}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? 'rotate-180 text-red-400' : 'text-gray-400'
                  }`}
                />
              </button>
              
              <div className={`px-6 transition-all duration-300 ${
                openIndex === index ? 'pb-6 max-h-40' : 'max-h-0'
              } overflow-hidden`}>
                <p className="text-gray-400 border-l-2 border-red-500 pl-4">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-12 text-center text-gray-400">
          <p>Still have questions? Contact us at info@bigbuilddigital.com</p>
        </div>
      </div>
    </div>
  );
};

export default SimpleFAQSection;