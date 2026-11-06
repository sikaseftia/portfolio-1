import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";

const features: { icon: string; title: string; desc: string }[] = [
  {
    icon: "/images/icons/intro-gear.png",
    title: "COMPONENT-BASED DEVELOPMENT",
    desc: "Reusable, scalable code built with modern frameworks like React or Vue.",
  },
  {
    icon: "/images/icons/intro-palette.png",
    title: "PIXEL-PERFECT UI IMPLEMENTATION",
    desc: "Translating design into high-fidelity user interfaces with attention to detail.",
  },
  {
    icon: "/images/icons/intro-phone.png",
    title: "RESPONSIVE & ACCESSIBLE DESIGN",
    desc: "Optimized layouts that work seamlessly across all screen sizes and devices.",
  },
];

export function Intro() {
  return (
    <section id="about" className="bg-white py-24 text-brand-ink">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="mx-auto max-w-3xl text-center text-3xl leading-snug font-semibold md:text-4xl">
          As frontend developers, we bring designs to life with{" "}
          <span className="text-brand-rose">clean</span>,{" "}
          <span className="text-brand-rose">responsive code</span> that blends creativity 🎨 with usability 🌟.
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-0">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              className={`flex flex-col gap-3 md:px-8 ${i === 0 ? "md:pl-0" : ""} ${
                i > 0 ? "md:border-l md:border-neutral-200" : ""
              }`}
            >
              <div className="flex size-14 items-center justify-center rounded-full border border-neutral-200">
                <Image src={f.icon} alt="" width={32} height={32} aria-hidden />
              </div>
              <h3 className="max-w-[16rem] text-[15px] leading-snug font-bold uppercase">{f.title}</h3>
              <p className="max-w-[17rem] text-sm leading-relaxed text-neutral-500">{f.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
