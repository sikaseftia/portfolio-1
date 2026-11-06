import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";

// PERHATIAN: nama perusahaan dan deskripsi di bawah ini berasal dari desain Figma.
// Pastikan hanya memuat pengalaman kerja yang benar-benar Anda miliki sebelum deploy.
const experiences = [
  {
    period: "2025 - Present",
    role: "Frontend Developer",
    logo: "/images/experience/airbnb.png",
    company: "Airbnb",
  },
  {
    period: "2025 - Present",
    role: "Frontend Developer",
    logo: "/images/experience/airtasker.png",
    company: "Airtasker",
  },
  {
    period: "2025 - Present",
    role: "Frontend Developer",
    logo: "/images/experience/slack.png",
    company: "Slack",
  },
];

const description =
  "Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.";

export function Experience() {
  return (
    <section className="bg-brand-ink py-24 text-brand-white">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="grid gap-6 md:grid-cols-2 md:items-end">
          <h2 className="text-3xl leading-tight font-bold md:text-5xl">
            Experiences That <span className="text-brand-gold">Shaped Me</span>!
          </h2>
          <p className="text-sm font-semibold md:text-right md:text-base">
            From startups to side projects, every step has been a chance to learn, build, and level up.
          </p>
        </Reveal>

        <div className="mt-14 divide-y divide-brand-white/15">
          {experiences.map((e) => (
            <Reveal key={e.company} className="grid gap-6 py-10 md:grid-cols-[160px_220px_1fr] md:items-center">
              <div>
                <p className="text-xs text-brand-white/70">{e.period}</p>
                <p className="mt-1 font-bold">{e.role}</p>
              </div>
              <div className="flex h-20 w-44 items-center justify-center rounded-xl border border-brand-white/20 p-4">
                <Image src={e.logo} alt={e.company} width={160} height={48} className="h-auto max-h-10 w-auto" />
              </div>
              <p className="text-sm leading-relaxed text-brand-white/80">{description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
