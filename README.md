# Jurigeek

**Bridging access to justice through legal automation, technology law consultancy and tech law education.**

This is the production website for Jurigeek, deployed to Vercel at [jurigeek.org](https://jurigeek.org).

## Stack

- [Next.js 15](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [Tailwind CSS 3](https://tailwindcss.com)
- TypeScript
- Deployed on [Vercel](https://vercel.com)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm run start
```

## Deploy to Vercel

The project is already configured for Vercel (`vercel.json`, `next.config.mjs`).

### Option A: via the Vercel dashboard (recommended)

1. Push this repository to GitHub (see below).
2. Go to [vercel.com/new](https://vercel.com/new) and select the `iscorockie/jurigeek` repository.
3. Vercel auto-detects Next.js; leave the defaults and click **Deploy**.
4. After deploy, go to **Settings → Domains** and add the `jurigeek.org` custom domain. Vercel will guide you through adding the required DNS records (A / CNAME / TXT) at your domain registrar.

### Option B: via the Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
vercel --prod
vercel domains add jurigeek.org
```

## Site content

Key site content lives in:

- `components/SiteConfig.ts`: business details, phone numbers, social links, navigation.
- `components/Services.tsx`: the three service pillars.
- `components/About.tsx`: mission and values.
- `components/Contact.tsx`: contact channels (call, WhatsApp, TikTok, X).
- `app/layout.tsx`: site metadata, SEO, Open Graph.

## Business contacts

- **Phone / WhatsApp:** +256 778 929 063, +256 758 283 426
- **TikTok:** [@jurigeekuganda](https://www.tiktok.com/@jurigeekuganda)
- **X (Twitter):** [@hakeemcounsel](https://x.com/hakeemcounsel)

---

© Jurigeek. All rights reserved.
