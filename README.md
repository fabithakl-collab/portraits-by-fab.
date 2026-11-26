# Portraits by Fab

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide

## Run locally
1. Install Node.js 18.17+ (https://nodejs.org)
2. In this folder: `npm install` then `npm run dev`
3. Open http://localhost:3000
Check a production build with `npm run build && npm start`.

## Replace photographs
Everything editable lives in `lib/site.ts`.
1. Copy your images into `public/images/` (JPG/WebP; hero at least 2000px wide, about image 4:5).
2. Hero and about photo: set `heroImage` and `aboutImage` (e.g. `"/images/hero.jpg"`).
3. Gallery: set each `src` in `photos` (e.g. `"/images/couple-01.jpg"`), write a short `alt`, and pick its `category`. Add or remove entries freely.
Next.js resizes and compresses images automatically.

## Update contact information
In `lib/site.ts` > `contact`: `whatsapp` (digits with country code, no +), `email`, `phone`, `location`. Empty fields are hidden. Set `url` to your real domain.

## Booking form
It validates input but does NOT send anything until you connect a service. See the comment in `components/BookingForm.tsx` (Formspree, Resend, EmailJS or an `app/api/enquiry/route.ts`). Until then it offers WhatsApp/email with the enquiry pre-filled.

## Testimonials
Add real quotes to `testimonials` in `lib/site.ts`; the section appears only when there are some.

## Deploy (Vercel, easiest)
1. Push the project to GitHub.
2. Import the repo at vercel.com, keep the defaults, click Deploy.

## Custom domain
Vercel project > Settings > Domains > add your domain, then add the DNS records Vercel shows at your registrar (an A record for the root domain, a CNAME for `www`). HTTPS is automatic. Then set `url` in `lib/site.ts`.
