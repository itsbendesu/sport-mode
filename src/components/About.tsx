import Image from "next/image";

export function About() {
  return (
    <section id="about" className="relative bg-[#0a0a0a]">
      {/* Main bio */}
      <div className="max-w-7xl mx-auto px-6 py-24 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#e040fb] mb-4">
              About
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-8">
              Crafting moments on the dance floor
            </h2>
            <div className="space-y-5 text-zinc-400 text-xl leading-relaxed">
              <p>
                DJ Sport Mode is a shape-shifting DJ from Victoria, BC, known for
                crafting high-energy, melodic moments on the dance floor. From
                old-school funk to shimmering disco edits, sentimental deep
                house to head-spinning acid house, her sets take people on a
                journey while keeping crowds moving.
              </p>
              <p>
                She has played multiple festivals across the Southern West
                Coast — including the Dome at Rifflandia in 2024 — and
                performs regularly in Victoria and Vancouver.
              </p>
            </div>
          </div>

          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
            <Image
              src="/images/rifflandia.jpg"
              alt="Sport Mode performing at Rifflandia"
              fill
              className="object-cover"
              quality={85}
            />
          </div>
        </div>
      </div>

      {/* Claire Butterfield section */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-24 sm:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden lg:order-1">
              <Image
                src="/images/portrait.jpg"
                alt="Claire Butterfield at Laketown Shakedown"
                fill
                className="object-cover object-[65%_top]"
                quality={85}
              />
            </div>

            <div className="lg:order-2">
              <h3 className="text-2xl sm:text-4xl font-bold tracking-tight mb-8">
                The person behind the decks
              </h3>
              <div className="space-y-5 text-zinc-400 text-xl leading-relaxed">
                <p>
                  DJ Sport Mode is the electronic moniker of Claire Butterfield,
                  who has been an integral part of Victoria&apos;s music scene
                  for nearly two decades. She was a founding member of the
                  alt-folk trio Fox Glove and has recorded and performed with
                  many BC artists including Sam Weber, Aidan Knight, and Miina
                  (formerly Carmanah).
                </p>
                <p>
                  She currently co-directs The Village Choir with Oliver Swain,
                  which has quickly become one of Victoria&apos;s most
                  sought-after choral ensembles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Influences / sound description */}
      <div className="border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 py-24 sm:py-32 text-center">
          <p className="text-xl sm:text-2xl text-zinc-300 leading-relaxed italic">
            &ldquo;Influenced by the likes of Solomon, Peggy Gou, and Kieran
            Hebden, DJ Sport Mode&apos;s sets are known for their face-melting
            drops, heart-warming melodies, and a genre-spanning sense of
            movement.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
