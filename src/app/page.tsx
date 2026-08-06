import type { Metadata } from "next";
import { PILOTO_FAQ } from "@/lib/pilotoFaq";
import Nav from "@/components/piloto/Nav";
import Hero from "@/components/piloto/Hero";
import TrustBar from "@/components/piloto/TrustBar";
import Dor from "@/components/piloto/Dor";
import ParaQuem from "@/components/piloto/ParaQuem";
import TourProduto from "@/components/piloto/TourProduto";
import Credibilidade from "@/components/piloto/Credibilidade";
import CaseReal from "@/components/piloto/CaseReal";
import Faq from "@/components/piloto/Faq";
import CtaFinal from "@/components/piloto/CtaFinal";
import Footer from "@/components/piloto/Footer";

const TITLE = "Painel Seller — Piloto gratuito para vendedores Amazon Brasil";
const DESCRIPTION =
  "Comissão, tarifa FBA, armazenagem, Ads e imposto, cruzados com seu custo, produto por produto, num painel só. Piloto gratuito para vendedores com catálogo ativo na Amazon Brasil.";
const URL = "https://painelseller.com.br";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "margem Amazon",
    "taxas Amazon vendedor",
    "gestão de vendas Amazon",
    "repasse Amazon",
    "lucro real Amazon",
    "vendedor marketplace Brasil",
  ],
  alternates: {
    canonical: URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "Painel Seller",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/opengraph-image"],
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://painelseller.com.br/#organization",
      name: "Painel Seller Tecnologia LTDA",
      url: "https://painelseller.com.br",
      logo: "https://painelseller.com.br/images/piloto/tela-monitor.png",
    },
    {
      "@type": "SoftwareApplication",
      name: "Painel Seller",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: DESCRIPTION,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "BRL",
        description: "Piloto gratuito para vendedores Amazon Brasil com catálogo ativo",
      },
      publisher: { "@id": "https://painelseller.com.br/#organization" },
    },
    {
      "@type": "FAQPage",
      mainEntity: PILOTO_FAQ.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
  ],
};

export default function PilotoPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <Nav />
      <Hero />
      <TrustBar />
      <Dor />
      <ParaQuem />
      <TourProduto />
      <Credibilidade />
      <CaseReal />
      <Faq />
      <CtaFinal />
      <Footer />
    </div>
  );
}
