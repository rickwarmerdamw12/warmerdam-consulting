/**
 * ==========================================================
 * HOMEPAGE - De hoofdpagina van Warmerdam Consulting
 * ==========================================================
 *
 * Dit is de hoofdpagina (landing page) van de website.
 * In Next.js is elk bestand genaamd "page.tsx" automatisch een pagina.
 * Dit bestand (src/app/page.tsx) is de ROOT pagina, oftewel de homepage.
 *
 * BELANGRIJKE CONCEPTEN:
 * - "use client": Dit vertelt Next.js dat dit component in de browser draait
 *   (niet op de server). Dit is nodig omdat we hier useState gebruiken.
 * - JSX: De HTML-achtige code die je in de return() ziet. React gebruikt JSX
 *   om te beschrijven hoe de pagina eruit moet zien.
 * - Tailwind CSS: De lange className strings (bijv. "bg-white text-lg") zijn
 *   Tailwind klassen. Elke klasse doet één ding (bijv. bg-white = witte achtergrond).
 * - Component: Een herbruikbaar stuk UI. Deze functie "Home" is een component.
 */

/* "use client" maakt dit een Client Component.
 * Standaard zijn Next.js componenten Server Components (draaien op de server).
 * Maar omdat we interactieve features gebruiken (useState voor het formulier),
 * MOETEN we "use client" gebruiken. Zonder dit krijg je een foutmelding. */
"use client";

/* Hier importeren we functies uit React:
 * - useState: Een "hook" waarmee je data kunt opslaan die kan veranderen
 *   (bijv. wat de gebruiker typt in een formulier)
 * - FormEvent: Een TypeScript type dat beschrijft wat een formulier-event is
 *   (TypeScript helpt fouten te voorkomen door types te controleren) */
import { useState, FormEvent } from "react";

/**
 * Dit is het hoofdcomponent van de pagina.
 * "export default" betekent dat Next.js dit component automatisch
 * als pagina-inhoud gebruikt wanneer iemand de homepage bezoekt.
 *
 * Een React component is eigenlijk gewoon een functie die JSX teruggeeft
 * (de HTML-achtige code in de return statement).
 */
