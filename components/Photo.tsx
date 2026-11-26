import Image from "next/image";

/** Shows the photo, or an elegant placeholder when no src has been set yet. */
export default function Photo({ src, alt, sizes, priority = false, className = "" }: { src: string; alt: string; sizes: string; priority?: boolean; className?: string }) {
  if (!src) {
    return (
      <div role="img" aria-label={alt} className={`absolute inset-0 flex items-center justify-center bg-[#22352a] text-[10px] uppercase tracking-[0.3em] text-ivory/40 ${className}`}>
        Your photograph
      </div>
    );
  }
  return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={`object-cover ${className}`} />;
}
