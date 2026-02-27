"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Maria Colombo",
    rating: 5,
    text: "Ho sempre avuto paura del dentista, ma qui mi sono sentita subito a mio agio. Lo studio è moderno e pulito, e il Dott. Bianchi è davvero gentile e paziente. Consigliatissimo!",
    date: "3 settimane fa",
    initials: "MC",
    color: "bg-pink-100 text-pink-600",
  },
  {
    name: "Giuseppe Moretti",
    rating: 5,
    text: "Porto i miei due figli qui da anni. La Dott.ssa Rossi è fantastica con i bambini, li mette a loro agio e li fa sentire speciali. Ora i miei figli non vedono l'ora di andare dal dentista!",
    date: "1 mese fa",
    initials: "GM",
    color: "bg-sky-100 text-sky-600",
  },
  {
    name: "Francesca Rizzo",
    rating: 5,
    text: "Ho fatto lo sbiancamento con il Dott. Ferretti e il risultato è incredibile. Molto naturale e luminoso. Lo staff è sempre disponibile e professionale.",
    date: "2 mesi fa",
    initials: "FR",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    name: "Andrea Conti",
    rating: 5,
    text: "Dopo anni con un vecchio dentista, ho cambiato e sono venuto qui. Che differenza! Tecnologie moderne, ambiente accogliente e tempi di attesa minimi. Non tornerò indietro.",
    date: "2 mesi fa",
    initials: "AC",
    color: "bg-amber-100 text-amber-600",
  },
  {
    name: "Laura Galli",
    rating: 4,
    text: "Ho messo l'apparecchio invisibile e sto vedendo già i primi risultati dopo pochi mesi. Il team è super professionale e ti segue passo dopo passo. Ambiente molto curato.",
    date: "3 mesi fa",
    initials: "LG",
    color: "bg-violet-100 text-violet-600",
  },
  {
    name: "Roberto Martini",
    rating: 5,
    text: "Impianto dentale fatto qui un anno fa. Procedura indolore e risultato perfetto. Il Dott. Bianchi è un vero professionista. Parcheggio comodo proprio davanti allo studio.",
    date: "4 mesi fa",
    initials: "RM",
    color: "bg-rose-100 text-rose-600",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={star <= rating ? "#FBBF24" : "none"}
          stroke={star <= rating ? "#FBBF24" : "#D1D5DB"}
          strokeWidth="2"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [visibleCount, setVisibleCount] = useState(3);
  const showMore = visibleCount < testimonials.length;

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-600 text-sm font-semibold font-display mb-4">
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              4.9 su Google
            </span>
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-heading mb-4">
            Cosa dicono i nostri pazienti
          </h2>
          <p className="text-body text-lg">
            La fiducia dei nostri pazienti è il nostro più grande riconoscimento.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.slice(0, visibleCount).map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="testimonial-card bg-card rounded-2xl border border-card-border p-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-11 h-11 rounded-xl ${testimonial.color} flex items-center justify-center font-display font-bold text-sm`}>
                  {testimonial.initials}
                </div>
                <div className="flex-1">
                  <p className="font-display font-semibold text-heading text-sm">{testimonial.name}</p>
                  <p className="text-xs text-label">{testimonial.date}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="mb-3">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Quote */}
              <p className="text-sm text-body leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* Show More */}
        {showMore && (
          <div className="text-center mt-8">
            <button
              onClick={() => setVisibleCount(testimonials.length)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-card border border-card-border text-body font-display font-semibold text-sm hover:border-primary/30 hover:text-primary transition-colors"
            >
              Mostra altre recensioni
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 9l6 6 6-6"/></svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
