import { NextRequest, NextResponse } from "next/server";

const WEBHOOK_URL = process.env.LEADS_WEBHOOK_URL;

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  const nome = typeof body?.nome === "string" ? body.nome.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const telefone = typeof body?.telefone === "string" ? body.telefone.trim() : "";
  const storeLink = typeof body?.storeLink === "string" ? body.storeLink.trim() : "";
  const skuRange = typeof body?.skuRange === "string" ? body.skuRange.trim() : "";

  if (!nome || !email) {
    return NextResponse.json({ message: "Nome e e-mail são obrigatórios." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ message: "E-mail inválido." }, { status: 400 });
  }

  if (!WEBHOOK_URL) {
    console.error("LEADS_WEBHOOK_URL não configurada — cadastro não foi salvo.");
    return NextResponse.json({ message: "Erro ao salvar cadastro." }, { status: 500 });
  }

  const lead = {
    data: new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }),
    nome,
    email,
    telefone: telefone || "—",
    storeLink: storeLink || "—",
    skuRange: skuRange || "—",
  };

  try {
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });
    if (!res.ok) throw new Error(`Webhook respondeu ${res.status}`);
  } catch (err) {
    console.error("Erro ao enviar lead para a planilha:", err);
    return NextResponse.json({ message: "Erro ao salvar cadastro." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
