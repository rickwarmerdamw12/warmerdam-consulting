/**
 * ==========================================================
 * ROOT LAYOUT - Het hoofdlayout van de hele applicatie
 * ==========================================================
 *
 * Dit is het ROOT LAYOUT van de Next.js applicatie.
 * In Next.js is layout.tsx een speciaal bestand dat de structuur definieert
 * die om ALLE pagina's heen gewikkeld wordt.
 *
 * Denk eraan als een "omhulsel" of "frame" voor je website:
 * - De <html> en <body> tags staan hier
 * - Globale CSS wordt hier geladen
 * - Metadata (titel, beschrijving) voor zoekmachines wordt hier ingesteld
 *
 * BELANGRIJK VERSCHIL MET page.tsx:
 * - page.tsx = de INHOUD van een specifieke pagina
 * - layout.tsx = de STRUCTUUR die om de pagina-inhoud heen zit
 *
 * Dit bestand wordt NIET opnieuw gerenderd wanneer je navigeert
 * tussen pagina's - alleen de inhoud (children) verandert.
 */

/* We importeren het Metadata type uit Next.js.
 * "type" import betekent dat we alleen het TypeScript type importeren,
 * niet een echte waarde. Dit verdwijnt na compilatie en maakt de bundel kleiner. */
import type { Metadata } from "next";

/* Hier laden we de globale CSS. Dit bestand bevat de Tailwind CSS configuratie
 * en eventuele eigen stijlen die op de HELE website van toepassing zijn.
 * Door het hier te importeren, is het beschikbaar op elke pagina. */
import "./globals.css";

/**
 * METADATA EXPORT
 *
 * Next.js gebruikt dit object om automatisch <meta> tags te genereren
 * in de <head> van je HTML. Dit is belangrijk voor:
 * - SEO (Search Engine Optimization): zoekmachines zoals Google lezen deze info
 * - Social media: wanneer je de link deelt op LinkedIn, Twitter, etc.
 *
 * Je hoeft geen <head> of <meta> tags handmatig te schrijven -
 * Next.js doet dit automatisch op basis van dit object.
 */
export const metadata: Metadata = {
  /* title: verschijnt in het browsertabblad en in Google zoekresultaten */
  title: "Warmerdam Consulting - Websites, Webapps en AI-tools",

  /* description: de tekst die Google toont onder de titel in zoekresultaten */
  description:
    "Ik bouw websites, webapps en AI-tools voor ondernemers die willen groeien zonder een duur development team. Next.js, Supabase en AI-integraties.",

  /* keywords: woorden waarmee zoekmachines je pagina kunnen vinden */
  keywords: ["freelance developer", "Next.js", "webapps", "AI-tools", "websites bouwen", "MKB"],

  /* openGraph: metadata specifiek voor social media deellinks.
   * Wanneer iemand je URL deelt op bijv. LinkedIn of WhatsApp,
   * worden deze gegevens gebruikt om een mooie preview te tonen. */
  openGraph: {
    title: "Warmerdam Consulting",
    description: "Van idee naar werkende software. In dagen, niet maanden.",
    url: "https://warmerdamconsulting.nl",
    siteName: "Warmerdam Consulting",
    locale: "nl_NL", /* Nederlandse taal, Nederland */
    type: "website",
  },
};

/**
 * HET ROOT LAYOUT COMPONENT
 *
 * Dit is een React component dat de basis HTML-structuur definieert.
 *
 * Props uitleg:
 * - "children" is een speciale React prop. Het bevat de inhoud die
 *   BINNEN dit layout wordt geplaatst (in dit geval de page.tsx inhoud).
 * - Readonly<{...}> is een TypeScript utility type dat ervoor zorgt
 *   dat de props niet per ongeluk gewijzigd kunnen worden.
 * - React.ReactNode is een type dat "alles wat React kan renderen" betekent
 *   (tekst, elementen, componenten, arrays, etc.)
 *
 * Hoe het werkt:
 * Next.js plaatst automatisch de inhoud van page.tsx als "children"
 * in dit layout. Je hoeft dit niet zelf te doen.
 *
 * Voorbeeld: als page.tsx een <h1>Hallo</h1> teruggeeft, dan wordt
 * {children} vervangen door <h1>Hallo</h1>.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /* lang="nl" vertelt browsers en schermlezers (accessibility tools)
     * dat de inhoud in het Nederlands is geschreven */
    <html lang="nl">
      {/* De body bevat alle zichtbare inhoud van de pagina.
       * {children} wordt vervangen door de inhoud van de huidige pagina (page.tsx) */}
      <body>{children}</body>
    </html>
  );
}
