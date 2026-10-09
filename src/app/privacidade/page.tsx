import type { Metadata } from "next";
import Link from "next/link";
import BrandLogo from "@/components/ui/BrandLogo";
import Footer from "@/components/piloto/Footer";

const URL = "https://www.painelseller.com.br/privacidade";
const TITLE = "Política de Privacidade — Painel Seller";
const DESCRIPTION =
  "Como o Painel Seller trata seus dados: cadastro no piloto, conta na plataforma e dados da sua conta Amazon, com sua autorização.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "Painel Seller",
    locale: "pt_BR",
    type: "website",
  },
};

const CONTACT_EMAIL = "contato@painelseller.com.br";

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-[#e0dce8]">
        <div className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" aria-label="Voltar para a página inicial">
            <BrandLogo iconSize={28} textSize="lg" />
          </Link>
          <Link href="/" className="text-sm text-[#50484F] hover:text-[#462073]">
            Voltar ao site
          </Link>
        </div>
      </header>

      <main className="max-w-[760px] mx-auto px-6 py-12 sm:py-16 text-[#50484F] text-[15px] leading-relaxed">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#462073] mb-2">Política de Privacidade</h1>
        <p className="text-sm text-[#675E66] mb-10">Vigente desde 9 de outubro de 2026</p>

        <Section title="1. Quem somos">
          <p>
            O Painel Seller é operado pela <strong>Painel Seller Tecnologia LTDA</strong>, CNPJ 68.380.030/0001-04, com
            sede na Rua Marquesa de Santos, 150, apto 501, São Paulo - SP, CEP 04269-040 (&ldquo;nós&rdquo;). Somos o
            controlador dos dados pessoais descritos nesta política, nos termos da Lei Geral de Proteção de Dados (LGPD,
            Lei nº 13.709/2018).
          </p>
          <p>
            Para qualquer assunto sobre privacidade, escreva para{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#8008DC] underline">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </Section>

        <Section title="2. Quais dados tratamos">
          <p>
            <strong>Cadastro no piloto (este site).</strong> Nome, e-mail, telefone (opcional), link da loja (opcional) e
            faixa de SKUs ativos (opcional), informados por você no formulário.
          </p>
          <p>
            <strong>Conta na plataforma.</strong> Nome, e-mail e senha. A senha é guardada somente na forma de hash, nunca
            em texto legível.
          </p>
          <p>
            <strong>Dados da sua conta Amazon, apenas se você autorizar a conexão.</strong> Pela Selling Partner API:
            pedidos (itens, quantidades, valores e status, e cidade e estado de entrega quando necessários para calcular
            frete), anúncios e preços, estoque, tarifas, promoções e repasses. Pela Amazon Ads API, se você autorizar
            também essa conexão: desempenho das suas campanhas de anúncios, como custo, cliques e vendas atribuídas.
          </p>
        </Section>

        <Section title="3. Para que usamos seus dados">
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Entrar em contato sobre o piloto e liberar seu acesso.</li>
            <li>Exibir a você métricas de vendas, custos, lucro e desempenho da sua operação na Amazon.</li>
            <li>Manter a plataforma funcionando com segurança e corrigir falhas.</li>
          </ul>
          <p>
            Pedimos à Amazon somente os dados necessários para essas finalidades. Não vendemos seus dados e não os usamos
            para publicidade de terceiros.
          </p>
        </Section>

        <Section title="4. Sua autorização com a Amazon">
          <p>
            A conexão é feita pelo fluxo de autorização da própria Amazon (Login with Amazon). Nós nunca pedimos nem
            guardamos a senha da sua conta Amazon. O token que nos permite ler seus dados é armazenado criptografado.
          </p>
          <p>
            Você pode revogar a autorização a qualquer momento nas configurações da sua conta Amazon. Ao revogar,
            deixamos de acessar seus dados. A autorização da Amazon Ads precisa ser renovada por você a cada 365 dias; se
            não for renovada, deixamos de acessar os dados de anúncios.
          </p>
        </Section>

        <Section title="5. Compartilhamento">
          <p>
            Seus dados não são exibidos a outros vendedores nem entregues a terceiros para fins próprios deles. Usamos
            prestadores de serviço que tratam dados em nosso nome (operadores):
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Vercel: hospedagem deste site e do aplicativo.</li>
            <li>Formspree: recebimento do formulário de cadastro do piloto.</li>
            <li>Google reCAPTCHA: proteção contra bots no login e no cadastro.</li>
            <li>Provedor de infraestrutura em nuvem: execução da plataforma e armazenamento dos dados.</li>
          </ul>
          <p>Também podemos divulgar dados quando a lei ou uma ordem de autoridade competente exigir.</p>
        </Section>

        <Section title="6. Por quanto tempo guardamos e como excluímos">
          <p>
            Guardamos seus dados enquanto sua conta estiver ativa. Depois do encerramento da conta ou da revogação da
            autorização da Amazon, apagamos os dados em até 30 dias.
          </p>
          <p>
            Se você pedir a exclusão, ou se a Amazon solicitar a exclusão dos dados obtidos por meio de suas APIs, apagamos
            os dados correspondentes no prazo de até 72 horas após a solicitação da Amazon.
          </p>
        </Section>

        <Section title="7. Seus direitos">
          <p>
            Nos termos do art. 18 da LGPD, você pode pedir: confirmação de que tratamos seus dados, acesso, correção,
            anonimização, bloqueio ou eliminação de dados desnecessários, portabilidade, informação sobre com quem
            compartilhamos e a revogação de consentimentos. Escreva para{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#8008DC] underline">
              {CONTACT_EMAIL}
            </a>
            . Você também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).
          </p>
        </Section>

        <Section title="8. Segurança">
          <p>
            Usamos conexões criptografadas (HTTPS), controle de acesso restrito às pessoas que precisam dos dados e
            armazenamento criptografado dos tokens da Amazon. Se ocorrer um incidente de segurança que afete seus dados,
            avisaremos você e as autoridades conforme a lei.
          </p>
        </Section>

        <Section title="9. Alterações desta política">
          <p>
            Podemos atualizar esta política. A data de vigência no topo desta página indica a versão em vigor. Quando a
            mudança for relevante, avisaremos pelo e-mail cadastrado.
          </p>
        </Section>
      </main>

      <Footer />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-9 space-y-3">
      <h2 className="text-xl font-semibold text-[#462073]">{title}</h2>
      {children}
    </section>
  );
}
