import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F0F9FF] via-background to-[#F0FDF4]">
      {/* Decorative blobs */}
      <div className="blob-1 -top-48 -right-24 opacity-60" />
      <div className="blob-2 -bottom-32 -left-20 opacity-40" />

      {/* Floating tooth mascot */}
      <div className="absolute top-20 right-[15%] hidden lg:block animate-gentle-bounce">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-primary/10">
          <path d="M12 2C9.5 2 7.5 3 6.5 5C5.5 7 5 9 5 11C5 13.5 5.5 15.5 6.5 17C7.5 18.5 8.5 20 9.5 21C10 21.5 10.5 22 11 22C11.5 22 11.8 21.5 12 21C12.2 21.5 12.5 22 13 22C13.5 22 14 21.5 14.5 21C15.5 20 16.5 18.5 17.5 17C18.5 15.5 19 13.5 19 11C19 9 18.5 7 17.5 5C16.5 3 14.5 2 12 2Z" fill="currentColor"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-6">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              Nuovi pazienti benvenuti
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-heading leading-[1.15] mb-6">
              Il tuo sorriso,{" "}
              <span className="relative">
                <span className="relative z-10 text-primary">la nostra passione</span>
                <svg className="absolute -bottom-1 left-0 w-full h-3 text-primary/15" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M0 8 Q50 0 100 8 Q150 16 200 8" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            <p className="text-lg text-body leading-relaxed mb-8 max-w-lg">
              Da oltre 20 anni ci prendiamo cura del sorriso di tutta la famiglia a Borgomanero.
              Un ambiente sereno e accogliente, anche per i più piccoli.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contatti"
                className="btn-primary inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-primary text-white font-display font-semibold text-base hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                Prenota un Appuntamento
              </Link>
              <a
                href="tel:+390322123456"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-white text-primary font-display font-semibold text-base border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Chiama: 0322 123 456
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-label">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <span>+2000 pazienti</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-amber-400"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                </div>
                <span>4.9/5 su Google</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <span>20+ anni di esperienza</span>
              </div>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative animate-fade-in-up delay-200" style={{ opacity: 0 }}>
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 border border-card-border aspect-[4/3]">
              {/* Placeholder image area */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-primary">
                    <path d="M12 2C9.5 2 7.5 3 6.5 5C5.5 7 5 9 5 11C5 13.5 5.5 15.5 6.5 17C7.5 18.5 8.5 20 9.5 21C10 21.5 10.5 22 11 22C11.5 22 11.8 21.5 12 21C12.2 21.5 12.5 22 13 22C13.5 22 14 21.5 14.5 21C15.5 20 16.5 18.5 17.5 17C18.5 15.5 19 13.5 19 11C19 9 18.5 7 17.5 5C16.5 3 14.5 2 12 2Z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1"/>
                  </svg>
                </div>
                <p className="font-display text-sm font-medium text-label">Foto del team dello studio</p>
                <p className="text-xs text-label/60 mt-1">Sostituire con immagine reale</p>
              </div>
              {/* Decorative corners */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-primary/20 rounded-tl-2xl" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-primary/20 rounded-br-2xl" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg shadow-black/5 border border-card-border px-5 py-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
                </svg>
              </div>
              <div>
                <p className="font-display font-bold text-heading text-sm">98%</p>
                <p className="text-xs text-label">pazienti soddisfatti</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="wave-divider">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path d="M0,0 C300,60 900,0 1200,40 L1200,60 L0,60 Z" fill="#F9FAFB"/>
        </svg>
      </div>
    </section>
  );
}
