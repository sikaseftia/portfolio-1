
import Image from "next/image";
import { siteConfig } from "@/data/site";

const socials = [
  { label: "Facebook", src: "/images/social/facebook.png", width: 11, height: 21 },
  { label: "Instagram", src: "/images/social/instagram.png", width: 21, height: 21 },
  { label: "LinkedIn", src: "/images/social/linkedin.png", width: 17, height: 17 },
  { label: "TikTok", src: "/images/social/tiktok.png", width: 18, height: 20 },
];

export function Footer() {
  return (
    <footer className="bg-brand-ink py-8 text-brand-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="text-sm text-brand-white/70">{siteConfig.copyright}</p>
        <ul className="flex items-center gap-5">
          {socials.map((s) => (
            <li key={s.label}>
              <a href="#" aria-label={s.label} className="flex h-5 items-center">
                <Image src={s.src} alt={s.label} width={s.width} height={s.height} className="h-5 w-auto" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
