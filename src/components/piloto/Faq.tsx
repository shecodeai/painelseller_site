"use client";

import { useState } from "react";
import { IconChevronDown } from "./Icons";
import { PILOTO_FAQ } from "@/lib/pilotoFaq";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="px-6 py-16 bg-[#f4f4f8]">
      <div className="max-w-[720px] mx-auto">
        <p className="text-xs font-semibold uppercase tracking-[0.6px] text-[#0CA9A6] text-center mb-6">
          Perguntas frequentes
        </p>

        <div className="flex flex-col gap-2.5">
          {PILOTO_FAQ.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.q} className="bg-white border border-[#e0dce8] rounded-[10px] overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-3 px-4 py-3.5 text-left"
                >
                  <span className="text-sm font-semibold text-[#462073]">{item.q}</span>
                  <IconChevronDown
                    size={16}
                    className={`text-[#755BBC] flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-[max-height] duration-200 ease-out"
                  style={{ maxHeight: isOpen ? 120 : 0 }}
                >
                  <p className="px-4 pb-3.5 text-sm text-[#675E66]">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
