export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#e040fb]/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7c4dff]/10 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#e040fb] animate-pulse-dot" />
          <span className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Available for bookings
          </span>
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-6 glow">
          <span className="gradient-text">SPORT MODE</span>
        </h1>

        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Setting the energy for weddings, corporate events, and private
          parties. Curated sound. Unforgettable nights.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#book"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-[#e040fb] to-[#7c4dff] text-white font-medium hover:opacity-90 transition-opacity"
          >
            Book Your Event
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/10 text-zinc-300 hover:border-white/25 hover:text-white transition-all"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}