export default function Home() {
  /* === STATE MANAGEMENT (Gegevensbeheer) ===
   *
   * useState is een React "hook" - een speciale functie die React biedt.
   * Het werkt zo: const [waarde, setWaarde] = useState(startwaarde)
   *
   * formData: bevat alle formuliervelden (naam, email, project)
   * setFormData: functie om formData te updaten
   *
   * Wanneer je setFormData aanroept, rendert React de pagina opnieuw
   * met de nieuwe data. Dit is het kernprincipe van React: als data
   * verandert, update de UI automatisch. */
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    project: "",
  });

  /* submitted: houdt bij of het formulier al verstuurd is (true/false)
   * We gebruiken dit om na het versturen een bedankbericht te tonen
   * in plaats van het formulier. */
  const [submitted, setSubmitted] = useState(false);

  /**
   * Deze functie wordt aangeroepen wanneer het formulier wordt verstuurd.
   * - e.preventDefault() voorkomt dat de browser de pagina herlaadt
   *   (standaard gedrag bij formulieren). We willen de pagina NIET herladen,
   *   maar in plaats daarvan de state updaten.
   * - setSubmitted(true) verandert submitted naar true, waardoor React
   *   automatisch het bedankbericht toont in plaats van het formulier.
   */
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  /* De return statement bevat alle JSX (de visuele opbouw van de pagina).
   * JSX lijkt op HTML, maar er zijn verschillen:
   * - className in plaats van class (want "class" is een gereserveerd woord in JavaScript)
   * - {} om JavaScript expressies in te voegen (bijv. {item.titel})
   * - Elke component moet één root element teruggeven (hier een <div>) */
  return (
    /* Buitenste container voor de hele pagina
     * Tailwind klassen uitleg:
     * - min-h-screen: minimale hoogte is het hele scherm (100vh)
     * - bg-white: witte achtergrondkleur
     * - text-[#0F172A]: tekstkleur in hex (donkerblauw/zwart)
     * - font-sans: schreefloos lettertype (modern, goed leesbaar) */
    <div className="min-h-screen bg-white text-[#0F172A] font-sans">

      {/* ============================================================
       * NAVIGATIEBALK (NAV)
       * De balk bovenaan de pagina met het logo en de CTA-knop.
       * ============================================================ */}
      {/* Tailwind uitleg:
       * - sticky top-0: blijft bovenaan het scherm "plakken" bij scrollen
       * - z-50: zorgt dat de nav BOVEN andere elementen wordt getoond
       * - border-b: onderrand (border-bottom)
       * - shadow-sm: subtiele schaduw voor diepte-effect */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
        {/* max-w-6xl mx-auto centreert de inhoud met een maximale breedte
         * px-4 sm:px-6 = padding links/rechts: 16px standaard, 24px op grotere schermen
         * sm: is een "responsive breakpoint" - de stijl geldt alleen boven 640px breed
         * flex items-center justify-between: plaatst items naast elkaar met ruimte ertussen
         * h-16: hoogte van 64px */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          {/* Bedrijfsnaam / logo */}
          <span className="font-bold text-lg text-[#0F172A] tracking-tight">
            Warmerdam Consulting
          </span>
          {/* CTA (Call-to-Action) knop - moedigt bezoekers aan om contact op te nemen
           * href="#contact" scrollt naar de sectie met id="contact"
           * hover:bg-blue-700: kleur verandert bij muisover
           * transition-colors duration-200: soepele kleurovergang (200ms) */}
          <a
            href="#contact"
            className="bg-[#2563EB] hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
          >
            Plan een gesprek
          </a>
        </div>
      </nav>

      {/* ============================================================
       * HERO SECTIE
       * Het eerste grote blok dat bezoekers zien. Dit is het belangrijkste
       * deel van de pagina - het moet direct duidelijk maken wat je aanbiedt.
       * ============================================================ */}
      <section id="hero" className="bg-white pt-20 pb-24 px-4 sm:px-6">
        {/* max-w-4xl beperkt de breedte tot ~896px voor leesbaarheid
         * text-center centreert alle tekst */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Beschikbaarheids-badge: een klein label dat laat zien dat je
           * open staat voor nieuwe projecten. Het groene bolletje pulseert
           * (animate-pulse) om aandacht te trekken.
           * inline-flex: flexbox maar dan inline (neemt niet de hele breedte in)
           * rounded-full: volledig ronde hoeken (pill-shape) */}
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#2563EB] text-sm font-medium px-4 py-2 rounded-full mb-8 border border-blue-100">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Beschikbaar voor nieuwe projecten
          </div>

          {/* Hoofdtitel (h1) - de belangrijkste kop op de pagina
           * Responsive tekst grootte:
           * - text-4xl: standaard (36px)
           * - sm:text-5xl: vanaf 640px breed (48px)
           * - md:text-6xl: vanaf 768px breed (60px)
           * font-extrabold: extra dikke letters voor impact
           * leading-tight: kleine regelafstand voor koppen */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0F172A] leading-tight mb-6">
            Van idee naar werkende software.{" "}
            {/* {" "} voegt een spatie toe in JSX - nodig omdat JSX witruimte
             * anders behandelt dan gewone HTML */}
            <span className="text-[#2563EB]">In dagen, niet maanden.</span>
          </h1>

          {/* Subtitel / beschrijving onder de hoofdtitel */}
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10">
            Ik bouw websites, webapps en AI-tools voor ondernemers die willen
            groeien zonder een duur development team.
          </p>

          {/* CTA knoppen - twee knoppen naast elkaar
           * flex-col sm:flex-row: op kleine schermen onder elkaar, op grotere naast elkaar
           * gap-4: ruimte tussen de knoppen (16px) */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            {/* Primaire knop (opvallend, blauwe achtergrond) */}
            <a
              href="#contact"
              className="bg-[#2563EB] hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200 text-center"
            >
              Plan een gratis gesprek
            </a>
            {/* Secundaire knop (rand-stijl, minder opvallend)
             * border-2: dikke rand in plaats van gevulde achtergrond */}
            <a
              href="#portfolio"
              className="border-2 border-[#0F172A] text-[#0F172A] hover:bg-slate-50 font-semibold px-8 py-4 rounded-xl transition-colors duration-200 text-center"
            >
              Bekijk mijn werk
            </a>
          </div>

          {/* Vertrouwens-indicatoren: laten zien welke technologieën je gebruikt
           * SVG's zijn vectorafbeeldingen die je direct in JSX kunt schrijven
           * (hier vinkjes/checkmarks) */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-slate-500">
            <div className="flex items-center gap-2">
              {/* SVG = Scalable Vector Graphics. Dit tekent een vinkje.
               * fill="none" stroke="currentColor": alleen de lijn tekenen, geen vulling
               * viewBox definieert het coördinatensysteem van de SVG */}
              <svg className="w-5 h-5 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-medium text-[#0F172A]">Next.js &amp; React</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-medium text-[#0F172A]">Supabase &amp; AI</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-medium text-[#0F172A]">Live in 2 weken</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
       * DIENSTEN SECTIE
       * Toont de drie soorten diensten die worden aangeboden.
       * Elke dienst staat in een eigen "kaart" (card component).
       * ============================================================ */}
      {/* bg-slate-50: lichtgrijze achtergrond om visueel onderscheid te maken
       * met de witte secties erboven en eronder */}
      <section id="diensten" className="bg-slate-50 py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Sectie-header met titel en beschrijving */}
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
              Wat ik bouw
            </h2>
            <p className="text-slate-600 text-lg max-w-xl mx-auto">
              Van eenvoudige website tot volledige AI-integratie - ik lever wat jouw bedrijf nodig heeft.
            </p>
          </div>

          {/* CSS Grid voor de drie kaarten
           * grid: activeert CSS Grid layout
           * grid-cols-1: 1 kolom standaard (mobiel)
           * md:grid-cols-3: 3 kolommen vanaf 768px breed (tablet/desktop)
           * gap-6: ruimte tussen de kaarten (24px) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Kaart 1: Websites & Webapps
             * hover:border-[#2563EB]: rand wordt blauw bij muisover
             * hover:shadow-md: schaduw verschijnt bij muisover
             * transition-all: alle veranderingen worden soepel geanimeerd */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-[#2563EB] hover:shadow-md transition-all duration-200">
              {/* Icoon container - een gekleurd vierkant met een SVG icoon erin */}
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              {/* &amp; is de HTML-entity voor het &-teken */}
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">Website &amp; Webapps</h3>
              <p className="text-slate-600 leading-relaxed">
                Van simpele website tot volledige SaaS applicatie. Snel, schaalbaar en gebouwd met moderne technologie.
              </p>
            </div>

            {/* Kaart 2: AI Integraties */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-[#2563EB] hover:shadow-md transition-all duration-200">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">AI Integraties</h3>
              <p className="text-slate-600 leading-relaxed">
                Chatbots, automatiseringen en AI-tools in je bestaande workflow. Bespaar tijd en schaal zonder extra personeel.
              </p>
            </div>

            {/* Kaart 3: Custom Software */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-[#2563EB] hover:shadow-md transition-all duration-200">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">Custom Software</h3>
              <p className="text-slate-600 leading-relaxed">
                Een tool op maat dat precies doet wat jouw bedrijf nodig heeft. Geen onnodige features, geen compromissen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
       * PORTFOLIO SECTIE
       * Laat eerder opgeleverde projecten zien als bewijs van kwaliteit.
       * Dit is belangrijk voor vertrouwen bij potentiële klanten.
       * ============================================================ */}
      <section id="portfolio" className="bg-white py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
              Eerder werk
            </h2>
            <p className="text-slate-600 text-lg max-w-xl mx-auto">
              Geen theorie, maar echte projecten die live zijn en resultaten leveren.
            </p>
          </div>

          {/* Twee projectkaarten naast elkaar op desktop (md:grid-cols-2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1: PocketLead - donkere kaart voor visueel contrast */}
            <div className="bg-[#0F172A] rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                {/* Project logo/initialen */}
                <div className="w-10 h-10 bg-[#2563EB] rounded-lg flex items-center justify-center font-bold text-sm">
                  PL
                </div>
                <span className="font-semibold text-lg">PocketLead</span>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6">
                CRM voor coaches en marketing bureaus. Gebouwd in 6 weken. Volledig custom gebouwd op Next.js en Supabase.
              </p>
              {/* Technologie-tags: bg-white/10 = witte achtergrond met 10% dekking */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-white/10 text-slate-300 text-xs px-3 py-1 rounded-full">Next.js</span>
                <span className="bg-white/10 text-slate-300 text-xs px-3 py-1 rounded-full">Supabase</span>
                <span className="bg-white/10 text-slate-300 text-xs px-3 py-1 rounded-full">6 weken</span>
              </div>
              {/* border-white/10 = witte rand met 10% dekking (subtiel) */}
              <div className="border-t border-white/10 pt-4">
                <span className="text-sm text-slate-400">Live op </span>
                <span className="text-sm text-[#2563EB] font-medium">app.pocketlead.nl</span>
              </div>
            </div>

            {/* Project 2: TAAI-consult - lichte kaart */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#0F172A] rounded-lg flex items-center justify-center font-bold text-sm text-white">
                  TC
                </div>
                <span className="font-semibold text-lg text-[#0F172A]">TAAI-consult</span>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">
                Complete website redesign met SEO-strategie. Professioneel bureau voor medezeggenschap - van verouderde site naar moderne aanwezigheid.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-white text-slate-600 text-xs px-3 py-1 rounded-full border border-slate-200">Website</span>
                <span className="bg-white text-slate-600 text-xs px-3 py-1 rounded-full border border-slate-200">SEO</span>
                <span className="bg-white text-slate-600 text-xs px-3 py-1 rounded-full border border-slate-200">Redesign</span>
              </div>
              <div className="border-t border-slate-200 pt-4">
                <span className="text-sm text-slate-400">Live op </span>
                <span className="text-sm text-[#2563EB] font-medium">taai-consult.nl</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
       * WERKWIJZE SECTIE
       * Legt het proces uit in 4 stappen. Dit vermindert onzekerheid
       * bij potentiële klanten door duidelijk te maken wat ze kunnen verwachten.
       * ============================================================ */}
      <section id="werkwijze" className="bg-slate-50 py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
              Hoe het werkt
            </h2>
            <p className="text-slate-600 text-lg max-w-xl mx-auto">
              Geen lange trajecten of onduidelijke processen. Van gesprek naar live in een paar stappen.
            </p>
          </div>

          {/* Responsive grid: 1 kolom (mobiel) → 2 kolommen (tablet) → 4 kolommen (desktop)
           * lg: breakpoint is vanaf 1024px breed */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* .map() is een JavaScript array-methode die elk item in de array
             * omzet naar een React element. Dit is hoe je in React een lijst
             * van elementen rendert - je maakt een array van objecten en
             * "mapt" elk object naar JSX.
             *
             * De "key" prop is VERPLICHT bij lijsten in React. Het helpt React
             * om bij te houden welk element welk is, zodat het efficiënt
             * kan updaten wanneer de lijst verandert. */}
            {[
              {
                stap: "01",
                titel: "Gratis gesprek",
                tekst: "We bespreken wat je nodig hebt, wat je doel is en of we een goede match zijn.",
              },
              {
                stap: "02",
                titel: "Voorstel",
                tekst: "Binnen 48 uur ontvang je een concrete aanpak met prijs en tijdlijn. Geen vage offertes.",
              },
              {
                stap: "03",
                titel: "Bouwen",
                tekst: "Wekelijkse updates en tussentijdse feedback. Jij houdt de controle over het project.",
              },
              {
                stap: "04",
                titel: "Live",
                tekst: "Oplevering met volledige overdracht en ondersteuning zodat je zelfstandig verder kunt.",
              },
            ].map((item) => (
              <div key={item.stap} className="bg-white rounded-2xl p-6 border border-slate-200">
                {/* opacity-30: het stapnummer is semi-transparant (30%) voor een
                 * subtiel visueel effect - het is decoratief, niet de hoofdinhoud */}
                <div className="text-4xl font-black text-[#2563EB] mb-4 opacity-30">
                  {item.stap}
                </div>
                {/* item.titel en item.tekst worden dynamisch ingevuld vanuit
                 * het object in de array hierboven */}
                <h3 className="text-lg font-bold text-[#0F172A] mb-3">{item.titel}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
       * PRIJZEN SECTIE
       * Drie prijskaarten (pricing tiers). Het middelste pakket is
       * visueel benadrukt als "meest gekozen" om bezoekers te sturen.
       * ============================================================ */}
      <section id="prijzen" className="bg-white py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
              Transparante prijzen
            </h2>
            <p className="text-slate-600 text-lg max-w-xl mx-auto">
              Geen verrassingen achteraf. Je weet van tevoren waar je aan toe bent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Starter pakket - lichte kaart (standaard stijl) */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">Starter</h3>
              <div className="text-4xl font-extrabold text-[#0F172A] mb-1">
                €1.500
              </div>
              <p className="text-slate-500 text-sm mb-6">eenmalig</p>
              <p className="text-slate-600 mb-8">
                Landing page of simpele website. Perfect voor bedrijven die online zichtbaar willen worden.
              </p>
              {/* Weer een .map() om een lijst features te renderen met vinkjes */}
              <ul className="space-y-3 mb-8">
                {["Responsive design", "SEO-basis", "Contactformulier", "Live binnen 2 weken"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    {/* shrink-0 voorkomt dat het vinkje kleiner wordt als de tekst
                     * ernaast te lang is (flexbox zou het anders kunnen verkleinen) */}
                    <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              {/* Secundaire CTA knop (rand-stijl, niet gevuld) */}
              <a
                href="#contact"
                className="block text-center border-2 border-[#2563EB] text-[#2563EB] hover:bg-blue-50 font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
              >
                Start gesprek
              </a>
            </div>

            {/* Professional pakket - DONKERE kaart (benadrukt als "meest gekozen")
             * relative: nodig zodat het "Meest gekozen" label absoluut gepositioneerd
             * kan worden ten opzichte van deze kaart */}
            <div className="bg-[#0F172A] rounded-2xl p-8 border border-[#0F172A] relative">
              {/* "Meest gekozen" badge - zweeft boven de kaart
               * absolute -top-3: positioneert het 12px boven de bovenkant
               * left-1/2 -translate-x-1/2: centreert het horizontaal */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-[#2563EB] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Meest gekozen
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Professional</h3>
              <div className="text-4xl font-extrabold text-white mb-1">
                €3.000 - 5.000
              </div>
              <p className="text-slate-400 text-sm mb-6">afhankelijk van scope</p>
              <p className="text-slate-300 mb-8">
                Webapp of dashboard. Voor bedrijven die meer willen dan een website - een tool dat echt werkt.
              </p>
              <ul className="space-y-3 mb-8">
                {["Custom webapp", "Database integratie", "Gebruikersaccounts", "API koppelingen", "Wekelijkse updates"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                    <svg className="w-4 h-4 text-[#2563EB] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              {/* Primaire CTA knop (gevuld, blauw) - opvallender dan de andere kaarten */}
              <a
                href="#contact"
                className="block text-center bg-[#2563EB] hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
              >
                Start gesprek
              </a>
            </div>

            {/* Custom pakket - lichte kaart (standaard stijl) */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">Custom</h3>
              <div className="text-4xl font-extrabold text-[#0F172A] mb-1">
                Op aanvraag
              </div>
              <p className="text-slate-500 text-sm mb-6">na intake gesprek</p>
              <p className="text-slate-600 mb-8">
                Complexe applicatie of AI-integratie. Prijs en tijdlijn op basis van jouw specifieke wensen.
              </p>
              <ul className="space-y-3 mb-8">
                {["AI-integraties", "Complexe logica", "Maatwerk database", "Volledige begeleiding", "Ondersteuning na oplevering"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block text-center border-2 border-[#2563EB] text-[#2563EB] hover:bg-blue-50 font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
              >
                Start gesprek
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
       * CONTACT SECTIE
       * Het contactformulier. Hier gebruiken we de useState hooks die
       * bovenaan het component zijn gedefinieerd om de formulierdata
       * bij te houden en te wisselen tussen formulier en bedankbericht.
       * ============================================================ */}
      <section id="contact" className="bg-slate-50 py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
              Klaar om te bouwen?
            </h2>
            <p className="text-slate-600 text-lg max-w-xl mx-auto mb-4">
              Vertel me over je project. Binnen 24 uur hoor je van me.
            </p>
            <a
              href="mailto:rick@warmerdamconsulting.nl"
              className="text-[#2563EB] font-medium hover:underline"
            >
              rick@warmerdamconsulting.nl
            </a>
          </div>

          {/* CONDITIONELE RENDERING: dit is een belangrijk React concept!
           * De syntax is: {voorwaarde ? (toon dit als true) : (toon dit als false)}
           * Dit heet een "ternary operator" of drieledige operator.
           *
           * Als submitted === true → toon het bedankbericht
           * Als submitted === false → toon het formulier */}
          {submitted ? (
            /* Bedankbericht - wordt getoond na succesvol versturen */
            <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-2">Bericht ontvangen!</h3>
              <p className="text-slate-600">Ik neem binnen 24 uur contact met je op.</p>
            </div>
          ) : (
            /* Het contactformulier
             * onSubmit={handleSubmit}: wanneer het formulier wordt verstuurd,
             * roep de handleSubmit functie aan (gedefinieerd bovenaan het component)
             * space-y-6: voegt 24px verticale ruimte toe tussen de formuliervelden */
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 border border-slate-200 space-y-6"
            >
              {/* Naam-veld */}
              <div>
                {/* htmlFor koppelt het label aan het input veld met hetzelfde id.
                 * In gewone HTML heet dit "for", maar in JSX heet het "htmlFor"
                 * (net als className in plaats van class) */}
                <label
                  htmlFor="naam"
                  className="block text-sm font-semibold text-[#0F172A] mb-2"
                >
                  Naam
                </label>
                {/* Het input veld:
                 * - value={formData.naam}: de waarde komt uit de state (controlled component)
                 * - onChange: wordt aangeroepen bij elke toetsaanslag
                 * - ...formData: "spread operator" - kopieert alle bestaande velden
                 * - naam: e.target.value: overschrijft alleen het naam-veld met de nieuwe waarde
                 *
                 * Dit patroon heet een "controlled component": React beheert de waarde
                 * van het input veld via state, niet de browser. */}
                <input
                  id="naam"
                  type="text"
                  required
                  value={formData.naam}
                  onChange={(e) =>
                    setFormData({ ...formData, naam: e.target.value })
                  }
                  placeholder="Jouw naam"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-[#0F172A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition"
                />
              </div>

              {/* E-mail veld - zelfde patroon als het naam-veld */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-[#0F172A] mb-2"
                >
                  E-mailadres
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="jouw@email.nl"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-[#0F172A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition"
                />
              </div>

              {/* Projectomschrijving - textarea voor langere tekst
               * rows={5}: 5 rijen hoog
               * resize-none: voorkomt dat de gebruiker het tekstveld kan vergroten/verkleinen */}
              <div>
                <label
                  htmlFor="project"
                  className="block text-sm font-semibold text-[#0F172A] mb-2"
                >
                  Projectomschrijving
                </label>
                <textarea
                  id="project"
                  required
                  rows={5}
                  value={formData.project}
                  onChange={(e) =>
                    setFormData({ ...formData, project: e.target.value })
                  }
                  placeholder="Vertel me over je project, wat je wilt bouwen en wat je doel is..."
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-[#0F172A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition resize-none"
                />
              </div>

              {/* Verstuur-knop
               * type="submit": vertelt de browser dat deze knop het formulier verstuurt
               * w-full: knop neemt de volledige breedte in */}
              <button
                type="submit"
                className="w-full bg-[#2563EB] hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200"
              >
                Verstuur bericht
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ============================================================
       * FOOTER
       * De voettekst van de website met bedrijfsgegevens en contact.
       * ============================================================ */}
      <footer className="bg-[#0F172A] text-slate-400 py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div>
            <span className="font-bold text-white">Warmerdam Consulting</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span>KvK: 88226409</span>
            <a
              href="mailto:rick@warmerdamconsulting.nl"
              className="text-[#2563EB] hover:underline"
            >
              rick@warmerdamconsulting.nl
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
