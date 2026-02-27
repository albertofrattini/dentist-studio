import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contatti | Studio Dentistico Borgomanero",
  description: "Contatta lo Studio Dentistico Borgomanero. Prenota un appuntamento, chiamaci o vieni a trovarci in Via Roma 42, Borgomanero.",
};

export default function ContattiPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F0F9FF] via-background to-background py-16 lg:py-20">
        <div className="blob-1 -top-48 -right-24 opacity-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold font-display mb-4">
              Contatti
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-heading mb-4">
              Parliamo del tuo sorriso
            </h1>
            <p className="text-lg text-body leading-relaxed">
              Prenota un appuntamento, chiedi informazioni o vieni a trovarci. Siamo qui per te.
            </p>
          </div>
        </div>
        <div className="wave-divider mt-8">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0,0 C300,60 900,0 1200,40 L1200,60 L0,60 Z" fill="#F9FAFB"/>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-5">
              {/* Quick Contact */}
              <div className="bg-card rounded-2xl border border-card-border p-7">
                <h3 className="font-display text-lg font-bold text-heading mb-5">Contatto Diretto</h3>
                <div className="space-y-4">
                  <a href="tel:+390322123456" className="flex items-center gap-4 p-3 rounded-xl hover:bg-primary/5 transition-colors group">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-display font-semibold text-heading text-sm">Telefono</p>
                      <p className="text-sm text-primary font-medium">0322 123 456</p>
                    </div>
                  </a>

                  <a href="mailto:info@studiodentistico.it" className="flex items-center gap-4 p-3 rounded-xl hover:bg-primary/5 transition-colors group">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-display font-semibold text-heading text-sm">Email</p>
                      <p className="text-sm text-primary font-medium">info@studiodentistico.it</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-3">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-display font-semibold text-heading text-sm">Indirizzo</p>
                      <p className="text-sm text-body">Via Roma, 42<br/>28021 Borgomanero (NO)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-card rounded-2xl border border-card-border p-7">
                <h3 className="font-display text-lg font-bold text-heading mb-5">Orari di Apertura</h3>
                <div className="space-y-2.5">
                  {[
                    { day: "Lunedì – Venerdì", hours: "9:00 – 19:00", open: true },
                    { day: "Sabato", hours: "9:00 – 13:00", open: true },
                    { day: "Domenica", hours: "Chiuso", open: false },
                  ].map((item) => (
                    <div key={item.day} className="flex items-center justify-between text-sm py-1.5">
                      <span className="text-body">{item.day}</span>
                      <span className={`font-medium ${item.open ? "text-heading" : "text-rose-500"}`}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 rounded-xl bg-secondary/5 border border-secondary/10">
                  <p className="text-xs text-secondary font-medium flex items-center gap-1.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    Urgenze: disponibili anche fuori orario
                  </p>
                </div>
              </div>

              {/* Parking */}
              <div className="bg-card rounded-2xl border border-card-border p-7">
                <h3 className="font-display text-lg font-bold text-heading mb-3">Parcheggio</h3>
                <p className="text-sm text-body leading-relaxed">
                  Parcheggio gratuito disponibile direttamente di fronte allo studio. Ulteriori posti auto nel parcheggio comunale a soli 50 metri di distanza.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl font-bold text-heading mb-2">Come Raggiungerci</h2>
            <p className="text-body">Via Roma, 42 – 28021 Borgomanero (NO)</p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-card-border h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11179.54321!2d8.4562!3d45.6988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47845e2e3c0d7f0b%3A0x4b0d8c3e5f0a5c0b!2s28021%20Borgomanero%20NO%2C%20Italy!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa dello Studio Dentistico Borgomanero"
            />
          </div>
          <div className="grid sm:grid-cols-3 gap-4 mt-6">
            <div className="flex items-center gap-3 p-4 bg-background rounded-xl">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
              </div>
              <div>
                <p className="font-display font-semibold text-heading text-xs">In auto</p>
                <p className="text-xs text-body">Uscita A26 Borgomanero, 5 min dal casello</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-background rounded-xl">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2.81A2 2 0 0 1 20 8v8a2 2 0 0 1-2 2h-2"/><polyline points="17 14 12 9 7 14"/></svg>
              </div>
              <div>
                <p className="font-display font-semibold text-heading text-xs">In treno</p>
                <p className="text-xs text-body">Stazione di Borgomanero, 10 min a piedi</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-background rounded-xl">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <p className="font-display font-semibold text-heading text-xs">Parcheggio</p>
                <p className="text-xs text-body">Gratuito di fronte allo studio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-rose-50 to-orange-50 rounded-2xl border border-rose-100 p-8 text-center">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold text-heading mb-2">Urgenza Dentale?</h3>
            <p className="text-sm text-body mb-5">
              In caso di dolore acuto, frattura o trauma dentale, chiamaci subito. Riserviamo sempre posti per le urgenze.
            </p>
            <a
              href="tel:+390322123456"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-rose-600 text-white font-display font-semibold hover:bg-rose-700 transition-colors shadow-lg shadow-rose-600/20"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Chiama per Urgenza: 0322 123 456
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
