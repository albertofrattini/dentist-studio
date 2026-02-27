import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chi Siamo | Studio Dentistico Borgomanero",
  description: "Conosci il team dello Studio Dentistico Borgomanero. Professionisti qualificati con oltre 20 anni di esperienza al servizio del tuo sorriso.",
};

const team = [
  {
    name: "Dott. Marco Bianchi",
    role: "Direttore Sanitario",
    specialization: "Implantologia e Chirurgia Orale",
    education: "Laurea in Odontoiatria – Università di Torino",
    experience: "25+ anni di esperienza",
    bio: "Il Dott. Bianchi ha fondato lo studio nel 2003 con la visione di creare un ambiente dove ogni paziente si sentisse accolto e curato. Specializzato in implantologia avanzata e chirurgia mininvasiva, ha completato la sua formazione con corsi internazionali presso le più prestigiose università europee. La sua filosofia: ogni sorriso merita la massima attenzione.",
    initials: "MB",
    gradient: "from-primary to-sky-400",
  },
  {
    name: "Dott.ssa Elena Rossi",
    role: "Odontoiatra",
    specialization: "Ortodonzia e Pedodonzia",
    education: "Laurea in Odontoiatria – Università di Milano",
    experience: "18 anni di esperienza",
    bio: "La Dott.ssa Rossi è il cuore del nostro reparto dedicato ai bambini. Con una specializzazione in ortodonzia e una naturale empatia verso i più piccoli, trasforma ogni visita in un'esperienza positiva. Esperta in allineatori trasparenti e ortodonzia intercettiva, segue i suoi pazienti dalla prima infanzia all'età adulta.",
    initials: "ER",
    gradient: "from-violet-500 to-purple-400",
  },
  {
    name: "Dott. Luca Ferretti",
    role: "Odontoiatra",
    specialization: "Odontoiatria Estetica e Conservativa",
    education: "Laurea in Odontoiatria – Università di Genova",
    experience: "15 anni di esperienza",
    bio: "Il Dott. Ferretti è un perfezionista dell'estetica dentale. Ogni restauro è per lui un'opera d'arte che deve integrarsi perfettamente con il sorriso naturale del paziente. Specializzato in faccette, sbiancamento e restauri diretti in composito, partecipa regolarmente a congressi internazionali per offrire sempre le tecniche più innovative.",
    initials: "LF",
    gradient: "from-emerald-500 to-teal-400",
  },
];

const staff = [
  { name: "Anna Verdi", role: "Igienista Dentale", initials: "AV" },
  { name: "Sara Lombardi", role: "Assistente alla Poltrona", initials: "SL" },
  { name: "Giulia Conte", role: "Assistente alla Poltrona", initials: "GC" },
  { name: "Marta Fontana", role: "Segreteria e Accoglienza", initials: "MF" },
];

const values = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: "Cura del paziente",
    description: "Ogni paziente è unico. Ascoltiamo le tue esigenze e creiamo piani di trattamento personalizzati.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Sicurezza e igiene",
    description: "Seguiamo rigorosi protocolli di sterilizzazione e sicurezza per garantire un ambiente impeccabile.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v4m0 14v4M4.22 4.22l2.83 2.83m9.9 9.9l2.83 2.83M1 12h4m14 0h4M4.22 19.78l2.83-2.83m9.9-9.9l2.83-2.83"/>
      </svg>
    ),
    title: "Tecnologia avanzata",
    description: "Investiamo costantemente in tecnologie all'avanguardia per offrire trattamenti mininvasivi e precisi.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Approccio familiare",
    description: "Da noi si sente come a casa. Accogliamo pazienti di tutte le età in un ambiente sereno e familiare.",
  },
];

