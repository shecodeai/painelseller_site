import MockShell from "./MockShell";

function StatCard({ label, value, color = "#462073" }: { label: string; value: string; color?: string }) {
  return (
    <div className="bg-white border border-[#e0dce8] rounded-[10px] px-4 py-3.5">
      <p className="text-[11px] text-[#755BBC] font-medium mb-1">{label}</p>
      <p className="text-xl font-bold" style={{ color }}>
        {value}
      </p>
    </div>
  );
}

function Row({ left, right, color }: { left: string; right: string; color: string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-[#50484F] truncate pr-3">{left}</span>
      <span className="font-semibold flex-shrink-0" style={{ color }}>
        {right}
      </span>
    </div>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-[#e0dce8] rounded-[10px] p-4">
      <p className="text-[11px] text-[#755BBC] font-semibold uppercase tracking-wide mb-3">{title}</p>
      <div className="flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

export function MockRepasses() {
  return (
    <MockShell activeLabel="Repasses" pageTitle="Repasses">
      <div className="grid grid-cols-2 gap-3 mb-4">
        <StatCard label="Repasse líquido do mês" value="R$ 7.022,15" color="#0CA9A6" />
        <StatCard label="Pendente" value="R$ 1.739,11" color="#D4B400" />
        <StatCard label="Próximo repasse" value="02/08" />
        <StatCard label="Descontos aplicados" value="R$ 612,40" color="#C74C16" />
      </div>
      <Panel title="Últimos repasses">
        <Row left="29/07 · Pedido 701-3406..." right="R$ 62,70" color="#0CA9A6" />
        <Row left="28/07 · Pedido 703-8746..." right="R$ 34,90" color="#0CA9A6" />
        <Row left="27/07 · Estorno pedido 702-..." right="− R$ 18,90" color="#C74C16" />
      </Panel>
    </MockShell>
  );
}

export function MockEstoque() {
  const items = [
    { name: "Vela Espiral Colorida Aniversário 4 Unid.", dias: 6, pct: 12, alert: true },
    { name: "Kit com 2 Cortinas Metalizadas Festa", dias: 18, pct: 40, alert: false },
    { name: "Kit 2 Latas Confete Metalizado", dias: 34, pct: 75, alert: false },
  ];
  return (
    <MockShell activeLabel="Inventário" pageTitle="Estoque">
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <div key={item.name} className="bg-white border border-[#e0dce8] rounded-[10px] p-4">
            <div className="flex items-center justify-between mb-2 gap-3">
              <span className="text-sm text-[#462073] font-medium truncate">{item.name}</span>
              <span
                className="text-sm font-semibold flex-shrink-0"
                style={{ color: item.alert ? "#C74C16" : "#675E66" }}
              >
                {item.dias} dias
              </span>
            </div>
            <div className="h-2 rounded-full bg-[#f0edf6] overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${item.pct}%`, background: item.alert ? "#C74C16" : "#0CA9A6" }}
              />
            </div>
          </div>
        ))}
      </div>
    </MockShell>
  );
}

export function MockDesempenho() {
  const items = [
    { name: "Vela Espiral Colorida Aniversário 4 Unid.", tag: "Campeão", color: "#0CA9A6" },
    { name: "Kit com 2 Cortinas Metalizadas Festa", tag: "Estável", color: "#462073" },
    { name: "Kit 2 Latas Confete Metalizado", tag: "Em Queda", color: "#C74C16" },
  ];
  return (
    <MockShell activeLabel="P&L — Perdas e Lucros" pageTitle="Desempenho de Produtos">
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <div
            key={item.name}
            className="bg-white border border-[#e0dce8] rounded-[10px] p-4 flex items-center justify-between gap-3"
          >
            <span className="text-sm text-[#462073] font-medium truncate">{item.name}</span>
            <span
              className="text-xs font-semibold px-3 py-1.5 rounded-[20px] flex-shrink-0"
              style={{ background: `${item.color}1A`, color: item.color }}
            >
              {item.tag}
            </span>
          </div>
        ))}
      </div>
    </MockShell>
  );
}

export function MockPublicidade() {
  const items = [
    { name: "Automática · Vela Espiral Aniversário", status: "Saudável", color: "#0CA9A6", value: "R$ 18,40" },
    { name: "Manual · Kit Cortinas Metalizadas", status: "Atenção", color: "#D4B400", value: "R$ 42,10" },
    { name: "Automática · Kit Latas Confete", status: "Prejuízo", color: "#C74C16", value: "R$ 61,90" },
  ];
  return (
    <MockShell activeLabel="Publicidade" pageTitle="Campanhas">
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <div key={item.name} className="bg-white border border-[#e0dce8] rounded-[10px] p-4">
            <div className="flex items-center justify-between mb-1.5 gap-3">
              <span className="text-sm text-[#462073] font-medium truncate">{item.name}</span>
              <span
                className="text-xs font-semibold px-2.5 py-1 rounded-[20px] flex-shrink-0"
                style={{ background: `${item.color}1A`, color: item.color }}
              >
                {item.status}
              </span>
            </div>
            <p className="text-sm text-[#675E66]">
              Gasto no período: <span className="font-semibold text-[#50484F]">{item.value}</span>
            </p>
          </div>
        ))}
      </div>
    </MockShell>
  );
}

export function MockRecomendacoes() {
  return (
    <MockShell activeLabel="Análise" pageTitle="Recomendações">
      <div className="flex flex-col gap-3">
        <div className="bg-white p-4 rounded-[0_10px_10px_0]" style={{ borderLeft: "3px solid #8008DC" }}>
          <p className="text-sm font-semibold text-[#462073] mb-1">Kit 2 Latas Confete Metalizado</p>
          <p className="text-sm text-[#675E66] leading-snug">
            Margem caiu 3 semanas seguidas. Ads dessa campanha consome 22% da receita do produto.
          </p>
        </div>
        <div className="bg-white p-4 rounded-[0_10px_10px_0]" style={{ borderLeft: "3px solid #0CA9A6" }}>
          <p className="text-sm font-semibold text-[#462073] mb-1">Vela Espiral Colorida Aniversário</p>
          <p className="text-sm text-[#675E66] leading-snug">
            Campeão de margem no mês. Estoque cobre 6 dias — reponha antes de faltar.
          </p>
        </div>
      </div>
    </MockShell>
  );
}

export function MockCalculadora() {
  return (
    <MockShell activeLabel="Análise" pageTitle="Calculadora de Preço">
      <div className="bg-white border border-[#e0dce8] rounded-[10px] p-4 sm:p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-[#675E66]">Preço de venda</span>
          <span className="text-xl font-bold text-[#462073]">R$ 49,90</span>
        </div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-[#675E66]">Margem líquida estimada</span>
          <span className="text-xl font-bold text-[#0CA9A6]">32%</span>
        </div>
        <div className="flex items-center justify-between pt-3" style={{ borderTop: "1px solid #f4f4f8" }}>
          <span className="text-sm text-[#675E66]">Preço médio da concorrência</span>
          <span className="text-xl font-bold text-[#D4B400]">R$ 52,00</span>
        </div>
      </div>
      <p className="text-sm text-[#675E66] mt-3 leading-snug">
        Preço competitivo e dentro da margem esperada antes de publicar o anúncio.
      </p>
    </MockShell>
  );
}
