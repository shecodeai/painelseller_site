import type { ReactNode } from "react";
import BrowserChrome from "./BrowserChrome";

const NAV_ITEMS = ["Monitor de Vendas", "P&L — Perdas e Lucros", "Publicidade", "Inventário", "Repasses", "Análise"];

interface MockShellProps {
  activeLabel: string;
  pageTitle: string;
  children: ReactNode;
}

export default function MockShell({ activeLabel, pageTitle, children }: MockShellProps) {
  return (
    <div className="rounded-[14px] border border-[#e0dce8] overflow-hidden shadow-xl shadow-[#462073]/10 bg-white text-left">
      <BrowserChrome />
      <div className="flex min-h-[420px]">
        <div className="w-[150px] sm:w-[200px] bg-[#462073] flex-shrink-0 py-4">
          <div className="px-4 pb-4 mb-2 border-b border-white/10 flex items-center gap-2">
            <div className="w-6 h-6 rounded-[6px] bg-[#8008DC] grid grid-cols-2 gap-[2px] p-[3px] flex-shrink-0">
              <div className="bg-white rounded-[1px]" />
              <div className="bg-white/60 rounded-[1px]" />
              <div className="bg-white/60 rounded-[1px]" />
              <div className="bg-[#0CA9A6] rounded-[1px]" />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-white truncate">PainelSeller</span>
          </div>
          <div className="flex flex-col gap-0.5 px-2">
            {NAV_ITEMS.map((item) => {
              const active = item === activeLabel;
              return (
                <div
                  key={item}
                  className="text-[11px] sm:text-xs px-2.5 py-2 rounded-[6px] truncate leading-tight"
                  style={{
                    background: active ? "#8008DC" : "transparent",
                    color: active ? "#fff" : "rgba(255,255,255,0.6)",
                    fontWeight: active ? 600 : 400,
                  }}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex-1 bg-[#faf9fc] min-w-0">
          <div className="flex items-center justify-between gap-2 px-4 sm:px-5 py-3 border-b border-[#e0dce8] bg-white">
            <p className="text-sm sm:text-base font-bold text-[#462073] truncate">{pageTitle}</p>
            <span className="hidden sm:flex items-center gap-1.5 bg-[#e8f8f0] rounded-[20px] px-2.5 py-1 flex-shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0CA9A6]" />
              <span className="text-[11px] font-medium text-[#0A7686]">Conta ideal</span>
            </span>
          </div>
          <div className="p-4 sm:p-5">{children}</div>
        </div>
      </div>
    </div>
  );
}
