import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import * as XLSX from "xlsx";

const LEADS_DIR = path.join(process.cwd(), "data");
const LEADS_FILE = path.join(LEADS_DIR, "leads-piloto.xlsx");
const SHEET_NAME = "Leads";
const COLUNAS = ["Data", "Nome", "E-mail", "Telefone", "Link da loja", "Faixa de SKUs"] as const;

type Linha = Record<(typeof COLUNAS)[number], string>;

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

  const novaLinha: Linha = {
    Data: new Date().toLocaleString("pt-BR"),
    Nome: nome,
    "E-mail": email,
    Telefone: telefone || "—",
    "Link da loja": storeLink || "—",
    "Faixa de SKUs": skuRange || "—",
  };

  try {
    fs.mkdirSync(LEADS_DIR, { recursive: true });

    let linhas: Linha[] = [];
    if (fs.existsSync(LEADS_FILE)) {
      const wb = XLSX.readFile(LEADS_FILE);
      const ws = wb.Sheets[SHEET_NAME];
      if (ws) linhas = XLSX.utils.sheet_to_json<Linha>(ws);
    }
    linhas.push(novaLinha);

    const ws = XLSX.utils.json_to_sheet(linhas, { header: [...COLUNAS] });
    ws["!cols"] = [{ wch: 18 }, { wch: 28 }, { wch: 28 }, { wch: 16 }, { wch: 34 }, { wch: 16 }];

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, SHEET_NAME);
    XLSX.writeFile(wb, LEADS_FILE);
  } catch (err) {
    console.error("Erro ao salvar lead do piloto:", err);
    return NextResponse.json({ message: "Erro ao salvar cadastro." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
