import Link from "next/link";

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Igiene e Prevenzione",
    description: "Pulizia professionale, sigillature e programmi di prevenzione personalizzati per mantenere il tuo sorriso sano.",
    color: "bg-sky-50 text-sky-600",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
        <path d="M19 3v4"/><path d="M21 5h-4"/>
      </svg>
    ),
    title: "Odontoiatria Estetica",
    description: "Sbiancamento, faccette e restauri estetici per un sorriso luminoso e naturale che ti farà sentire sicuro.",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
        <line x1="4" y1="22" x2="4" y2="15"/>
      </svg>
    ),
    title: "Ortodonzia",
    description: "Apparecchi tradizionali e allineatori trasparenti per allineare i denti a qualsiasi età, anche per bambini.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v4m0 14v4M4.22 4.22l2.83 2.83m9.9 9.9l2.83 2.83M1 12h4m14 0h4M4.22 19.78l2.83-2.83m9.9-9.9l2.83-2.83"/>
      </svg>
    ),
    title: "Implantologia",
    description: "Impianti dentali di ultima generazione per sostituire denti mancanti con soluzioni durature e dall&apos;aspetto naturale.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12h.01M15 12h.01M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/>
        <path d="M19 6.3a9 9 0 0 1 .9 3.7 2 2 0 0 1 0 4 9 9 0 0 1-17.8 0 2 2 0 0 1 0-4A9 9 0 0 1 19 6.3"/>
      </svg>
    ),
    title: "Pedodonzia",
    description: "Cure dentali pensate per i bambini in un ambiente giocoso e sereno. Il primo sorriso è importante!",
    color: "bg-pink-50 text-pink-600",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"/><path d="M2 20h20"/><path d="M14 12v.01"/>
      </svg>
    ),
    title: "Chirurgia Orale",
    description: "Estrazioni, chirurgia dei tessuti molli e interventi mininvasivi con tecnologie all&apos;avanguardia.",
    color: "bg-rose-50 text-rose-600",
  },
];

export default function ServiceCards() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold font-display mb-4">
            I Nostri Servizi
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-heading mb-4">
            Cure complete per tutta la famiglia
          </h2>
          <p className="text-body text-lg">
            Offriamo una gamma completa di trattamenti dentali per garantire la salute e la bellezza del tuo sorriso.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card group bg-card rounded-2xl border border-card-border p-7 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-heading mb-2.5">{service.title}</h3>
              <p className="text-body text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/servizi"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary/10 text-primary font-display font-semibold text-sm hover:bg-primary/15 transition-colors"
          >
            Scopri tutti i servizi
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
