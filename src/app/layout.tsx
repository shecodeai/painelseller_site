import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://painelseller.com.br"),
  title: "Painel Seller — Piloto gratuito para vendedores Amazon Brasil",
  description:
    "Comissão, tarifa FBA, armazenagem, Ads e imposto, cruzados com seu custo, produto por produto, num painel só.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
