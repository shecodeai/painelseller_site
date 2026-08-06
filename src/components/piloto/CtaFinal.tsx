import PilotoForm from "./PilotoForm";
import AuroraBlobs from "./AuroraBlobs";

export default function CtaFinal() {
  return (
    <section id="cta-final" className="relative overflow-hidden pl-aurora-bg-warm pl-grain px-6 py-20">
      <AuroraBlobs variant="cta" />
      <div className="relative max-w-[480px] mx-auto text-center flex flex-col items-center gap-3">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Entre para o grupo piloto</h2>
        <p className="text-sm text-[#D8CDE9]">
          Vagas limitadas para vendedores com catálogo ativo na Amazon Brasil.
        </p>

        <div className="w-full mt-4 text-left">
          <PilotoForm />
        </div>
      </div>
    </section>
  );
}
