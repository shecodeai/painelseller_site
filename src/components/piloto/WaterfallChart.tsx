"use client";

import { useState } from "react";

interface WaterfallStep {
  label: string;
  heightPct: number;
  description: string;
  emphasis?: boolean;
}

const STEPS: WaterfallStep[] = [
  { label: "Receita bruta", heightPct: 100, description: "Valor total das vendas, antes de qualquer desconto." },
  { label: "Comissão", heightPct: 80, description: "Taxa que a Amazon cobra por categoria de produto vendido." },
  {
    label: "FBA/Armaz.",
    heightPct: 64,
    description: "Custo de logística e espaço ocupado no centro de distribuição.",
  },
  { label: "Ads", heightPct: 52, description: "Investimento em campanhas patrocinadas dentro da Amazon." },
  { label: "Imposto", heightPct: 42, description: "Tributos sobre a venda, conforme o seu regime fiscal." },
  {
    label: "Margem líq.",
    heightPct: 30,
    description: "O que realmente sobra depois de todos os descontos.",
    emphasis: true,
  },
];

export default function WaterfallChart() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? STEPS[activeIndex] : null;

  return (
    <div className="bg-[#f0edf6] border border-[#e0dce8] rounded-[10px] px-4 pt-8 pb-4 sm:px-6">
      <div className="flex items-end justify-between gap-2 sm:gap-4 h-40">
        {STEPS.map((step, index) => {
          const isActive = activeIndex === index;
          const isDimmed = activeIndex !== null && !isActive;
          return (
            <button
              key={step.label}
              type="button"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              onFocus={() => setActiveIndex(index)}
              onBlur={() => setActiveIndex(null)}
              onClick={() => setActiveIndex(isActive ? null : index)}
              className="flex-1 flex flex-col items-center justify-end h-full rounded-t-[4px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8008DC]/40"
              aria-label={`${step.label}: ${step.description}`}
            >
              <div
                className="w-full rounded-t-[4px] transition-[opacity] duration-150"
                style={{
                  height: `${step.heightPct}%`,
                  background: step.emphasis || isActive ? "#0CA9A6" : "rgba(12,169,166,0.45)",
                  opacity: isDimmed ? 0.35 : 1,
                }}
              />
            </button>
          );
        })}
      </div>
      <div className="flex items-start justify-between gap-2 sm:gap-4 mt-2">
        {STEPS.map((step, index) => (
          <p
            key={step.label}
            className={`flex-1 text-center text-[10px] sm:text-[11px] leading-tight transition-colors ${
              activeIndex === index ? "text-[#462073] font-semibold" : "text-[#675E66]"
            }`}
          >
            {step.label}
          </p>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-[#e0dce8] min-h-[34px] flex items-center justify-center">
        <p className="text-xs text-[#50484F] text-center">
          {active ? active.description : "Toque em cada etapa pra entender o que ela representa."}
        </p>
      </div>
    </div>
  );
}
