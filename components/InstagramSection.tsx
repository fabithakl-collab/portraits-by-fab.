import Image from "next/image";
import { Instagram } from "lucide-react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function InstagramSection() {
  const { instagramHandle, instagramUrl } = site.contact;
  return (
    <section className="px-[5vw] py-[clamp(4rem,9vw,7rem)] text-center" aria-label="Instagram">
      <Reveal>
        <p className="eyebrow mb-4">Follow along</p>
        <h2 className="font-serif text-[clamp(2rem,4.5vw,3.2rem)] italic text-gold">{instagramHandle}</h2>
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-8 inline-flex items-center gap-2">
          <Instagram size={16} aria-hidden /> View on Instagram
        </a>
      </Reveal>
      {site.instagramImages.length > 0 && (
        <div className="mx-auto mt-12 grid max-w-[1300px] grid-cols-3 gap-2 md:grid-cols-6">
          {site.instagramImages.slice(0, 6).map((src, i) => (
            <a key={src} href={instagramUrl} target="_blank" rel="noopener noreferrer" className="relative aspect-square overflow-hidden">
              <Image src={src} alt={`Instagram photograph ${i + 1}`} fill sizes="(min-width:768px) 16vw, 33vw" className="object-cover" />
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
