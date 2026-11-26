"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { categories, site } from "@/lib/site";
import Photo from "./Photo";

// Asymmetric editorial rhythm, repeats every 6 tiles
const spans = [
  "col-span-2 row-span-2 md:col-span-4",
  "col-span-1 row-span-2 md:col-span-2",
  "col-span-1 row-span-2 md:col-span-3",
  "col-span-2 row-span-2 md:col-span-3",
  "col-span-1 row-span-2 md:col-span-2",
  "col-span-1 row-span-2 md:col-span-4",
];

export default function Portfolio() {
  const [filter, setFilter] = useState<string>("All");
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  const items = useMemo(() => site.photos.filter((p) => filter === "All" || p.category === filter), [filter]);

  const step = useCallback((d: number) => setActive((i) => (i === null ? i : (i + d + items.length) % items.length)), [items.length]);
  const close = useCallback(() => { setActive(null); lastFocus.current?.focus(); }, []);

  useEffect(() => {
    if (active === null) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    window.addEventListener("keydown", key);
    return () => { window.removeEventListener("keydown", key); document.body.style.overflow = ""; };
  }, [active, close, step]);

  const current = active !== null ? items[active] : null;

  return (
    <section id="portfolio" className="px-[5vw] py-[clamp(4.5rem,12vw,9rem)]">
      <div className="mx-auto max-w-[1500px]">
        <p className="eyebrow mb-5">Portfolio</p>
        <h2 className="font-serif text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.08]">Moments, <em className="text-gold">framed.</em></h2>

        <div role="group" aria-label="Filter portfolio" className="mb-9 mt-8 flex flex-wrap gap-x-7 gap-y-2 text-xs uppercase tracking-luxe">
          {["All", ...categories].map((c) => (
            <button key={c} aria-pressed={filter === c} onClick={() => setFilter(c)}
              className={`border-b py-1.5 transition-opacity ${filter === c ? "border-gold text-gold" : "border-transparent opacity-60 hover:opacity-100"}`}>
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="grid auto-rows-[clamp(100px,16vw,210px)] grid-cols-2 gap-2.5 md:grid-cols-6">
          <AnimatePresence mode="popLayout">
            {items.map((p, i) => (
              <motion.button
                layout key={p.alt + p.category + i}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
                onClick={(e) => { lastFocus.current = e.currentTarget; setActive(i); }}
                aria-label={`Open image: ${p.alt}`}
                className={`group relative overflow-hidden ${spans[i % spans.length]}`}
              >
                <Photo src={p.src} alt={p.alt} sizes="(min-width:768px) 40vw, 50vw" className="transition-transform duration-[900ms] group-hover:scale-105" />
                <span className="absolute bottom-3 left-4 text-[10px] uppercase tracking-[0.25em] opacity-0 transition-opacity group-hover:opacity-80">{p.category}</span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {current && (
          <motion.div role="dialog" aria-modal="true" aria-label="Image viewer"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95">
            <button ref={closeRef} onClick={close} aria-label="Close" className="absolute right-3 top-3 p-3"><X size={30} /></button>
            <button onClick={() => step(-1)} aria-label="Previous image" className="absolute left-1 p-3 md:left-4"><ChevronLeft size={38} /></button>
            <motion.div key={active} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}
              className="relative h-[80vh] w-[min(92vw,1200px)]">
              <Photo src={current.src} alt={current.alt} sizes="92vw" className="!object-contain" />
            </motion.div>
            <button onClick={() => step(1)} aria-label="Next image" className="absolute right-1 p-3 md:right-4"><ChevronRight size={38} /></button>
            <p className="absolute bottom-5 text-[11px] uppercase tracking-[0.25em] text-ivory/60">{current.category} · {active! + 1} / {items.length}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
