import { useState } from "react";
import { IoEye, IoArrowForward } from "react-icons/io5";

const faqData = [
  {
    id: 1,
    question: "How often do you need to repair a roof?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  },
  {
    id: 2,
    question: "How long should a roof repair take?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  },
  {
    id: 3,
    question: "How often do you need to repair a roof?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  },
];

export function FaqSection() {
  const [openFaq, setOpenFaq] = useState(2);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-0.5 bg-[#9B1915]"></div>
                <span className="text-red-700 font-medium text-sm tracking-wide uppercase">
                  FAQ'S
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                Exceptional craftsmanship for your roof
              </h2>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqData.map((faq) => (
                <div key={faq.id} className="border-b border-gray-200 pb-4">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between text-left py-2 hover:text-red-700 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-800">
                      {faq.question}
                    </h3>
                    <IoEye
                      className={`w-5 h-5 transition-colors ${
                        openFaq === faq.id ? "text-red-700" : "text-gray-400"
                      }`}
                    />
                  </button>

                  {openFaq === faq.id && (
                    <div className="mt-3 pr-8">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* See All Button */}
            <button className="bg-[#9B1915] hover:bg-red-800 text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 transition-colors">
              SEE ALL
              <IoArrowForward className="w-4 h-4" />
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Construction workers installing roof tiles"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
