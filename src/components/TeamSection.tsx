const team = [
  {
    name: "Dott. Marco Bianchi",
    role: "Direttore Sanitario",
    specialization: "Implantologia e Chirurgia Orale",
    bio: "Con oltre 25 anni di esperienza, il Dott. Bianchi guida il nostro studio con passione e competenza. Specializzato in tecniche mininvasive.",
    initials: "MB",
    color: "from-primary to-sky-400",
  },
  {
    name: "Dott.ssa Elena Rossi",
    role: "Odontoiatra",
    specialization: "Ortodonzia e Pedodonzia",
    bio: "Specialista nell'ortodonzia invisibile e nelle cure per i più piccoli. La Dott.ssa Rossi sa come mettere a proprio agio anche i bambini più timidi.",
    initials: "ER",
    color: "from-violet-500 to-purple-400",
  },
  {
    name: "Dott. Luca Ferretti",
    role: "Odontoiatra",
    specialization: "Odontoiatria Estetica",
    bio: "Appassionato di estetica dentale, il Dott. Ferretti trasforma i sorrisi con faccette, sbiancamenti e restauri naturali di altissima qualità.",
    initials: "LF",
    color: "from-emerald-500 to-teal-400",
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold font-display mb-4">
            Il Nostro Team
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-heading mb-4">
            Professionisti al tuo servizio
          </h2>
          <p className="text-body text-lg">
            Un team di specialisti qualificati e appassionati, pronti ad accoglierti con cura e professionalità.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="group bg-card rounded-2xl border border-card-border overflow-hidden opacity-0 animate-fade-in-up hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Photo Placeholder */}
              <div className={`relative h-56 bg-gradient-to-br ${member.color} flex items-center justify-center`}>
                <span className="text-4xl font-display font-bold text-white/90">{member.initials}</span>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                {/* Decorative shape */}
                <div className="absolute bottom-0 left-0 right-0">
                  <svg viewBox="0 0 400 30" preserveAspectRatio="none" className="w-full h-6">
                    <path d="M0,30 C100,0 300,0 400,30 Z" fill="white"/>
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-heading mb-1">{member.name}</h3>
                <p className="text-primary font-display font-semibold text-sm mb-1">{member.role}</p>
                <p className="text-xs text-label mb-3">{member.specialization}</p>
                <p className="text-sm text-body leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
