import Image from "next/image";
import { Check, User, X } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const withMe = [
  "React Expert",
  "Precise Website Implementation",
  "TypeScript Proficiency",
  "Clean, Maintainable Code",
  "Responsive Website Development",
  "Performance Optimization",
  "UI Design Proficiency (Figma)",
];

const anotherTalent = [
  "Basic React Knowledge",
  "Inconsistent Design Translation",
  "Little to No TypeScript Knowledge",
  "Unstructured Code",
  "Inconsistent Responsiveness",
  "Slow and Heavy Websites",
  "No Design Skills",
];

export function Comparison() {
  return (
    <section className="bg-white py-24 text-brand-ink">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          title="More Than Just Code"
          description="We care about design, performance, and user experience all in one."
          className="[&_h2]:font-sans [&_h2]:font-bold [&_h2]:normal-case [&_h2]:text-neutral-900 [&_h2]:text-3xl [&_h2]:md:text-5xl [&_p]:text-sm [&_p]:text-neutral-600 [&_p]:md:text-base"
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Reveal className="flex flex-col items-center gap-6 rounded-2xl bg-brand-gold p-8">
            <p className="font-bold">With Me</p>
            <Image
              src="/images/avatar/sika-avatar.jpg"
              alt="Foto Sika Seftia"
              width={96}
              height={96}
              className="size-24 rounded-full object-cover"
            />
            <ul className="flex flex-col gap-3 text-center text-sm font-semibold">
              {withMe.map((item) => (
                <li key={item} className="flex items-center justify-center gap-2">
                  <Check size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="flex flex-col items-center gap-6 rounded-2xl border border-neutral-200 bg-white p-8">
            <p className="font-bold">Another Talent</p>
            <div className="flex size-24 items-center justify-center rounded-full bg-neutral-200 text-neutral-400">
              <User size={40} strokeWidth={1.5} />
            </div>
            <ul className="flex flex-col gap-3 text-center text-sm font-semibold">
              {anotherTalent.map((item) => (
                <li key={item} className="flex items-center justify-center gap-2">
                  <X size={16} className="text-red-500" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
