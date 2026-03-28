// src/components/FaqSection.tsx

import React, { useId, useState } from "react";
import {
  faqCategories,
  FAQCategory,
  FAQItem,
} from "../utils/appUtils/constant";

const FaqSection: React.FC = () => {
  const sectionId = useId();
  const [openKey, setOpenKey] = useState<string | null>(null);

  const toggle = (key: string) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };

  return (
    <section
      className="relative bg-gradient-to-b from-white via-slate-50/80 to-slate-50 py-10 sm:py-14"
      aria-labelledby={`${sectionId}-heading`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-8 sm:mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="bg-emerald-50 text-emerald-800 ring-1 ring-emerald-100/80 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
              Patient resources
            </span>
          </div>
          <h2
            id={`${sectionId}-heading`}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight"
          >
            Frequently asked{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
              questions
            </span>
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-slate-600 leading-relaxed">
            Quick answers about appointments, billing, admission, and reports.
            Tap a question to read the full answer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {faqCategories.map((category: FAQCategory, catIdx: number) => (
            <div
              key={catIdx}
              className="rounded-2xl border border-slate-200/90 bg-white shadow-sm shadow-slate-200/40 p-4 sm:p-6"
            >
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100">
                <span
                  className="text-2xl shrink-0 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-800"
                  aria-hidden
                >
                  {category.emoji}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {category.title}
                </h3>
              </div>

              <ul className="space-y-2 list-none m-0 p-0" role="list">
                {category.items.map((item: FAQItem, idx: number) => {
                  const itemKey = `${catIdx}-${idx}`;
                  const isOpen = openKey === itemKey;
                  const panelId = `${sectionId}-panel-${itemKey}`;
                  const buttonId = `${sectionId}-btn-${itemKey}`;

                  return (
                    <li key={itemKey}>
                      <div className="rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-slate-50 transition-colors duration-200 overflow-hidden">
                        <button
                          id={buttonId}
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                          onClick={() => toggle(itemKey)}
                          className="w-full flex gap-3 items-start text-left p-3.5 sm:p-4 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 rounded-xl"
                        >
                          <span
                            className="text-lg shrink-0 mt-0.5 opacity-90"
                            aria-hidden
                          >
                            {item.icon}
                          </span>
                          <span className="flex-1 text-sm sm:text-[0.9375rem] text-slate-800 leading-snug pr-1">
                            {item.question}
                          </span>
                          <span
                            className={`shrink-0 mt-0.5 w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300 motion-reduce:transition-none ${
                              isOpen
                                ? "bg-cyan-600 border-cyan-600 text-white rotate-180"
                                : "bg-white border-slate-200 text-slate-500"
                            }`}
                            aria-hidden
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
                                strokeWidth={2}
                                d="M6 9l6 6 6-6"
                              />
                            </svg>
                          </span>
                        </button>

                        <div
                          id={panelId}
                          role="region"
                          aria-labelledby={buttonId}
                          className={`grid motion-reduce:transition-none transition-[grid-template-rows] duration-300 ease-out ${
                            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                          }`}
                        >
                          <div className="min-h-0 overflow-hidden">
                            <div className="px-3.5 sm:px-4 pb-4 pt-0 border-t border-slate-100/90">
                              <p className="pl-0 sm:pl-[calc(1.25rem+0.5rem)] text-sm sm:text-[0.9375rem] text-slate-600 leading-relaxed whitespace-pre-line">
                                {item.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
