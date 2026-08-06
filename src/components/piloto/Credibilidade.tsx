import Image from "next/image";
import AuroraBlobs from "./AuroraBlobs";

export default function Credibilidade() {
  return (
    <section className="relative overflow-hidden pl-aurora-bg-alt pl-grain px-6 py-20">
      <AuroraBlobs variant="trust" />
      <div className="relative max-w-[1000px] mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-14">
        <div className="flex-shrink-0 relative">
          <div className="absolute -inset-3 rounded-[18px] bg-gradient-to-br from-[#0CA9A6]/40 to-[#F98A4D]/30 blur-xl -z-10" />
          <Image
            src="/images/piloto/aina.jpeg"
            alt="Ainá, fundadora da Agência Ainah"
            width={240}
            height={240}
            className="rounded-[14px] object-cover w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] border border-white/20"
          />
        </div>

        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
          <div>
            <p className="text-sm font-semibold text-white">Ainá</p>
            <p className="text-xs text-[#B9A9D6]">Fundadora, Agência Ainah e sócia Painel Seller</p>
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.6px] text-[#5EEAD4]">
            Quem constrói isso com a gente
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Dados e prática de quem entende como o <span className="pl-text-gradient-warm">motor da Amazon</span>{" "}
            funciona
          </h2>
          <p className="text-sm sm:text-base text-[#D8CDE9] leading-relaxed">
            As recomendações do Painel Seller nascem de dados e prática real de quem entende como o motor da
            Amazon funciona: a Agência Ainah, credenciada no Amazon Service Provider Network (SPN) há mais de 6
            anos, e sua fundadora, mentora certificada pela própria Amazon. Regra testada em operação real,
            antes de virar sugestão automática na sua conta.
          </p>
          <span className="pl-glass inline-flex items-center rounded-[20px] px-4 py-2 text-xs font-medium text-white">
            Metodologia de mentora certificada Amazon
          </span>
        </div>
      </div>
    </section>
  );
}
