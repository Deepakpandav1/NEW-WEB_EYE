// src/components/FaqSection.tsx

import React, { useState } from "react";
import {
  faqCategories,
  FAQCategory,
  FAQItem,
} from "../utils/appUtils/constant";

const FaqSection: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggle = (question: string) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  return (
    <section className="relative bg-gradient-to-b from-white to-slate-50 py-8 sm:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Compact Section Header */}
        <div className="text-center mb-4 sm:mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
              Patient Resources
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
        </div>

        {/* FAQ Categories - Compact Horizontal Scroll */}
        <div
          className="flex gap-4 overflow-x-scroll py-2 no-scrollbar scroll-smooth gpu-accelerated"
          style={{ scrollSnapType: "x proximity" }}
        >
          {faqCategories.map((category: FAQCategory, catIdx: number) => (
            <div
              key={catIdx}
              className="flex-shrink-0 w-[280px] sm:w-[320px] space-y-2"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="text-2xl">{category.emoji}</div>
                <h3 className="text-base font-bold text-slate-900">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-2">
                {category.items.map((item: FAQItem, idx: number) => {
                  const isOpen = openQuestion === item.question;
                  return (
                    <div
                      key={idx}
                      className="card-modern border border-gray-100"
                    >
                      <button
                        onClick={() => toggle(item.question)}
                        className="w-full flex justify-between items-start text-left p-3 font-medium focus:outline-none group hover:bg-cyan-50 transition-colors duration-200 rounded-xl"
                      >
                        <span className="flex items-start gap-2 flex-1">
                          <span className="text-base flex-shrink-0 mt-0.5">
                            {item.icon}
                          </span>
                          <span className="text-xs sm:text-sm text-slate-900 group-hover:text-cyan-700 transition-colors duration-200">
                            {item.question}
                          </span>
                        </span>
                        <span
                          className={`ml-2 flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full transition-all duration-300 ${
                            isOpen
                              ? "bg-cyan-600 text-white rotate-180"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7-7-7-7"
                            />
                          </svg>
                        </span>
                      </button>
                      <div
                        className="overflow-hidden transition-all duration-300 ease-in-out"
                        style={{ maxHeight: isOpen ? "500px" : "0" }}
                      >
                        <div className="px-3 pb-3 pt-1">
                          <div className="pl-6 text-xs text-slate-600 leading-relaxed">
                            {item.answer}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
