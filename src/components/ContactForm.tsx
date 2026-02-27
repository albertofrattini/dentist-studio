"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-card rounded-2xl border border-secondary/30 p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-5">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h3 className="font-display text-xl font-bold text-heading mb-2">Richiesta Inviata!</h3>
        <p className="text-body text-sm max-w-md mx-auto">
          Grazie per averci contattato. Ti risponderemo entro 24 ore lavorative per confermare il tuo appuntamento.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary/10 text-primary font-display font-semibold text-sm hover:bg-primary/15 transition-colors"
        >
          Invia un&apos;altra richiesta
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-card-border p-7 sm:p-8">
      <h3 className="font-display text-xl font-bold text-heading mb-1">Prenota un Appuntamento</h3>
      <p className="text-sm text-label mb-6">Compila il modulo e ti contatteremo per confermare.</p>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-heading mb-1.5">
            Nome e Cognome *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="es. Mario Rossi"
            className="w-full px-4 py-3 rounded-xl bg-background border border-card-border text-sm text-heading placeholder:text-label/50 focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-heading mb-1.5">
            Telefono *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="es. 333 123 4567"
            className="w-full px-4 py-3 rounded-xl bg-background border border-card-border text-sm text-heading placeholder:text-label/50 focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-colors"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-heading mb-1.5">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="es. mario@email.it"
          className="w-full px-4 py-3 rounded-xl bg-background border border-card-border text-sm text-heading placeholder:text-label/50 focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-colors"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="service" className="block text-sm font-medium text-heading mb-1.5">
          Servizio richiesto
        </label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-3 rounded-xl bg-background border border-card-border text-sm text-heading focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-colors appearance-none"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%236B7280' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
        >
          <option value="">Seleziona un servizio</option>
          <option value="igiene">Igiene e Prevenzione</option>
          <option value="estetica">Odontoiatria Estetica</option>
          <option value="ortodonzia">Ortodonzia</option>
          <option value="implantologia">Implantologia</option>
          <option value="pedodonzia">Pedodonzia (Bambini)</option>
          <option value="chirurgia">Chirurgia Orale</option>
          <option value="prima-visita">Prima Visita</option>
          <option value="urgenza">Urgenza</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-heading mb-1.5">
          Messaggio
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Raccontaci come possiamo aiutarti..."
          className="w-full px-4 py-3 rounded-xl bg-background border border-card-border text-sm text-heading placeholder:text-label/50 focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="btn-primary w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-primary text-white font-display font-semibold text-base hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
        </svg>
        Invia Richiesta
      </button>

      <p className="text-xs text-label text-center mt-4">
        Risponderemo entro 24 ore lavorative. Per urgenze, chiama il{" "}
        <a href="tel:+390322123456" className="text-primary hover:underline">0322 123 456</a>.
      </p>
    </form>
  );
}
