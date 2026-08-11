# Painel Seller — Site

Landing page pública de captação para o piloto gratuito do Painel Seller, voltado a vendedores Amazon Brasil.

## Stack

- Next.js 14 (App Router) + TypeScript + Tailwind CSS
- Cadastro do piloto é enviado para o Formspree (painel + e-mail + export CSV)

## Comandos

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Variáveis de ambiente

Crie um `.env.local` (veja `.env.example`):

```
FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxx
```

É o endpoint do formulário criado no Formspree. Cada cadastro é enviado pra lá e
aparece no painel do Formspree + chega por e-mail. Sem essa variável, o
formulário retorna erro ao enviar. Em produção (Vercel), configure a mesma
variável em Settings → Environment Variables.

## Estrutura

- `src/app/page.tsx` — monta a landing (Hero, Dor, Pra quem é, Tour do produto, Credibilidade, Case real, FAQ, CTA final)
- `src/components/piloto/` — componentes da landing
- `src/app/api/pilot-signup/` — endpoint que recebe o formulário de cadastro
- `src/app/robots.ts`, `src/app/sitemap.ts`, `src/app/opengraph-image.tsx` — SEO
