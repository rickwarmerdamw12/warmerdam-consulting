"use client";

import { useState, FormEvent } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    project: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-sans">
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <span className="font-bold text-lg text-[#0F172A] tracking-tight">
            Warmerdam Consulting
          </span>
          <a
            href="#contact"
            className="bg-[#2563EB] hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
          >
            Plan een gesprek
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="bg-white pt-20 pb-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#2563EB] text-sm font-medium px-4 py-2 rounded-full mb-8 border border-blue-100">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Beschikbaar voor nieuwe projecten
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0F172A] leading-tight mb-6">
            Van idee naar werkende software.{" "}
            <span className="text-[#2563EB]">In dagen, niet maanden.</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10">
            Ik bouw websites, webapps en AI-tools voor ondernemers die willen
            groeien zonder een duur development team.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#contact"
              className="bg-[#2563EB] hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200 text-center"
            >
              Plan een gratis gesprek
            </a>
            <a
              href="#portfolio"
              className="border-2 border-[#0F172A] text-[#0F172A] hover:bg-slate-50 font-semibold px-8 py-4 rounded-xl transition-colors duration-200 text-center"
            >
              Bekijk mijn werk
            </a>
          </div>

          {/* Trust items */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-slate-500">
            <div className="flex items-center gap-2">
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

      {/* DIENSTEN */}
      <section id="diensten" className="bg-slate-50 py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
              Wat ik bouw
            </h2>
            <p className="text-slate-600 text-lg max-w-xl mx-auto">
              Van eenvoudige website tot volledige AI-integratie - ik lever wat jouw bedrijf nodig heeft.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Kaart 1 */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-[#2563EB] hover:shadow-md transition-all duration-200">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">Website &amp; Webapps</h3>
              <p className="text-slate-600 leading-relaxed">
                Van simpele website tot volledige SaaS applicatie. Snel, schaalbaar en gebouwd met moderne technologie.
              </p>
            </div>

            {/* Kaart 2 */}
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

            {/* Kaart 3 */}
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

      {/* PORTFOLIO */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* PocketLead */}
            <div className="bg-[#0F172A] rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#2563EB] rounded-lg flex items-center justify-center font-bold text-sm">
                  PL
                </div>
                <span className="font-semibold text-lg">PocketLead</span>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6">
                CRM voor coaches en marketing bureaus. Gebouwd in 6 weken. Volledig custom gebouwd op Next.js en Supabase.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-white/10 text-slate-300 text-xs px-3 py-1 rounded-full">Next.js</span>
                <span className="bg-white/10 text-slate-300 text-xs px-3 py-1 rounded-full">Supabase</span>
                <span className="bg-white/10 text-slate-300 text-xs px-3 py-1 rounded-full">6 weken</span>
              </div>
              <div className="border-t border-white/10 pt-4">
                <span className="text-sm text-slate-400">Live op </span>
                <span className="text-sm text-[#2563EB] font-medium">app.pocketlead.nl</span>
              </div>
            </div>

            {/* TAAI-consult */}
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

      {/* WERKWIJZE */}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <div className="text-4xl font-black text-[#2563EB] mb-4 opacity-30">
                  {item.stap}
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-3">{item.titel}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRIJZEN */}
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
            {/* Starter */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">Starter</h3>
              <div className="text-4xl font-extrabold text-[#0F172A] mb-1">
                €1.500
              </div>
              <p className="text-slate-500 text-sm mb-6">eenmalig</p>
              <p className="text-slate-600 mb-8">
                Landing page of simpele website. Perfect voor bedrijven die online zichtbaar willen worden.
              </p>
              <ul className="space-y-3 mb-8">
                {["Responsive design", "SEO-basis", "Contactformulier", "Live binnen 2 weken"].map((item) => (
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

            {/* Professional */}
            <div className="bg-[#0F172A] rounded-2xl p-8 border border-[#0F172A] relative">
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
              <a
                href="#contact"
                className="block text-center bg-[#2563EB] hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
              >
                Start gesprek
              </a>
            </div>

            {/* Custom */}
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

      {/* CONTACT */}
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

          {submitted ? (
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
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 border border-slate-200 space-y-6"
            >
              <div>
                <label
                  htmlFor="naam"
                  className="block text-sm font-semibold text-[#0F172A] mb-2"
                >
                  Naam
                </label>
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

      {/* FOOTER */}
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
