"use client";

import { useState, FormEvent } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    naam: "",
    bedrijfsnaam: "",
    omschrijving: "",
    leads: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans text-[#1A1A1A]">
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold tracking-tight">
            Warmerdam<span className="text-[#C8102E]">Consulting</span>
          </a>
          <a
            href="#contact"
            className="bg-[#C8102E] text-white px-6 py-2.5 text-sm font-semibold tracking-wide hover:bg-red-700 transition-colors"
          >
            Kennismaken
          </a>
        </div>
      </nav>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              Jij genereert
              <br />
              de leads.
              <br />
              <span className="text-[#C8102E]">Wij sluiten de deals.</span>
            </h1>
            <p className="mt-6 text-lg text-[#6B6B6B] max-w-md leading-relaxed">
              Warmerdam Consulting verzorgt het closing en appointment setting
              voor jouw warme leads - zodat jij je focust op waar je goed in
              bent.
            </p>
            <a
              href="#contact"
              className="inline-block mt-8 bg-[#C8102E] text-white px-8 py-3.5 text-sm font-semibold tracking-wide hover:bg-red-700 transition-colors"
            >
              Plan een kennismaking
            </a>
          </div>
          <div className="hidden md:flex justify-end items-center relative h-[500px]">
            <div className="w-[3px] bg-[#C8102E] h-full absolute right-24" />
            <div className="w-48 h-48 rounded-full border-[6px] border-[#C8102E] absolute right-8 top-12" />
            <div className="w-24 h-24 bg-[#C8102E] rounded-full absolute right-36 bottom-16" />
          </div>
        </div>
      </section>

      <section className="bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-16">
            Voor wie is dit?
          </h2>
          <div className="space-y-10">
            {[
              "Je hebt een bewezen aanbod en warme leads die je niet snel genoeg opvolgt.",
              "Je verliest deals omdat closing niet jouw sterkste kant is.",
              "Je wil groeien zonder een sales team in loondienst.",
            ].map((punt, i) => (
              <div key={i} className="flex items-start gap-6">
                <div className="w-[3px] min-h-[24px] bg-[#C8102E] mt-2 shrink-0" />
                <p className="text-xl sm:text-2xl font-medium leading-snug">
                  {punt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-16">
            Hoe het werkt
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                nr: "1",
                titel: "Kennismaking",
                tekst:
                  "We bespreken jouw aanbod, doelgroep en huidige salesproces.",
              },
              {
                nr: "2",
                titel: "Intake en alignment",
                tekst:
                  "We stemmen af op tone of voice, bezwaren en closing strategie.",
              },
              {
                nr: "3",
                titel: "Aan de slag",
                tekst:
                  "Ik neem jouw warme leads over en zorg voor conversies.",
              },
            ].map((stap) => (
              <div key={stap.nr}>
                <span className="text-5xl font-bold text-[#C8102E]">
                  {stap.nr}
                </span>
                <h3 className="text-xl font-bold mt-4 mb-2">{stap.titel}</h3>
                <p className="text-[#6B6B6B] leading-relaxed">{stap.tekst}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 h-[3px] bg-[#C8102E]" />
        </div>
      </section>

      <section className="bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-16 items-center">
          <div className="bg-gray-300 w-full max-w-[400px] h-[500px] flex items-center justify-center">
            <span className="text-[#6B6B6B] text-lg font-medium">
              Rick Warmerdam
            </span>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Rick Warmerdam
            </h2>
            <p className="text-[#C8102E] font-semibold mt-2 text-lg">
              Sales Professional
            </p>
            <p className="mt-6 text-[#6B6B6B] leading-relaxed text-lg">
              Ik doe dit werk al 5 jaar. Begonnen als high ticket closer,
              doorgegroeid naar account management bij een marketing bureau en
              daarna naar B2B sales in meerdere sectoren. Van de lokale
              ondernemer tot internationale deals - ik weet hoe je een gesprek
              naar een deal converteert.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              {["5 jaar ervaring", "High ticket sales", "B2B & B2C"].map(
                (feit) => (
                  <span
                    key={feit}
                    className="text-[#C8102E] font-bold text-sm tracking-wide border border-[#C8102E] px-4 py-2"
                  >
                    {feit}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white">
        <div className="max-w-2xl mx-auto px-6 py-24 md:py-32">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Laten we kennismaken
          </h2>
          <p className="mt-4 text-[#6B6B6B] text-lg">
            Vul het formulier in en ik neem binnen 24 uur contact op.
          </p>
          {submitted ? (
            <div className="mt-12 bg-[#F5F5F5] p-8">
              <p className="text-xl font-bold">Bedankt voor je aanvraag.</p>
              <p className="mt-2 text-[#6B6B6B]">
                Ik neem zo snel mogelijk contact met je op.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-12 space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Naam
                </label>
                <input
                  type="text"
                  required
                  value={formData.naam}
                  onChange={(e) =>
                    setFormData({ ...formData, naam: e.target.value })
                  }
                  className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#C8102E] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Bedrijfsnaam
                </label>
                <input
                  type="text"
                  required
                  value={formData.bedrijfsnaam}
                  onChange={(e) =>
                    setFormData({ ...formData, bedrijfsnaam: e.target.value })
                  }
                  className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#C8102E] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Omschrijving aanbod
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.omschrijving}
                  onChange={(e) =>
                    setFormData({ ...formData, omschrijving: e.target.value })
                  }
                  className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#C8102E] transition-colors resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Aantal leads per maand
                </label>
                <select
                  required
                  value={formData.leads}
                  onChange={(e) =>
                    setFormData({ ...formData, leads: e.target.value })
                  }
                  className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#C8102E] transition-colors bg-white"
                >
                  <option value="">Selecteer</option>
                  <option value="<10">Minder dan 10</option>
                  <option value="10-50">10 - 50</option>
                  <option value="50+">Meer dan 50</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-[#C8102E] text-white py-4 text-sm font-semibold tracking-wide hover:bg-red-700 transition-colors"
              >
                Verstuur
              </button>
            </form>
          )}
        </div>
      </section>

      <footer className="bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm font-medium">
            Warmerdam<span className="text-[#C8102E]">Consulting</span>
          </span>
          <div className="text-sm text-gray-400 flex flex-col sm:flex-row gap-2 sm:gap-6 text-center">
            <span>rick@warmerdamconsulting.nl</span>
            <span>KvK: 88226409</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
