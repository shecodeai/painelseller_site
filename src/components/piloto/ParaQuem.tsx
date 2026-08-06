import type { ReactNode } from "react";
import {
  IconDownload,
  IconBox,
  IconStar,
  IconEye,
  IconSearch,
  IconCheck,
} from "./Icons";

interface Feature {
  icon: ReactNode;
  category: string;
  title: string;
  description: string;
  color: string;
  tint: string;
}

const FEATURES: Feature[] = [
  {
    icon: <IconCheck size={20} />,
    category: "Financeiro",
    title: "Lucro líquido por pedido",
    description: "Receita menos taxa Amazon menos custo do produto, calculado automaticamente em cada venda.",
    color: "#0CA9A6",
    tint: "#E3F5F4",
  },
  {
    icon: <IconDownload size={20} />,
    category: "Repasses",
    title: "Repasse líquido e quando cai",
    description: "Quanto a Amazon já pagou, o que falta receber e a data prevista do próximo repasse.",
    color: "#8008DC",
    tint: "#F1E8FB",
  },
  {
    icon: <IconBox size={20} />,
    category: "Estoque",
    title: "Previsão de ruptura",
    description: "Alerta antes do produto zerar, com base no ritmo de vendas de cada SKU.",
    color: "#F98A4D",
    tint: "#FEF1E7",
  },
  {
    icon: <IconStar size={20} />,
    category: "Desempenho",
    title: "Classificação automática",
    description: "Campeão, Estável ou Em Queda — sem precisar montar planilha nem cruzar relatório.",
    color: "#462073",
    tint: "#ECE7F3",
  },
  {
    icon: <IconEye size={20} />,
    category: "Publicidade",
    title: "Saúde da campanha",
    description: "Leitura automática: campanha saudável, em atenção ou dando prejuízo, por produto.",
    color: "#0CA9A6",
    tint: "#E3F5F4",
  },
  {
    icon: <IconSearch size={20} />,
    category: "Inteligência",
    title: "Calculadora de preço",
    description: "Simulação de margem e comparação com a concorrência antes de publicar o anúncio.",
    color: "#8008DC",
    tint: "#F1E8FB",
  },
];

export default function ParaQuem() {
  return (
    <section id="pra-quem" className="px-6 py-16 bg-[#f4f4f8]">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#e0dce8] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#0CA9A6] mb-4">
            Pra quem é
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight text-[#462073] mb-3">
            Feito para quem quer <span className="pl-text-gradient-brand">escalar as vendas</span>
          </h2>
          <p className="text-base text-[#675E66]">
            Você fala a língua da sua operação — o painel entrega a ferramenta exata pra cada parte dela.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="relative bg-white border border-[#e0dce8] rounded-[16px] p-6 overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div
                className="absolute -right-6 -top-6 w-24 h-24 rounded-full opacity-[0.12] pointer-events-none"
                style={{ background: feature.color }}
              />

              <div className="relative flex items-start justify-between mb-4">
                <span
                  className="w-11 h-11 rounded-[12px] flex items-center justify-center flex-shrink-0"
                  style={{ background: feature.tint, color: feature.color }}
                >
                  {feature.icon}
                </span>
                <span
                  className="text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full flex-shrink-0"
                  style={{ background: feature.tint, color: feature.color }}
                >
                  {feature.category}
                </span>
              </div>

              <p className="relative text-base font-bold text-[#462073] mb-1.5 leading-snug">{feature.title}</p>
              <p className="relative text-sm text-[#675E66] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
