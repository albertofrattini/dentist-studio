import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "I Nostri Servizi | Studio Dentistico Borgomanero",
  description: "Scopri tutti i servizi del nostro studio dentistico: igiene, estetica, ortodonzia, implantologia, pedodonzia e chirurgia orale.",
};

const services = [
  {
    id: "igiene",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Igiene e Prevenzione",
    description: "La prevenzione è alla base della salute orale. Il nostro programma di igiene personalizzato ti aiuta a mantenere denti e gengive in perfetta salute.",
    details: [
      "Pulizia dentale professionale con ultrasuoni",
      "Trattamento di detartrasi e levigatura radicolare",
      "Sigillature per bambini e adulti",
      "Programma di prevenzione personalizzato",
      "Educazione all'igiene orale domiciliare",
      "Screening per patologie del cavo orale",
    ],
    color: "bg-sky-50 text-sky-600 border-sky-100",
    accent: "sky",
  },
  {
    id: "estetica",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
        <path d="M19 3v4"/><path d="M21 5h-4"/>
      </svg>
    ),
    title: "Odontoiatria Estetica",
    description: "Un sorriso bello e naturale migliora la tua sicurezza. Offriamo trattamenti estetici all'avanguardia per trasformare il tuo sorriso.",
    details: [
      "Sbiancamento professionale in studio",
      "Faccette in ceramica e composite",
      "Ricostruzioni estetiche dirette",
      "Intarsi in ceramica",
      "Bonding dentale estetico",
      "Smile design digitale",
    ],
    color: "bg-violet-50 text-violet-600 border-violet-100",
    accent: "violet",
  },
  {
    id: "ortodonzia",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
        <line x1="4" y1="22" x2="4" y2="15"/>
      </svg>
    ),
    title: "Ortodonzia",
    description: "Denti allineati a qualsiasi età. Proponiamo soluzioni ortodontiche moderne e discrete per bambini, adolescenti e adulti.",
    details: [
      "Allineatori trasparenti (tipo Invisalign)",
      "Apparecchi fissi tradizionali",
      "Apparecchi mobili per bambini",
      "Ortodonzia intercettiva precoce",
      "Contenzione post-trattamento",
      "Pianificazione digitale 3D del trattamento",
    ],
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    accent: "emerald",
  },
  {
    id: "implantologia",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v4m0 14v4M4.22 4.22l2.83 2.83m9.9 9.9l2.83 2.83M1 12h4m14 0h4M4.22 19.78l2.83-2.83m9.9-9.9l2.83-2.83"/>
      </svg>
    ),
    title: "Implantologia",
    description: "Impianti dentali di ultima generazione per sostituire uno o più denti mancanti con risultati naturali e duraturi nel tempo.",
    details: [
      "Impianti singoli e multipli",
      "All-on-4 e All-on-6 per arcate complete",
      "Chirurgia guidata computer-assistita",
      "Rigenerazione ossea e rialzo del seno mascellare",
      "Protesi fisse su impianti",
      "Carico immediato quando possibile",
    ],
    color: "bg-amber-50 text-amber-600 border-amber-100",
    accent: "amber",
  },
  {
    id: "pedodonzia",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12h.01M15 12h.01M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/>
        <path d="M19 6.3a9 9 0 0 1 .9 3.7 2 2 0 0 1 0 4 9 9 0 0 1-17.8 0 2 2 0 0 1 0-4A9 9 0 0 1 19 6.3"/>
      </svg>
    ),
    title: "Pedodonzia",
    description: "Cure dentali pensate appositamente per i bambini. Il nostro approccio giocoso e sereno rende la visita dal dentista un'esperienza positiva.",
    details: [
      "Prima visita e approccio graduale",
      "Sigillature preventive dei solchi",
      "Trattamento delle carie nei denti da latte",
      "Fluoroprofilassi",
      "Educazione all'igiene per bambini",
      "Gestione delle paure e dell'ansia",
    ],
    color: "bg-pink-50 text-pink-600 border-pink-100",
    accent: "pink",
  },
  {
    id: "chirurgia",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"/><path d="M2 20h20"/><path d="M14 12v.01"/>
      </svg>
    ),
    title: "Chirurgia Orale",
    description: "Interventi chirurgici mininvasivi con tecnologie all'avanguardia per garantire comfort e risultati ottimali ai nostri pazienti.",
    details: [
      "Estrazioni semplici e complesse",
      "Estrazione denti del giudizio",
      "Chirurgia endodontica (apicectomia)",
      "Chirurgia dei tessuti molli",
      "Frenulectomia",
      "Biopsie del cavo orale",
    ],
    color: "bg-rose-50 text-rose-600 border-rose-100",
    accent: "rose",
  },
];

export default function ServiziPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F0F9FF] via-background to-background py-16 lg:py-20">
        <div className="blob-1 -top-48 -right-24 opacity-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold font-display mb-4">
              I Nostri Servizi
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-heading mb-4">
              Tutto per il tuo sorriso
            </h1>
            <p className="text-lg text-body leading-relaxed">
              Offriamo una gamma completa di trattamenti odontoiatrici per soddisfare le esigenze di tutta la famiglia, utilizzando le tecnologie più avanzate.
            </p>
          </div>
        </div>
        <div className="wave-divider mt-8">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0,0 C300,60 900,0 1200,40 L1200,60 L0,60 Z" fill="#F9FAFB"/>
          </svg>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-card rounded-2xl border border-card-border overflow-hidden opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Service Info */}
                  <div className="lg:col-span-3 p-8 lg:p-10">
                    <div className="flex items-start gap-4 mb-5">
                      <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center shrink-0 border`}>
                        {service.icon}
                      </div>
                      <div>
                        <h2 className="font-display text-2xl font-bold text-heading">{service.title}</h2>
                      </div>
                    </div>
                    <p className="text-body leading-relaxed mb-6">{service.description}</p>
                    <Link
                      href="/contatti"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-display font-semibold text-sm hover:bg-primary-dark transition-colors"
                    >
                      Prenota per {service.title.toLowerCase()}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </Link>
                  </div>

                  {/* Details */}
                  <div className="lg:col-span-2 bg-gray-50/50 p-8 lg:p-10 border-t lg:border-t-0 lg:border-l border-card-border">
                    <h3 className="font-display text-sm font-bold text-heading uppercase tracking-wider mb-4">Cosa include</h3>
                    <ul className="space-y-3">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2.5 text-sm text-body">
                          <svg className="w-4 h-4 mt-0.5 text-secondary shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-heading mb-4">
            Non sai quale servizio ti serve?
          </h2>
          <p className="text-body text-lg mb-8">
            Prenota una prima visita e il nostro team ti guiderà verso il trattamento più adatto alle tue esigenze.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contatti"
              className="btn-primary inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-primary text-white font-display font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
            >
              Prenota una Prima Visita
            </Link>
            <a
              href="tel:+390322123456"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-white text-primary font-display font-semibold border border-primary/20 hover:border-primary/40 transition-colors"
            >
              Chiama: 0322 123 456
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
