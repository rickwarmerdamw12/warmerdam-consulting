# Warmerdam Consulting - Website

Freelance developer/AI-diensten website voor [warmerdamconsulting.nl](https://warmerdamconsulting.nl).

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts - Inter**

## Lokaal starten

```bash
# Installeer dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

## Builden

```bash
npm run build
npm run start
```

---

## Deploy op Vercel (aanbevolen)

### Optie 1 - Via Vercel CLI

```bash
# Installeer Vercel CLI
npm i -g vercel

# Deploy (vanuit de projectmap)
vercel

# Productie deploy
vercel --prod
```

### Optie 2 - Via Vercel Dashboard

1. Push de code naar een GitHub repository
2. Ga naar [vercel.com](https://vercel.com) en log in
3. Klik op **"Add New Project"**
4. Importeer je GitHub repository
5. Vercel detecteert Next.js automatisch - klik **"Deploy"**
6. Na de deploy koppel je je domein: **warmerdamconsulting.nl**

### Domein koppelen in Vercel

1. Ga naar je project in het Vercel dashboard
2. Klik op **"Settings"** - dan **"Domains"**
3. Voeg `warmerdamconsulting.nl` toe
4. Vercel geeft je DNS-instellingen die je bij je domeinregistrar instelt:
   - **A-record:** `@` naar het Vercel IP-adres
   - **CNAME:** `www` naar `cname.vercel-dns.com`

### Omgevingsvariabelen (optioneel)

Als je later een backend koppelt voor het contactformulier (bijv. Resend of Nodemailer), voeg dan `.env.local` toe:

```
RESEND_API_KEY=re_xxxxxxxxxxxx
```

En zet dit ook in Vercel onder **Settings - Environment Variables**.

---

## Contactformulier - echte e-mail versturen

Het formulier toont nu een succes-melding na submit. Om echte e-mails te versturen, voeg je een API route toe:

**Optie: Resend (aanbevolen)**

```bash
npm install resend
```

Maak `src/app/api/contact/route.ts`:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { naam, email, project } = await req.json();

  await resend.emails.send({
    from: 'website@warmerdamconsulting.nl',
    to: 'rick@warmerdamconsulting.nl',
    subject: `Nieuw contact: ${naam}`,
    text: `Naam: ${naam}\nEmail: ${email}\n\n${project}`,
  });

  return Response.json({ success: true });
}
```

En update de `handleSubmit` in `page.tsx` om de API te callen.

---

## Structuur

```
src/
  app/
    globals.css    - Globale stijlen + Google Fonts import
    layout.tsx     - Root layout met metadata/SEO
    page.tsx       - Volledige one-page website
```

## Aanpassingen

- **Kleuren:** `tailwind.config.ts` - navy `#0F172A`, accent `#2563EB`
- **Tekst:** Alles staat in `src/app/page.tsx`
- **SEO:** Metadata in `src/app/layout.tsx`
