import Image from "next/image";

export default function ProductPreview() {
  return (
    <div className="relative">
      <div className="pl-glass pl-glow-purple rounded-[16px] overflow-hidden">
        <div className="bg-white/5 border-b border-white/10 px-4 py-2.5 flex items-center gap-3">
          <div className="flex gap-1.5 flex-shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
          </div>
          <div className="flex-1 max-w-[260px] mx-auto bg-white/10 border border-white/10 rounded-[6px] px-3 py-1 text-center">
            <span className="text-[10px] text-white/70">app.painelseller.com.br</span>
          </div>
        </div>
        <Image
          src="/images/piloto/tela-monitor.png"
          alt="Painel Seller em uso: Monitor de Vendas"
          width={1254}
          height={621}
          priority
          className="w-full h-auto block"
        />
      </div>

      <div className="hidden sm:block pl-float-a absolute -left-10 top-16 bg-white rounded-[10px] px-4 py-3 shadow-[0_20px_50px_-8px_rgba(0,0,0,0.5)]">
        <p className="text-[10px] text-[#755BBC] font-semibold uppercase tracking-[0.4px]">Vendas hoje</p>
        <p className="text-lg font-bold text-[#462073] leading-tight">
          R$ 292,78 <span className="text-[#0CA9A6]">▲</span>
        </p>
      </div>

      <div className="hidden sm:block pl-float-b absolute -right-10 bottom-10 bg-white rounded-[10px] px-4 py-3 shadow-[0_20px_50px_-8px_rgba(0,0,0,0.5)] max-w-[210px]">
        <p className="text-[10px] text-[#755BBC] font-semibold uppercase tracking-[0.4px]">Produto top do dia</p>
        <p className="text-sm font-bold text-[#462073] leading-tight truncate">Vela Espiral Aniversário</p>
        <p className="text-xs text-[#0CA9A6] font-semibold">R$ 62,70 vendidos</p>
      </div>

      <div className="hidden md:block pl-float-c absolute -right-8 top-6 bg-white rounded-[10px] px-4 py-3 shadow-[0_20px_50px_-8px_rgba(0,0,0,0.5)]">
        <p className="text-[10px] text-[#755BBC] font-semibold uppercase tracking-[0.4px]">Taxas Amazon hoje</p>
        <p className="text-lg font-bold text-[#C74C16] leading-tight">R$ 103,72</p>
      </div>
    </div>
  );
}
