import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

// PERHATIAN: jawaban nomor 2 sampai 5 belum ada di desain yang diberikan.
// Isi sendiri sebelum deploy.
const faqs = [
  {
    q: "What technologies do you work with?",
    a: "I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.",
  },
  { q: "Do you work on freelance or remote projects?", a: "[Isi jawaban Anda]" },
  { q: "Can you convert Figma or Sketch designs into code?", a: "[Isi jawaban Anda]" },
  { q: "Do you collaborate with backend developers or teams?", a: "[Isi jawaban Anda]" },
  { q: "Are you available for full-time roles?", a: "[Isi jawaban Anda]" },
];

export function Faq() {
  return (
    <section id="faq" className="bg-neutral-100 py-24 text-brand-ink">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          title="Let’s Clear Things Up"
          description="I’ve answered a few questions that usually come up when working with a frontend developer like me."
          className="[&_h2]:normal-case [&_h2]:text-neutral-900 [&_h2]:text-3xl [&_h2]:md:text-5xl"
        />
        <Reveal className="mt-12">
          <Accordion>
            {faqs.map((item, i) => (
              <AccordionItem key={item.q} value={`faq-${i}`} className="border-neutral-300 py-2">
                <AccordionTrigger className="items-center py-4 text-base">
                  <span className="mr-4 text-neutral-500">{String(i + 1).padStart(2, "0")}</span>
                  {item.q}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="pb-4 pl-10 text-sm text-neutral-600">{item.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
