"use client";

import { useState } from "react";
import BrandLogo from "@/components/ui/BrandLogo";
import { IconClose, IconMenu } from "./Icons";

const NAV_LINKS = [
  { label: "Como funciona", href: "#responde" },
  { label: "Pra quem é", href: "#pra-quem" },
  { label: "Perguntas frequentes", href: "#faq" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-[#e0dce8]">
      <div className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">
        <BrandLogo iconSize={28} textSize="lg" />

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-[#50484F] hover:text-[#462073]">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#cta-final"
          className="hidden lg:inline-flex items-center rounded-[6px] bg-[#8008DC] hover:bg-[#5F3E9E] text-white text-sm font-semibold px-4 py-2.5 transition-colors"
        >
          Quero entrar no piloto
        </a>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-[#462073]"
        >
          {open ? <IconClose size={24} /> : <IconMenu size={24} />}
        </button>
      </div>

      <div
        className="lg:hidden overflow-hidden border-t border-[#e0dce8] bg-white transition-[max-height] duration-200 ease-out"
        style={{ maxHeight: open ? 260 : 0 }}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-[#50484F]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta-final"
            onClick={() => setOpen(false)}
            className="rounded-[6px] bg-[#8008DC] text-white text-sm font-semibold px-4 py-2.5 text-center"
          >
            Quero entrar no piloto
          </a>
        </div>
      </div>
    </header>
  );
}
