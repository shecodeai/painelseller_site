import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-6 py-6 bg-[#1b0f35]">
      <p className="text-center text-xs text-[#B9A9D6]">
        Painel Seller Tecnologia LTDA · © 2026 ·{" "}
        <Link href="/privacidade" className="underline hover:text-white">
          Política de Privacidade
        </Link>
      </p>
    </footer>
  );
}
