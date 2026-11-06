import Image from "next/image";
import { ArrowRight, Mouse } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Reveal } from "@/components/shared/reveal";

const techIcons = [
  { src: "/images/tech/html5.png", alt: "HTML5" },
  { src: "/images/tech/css3.png", alt: "CSS3" },
  { src: "/images/tech/javascript.png", alt: "JavaScript" },
  { src: "/images/tech/react.png", alt: "React" },
];

// Angka dari desain Figma. Pastikan sesuai dengan data Anda sendiri.
const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "3", label: "Project Delivered" },
  { value: "50", label: "Clients Worldwide" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-brand-maroon pt-32 pb-24 text-brand-white md:min-h-screen">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-3">
        <Reveal className="order-3 flex flex-col gap-10 lg:order-1">
          <ul className="flex gap-4 lg:flex-col">
            {techIcons.map((icon) => (
              <li
                key={icon.alt}
                className="flex size-12 items-center justify-center rounded-full border border-brand-white/30 bg-brand-white/10"
              >
                <Image src={icon.src} alt={icon.alt} width={28} height={28} />
              </li>
            ))}
          </ul>
          <div className="max-w-xs">
            <p className="text-lg font-bold">Hi, I&apos;m {siteConfig.name}</p>
            <p className="mt-2 text-sm text-brand-white/85">
              a frontend developer passionate about creating seamless digital experiences that are fast,
              responsive, and user-friendly.
            </p>
          </div>
        </Reveal>

        <div className="relative order-1 flex min-h-[520px] items-end justify-center lg:order-2">
          <span className="absolute -top-10 left-0 z-20 font-script text-5xl md:text-7xl">Junior</span>
          <span className="absolute top-0 right-0 z-20 inline-flex items-center gap-2 rounded-full bg-brand-white px-4 py-2 text-xs font-semibold text-brand-ink">
            <span className="size-2 rounded-full bg-brand-maroon" />
            Available for Hire
          </span>
          <h1 className="relative z-0 text-center font-display text-[clamp(3.5rem,11vw,9rem)] leading-[0.9] text-brand-gold">
            FRONTEND
            <br />
            DEVELOPER
          </h1>
          <Image
            src="/images/hero/sika-hero.png"
            alt={`Foto ${siteConfig.name}`}
            width={1085}
            height={1448}
            priority
            className="absolute bottom-0 left-1/2 z-10 h-auto w-[min(70vw,340px)] -translate-x-1/2"
          />
        </div>

        <Reveal className="order-2 flex flex-col gap-6 lg:order-3">
          {stats.map((s) => (
            <div key={s.label} className="border-b border-brand-white/20 pb-4 last:border-0">
              <p className="text-4xl font-extrabold md:text-5xl">{s.value}</p>
              <p className="text-sm text-brand-white/80">{s.label}</p>
            </div>
          ))}
          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-3 rounded-full bg-brand-gold px-5 py-3 font-semibold text-brand-ink transition-transform hover:-translate-y-0.5"
          >
            Contact Me
            <span className="flex size-6 items-center justify-center rounded-full bg-brand-ink text-brand-white">
              <ArrowRight size={14} />
            </span>
          </a>
        </Reveal>
      </div>

      <a href="#about" className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 text-sm text-brand-white/90">
        <Mouse size={16} />
        Scroll Down
      </a>
    </section>
  );
}
