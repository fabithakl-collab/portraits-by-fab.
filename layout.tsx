import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500"], style: ["normal", "italic"], variable: "--font-serif" });
const sans = Jost({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Portraits by Fab | Luxury Couples Photography", template: "%s | Portraits by Fab" },
  description: site.description,
  openGraph: {
    title: "Portraits by Fab | Luxury Couples Photography",
    description: site.description,
    type: "website",
    images: site.heroImage ? [site.heroImage] : undefined,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#17251D" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-gold focus:px-4 focus:py-2 focus:text-forest">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
