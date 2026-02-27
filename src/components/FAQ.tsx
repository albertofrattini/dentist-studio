"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Come posso prenotare un appuntamento?",
    answer:
      "Puoi prenotare un appuntamento chiamando il nostro studio al numero 0322 123 456, inviando un'email a info@studiodentistico.it, oppure compilando il modulo nella pagina Contatti del nostro sito. Ti risponderemo entro 24 ore.",
  },
  {
    question: "Lo studio è adatto anche ai bambini?",
    answer:
      "Assolutamente sì! La nostra Dott.ssa Rossi è specializzata in pedodonzia e il nostro studio è pensato per accogliere i più piccoli in un ambiente sereno e giocoso. La prima visita è sempre un momento di conoscenza, senza stress.",
  },
  {
    question: "Accettate pazienti con urgenze dentali?",
    answer:
      "Sì, riserviamo sempre degli spazi in agenda per le urgenze. In caso di dolore acuto, frattura di un dente o altri problemi urgenti, chiamaci immediatamente e cercheremo di riceverti il prima possibile, anche nella stessa giornata.",
  },
  {
    question: "Quanto costa una prima visita?",
    answer:
      "La prima visita comprende un esame completo e una panoramica digitale. I costi variano in base al trattamento necessario. Contattaci per un preventivo personalizzato e gratuito. Offriamo anche opzioni di pagamento rateale.",
  },
  {
    question: "Utilizzate tecnologie moderne?",
    answer:
      "Sì, il nostro studio è dotato delle tecnologie più avanzate: radiografie digitali a bassa emissione, scanner intraorale 3D, laser a diodi per trattamenti mininvasivi e sistema CAD/CAM per protesi realizzate in giornata.",
  },
  {
    question: "È possibile pagare a rate?",
    answer:
      "Certamente. Offriamo la possibilità di finanziare i trattamenti con pagamenti rateali fino a 24 mesi, senza interessi. Parliamone insieme durante la tua visita e troveremo la soluzione più adatta a te.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold font-display mb-4">
            Domande Frequenti
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-heading mb-4">
            Hai qualche dubbio?
          </h2>
          <p className="text-body text-lg">
            Ecco le risposte alle domande più comuni dei nostri pazienti.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-card rounded-2xl border transition-colors duration-200 ${
                  isOpen ? "border-primary/30 shadow-sm shadow-primary/5" : "border-card-border"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold text-heading text-sm sm:text-base">{faq.question}</span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200 ${
                      isOpen ? "bg-primary text-white rotate-180" : "bg-gray-100 text-label"
                    }`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 pb-5">
                    <p className="text-sm text-body leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* More questions CTA */}
        <div className="text-center mt-10 p-6 bg-card rounded-2xl border border-card-border">
          <p className="text-body text-sm mb-3">Non hai trovato la risposta che cercavi?</p>
          <a
            href="tel:+390322123456"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-display font-semibold text-sm hover:bg-primary-dark transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Chiamaci
          </a>
        </div>
      </div>
    </section>
  );
}
