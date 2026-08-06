import ProductPreview from "./ProductPreview";
import AuroraBlobs from "./AuroraBlobs";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pl-aurora-bg pl-grain px-6 pt-16 pb-24 sm:pt-24 sm:pb-32">
      <AuroraBlobs variant="hero" />
      <div className="relative max-w-[1100px] mx-auto">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-5">
          <span className="inline-flex items-center rounded-[20px] border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-1.5 text-[11px] font-medium text-white">
            Feito para vendedores Amazon Brasil · Vagas limitadas no piloto
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
            Você sabe quanto está <span className="pl-text-gradient-warm">lucrando</span> em tempo real?
          </h1>

          <p className="text-base sm:text-lg text-[#D8CDE9] max-w-xl">
            Comissão, tarifa FBA, armazenagem, Ads e imposto, cruzados com seu custo, produto por produto, num
            painel só.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 mt-2 w-full sm:w-auto">
            <a
              href="#cta-final"
              className="pl-btn-gradient pl-glow-purple w-full sm:w-auto rounded-[10px] text-white text-sm font-semibold px-7 py-3.5 text-center"
            >
              Quero participar do piloto gratuito
            </a>
            <a
              href="#responde"
              className="pl-glass hover:bg-white/10 transition-colors w-full sm:w-auto rounded-[10px] text-white text-sm font-semibold px-7 py-3.5 text-center"
            >
              Ver como funciona
            </a>
          </div>

          <p className="text-xs text-[#B9A9D6]">Piloto gratuito, sem cartão de crédito. Vagas limitadas.</p>
        </div>

        <div className="mt-14 sm:mt-16 max-w-3xl mx-auto">
          <ProductPreview />
        </div>
      </div>
    </section>
  );
}
