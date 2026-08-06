"use client";

import { FormEvent, useState } from "react";

const SKU_RANGES = ["1–10", "11–50", "51–200", "200+"];

export default function PilotoForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [storeLink, setStoreLink] = useState("");
  const [skuRange, setSkuRange] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (!nome.trim() || !email.trim()) {
      setError("Preencha nome e e-mail para continuar.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/pilot-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, telefone, storeLink, skuRange }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Não foi possível enviar seu cadastro.");
      }
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Não foi possível enviar seu cadastro.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="bg-white rounded-[16px] p-6 sm:p-8 shadow-2xl text-center">
        <p className="text-sm font-semibold text-[#462073] mb-1">Cadastro recebido.</p>
        <p className="text-sm text-[#675E66]">
          Entraremos em contato pelo e-mail informado assim que uma vaga do piloto abrir.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-[16px] p-6 sm:p-8 shadow-2xl flex flex-col gap-4">
      <div>
        <label className="block text-xs font-medium text-[#50484F] mb-1.5">Nome</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Seu nome completo"
          className="w-full rounded-[6px] border border-[#d0cad8] px-3.5 py-2.5 text-sm text-[#50484F] placeholder-[#675E66]/50 focus:outline-none focus:ring-2 focus:ring-[#8008DC]/30 focus:border-[#8008DC]"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-[#50484F] mb-1.5">E-mail</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seu@email.com"
          className="w-full rounded-[6px] border border-[#d0cad8] px-3.5 py-2.5 text-sm text-[#50484F] placeholder-[#675E66]/50 focus:outline-none focus:ring-2 focus:ring-[#8008DC]/30 focus:border-[#8008DC]"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-[#50484F] mb-1.5">Telefone (opcional)</label>
        <input
          type="tel"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          placeholder="(11) 91234-5678"
          className="w-full rounded-[6px] border border-[#d0cad8] px-3.5 py-2.5 text-sm text-[#50484F] placeholder-[#675E66]/50 focus:outline-none focus:ring-2 focus:ring-[#8008DC]/30 focus:border-[#8008DC]"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-[#50484F] mb-1.5">Link da loja (opcional)</label>
        <input
          type="text"
          value={storeLink}
          onChange={(e) => setStoreLink(e.target.value)}
          placeholder="amazon.com.br/sua-loja"
          className="w-full rounded-[6px] border border-[#d0cad8] px-3.5 py-2.5 text-sm text-[#50484F] placeholder-[#675E66]/50 focus:outline-none focus:ring-2 focus:ring-[#8008DC]/30 focus:border-[#8008DC]"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-[#50484F] mb-1.5">Faixa de SKUs ativos</label>
        <select
          value={skuRange}
          onChange={(e) => setSkuRange(e.target.value)}
          className="w-full rounded-[6px] border border-[#d0cad8] px-3.5 py-2.5 text-sm text-[#50484F] focus:outline-none focus:ring-2 focus:ring-[#8008DC]/30 focus:border-[#8008DC]"
        >
          <option value="">Selecione (opcional)</option>
          {SKU_RANGES.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
      </div>

      {error && <p className="text-xs text-[#C74C16]">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="pl-btn-gradient w-full rounded-[10px] disabled:opacity-60 text-white text-sm font-semibold py-3.5"
      >
        {loading ? "Enviando..." : "Quero participar do piloto"}
      </button>
    </form>
  );
}
