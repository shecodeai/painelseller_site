import { NextRequest, NextResponse } from "next/server";

const FORMSPREE_ENDPOINT = process.env.FORMSPREE_ENDPOINT;

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

  if (!FORMSPREE_ENDPOINT) {
    console.error("FORMSPREE_ENDPOINT não configurada — cadastro não foi salvo.");
    return NextResponse.json({ message: "Erro ao salvar cadastro." }, { status: 500 });
  }

  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        Nome: nome,
        "E-mail": email,
        Telefone: telefone || "—",
        "Link da loja": storeLink || "—",
        "Faixa de SKUs": skuRange || "—",
        _subject: `Novo lead do piloto — ${nome}`,
      }),
    });
    if (!res.ok) throw new Error(`Formspree respondeu ${res.status}`);
  } catch (err) {
    console.error("Erro ao enviar lead para o Formspree:", err);
    return NextResponse.json({ message: "Erro ao salvar cadastro." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
