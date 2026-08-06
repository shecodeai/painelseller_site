"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import BrowserChrome from "./BrowserChrome";
import {
  MockRepasses,
  MockEstoque,
  MockDesempenho,
  MockPublicidade,
  MockRecomendacoes,
  MockCalculadora,
} from "./MockScreens";

function RealScreen({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) {
  return (
    <div className="rounded-[14px] border border-[#e0dce8] overflow-hidden shadow-xl shadow-[#462073]/10 bg-white">
      <BrowserChrome />
      <Image src={src} alt={alt} width={width} height={height} className="w-full h-auto" />
    </div>
  );
}

interface TourItem {
  id: string;
  question: string;
  answer: string;
  render: () => ReactNode;
}

const ITEMS: TourItem[] = [
  {
    id: "vendas-agora",
    question: "Como estão minhas vendas agora?",
    answer: "Tempo real, sem planilha.",
    render: () => (
      <RealScreen src="/images/piloto/tela-monitor.png" alt="Tela do Monitor de Vendas" width={1254} height={621} />
    ),
  },
  {
    id: "lucro-pedido",
    question: "Quanto lucrei em cada pedido?",
    answer: "Margem líquida já descontada.",
    render: () => <RealScreen src="/images/piloto/tela-vendas.png" alt="Tela de Vendas" width={1254} height={625} />,
  },
  {
    id: "repasse",
    question: "Quanto a Amazon me pagou?",
    answer: "Repasse líquido e quando cai.",
    render: () => <MockRepasses />,
  },
  {
    id: "estoque",
    question: "O que devo comprar, quanto e quando?",
    answer: "Previsão de ruptura.",
    render: () => <MockEstoque />,
  },
  {
    id: "desempenho",
    question: "Esse produto está me dando lucro?",
    answer: "Campeão, Estável ou Em Queda.",
    render: () => <MockDesempenho />,
  },
  {
    id: "ads",
    question: "Quanto estou gastando em Ads por produto?",
    answer: "Saúde da campanha automática.",
    render: () => <MockPublicidade />,
  },
  {
    id: "recomendacoes",
    question: "O que preciso fazer pra vender mais?",
    answer: "Direcionamento baseado em dados.",
    render: () => <MockRecomendacoes />,
  },
  {
    id: "preco",
    question: "Esse preço é competitivo antes de eu publicar?",
    answer: "Simulação com cenário competitivo.",
    render: () => <MockCalculadora />,
  },
];

export default function TourProduto() {
  const [active, setActive] = useState(0);
  const current = ITEMS[active];

  return (
    <section id="responde" className="px-6 py-16">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center gap-4 mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#e0dce8] bg-[#f4f0fa] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#462073]">
            Como o painel responde
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight text-[#462073]">
            8 perguntas que todo vendedor Amazon se faz.
            <br />
            <span className="pl-text-gradient-brand">8 telas que já respondem.</span>
          </h2>
          <p className="text-sm text-[#675E66] max-w-md">
            Clique em cada pergunta abaixo e veja a tela que já responde ela — sem planilha, sem exportar
            relatório.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible lg:w-[300px] flex-shrink-0 pb-2 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0">
            {ITEMS.map((item, index) => {
              const isActive = index === active;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`text-left flex-shrink-0 w-[230px] lg:w-auto rounded-[10px] border px-3.5 py-3 transition-all ${
                    isActive
                      ? "bg-[#f4f0fa] border-[#8008DC] shadow-sm shadow-[#8008DC]/20"
                      : "bg-white border-[#e0dce8] hover:border-[#d0cad8]"
                  }`}
                >
                  <p
                    className={`text-xs sm:text-sm font-semibold leading-snug ${
                      isActive ? "text-[#462073]" : "text-[#50484F]"
                    }`}
                  >
                    {item.question}
                  </p>
                  <p className="text-[11px] text-[#675E66] mt-0.5">{item.answer}</p>
                </button>
              );
            })}
          </div>

          <div className="flex-1 min-w-0">{current.render()}</div>
        </div>
      </div>
    </section>
  );
}
