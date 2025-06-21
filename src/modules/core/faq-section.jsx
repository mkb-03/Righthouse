import { useState } from "react";
import { IoEye, IoArrowForward } from "react-icons/io5";
import faq1 from "../../assets/faq-1.jpg";
import flatRoofing from "../../assets/flat-roofing.jpg";

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
    <div className="py-16 bg-[#F3F1F2]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex gap-3">
                <div>
                  <div className="w-7 h-0.5 bg-[#9B1915]"></div>
                  <div className="w-10 h-0.5 bg-[#9B1915] mt-2"></div>
                </div>
                <span className="text-[#9B1915] font-medium text-sm tracking-wide uppercase">
                  FAQ's
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                Exceptional craftsmanship for your roof
              </h2>
            </div>

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

            <button className="bg-[#9B1915] hover:bg-red-800 text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 transition-colors">
              SEE ALL
              <IoArrowForward className="w-4 h-4" />
            </button>
          </div>

          <div className="relative">
            <div className="flex  overflow-hidden">
              <img
                src={faq1}
                alt="Construction workers installing roof tiles"
                className="w-1/2 h-full"
              />
              <img
                src={flatRoofing}
                alt="Construction workers installing roof tiles"
                className="w-1/2 h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
