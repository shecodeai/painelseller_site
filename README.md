# Painel Seller — Site

Landing page pública de captação para o piloto gratuito do Painel Seller, voltado a vendedores Amazon Brasil.

## Stack

- Next.js 14 (App Router) + TypeScript + Tailwind CSS
- Cadastro do piloto é enviado para uma planilha do Google via webhook (Google Apps Script)

## Comandos

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Variáveis de ambiente

Crie um `.env.local` (veja `.env.example`):

```
LEADS_WEBHOOK_URL=https://script.google.com/macros/s/SEU_ID/exec
```

Essa é a URL do Web App do Google Apps Script que recebe cada cadastro e grava
uma linha na planilha do Google. Sem ela, o formulário retorna erro ao enviar.
Em produção (Vercel), configure a mesma variável em Settings → Environment Variables.

## Estrutura

- `src/app/page.tsx` — monta a landing (Hero, Dor, Pra quem é, Tour do produto, Credibilidade, Case real, FAQ, CTA final)
- `src/components/piloto/` — componentes da landing
- `src/app/api/pilot-signup/` — endpoint que recebe o formulário de cadastro
- `src/app/robots.ts`, `src/app/sitemap.ts`, `src/app/opengraph-image.tsx` — SEO
