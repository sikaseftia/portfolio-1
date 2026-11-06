import { Palette, Settings, Smartphone, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";

const features: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Settings,
    title: "COMPONENT-BASED DEVELOPMENT",
    desc: "Reusable, scalable code built with modern frameworks like React or Vue.",
  },
  {
    icon: Palette,
    title: "PIXEL-PERFECT UI IMPLEMENTATION",
    desc: "Translating design into high-fidelity user interfaces with attention to detail.",
  },
  {
    icon: Smartphone,
    title: "RESPONSIVE & ACCESSIBLE DESIGN",
    desc: "Optimized layouts that work seamlessly across all screen sizes and devices.",
  },
];

export function Intro() {
  return (
    <section id="about" className="bg-white py-24 text-brand-ink">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-3xl text-center text-3xl leading-snug font-semibold md:text-4xl">
          As frontend developers, we bring designs to life with{" "}
          <span className="text-brand-rose">clean</span>,{" "}
          <span className="text-brand-rose">responsive code</span> that blends creativity 🎨 with usability 🌟.
        </Reveal>

        <div className="mt-20 grid gap-12 md:grid-cols-3 md:gap-0">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal
                key={f.title}
                className={`flex flex-col gap-4 md:px-8 ${i > 0 ? "md:border-l md:border-neutral-200" : ""}`}
              >
                <div className="flex size-12 items-center justify-center rounded-full border border-neutral-200">
                  <Icon size={22} />
                </div>
                <h3 className="text-base font-bold uppercase">{f.title}</h3>
                <p className="text-sm text-neutral-600">{f.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
