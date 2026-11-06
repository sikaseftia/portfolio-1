
import Image from "next/image";
import { ArrowRight, Mic } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Reveal } from "@/components/shared/reveal";

const techIcons = [
  { src: "/images/tech/javascript.png", alt: "JavaScript" },
  { src: "/images/tech/css3.png", alt: "CSS3" },
  { src: "/images/tech/html5.png", alt: "HTML5" },
  { src: "/images/tech/react.png", alt: "React" },
];

// Angka dari desain Figma. Pastikan sesuai dengan data Anda sendiri.
const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "3", label: "Project Delivered" },
  { value: "50", label: "Clients Worldwide" },
];

// Gaya judul yang sama dipakai di dua lapisan agar posisinya persis sama.
const titleStyle =
  "absolute inset-x-0 top-[9%] text-center font-display text-[clamp(2.75rem,13vw,7.5rem)] leading-[0.95] uppercase";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-brand-maroon pt-28 md:pt-32 pb-0 text-brand-white md:min-h-screen">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:gap-12 lg:grid-cols-[0.8fr_1.5fr_0.8fr]">
        <Reveal className="order-3 flex flex-col gap-10 lg:order-1">
          <ul className="hidden w-fit gap-4 rounded-full border border-brand-white/30 p-3 md:flex lg:flex-col">
            {techIcons.map((icon) => (
              <li
                key={icon.alt}
                className="flex size-12 items-center justify-center rounded-full border border-brand-white/30 bg-brand-white/10"
              >
                <Image src={icon.src} alt={icon.alt} width={28} height={28} />
              </li>
            ))}
          </ul>
          <div className="flex max-w-xs flex-col gap-4">
            <span className="flex size-12 items-center justify-center rounded-full border border-brand-white/30">
              <Mic size={18} />
            </span>
            <div>
              <p className="text-lg font-bold">Hi, I&apos;m {siteConfig.name}</p>
              <p className="mt-2 text-sm text-brand-white/85">
                a frontend developer passionate about creating seamless digital experiences that are fast,
                responsive, and user-friendly.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="relative order-1 h-[440px] sm:h-[520px] md:h-[600px] lg:h-[720px] lg:order-2">
          {/* Bintang dekoratif kiri, di belakang judul */}
          <Image
            src="/images/decor/star.png"
            alt=""
            aria-hidden
            width={200}
            height={241}
            className="pointer-events-none absolute top-[34%] left-[-4%] z-0 h-auto w-[130px]"
          />

          {/* Lapisan 1: judul berisi, di belakang foto */}
          <h1 className={`${titleStyle} z-0 text-brand-gold`}>
            FRONTEND
            <br />
            DEVELOPER
          </h1>

          {/* Foto close-up, di tengah dan memotong di bawah */}
          <Image
            src="/images/hero/sika-hero-upper.png"
            alt={`Foto ${siteConfig.name}`}
            width={1085}
            height={1250}
            priority
            className="absolute bottom-0 left-1/2 z-10 h-[90%] w-auto -translate-x-1/2"
          />

          {/* Bintang dekoratif kanan bawah, di belakang foto */}
          <Image
            src="/images/decor/star.png"
            alt=""
            aria-hidden
            width={200}
            height={241}
            className="pointer-events-none absolute right-[2%] bottom-[14%] z-0 h-auto w-[100px]"
          />

          {/* Lapisan 2: hanya outline DEVELOPER, di depan foto. FRONTEND dibuat tak terlihat agar baris tetap sejajar */}
          <p
            aria-hidden
            className={`${titleStyle} pointer-events-none z-20 text-transparent [-webkit-text-stroke:1.5px_#f3b64c]`}
          >
            <span className="invisible">FRONTEND</span>
            <br />
            DEVELOPER
          </p>

          <span className="absolute top-[2%] left-[4%] z-30 -rotate-12 font-script text-5xl md:text-7xl">Junior</span>
          <span className="absolute top-0 left-1/2 z-30 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-brand-white/25 bg-brand-maroon/70 px-4 py-2 text-xs font-semibold">
            <span className="size-2 rounded-full bg-brand-rose" />
            Available for Hire
          </span>
        </div>

        <Reveal className="order-2 grid grid-cols-2 gap-6 lg:order-3 lg:flex lg:flex-col">
          {stats.map((s) => (
            <div key={s.label} className="border-b border-brand-white/20 pb-4 last:border-0">
              <p className="text-4xl font-extrabold md:text-5xl">{s.value}</p>
              <p className="text-sm text-brand-white/80">{s.label}</p>
            </div>
          ))}
          <a
            href="#contact"
            className="col-span-2 inline-flex w-full items-center justify-between gap-3 rounded-full bg-brand-gold px-5 py-3 font-semibold text-brand-ink transition-transform hover:-translate-y-0.5 lg:w-fit lg:justify-start"
          >
            Contact Me
            <span className="flex size-6 items-center justify-center rounded-full bg-brand-ink text-brand-white">
              <ArrowRight size={14} />
            </span>
          </a>
        </Reveal>
      </div>

      <a href="#about" className="absolute bottom-6 left-1/2 z-30 hidden -translate-x-1/2 md:flex items-center gap-2 text-sm text-brand-white/90">
        <Image src="/images/icons/scroll-down.png" alt="Scroll Down" width={125} height={30} className="h-auto w-[125px]" />
      </a>
    </section>
  );
}
