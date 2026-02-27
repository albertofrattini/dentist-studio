export default function PracticalInfo() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold font-display mb-4">
            Informazioni Utili
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-heading mb-4">
            Tutto quello che devi sapere
          </h2>
          <p className="text-body text-lg">
            Orari, posizione e informazioni pratiche per rendere la tua visita il più semplice possibile.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Opening Hours */}
          <div className="bg-card rounded-2xl border border-card-border p-7">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <h3 className="font-display text-lg font-bold text-heading mb-4">Orari di Apertura</h3>
            <div className="space-y-3">
              {[
                { day: "Lunedì", hours: "9:00 – 19:00" },
                { day: "Martedì", hours: "9:00 – 19:00" },
                { day: "Mercoledì", hours: "9:00 – 19:00" },
                { day: "Giovedì", hours: "9:00 – 19:00" },
                { day: "Venerdì", hours: "9:00 – 19:00" },
                { day: "Sabato", hours: "9:00 – 13:00" },
                { day: "Domenica", hours: "Chiuso" },
              ].map((item) => (
                <div key={item.day} className="flex items-center justify-between text-sm">
                  <span className="text-body">{item.day}</span>
                  <span className={`font-medium ${item.hours === "Chiuso" ? "text-rose-500" : "text-heading"}`}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-5 p-3 rounded-xl bg-secondary/5 border border-secondary/10">
              <p className="text-xs text-secondary font-medium">
                ✓ Anche appuntamenti in pausa pranzo su richiesta
              </p>
            </div>
          </div>

          {/* Location & Parking */}
          <div className="bg-card rounded-2xl border border-card-border p-7">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h3 className="font-display text-lg font-bold text-heading mb-4">Dove Siamo</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-heading">Indirizzo</p>
                <p className="text-sm text-body">Via Roma, 42 – 28021 Borgomanero (NO)</p>
              </div>
              <div>
                <p className="text-sm font-medium text-heading">Parcheggio</p>
                <p className="text-sm text-body">Parcheggio gratuito disponibile di fronte allo studio. Ulteriori posti auto nel parcheggio comunale a 50 metri.</p>
              </div>
              <div>
                <p className="text-sm font-medium text-heading">Accessibilità</p>
                <p className="text-sm text-body">Lo studio è accessibile ai disabili con rampa d&apos;accesso e ascensore.</p>
              </div>
            </div>
            {/* Mini Map Placeholder */}
            <div className="mt-5 rounded-xl bg-gray-100 border border-card-border h-32 flex items-center justify-center">
              <div className="text-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5" className="mx-auto mb-1">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <p className="text-xs text-label">Mappa interattiva nella pagina Contatti</p>
              </div>
            </div>
          </div>

          {/* Insurance & Payment */}
          <div className="bg-card rounded-2xl border border-card-border p-7">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
              </svg>
            </div>
            <h3 className="font-display text-lg font-bold text-heading mb-4">Pagamenti e Convenzioni</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-heading mb-2">Metodi di pagamento</p>
                <div className="flex flex-wrap gap-2">
                  {["Contanti", "Carta di credito", "Bancomat", "Bonifico"].map((method) => (
                    <span key={method} className="inline-block px-3 py-1 rounded-lg bg-gray-50 border border-card-border text-xs text-body">
                      {method}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-heading mb-2">Convenzioni</p>
                <ul className="space-y-1.5">
                  {[
                    "Fondo Est",
                    "Previmedical",
                    "Unisalute",
                    "Fasdac",
                  ].map((insurance) => (
                    <li key={insurance} className="flex items-center gap-2 text-sm text-body">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                      {insurance}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-medium text-heading mb-1">Finanziamenti</p>
                <p className="text-sm text-body">Possibilità di pagamento rateale fino a 24 mesi senza interessi.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
