import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import TeamSection from "@/components/TeamSection";
import Testimonials from "@/components/Testimonials";
import PracticalInfo from "@/components/PracticalInfo";
import FAQ from "@/components/FAQ";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceCards />

      {/* Wave divider */}
      <div className="wave-divider bg-background">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" fill="white" />
        </svg>
      </div>

      <TeamSection />

      {/* Wave divider */}
      <div className="wave-divider bg-white">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path d="M0,20 C300,60 600,0 900,40 C1050,55 1150,30 1200,20 L1200,60 L0,60 Z" fill="#F9FAFB" />
        </svg>
      </div>

      <Testimonials />

      {/* Wave divider */}
      <div className="wave-divider bg-background">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path d="M0,40 C200,10 500,50 700,20 C900,-10 1100,40 1200,20 L1200,60 L0,60 Z" fill="white" />
        </svg>
      </div>

      <PracticalInfo />

      {/* Wave divider */}
      <div className="wave-divider bg-white">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path d="M0,30 C150,0 350,60 600,30 C850,0 1050,60 1200,30 L1200,60 L0,60 Z" fill="#F9FAFB" />
        </svg>
      </div>

      <FAQ />

      {/* Final CTA Section */}
      <section className="py-20 lg:py-24 relative overflow-hidden">
        <div className="blob-1 -top-32 -right-32 opacity-40" />
        <div className="blob-2 -bottom-32 -left-32 opacity-30" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-10 sm:p-14 text-white">
            <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center mx-auto mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C9.5 2 7.5 3 6.5 5C5.5 7 5 9 5 11C5 13.5 5.5 15.5 6.5 17C7.5 18.5 8.5 20 9.5 21C10 21.5 10.5 22 11 22C11.5 22 11.8 21.5 12 21C12.2 21.5 12.5 22 13 22C13.5 22 14 21.5 14.5 21C15.5 20 16.5 18.5 17.5 17C18.5 15.5 19 13.5 19 11C19 9 18.5 7 17.5 5C16.5 3 14.5 2 12 2Z" fill="white" opacity="0.9"/>
              </svg>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Pronto per il tuo nuovo sorriso?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Prenota la tua prima visita gratuita. Il nostro team ti accoglierà con cura e professionalità.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contatti"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-white text-primary font-display font-bold text-base hover:bg-white/90 transition-colors shadow-lg"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Prenota Ora
              </Link>
              <a
                href="tel:+390322123456"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-white/15 text-white font-display font-semibold text-base hover:bg-white/25 transition-colors border border-white/20"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                0322 123 456
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
