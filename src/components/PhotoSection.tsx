import Image from "next/image";

interface PhotoSectionProps {
  src: string;
  alt: string;
  credit?: string;
}

export function PhotoSection({ src, alt, credit }: PhotoSectionProps) {
  return (
    <section className="relative h-[70vh] sm:h-screen w-full overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="100vw"
        quality={85}
      />
      {credit && (
        <span className="absolute bottom-3 right-4 text-[11px] text-white/30">
          Photo: {credit}
        </span>
      )}
    </section>
  );
}
