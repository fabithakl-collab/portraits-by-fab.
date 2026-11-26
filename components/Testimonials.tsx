import { site } from "@/lib/site";

/** Renders only when real testimonials are added in lib/site.ts */
export default function Testimonials() {
  if (site.testimonials.length === 0) return null;
  return (
    <section className="px-[5vw] py-[clamp(4.5rem,12vw,9rem)]" aria-label="Testimonials">
      <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-2">
        {site.testimonials.map((t) => (
          <figure key={t.name}>
            <blockquote className="font-serif text-2xl italic leading-snug text-gold">&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption className="mt-4 text-xs uppercase tracking-luxe">{t.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
