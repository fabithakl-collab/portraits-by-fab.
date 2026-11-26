"use client";
import { useEffect, useState } from "react";
import { Instagram, MessageCircle } from "lucide-react";
import { shootTypes, site } from "@/lib/site";

type Values = { name: string; email: string; phone: string; type: string; date: string; location: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;
const empty: Values = { name: "", email: "", phone: "", type: "", date: "", location: "", message: "" };

function validate(v: Values): Errors {
  const e: Errors = {};
  if (!v.name.trim()) e.name = "Please enter your name.";
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = "Please enter a valid email address.";
  if (v.phone.replace(/\D/g, "").length < 7) e.phone = "Please enter a valid phone number.";
  if (!v.type) e.type = "Please choose a type of photoshoot.";
  return e;
}

function messageText(v: Values) {
  return `Hello, I'd like to enquire about a ${v.type} shoot.\nName: ${v.name}\nEmail: ${v.email}\nPhone: ${v.phone}\nDate: ${v.date || "flexible"}\nLocation: ${v.location || "-"}\n${v.message}`.trim();
}

export default function BookingForm() {
  const [v, setV] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "invalid" | "ready" | "error">("idle");

  useEffect(() => {
    const h = (e: Event) => setV((p) => ({ ...p, type: (e as CustomEvent<string>).detail }));
    window.addEventListener("select-shoot", h);
    return () => window.removeEventListener("select-shoot", h);
  }, []);

  const set = (k: keyof Values) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setV((p) => ({ ...p, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(v);
    setErrors(errs);
    if (Object.keys(errs).length) return setStatus("invalid");
    try {
      /**
       * CONNECT A BACKEND HERE (e.g. Formspree, Resend, EmailJS or your own /api route).
       * Until then, NOTHING is sent: we only prepare the enquiry for WhatsApp / email.
       * Example: await fetch("/api/enquiry", { method: "POST", body: JSON.stringify(v) });
       */
      setStatus("ready");
    } catch {
      setStatus("error");
    }
  };

  const { whatsapp, email } = site.contact;
  const wa = whatsapp ? `https://wa.me/${whatsapp}?text=${encodeURIComponent(messageText(v))}` : "";
  const mail = email ? `mailto:${email}?subject=${encodeURIComponent("Photography enquiry")}&body=${encodeURIComponent(messageText(v))}` : "";

  const field = "w-full border-0 border-b border-ivory/40 bg-transparent py-2.5 text-ivory placeholder:text-ivory/30 focus:border-gold focus:outline-none focus:ring-0";
  const label = "mb-1.5 block text-[11px] uppercase tracking-luxe text-gold";
  const err = (k: keyof Values) => errors[k] && <p id={`${k}-err`} className="mt-1 text-xs text-[#e0a894]">{errors[k]}</p>;
  const aria = (k: keyof Values) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-err` : undefined });

  return (
    <section id="book" className="bg-forest px-[5vw] py-[clamp(4.5rem,12vw,9rem)]">
      <div className="mx-auto max-w-[900px]">
        <p className="eyebrow mb-5">Enquire</p>
        <h2 className="mb-10 font-serif text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.08]">Let&rsquo;s tell <em className="text-gold">your</em> story.</h2>

        <form onSubmit={submit} noValidate className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
          <div><label htmlFor="name" className={label}>Full name</label><input id="name" autoComplete="name" className={field} value={v.name} onChange={set("name")} {...aria("name")} />{err("name")}</div>
          <div><label htmlFor="email" className={label}>Email address</label><input id="email" type="email" autoComplete="email" className={field} value={v.email} onChange={set("email")} {...aria("email")} />{err("email")}</div>
          <div><label htmlFor="phone" className={label}>Phone number</label><input id="phone" type="tel" autoComplete="tel" className={field} value={v.phone} onChange={set("phone")} {...aria("phone")} />{err("phone")}</div>
          <div>
            <label htmlFor="type" className={label}>Type of photoshoot</label>
            <select id="type" className={field} value={v.type} onChange={set("type")} {...aria("type")}>
              <option value="" className="bg-forest">Select…</option>
              {shootTypes.map((t) => <option key={t} className="bg-forest">{t}</option>)}
            </select>{err("type")}
          </div>
          <div><label htmlFor="date" className={label}>Preferred date</label><input id="date" type="date" className={`${field} [color-scheme:dark]`} value={v.date} onChange={set("date")} /></div>
          <div><label htmlFor="location" className={label}>Location</label><input id="location" className={field} value={v.location} onChange={set("location")} /></div>
          <div className="sm:col-span-2"><label htmlFor="message" className={label}>Additional message</label><textarea id="message" rows={3} className={field} value={v.message} onChange={set("message")} /></div>

          <div className="flex flex-wrap gap-3 sm:col-span-2">
            <button type="submit" className="btn btn-solid">Send enquiry</button>
            {whatsapp && <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn-ghost inline-flex items-center gap-2"><MessageCircle size={16} aria-hidden /> WhatsApp</a>}
            <a href={site.contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost inline-flex items-center gap-2"><Instagram size={16} aria-hidden /> Instagram</a>
          </div>

          <div role="status" aria-live="polite" className="sm:col-span-2">
            {status === "invalid" && <p className="border border-[#e0a894]/60 p-4 text-sm">Please check the highlighted fields and try again.</p>}
            {status === "error" && <p className="border border-[#e0a894]/60 p-4 text-sm">Something went wrong. Please try again or contact us directly.</p>}
            {status === "ready" && (
              <div className="border border-gold p-4 text-sm">
                <p>Thank you. Your details look good, but this form is not connected to an email service yet, so <strong>nothing has been sent</strong>.</p>
                <p className="mt-2">
                  {wa || mail ? "Send your enquiry here: " : "Add your WhatsApp number or email in lib/site.ts to send it directly."}
                  {wa && <a className="underline text-gold" href={wa} target="_blank" rel="noopener noreferrer">WhatsApp</a>}
                  {wa && mail && " · "}
                  {mail && <a className="underline text-gold" href={mail}>Email</a>}
                </p>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
