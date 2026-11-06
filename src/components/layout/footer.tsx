import { siteConfig } from "@/data/site";

// Ikon sosial sementara berupa huruf. Ganti dengan SVG logo resmi nanti.
const socials = [
  { label: "Facebook", short: "f", href: "#" },
  { label: "Instagram", short: "ig", href: "#" },
  { label: "LinkedIn", short: "in", href: "#" },
  { label: "TikTok", short: "tt", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-brand-ink py-8 text-brand-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="text-sm text-brand-white/70">{siteConfig.copyright}</p>
        <ul className="flex gap-3">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                aria-label={s.label}
                className="flex size-9 items-center justify-center rounded-full border border-brand-white/30 text-xs font-semibold transition-colors hover:border-brand-gold hover:text-brand-gold"
              >
                {s.short}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
