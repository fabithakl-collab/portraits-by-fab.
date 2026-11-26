import { site } from "@/lib/site";
import Photo from "./Photo";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden">
      <Photo src={site.heroImage} alt="Romantic couple photograph" sizes="100vw" priority />
      <div className="absolute inset-0 bg-gradient-to-b from-forest/30 via-forest/20 to-forest/90" aria-hidden />
      <div className="relative mx-auto w-full max-w-[1500px] px-[5vw] pb-[12vh]">
        <Reveal>
          <h1 className="max-w-3xl font-serif text-[clamp(2.75rem,9vw,6.5rem)] leading-[1.02]">
            Your story,<br /><em className="text-gold">beautifully told.</em>
          </h1>
          <p className="mb-9 mt-5 font-serif text-[clamp(1.2rem,2.6vw,1.6rem)] italic text-gold">
            Romantic moments. Timeless photographs. Memories that last forever.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#portfolio" className="btn btn-solid">Explore the portfolio</a>
            <a href="#book" className="btn btn-ghost">Book your session</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
