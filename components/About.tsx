import { site } from "@/lib/site";
import Photo from "./Photo";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="bg-forest px-[5vw] py-[clamp(4.5rem,12vw,9rem)]">
      <div className="mx-auto grid max-w-[1300px] items-center gap-14 md:grid-cols-2">
        <Reveal>
          <p className="eyebrow mb-5">About</p>
          <h2 className="font-serif text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.08]">
            More than photographs.<br /><em className="text-gold">It&rsquo;s your story.</em>
          </h2>
          <div className="mt-8 max-w-[46ch] space-y-5 text-ivory/85">
            <p>
              I&rsquo;m {site.photographerName}, a photographer drawn to genuine emotion, quiet intimacy and the meaningful connections between people. I care less about perfect poses than about the look, the laugh and the pause that make a moment unmistakably yours.
            </p>
            <p>Every session is unhurried and personal, so that what you receive feels like your story, told with care.</p>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="relative aspect-[4/5] border border-gold/30">
            <Photo src={site.aboutImage} alt={`Portrait of ${site.photographerName}`} sizes="(min-width:768px) 45vw, 90vw" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
