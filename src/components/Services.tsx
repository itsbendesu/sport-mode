import Image from "next/image";

const services = [
  {
    title: "Festivals",
    description:
      "High-energy sets built for big stages. Deep house, techno, disco edits, acid house — genre-fluid and crowd-reading.",
  },
  {
    title: "Weddings",
    description:
      "From the ceremony to the last dance — seamless music that matches every moment of your day.",
  },
  {
    title: "Corporate Events",
    description:
      "Professional sound for conferences, galas, product launches, and team celebrations.",
  },
  {
    title: "Private Parties",
    description:
      "Birthday bashes, house parties, rooftop sets — whatever the vibe, the music will match.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 py-24 sm:py-32">
        <p className="text-sm uppercase tracking-[0.2em] text-[#e040fb] mb-4">
          Services
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-16">
          Every event is different.
          <br />
          <span className="text-zinc-500">The music should be too.</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-px bg-white/5">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[#0a0a0a] p-8 sm:p-12 group hover:bg-white/[0.02] transition-colors"
            >
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-[#e040fb] transition-colors">
                {service.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed text-xl">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Private event photo strip */}
        <div className="mt-16 grid grid-cols-2 gap-px">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src="/images/private-event.jpg"
              alt="Sport Mode at a private event"
              fill
              className="object-cover"
              quality={85}
            />
            <span className="absolute bottom-2 right-3 text-[11px] text-white/30">
              Photo: Kyle Joinson
            </span>
          </div>
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src="/images/behind-decks.jpg"
              alt="Sport Mode behind the decks"
              fill
              className="object-cover"
              quality={85}
            />
            <span className="absolute bottom-2 right-3 text-[11px] text-white/30">
              Photo: T. Falk Chalmers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
