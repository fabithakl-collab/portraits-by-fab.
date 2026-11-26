"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Experience" },
  { href: "#book", label: "Book" },
];

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${solid || open ? "bg-forest" : "bg-transparent"}`}>
      <nav aria-label="Main" className="mx-auto flex max-w-[1500px] items-center justify-between px-[5vw] py-4">
        <a href="#top" className="font-serif text-lg tracking-[0.28em] sm:text-xl">
          PORTRAITS <span className="text-gold">BY</span> FAB
        </a>
        <ul className="hidden gap-8 text-xs uppercase tracking-luxe md:flex">
          {links.map((l) => (
            <li key={l.href}><a href={l.href} className="transition-colors hover:text-gold">{l.label}</a></li>
          ))}
        </ul>
        <button className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="flex flex-col gap-6 px-[5vw] pb-8 pt-2 text-sm uppercase tracking-luxe md:hidden">
          {links.map((l) => (
            <li key={l.href}><a href={l.href} onClick={() => setOpen(false)}>{l.label}</a></li>
          ))}
        </ul>
      )}
      <span className="sr-only">{site.brand}</span>
    </header>
  );
}
