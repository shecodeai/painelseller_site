import Image from "next/image";
import AuroraBlobs from "./AuroraBlobs";

const STATS = [
  { label: "faturamento", value: "+860%" },
  { label: "itens do pedido", value: "15,3x" },
  { label: "unidades vendidas", value: "14,2x" },
];

export default function CaseReal() {
  return (
    <section className="relative overflow-hidden pl-aurora-bg-alt pl-grain px-6 py-20 border-t border-white/5">
      <AuroraBlobs variant="cta" />
      <div className="relative max-w-[900px] mx-auto">
        <div className="text-center flex flex-col items-center gap-3 mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.6px] text-[#5EEAD4]">
            Resultado real, não promessa
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Mesmo cliente. Mesmo período. <span className="pl-text-gradient-warm">Resultado real.</span>
          </h2>
          <p className="text-sm text-[#D8CDE9] max-w-lg">
            Comparativo de vendas de 01/01 a 16/07, ano a ano — mesmo cliente ativo na plataforma desde
            janeiro de 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          <div className="pl-glass rounded-[14px] p-6 text-center">
            <p className="text-xs font-medium text-[#B9A9D6] mb-2">2025</p>
            <p className="text-3xl font-bold text-white mb-1">R$ 8.571,03</p>
            <p className="text-xs text-[#D8CDE9]">189 pedidos · 222 unidades</p>
          </div>
          <div className="rounded-[14px] p-6 text-center pl-btn-gradient pl-glow-purple">
            <p className="text-xs font-medium text-white/80 mb-2">2026</p>
            <p className="text-3xl font-bold text-white mb-1">R$ 82.267,68</p>
            <p className="text-xs text-white/80">2.900 pedidos · 3.160 unidades</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="pl-glass rounded-[14px] py-4 text-center">
              <p className="text-xl sm:text-2xl font-bold pl-text-gradient-warm">{stat.value}</p>
              <p className="text-[10px] sm:text-xs text-[#D8CDE9] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="pl-glass rounded-[14px] overflow-hidden p-2">
          <div className="rounded-[8px] overflow-hidden">
            <Image
              src="/images/piloto/case-painel-vendas.png"
              alt="Print do painel de vendas do marketplace, comparando os mesmos períodos em 2025 e 2026"
              width={1254}
              height={725}
              className="w-full h-auto"
            />
          </div>
        </div>
        <p className="text-xs text-[#B9A9D6] text-center mt-2">
          Print do painel de vendas do próprio marketplace, extraído em 16/07/2026.
        </p>

        <p className="text-xs text-[#D8CDE9]/80 text-center mt-6 max-w-xl mx-auto leading-relaxed">
          Resultado de um único cliente, ativo desde janeiro de 2025 — não é média de carteira. É fruto da
          metodologia de gestão de contas aplicada em consultoria manual pela Agência Ainah; o Painel Seller
          sistematiza essa mesma abordagem em produto.
        </p>
      </div>
    </section>
  );
}
