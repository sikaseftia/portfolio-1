import { Minus, Plus } from "lucide-react";
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
  { q: "Do you work on freelance or remote projects?", a: "Yes, I'm open to freelance and remote opportunities. I'm interested in working on projects where I can contribute my skills, gain experience, and continue learning." },
  { q: "Can you convert Figma or Sketch designs into code?", a: "Yes, I can turn Figma designs into responsive web pages using HTML, CSS, React, and Tailwind CSS, with a focus on clean layouts and usability." },
  { q: "Do you collaborate with backend developers or teams?", a: "Yes, I'm open to collaborating with backend developers and other team members. I value clear communication, teamwork, and continuous learning." },
  { q: "Are you available for full-time roles?", a: "Yes, I'm open to full-time opportunities, particularly remote positions where I can contribute, grow professionally, and develop my skills." },
];

export function Faq() {
  return (
    <section id="faq" className="bg-neutral-100 py-24 text-brand-ink">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          title="Let’s Clear Things Up"
          description="I’ve answered a few questions that usually come up when working with a frontend developer like me."
          className="[&_h2]:normal-case [&_h2]:text-neutral-900 [&_h2]:text-3xl [&_h2]:md:text-5xl [&_p]:max-w-none [&_p]:text-sm [&_p]:text-neutral-600 [&_p]:md:text-base"
        />
        <Reveal className="mt-12">
          <Accordion>
            {faqs.map((item, i) => (
              <AccordionItem key={item.q} value={`faq-${i}`} className="border-neutral-300 py-2">
                <AccordionTrigger className="items-center py-4 text-base [&_[data-slot=accordion-trigger-icon]]:hidden">
                  <span className="mr-4 text-neutral-500">{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex-1">{item.q}</span>
                  {/* Terbuka: tombol + merah. Tertutup: tombol - abu-abu. */}
                  <span className="ml-4 flex size-8 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-neutral-800 group-aria-expanded/accordion-trigger:bg-brand-rose group-aria-expanded/accordion-trigger:text-brand-white">
                    <Plus size={16} className="hidden group-aria-expanded/accordion-trigger:block" />
                    <Minus size={16} className="block group-aria-expanded/accordion-trigger:hidden" />
                  </span>
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
