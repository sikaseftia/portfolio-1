import Image from "next/image";
import { Star } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

// PERHATIAN: testimoni ini masih teks dari desain Figma (contoh). Ganti dengan testimoni asli
// atau hapus bagian ini sebelum deploy.
export function Testimonials() {
  return (
    <section className="bg-white py-24 text-brand-ink">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          title="What They Say About Working With Me"
          description="Real words from clients, teammates, and mentors I've collaborated with on various projects."
          className="[&_h2]:font-sans [&_h2]:font-bold [&_h2]:normal-case [&_h2]:text-neutral-900 [&_h2]:text-3xl [&_h2]:md:text-4xl [&_h2]:md:whitespace-nowrap [&_p]:max-w-none [&_p]:text-sm [&_p]:text-neutral-600 [&_p]:md:text-base [&_p]:md:whitespace-nowrap"
        />

        {/* Kartu berlapis: dua lapisan di belakang kartu utama, makin dalam makin sempit dan makin pudar */}
        <div className="relative mt-14 pb-5">
          <div
            aria-hidden
            className="absolute inset-x-24 top-8 bottom-[-16px] z-0 rounded-3xl bg-[#efd9e0]"
          />
          <div
            aria-hidden
            className="absolute inset-x-12 top-4 bottom-[-8px] z-0 rounded-3xl bg-[#d9a2b3]"
          />
          <Reveal className="relative z-10 flex flex-col items-center gap-6 rounded-3xl bg-brand-rose p-8 text-center text-brand-white md:p-12">
            <div className="flex gap-1 text-brand-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <p className="text-lg leading-relaxed font-semibold md:text-xl">
              &ldquo;Working with Sika Seftia was a smooth experience from start to finish. They translated our design
              into clean, responsive code and even suggested improvements we hadn&apos;t thought of. Highly
              recommended!&rdquo;
            </p>
            <Image
              src="/images/testimonials/sarah-tan.png"
              alt="Sarah Tan"
              width={64}
              height={64}
              className="size-16 rounded-full object-cover"
            />
            <div>
              <p className="font-bold">Sarah Tan</p>
              <p className="text-sm text-brand-white/80">Product Manager at Finovate</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
