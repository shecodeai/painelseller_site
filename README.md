# Painel Seller — Site

Landing page pública de captação para o piloto gratuito do Painel Seller, voltado a vendedores Amazon Brasil.

## Stack

- Next.js 14 (App Router) + TypeScript + Tailwind CSS
- Cadastro do piloto grava em planilha local (`data/leads-piloto.xlsx`) via `xlsx`

## Comandos

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Estrutura

- `src/app/page.tsx` — monta a landing (Hero, Dor, Pra quem é, Tour do produto, Credibilidade, Case real, FAQ, CTA final)
- `src/components/piloto/` — componentes da landing
- `src/app/api/pilot-signup/` — endpoint que recebe o formulário de cadastro
- `src/app/robots.ts`, `src/app/sitemap.ts`, `src/app/opengraph-image.tsx` — SEO
