"use client";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function Services() {
  const choose = (type: string) => {
    window.dispatchEvent(new CustomEvent("select-shoot", { detail: type }));
    document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="services" className="bg-[#101210] px-[5vw] py-[clamp(4.5rem,12vw,9rem)]">
      <div className="mx-auto max-w-[1300px]">
        <p className="eyebrow mb-5">Experience</p>
        <h2 className="font-serif text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.08]">Crafted <em className="text-gold">sessions.</em></h2>
        <div className="mt-12 grid gap-px border border-gold/25 bg-gold/25 sm:grid-cols-2 lg:grid-cols-4">
          {site.services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} className="bg-charcoal">
              <article className="flex h-full flex-col p-8">
                <h3 className="font-serif text-[1.7rem] uppercase leading-tight tracking-wide">{s.title}</h3>
                <p className="mb-6 mt-3 text-[15px] text-ivory/75">{s.text}</p>
                <p className="mb-5 mt-auto font-serif text-lg italic text-gold">Enquire for pricing</p>
                <button onClick={() => choose(s.type)} className="btn btn-ghost flex items-center justify-between">
                  Enquire <ArrowRight size={16} aria-hidden />
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
