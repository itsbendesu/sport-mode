import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/hero-crowd.jpg"
        alt="Sport Mode performing to a packed crowd at Laketown Shakedown"
        fill
        className="object-cover"
        priority
        sizes="100vw"
        quality={85}
      />

      {/* Gradient overlay — heavier at bottom for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

      {/* Content pinned to bottom */}
      <div className="absolute inset-0 flex flex-col justify-end pb-16 sm:pb-24 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold tracking-tight text-white animate-fade-in-up">
            DJ SPORT MODE
          </h1>
          <p className="mt-4 text-xl sm:text-2xl text-white/70 max-w-2xl animate-fade-in-up-delay">
            Old-school funk to progressive house. Face-melting drops to
            heart-warming melodies. Based in Victoria, BC, Canada.
          </p>
          <div className="mt-8 animate-fade-in-up-delay-2">
            <a
              href="#book"
              className="inline-flex items-center px-8 py-3.5 rounded-full bg-gradient-to-r from-[#e040fb] to-[#7c4dff] text-white font-medium hover:opacity-90 transition-opacity"
            >
              Book an Event
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
