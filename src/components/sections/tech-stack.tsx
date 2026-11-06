import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

// Desain Figma: HTML & JavaScript berwarna gold, CSS & React berwarna putih.
const techs = [
  { name: "HTML", src: "/images/tech/html5.png", gold: true },
  { name: "CSS", src: "/images/tech/css3.png", gold: false },
  { name: "Javascript", src: "/images/tech/javascript.png", gold: true },
  { name: "React", src: "/images/tech/react.png", gold: false },
];

export function TechStack() {
  return (
    <section id="skill" className="bg-linear-to-b from-white to-brand-rose/10 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Code, Design, and Everything in Between"
          description="These are the technologies that power my workflow and bring ideas to life."
          className="[&_h2]:font-sans [&_h2]:font-bold [&_h2]:normal-case [&_h2]:text-neutral-900 [&_h2]:text-3xl [&_h2]:md:text-5xl [&_p]:max-w-none [&_p]:text-sm [&_p]:text-neutral-600 [&_p]:md:text-base"
        />
        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {techs.map((t) => (
            <Reveal
              key={t.name}
              className={`mx-auto flex h-72 w-full max-w-[200px] flex-col items-center justify-center gap-4 rounded-[999px] border border-neutral-200 p-6 text-center text-neutral-900 transition-transform duration-300 hover:-translate-y-2 ${
                t.gold ? "bg-brand-gold" : "bg-white"
              }`}
            >
              <div className="flex size-12 items-center justify-center rounded-full bg-white">
                <Image src={t.src} alt={t.name} width={28} height={28} />
              </div>
              <p className="text-sm font-bold">{t.name}</p>
              <p className="text-xs">Crafting semantic, accessible HTML structures.</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
