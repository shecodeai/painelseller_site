import type { Metadata } from "next";
import Link from "next/link";
import BrandLogo from "@/components/ui/BrandLogo";
import Footer from "@/components/piloto/Footer";

const URL = "https://www.painelseller.com.br/privacidade";
const TITLE = "Política de Privacidade — Painel Seller";
const DESCRIPTION =
  "Como o Painel Seller trata seus dados: cadastro e conta, dados da sua conta Amazon mediante autorização, compartilhamento, prazos de retenção e seus direitos pela LGPD.";

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

      <main className="max-w-[820px] mx-auto px-6 py-12 sm:py-16 text-[#50484F] text-[15px] leading-relaxed">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#462073] mb-10">Política de Privacidade – Painel Seller</h1>

        <Section title="1. Quem somos">
          <p>
            <strong>Vigência desta versão: 1 de outubro de 2026</strong>
          </p>
          <p>
            O Painel Seller é operado pela Painel Seller Tecnologia LTDA, CNPJ 68.380.030/0001-04, com sede na Rua
            Marquesa de Santos, 150, apto 501, São Paulo - SP, CEP 04269-040. Somos o controlador dos dados pessoais
            descritos nesta política, nos termos da Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018).
          </p>
          <p>
            Esta política explica como tratamos dados pessoais no site e na plataforma Painel Seller. As regras de uso do
            serviço, planos e pagamentos estão nos nossos Termos de Uso.
          </p>
          <p>
            <strong>Encarregado pelo tratamento de dados (DPO):</strong>
          </p>
          <p>
            Nos enquadramos como agente de tratamento de pequeno porte, nos termos da Resolução CD/ANPD nº 2/2022, e
            mantemos o canal{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#8008DC] underline">
              {CONTACT_EMAIL}
            </a>{" "}
            para receber comunicações dos titulares e da ANPD.
          </p>
        </Section>

        <Section title="2. Quais dados tratamos">
          <p>
            <strong>Cadastro e conta:</strong> nome, e-mail, telefone (se informado) e senha. A senha é guardada somente na
            forma de hash, nunca em texto legível.
          </p>
          <p>
            <strong>Dados técnicos de acesso:</strong> endereço IP, data e hora de acesso, tipo de navegador e
            identificador do dispositivo, necessários ao funcionamento, à segurança e ao cumprimento do Marco Civil da
            Internet.
          </p>
          <p>
            <strong>Pagamento:</strong> dados de cobrança e histórico de assinaturas. Os dados do cartão são
            informados diretamente ao processador de pagamento e não ficam armazenados conosco.
          </p>
          <p>
            <strong>Atendimento:</strong> o conteúdo das mensagens que você nos envia pelos canais de suporte.
          </p>
          <p>
            <strong>Dados da sua conta Amazon, apenas se você autorizar a conexão:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              Pela Selling Partner API: pedidos (itens, quantidades, valores e status), anúncios e preços, estoque,
              tarifas, promoções e repasses.
            </li>
            <li>
              Pela Amazon Ads API, se você autorizar também essa conexão: desempenho das campanhas de anúncios (custo,
              cliques e vendas atribuídas).
            </li>
          </ul>
          <p>
            <strong>Não acessamos dados pessoais dos compradores da Amazon</strong>, como nome, endereço, telefone ou
            e-mail.
          </p>
        </Section>

        <Section title="3. Como coletamos">
          <ol className="list-decimal pl-5 space-y-1.5">
            <li>Quando você nos informa diretamente, como no cadastro ou no atendimento.</li>
            <li>Automaticamente, durante o uso da plataforma (registros de acesso).</li>
            <li>Pelas integrações com a Amazon que você autoriza.</li>
            <li>Por ferramentas de proteção contra bots no login e no cadastro.</li>
            <li>Pelo processador de pagamento, que nos informa o status das cobranças.</li>
          </ol>
        </Section>

        <Section title="4. Para que usamos e em que base legal">
          <PolicyTable
            headers={["Finalidade", "Base legal (LGPD)"]}
            rows={[
              ["Criar e manter sua conta e prestar o serviço", "Execução de contrato (art. 7º, V)"],
              [
                "Exibir métricas de vendas, custos, lucro e desempenho a partir dos dados da Amazon que você autorizou",
                "Execução de contrato (art. 7º, V)",
              ],
              [
                "Processar pagamentos e emitir documentos fiscais",
                "Execução de contrato e cumprimento de obrigação legal (art. 7º, V e II)",
              ],
              ["Segurança, prevenção de fraude e correção de falhas", "Legítimo interesse (art. 7º, IX)"],
              [
                "Comunicações sobre o serviço (manutenção, mudanças e suporte)",
                "Execução de contrato (art. 7º, V)",
              ],
              [
                "Melhorar a plataforma a partir de dados de uso da própria plataforma (não inclui dados da Amazon)",
                "Legítimo interesse (art. 7º, IX)",
              ],
              [
                "Guardar registros de acesso e cumprir obrigações legais e regulatórias",
                "Cumprimento de obrigação legal (art. 7º, II)",
              ],
              [
                "Defender nossos direitos em processos judiciais, administrativos ou arbitrais",
                "Exercício regular de direitos (art. 7º, VI)",
              ],
            ]}
          />
          <p>
            Pedimos à Amazon somente os dados necessários para essas finalidades. Não vendemos seus dados e não os usamos
            para publicidade de terceiros. Se um dia quisermos enviar comunicações de marketing, pediremos sua autorização
            específica, e você poderá cancelá-la a qualquer momento.
          </p>
        </Section>

        <Section title="5. Informações da Amazon">
          <p>
            Os dados obtidos da Amazon por meio das suas APIs (pedidos, itens, finanças, catálogo, estoque, preços,
            repasses e desempenho de anúncios) são tratados exclusivamente para prestar o serviço ao próprio vendedor que
            os autorizou.
          </p>
          <p>
            Esses dados não são agregados entre usuários, não são anonimizados para análise de mercado, não são
            compartilhados com parceiros comerciais, pesquisadores ou terceiros e não são usados para gerar insights sobre
            o negócio da Amazon, nem mesmo de forma agregada ou não identificável. Também não são usados para treinar
            modelos de inteligência artificial.
          </p>
          <p>
            Esse tratamento segue as políticas da Amazon para desenvolvedores, incluindo a Política de Uso Aceitável e a
            Política de Proteção de Dados da Selling Partner API.
          </p>
        </Section>

        <Section title="6. Sua autorização com a Amazon">
          <p>
            A conexão é feita pelo fluxo de autorização da própria Amazon (Login with Amazon). Nunca pedimos nem guardamos
            a senha da sua conta Amazon. O token que nos permite ler seus dados é armazenado criptografado.
          </p>
          <p>
            Você pode encerrar a conexão a qualquer momento de duas formas: pelo botão &ldquo;Desconectar Amazon&rdquo;
            nas configurações do Painel Seller, ou revogando a autorização nas configurações da sua conta Amazon. A partir
            disso, deixamos de acessar seus dados e aplicamos os prazos de exclusão da seção 9.
          </p>
          <p>
            A autorização da Amazon Ads e da Selling Partner API precisa ser renovada por você a cada 365 dias. Se não for
            renovada, deixamos de acessar os dados correspondentes.
          </p>
        </Section>

        <Section title="7. Compartilhamento">
          <p>
            Seus dados não são exibidos a outros vendedores. Usamos prestadores de serviço (operadores) que tratam dados
            em nosso nome, somente para as finalidades desta política e sob contrato com obrigações de segurança e sigilo:
          </p>
          <PolicyTable
            headers={["Prestador", "Finalidade"]}
            rows={[
              ["provedor de nuvem", "Hospedagem e banco de dados"],
              ["Google (reCAPTCHA)", "Proteção contra bots no login e no cadastro"],
              ["provedor de e-mail", "Envio de e-mails transacionais"],
              ["provedor de formulários", "Formulários do site e do suporte"],
              ["gateway de pagamento", "Processamento de pagamentos"],
            ]}
          />
          <p>
            Também podemos divulgar dados quando a lei ou uma ordem de autoridade competente exigir. Se houver fusão,
            aquisição ou reorganização societária, os dados poderão ser transferidos à empresa sucessora, que ficará
            obrigada a seguir esta política. Avisaremos você antes que isso aconteça.
          </p>
          <p>Você pode pedir a lista atualizada dos prestadores pelo canal da seção 14.</p>
        </Section>

        <Section title="8. Transferência internacional">
          <p>
            Alguns prestadores listados na seção 7, como o Google reCAPTCHA e o provedor de nuvem, podem tratar dados em
            servidores fora do Brasil, incluindo os Estados Unidos. Essas transferências seguem o art. 33 da LGPD e a
            Resolução CD/ANPD nº 19/2024, com cláusulas contratuais que garantem um nível de proteção compatível com a lei
            brasileira.
          </p>
        </Section>

        <Section title="9. Por quanto tempo guardamos e como excluímos">
          <p>Guardamos seus dados enquanto sua conta estiver ativa. Depois disso, aplicamos os prazos abaixo:</p>
          <PolicyTable
            headers={["Dados", "Prazo", "Motivo"]}
            rows={[
              [
                "Dados obtidos da Amazon",
                "Até 30 dias após o encerramento da conta ou a revogação da autorização",
                "Fim da finalidade",
              ],
              [
                "Dados obtidos da Amazon, quando a Amazon pedir a exclusão",
                "Até 72 horas após o pedido",
                "Políticas da Amazon",
              ],
              ["Cadastro e conta", "Até 30 dias após o encerramento da conta", "Fim da finalidade"],
              ["Registros de acesso (IP, data e hora)", "6 meses", "Marco Civil da Internet, art. 15"],
              [
                "Dados fiscais e de cobrança",
                "Prazo da legislação tributária (em regra, 5 anos)",
                "Obrigação legal",
              ],
              [
                "Dados necessários à defesa em processos",
                "Até o fim do prazo prescricional ou do processo",
                "Exercício regular de direitos",
              ],
              ["Cópias de segurança (backups)", "Até 90 dias, sobrescritas automaticamente", "Limite técnico"],
            ]}
          />
          <p>
            Durante esses prazos legais, os dados ficam bloqueados e não são usados para nenhuma outra finalidade.
            Terminado o prazo, são eliminados.
          </p>
          <p>Antes de encerrar a conta, você pode pedir a exportação dos seus dados pelo canal da seção 14.</p>
        </Section>

        <Section title="10. Seus direitos">
          <p>Nos termos do art. 18 da LGPD, você pode pedir:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>confirmação de que tratamos seus dados e acesso a eles;</li>
            <li>correção de dados incompletos, inexatos ou desatualizados;</li>
            <li>
              anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com
              a lei;
            </li>
            <li>portabilidade;</li>
            <li>informação sobre com quem compartilhamos seus dados;</li>
            <li>revogação do consentimento, quando ele for a base legal;</li>
            <li>oposição a tratamento baseado em legítimo interesse;</li>
            <li>revisão de decisões tomadas apenas por tratamento automatizado.</li>
          </ul>
          <p>
            <strong>Como pedir:</strong> escreva para{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#8008DC] underline">
              {CONTACT_EMAIL}
            </a>{" "}
            descrevendo o pedido. Podemos pedir informações para confirmar sua identidade antes de atender.
          </p>
          <p>
            <strong>Prazos:</strong> a confirmação e o acesso em formato simplificado são respondidos de imediato; a
            declaração completa, em até 15 dias contados do pedido (art. 19 da LGPD). Os demais pedidos são respondidos no
            menor prazo possível. Se não pudermos atender, explicaremos o motivo.
          </p>
          <p>Você também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).</p>
        </Section>

        <Section title="11. Segurança e incidentes">
          <p>Adotamos medidas técnicas e administrativas para proteger os dados, incluindo:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>senhas armazenadas somente em forma de hash;</li>
            <li>tokens da Amazon armazenados criptografados;</li>
            <li>conexões criptografadas (HTTPS);</li>
            <li>acesso restrito às pessoas que precisam dos dados para trabalhar;</li>
            <li>cópias de segurança periódicas.</li>
          </ul>
          <p>
            Nenhum sistema é totalmente imune a ataques, mas seguimos boas práticas de mercado e revisamos nossas medidas
            periodicamente.
          </p>
          <p>
            Se ocorrer um incidente de segurança que possa causar risco ou dano relevante a você, avisaremos você e a ANPD
            em até 3 dias úteis, conforme a Resolução CD/ANPD nº 15/2024. O aviso dirá o que aconteceu, quais dados foram
            afetados e o que fizemos para conter o problema.
          </p>
        </Section>

        <Section title="12. Cookies e armazenamento local">
          <p>
            Usamos um cookie de sessão e o armazenamento local do navegador para manter você autenticado na plataforma.
            Não usamos cookies de publicidade.
          </p>
          <p>
            O login e o cadastro usam o Google reCAPTCHA, que coleta informações do dispositivo e do navegador e pode
            gravar cookies próprios para identificar acessos automatizados. O uso do reCAPTCHA está sujeito à{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8008DC] underline"
            >
              Política de Privacidade
            </a>{" "}
            e aos{" "}
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8008DC] underline"
            >
              Termos de Serviço
            </a>{" "}
            do Google.
          </p>
        </Section>

        <Section title="13. Público e decisões automatizadas">
          <p>
            O Painel Seller é destinado a vendedores maiores de 18 anos e a empresas. Não coletamos intencionalmente dados
            de crianças ou adolescentes.
          </p>
          <p>
            O Painel Seller calcula métricas e indicadores de forma automatizada, mas não toma decisões automatizadas que
            produzam efeitos jurídicos sobre você, como bloqueio de conta ou análise de crédito. Se isso mudar, você
            poderá pedir revisão humana da decisão, nos termos do art. 20 da LGPD.
          </p>
        </Section>

        <Section title="14. Alterações e contato">
          <p>
            Podemos atualizar esta política. A data de vigência no topo indica a versão em vigor, e mantemos as versões
            anteriores disponíveis mediante pedido. Quando a mudança for relevante, avisaremos pelo e-mail cadastrado ou
            por aviso na plataforma antes de ela entrar em vigor.
          </p>
          <p>
            <strong>Contato e encarregado:</strong>{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#8008DC] underline">
              {CONTACT_EMAIL}
            </a>
          </p>
          <p>Painel Seller Tecnologia LTDA · CNPJ 68.380.030/0001-04 · São Paulo - SP</p>
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

function PolicyTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm text-left">
        <thead>
          <tr className="bg-[#f4f1f8]">
            {headers.map((header) => (
              <th key={header} className="border border-[#d0cad8] px-3 py-2 font-semibold text-[#462073]">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.join("|")}>
              {row.map((cell, index) => (
                <td key={index} className="border border-[#d0cad8] px-3 py-2 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
