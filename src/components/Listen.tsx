export function Listen() {
  return (
    <section id="listen" className="relative bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto px-6 py-24 sm:py-32">
        <p className="text-sm uppercase tracking-[0.2em] text-[#e040fb] mb-4">
          Listen
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-12">
          Sample mix
        </h2>

        <iframe
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/sport-mode-810095094/hermanns-upstairs-070123&color=%23e040fb&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
          className="rounded-lg"
        />

        <p className="mt-6 text-zinc-500">
          More mixes on{" "}
          <a
            href="https://soundcloud.com/sport-mode-810095094"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e040fb] hover:text-white transition-colors"
          >
            SoundCloud
          </a>
        </p>
      </div>
    </section>
  );
}
