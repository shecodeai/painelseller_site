import WaterfallChart from "./WaterfallChart";

const PONTOS = [
  {
    titulo: "Você não sabe se o repasse está certo",
    texto:
      "O dinheiro cai na conta, mas o extrato não diz a que pedido se refere, nem quais descontos foram aplicados antes.",
  },
  {
    titulo: "A taxa some no meio do caminho",
    texto:
      "Comissão, publicidade, logística e serviços chegam a consumir entre 35% e 40% do faturamento bruto — e quase nunca dá pra ver isso em uma tela só.",
  },
  {
    titulo: "O preço é definido no escuro",
    texto:
      "Um dos erros mais comuns é calcular o preço de venda sem considerar frete, embalagem, imposto e tempo operacional — e só descobrir o prejuízo no fim do mês.",
  },
];

export default function Dor() {
  return (
    <section className="px-6 py-16 bg-[#f4f4f8]">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.6px] text-[#0CA9A6] mb-3">O problema</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#462073] leading-tight mb-6">
            Vender ficou fácil. Entender o que sobrou, não.
          </h2>

          <div className="flex flex-col gap-3">
            {PONTOS.map((ponto) => (
              <div
                key={ponto.titulo}
                className="bg-white border border-[#e0dce8] rounded-[14px] p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-sm font-semibold text-[#462073] leading-snug mb-1">{ponto.titulo}</p>
                <p className="text-sm text-[#675E66] leading-relaxed">{ponto.texto}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <WaterfallChart />
        </div>
      </div>
    </section>
  );
}