export default function ChiSiamoPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F0F9FF] via-background to-background py-16 lg:py-20">
        <div className="blob-1 -top-48 -right-24 opacity-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold font-display mb-4">
              Chi Siamo
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-heading mb-4">
              Il team dietro il tuo sorriso
            </h1>
            <p className="text-lg text-body leading-relaxed">
              Un gruppo di professionisti appassionati, uniti dalla missione di prendersi cura della salute orale di Borgomanero e dintorni da oltre 20 anni.
            </p>
          </div>
        </div>
        <div className="wave-divider mt-8">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0,0 C300,60 900,0 1200,40 L1200,60 L0,60 Z" fill="#F9FAFB"/>
          </svg>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-heading mb-5">La nostra storia</h2>
              <div className="space-y-4 text-body leading-relaxed">
                <p>
                  Lo Studio Dentistico Borgomanero nasce nel 2003 dalla passione del Dott. Marco Bianchi per l&apos;odontoiatria e dalla sua convinzione che ogni persona meriti cure dentali di qualità in un ambiente sereno e accogliente.
                </p>
                <p>
                  Negli anni, lo studio è cresciuto con l&apos;arrivo della Dott.ssa Rossi e del Dott. Ferretti, professionisti che condividono la stessa filosofia: mettere il paziente al centro di ogni decisione. Oggi siamo un team affiatato di 7 persone, pronte ad accoglierti con un sorriso.
                </p>
                <p>
                  Il nostro studio è pensato per tutta la famiglia: dai bambini che fanno la loro prima visita, agli adulti che cercano trattamenti estetici all&apos;avanguardia, fino ai pazienti più anziani che necessitano di impianti e protesi.
                </p>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 border border-card-border aspect-[4/3] flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                  </svg>
                </div>
                <p className="font-display text-sm font-medium text-label">Foto dello studio</p>
                <p className="text-xs text-label/60 mt-1">Sostituire con immagine reale</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl font-bold text-heading mb-4">I nostri valori</h2>
            <p className="text-body text-lg">I principi che guidano il nostro lavoro ogni giorno.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-background rounded-2xl p-6 text-center opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="font-display text-base font-bold text-heading mb-2">{value.title}</h3>
                <p className="text-sm text-body">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team - Dentists */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold font-display mb-4">
              I Nostri Dottori
            </span>
            <h2 className="font-display text-3xl font-bold text-heading mb-4">Specialisti al tuo servizio</h2>
          </div>

          <div className="space-y-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="bg-card rounded-2xl border border-card-border overflow-hidden opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Photo */}
                  <div className={`bg-gradient-to-br ${member.gradient} flex items-center justify-center min-h-[220px] md:min-h-0`}>
                    <span className="text-5xl font-display font-bold text-white/80">{member.initials}</span>
                  </div>
                  {/* Info */}
                  <div className="md:col-span-2 p-8">
                    <h3 className="font-display text-xl font-bold text-heading mb-1">{member.name}</h3>
                    <p className="text-primary font-display font-semibold text-sm mb-0.5">{member.role}</p>
                    <p className="text-xs text-label mb-4">{member.specialization}</p>

                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-primary/5 text-xs text-primary font-medium">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 8 3 12 0v-5"/></svg>
                        {member.education}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-secondary/5 text-xs text-secondary font-medium">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        {member.experience}
                      </span>
                    </div>

                    <p className="text-sm text-body leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Staff */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-2xl font-bold text-heading mb-4">Il nostro staff</h2>
            <p className="text-body">Le persone che rendono ogni visita un&apos;esperienza piacevole.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {staff.map((person, index) => (
              <div
                key={person.name}
                className="bg-background rounded-2xl p-5 text-center opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3 font-display font-bold text-sm">
                  {person.initials}
                </div>
                <p className="font-display font-semibold text-heading text-sm">{person.name}</p>
                <p className="text-xs text-label">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-heading mb-4">
            Vieni a conoscerci di persona
          </h2>
          <p className="text-body text-lg mb-8">
            Prenota la tua prima visita e scopri perché i nostri pazienti ci scelgono da oltre 20 anni.
          </p>
          <Link
            href="/contatti"
            className="btn-primary inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-primary text-white font-display font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
          >
            Prenota un Appuntamento
          </Link>
        </div>
      </section>
    </>
  );
}
