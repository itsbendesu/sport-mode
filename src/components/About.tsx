export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#e040fb]/20 to-[#7c4dff]/20 border border-white/5 flex items-center justify-center">
            <div className="text-center text-zinc-600">
              <svg
                width="64"
                height="64"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1"
                className="mx-auto mb-3 opacity-50"
              >
                <path d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                <path d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
              </svg>
              <p className="text-sm">Photo coming soon</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Meet <span className="gradient-text">Sport Mode</span>
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                With years behind the decks, Sport Mode brings a unique ability
                to read a room and craft the perfect soundtrack for any event.
              </p>
              <p>
                Whether it&apos;s an intimate wedding reception or a 500-person
                corporate gala, the approach is always the same: understand the
                vibe, curate the sound, and create moments people remember.
              </p>
              <p>
                Genre-fluid and always prepared, Sport Mode works closely with
                every client to ensure the music is exactly right — from the
                first song to the final encore.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/5">
              <div>
                <div className="text-2xl font-bold gradient-text">200+</div>
                <div className="text-sm text-zinc-500 mt-1">Events</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">5+</div>
                <div className="text-sm text-zinc-500 mt-1">Years</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">100%</div>
                <div className="text-sm text-zinc-500 mt-1">Good vibes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
