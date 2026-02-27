import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-heading text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C9.5 2 7.5 3 6.5 5C5.5 7 5 9 5 11C5 13.5 5.5 15.5 6.5 17C7.5 18.5 8.5 20 9.5 21C10 21.5 10.5 22 11 22C11.5 22 11.8 21.5 12 21C12.2 21.5 12.5 22 13 22C13.5 22 14 21.5 14.5 21C15.5 20 16.5 18.5 17.5 17C18.5 15.5 19 13.5 19 11C19 9 18.5 7 17.5 5C16.5 3 14.5 2 12 2Z" fill="white" stroke="white" strokeWidth="0.5"/>
                </svg>
              </div>
              <div>
                <span className="font-display text-lg font-bold text-white leading-none">Studio Dentistico</span>
                <span className="block font-display text-[11px] font-medium text-primary-light tracking-wide">BORGOMANERO</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Il tuo sorriso è la nostra passione. Da oltre 20 anni ci prendiamo cura della salute orale di tutta la famiglia, dai più piccoli ai più grandi.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Facebook">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Instagram">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-white font-semibold text-sm mb-4 uppercase tracking-wider">Link Rapidi</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/servizi", label: "I Nostri Servizi" },
                { href: "/chi-siamo", label: "Chi Siamo" },
                { href: "/contatti", label: "Contatti" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-primary-light transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-white font-semibold text-sm mb-4 uppercase tracking-wider">Servizi</h4>
            <ul className="space-y-2.5">
              {[
                "Igiene e Prevenzione",
                "Odontoiatria Estetica",
                "Ortodonzia",
                "Implantologia",
                "Pedodonzia",
                "Chirurgia Orale",
              ].map((service) => (
                <li key={service}>
                  <Link href="/servizi" className="text-sm text-gray-400 hover:text-primary-light transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contatti</h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 text-primary-light shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span className="text-sm text-gray-400">Via Roma, 42<br/>28021 Borgomanero (NO)</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-primary-light shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <a href="tel:+390322123456" className="text-sm text-gray-400 hover:text-primary-light transition-colors">0322 123 456</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-primary-light shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <a href="mailto:info@studiodentistico.it" className="text-sm text-gray-400 hover:text-primary-light transition-colors">info@studiodentistico.it</a>
              </li>
            </ul>

            <div className="mt-5 p-3 rounded-xl bg-white/5 border border-white/10">
              <h5 className="font-display text-white text-xs font-semibold mb-1.5">Orari di Apertura</h5>
              <div className="text-xs text-gray-400 space-y-0.5">
                <p>Lun – Ven: 9:00 – 19:00</p>
                <p>Sabato: 9:00 – 13:00</p>
                <p>Domenica: Chiuso</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Studio Dentistico Borgomanero. Tutti i diritti riservati.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
