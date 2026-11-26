import { Instagram, Mail, MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";

const nav = [["About", "#about"], ["Portfolio", "#portfolio"], ["Experience", "#services"], ["Book", "#book"]];

export default function Footer() {
  const c = site.contact;
  return (
    <footer className="border-t border-gold/25 px-[5vw] pb-10 pt-16 text-center">
      <p className="font-serif text-2xl tracking-[0.28em]">{site.brand}</p>
      <p className="mt-2 text-xs tracking-[0.3em]">{site.photographer}</p>
      <p className="mt-6 font-serif text-xl italic text-gold">{site.tagline}</p>

      <nav aria-label="Footer" className="my-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-luxe">
        {nav.map(([l, h]) => <a key={h} href={h} className="hover:text-gold">{l}</a>)}
      </nav>

      <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-ivory/80">
        <a href={c.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-gold"><Instagram size={16} aria-hidden />{c.instagramHandle}</a>
        {c.whatsapp && <a href={`https://wa.me/${c.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-gold"><MessageCircle size={16} aria-hidden />WhatsApp</a>}
        {c.email && <a href={`mailto:${c.email}`} className="inline-flex items-center gap-2 hover:text-gold"><Mail size={16} aria-hidden />{c.email}</a>}
        {c.phone && <a href={`tel:${c.phone}`} className="inline-flex items-center gap-2 hover:text-gold"><Phone size={16} aria-hidden />{c.phone}</a>}
      </div>
      {c.location && <p className="mt-4 text-sm text-ivory/60">{c.location}</p>}
      <p className="mt-10 text-xs text-ivory/40">© {new Date().getFullYear()} {site.brand}. All rights reserved.</p>
    </footer>
  );
}
