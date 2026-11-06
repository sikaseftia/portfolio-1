"use client";

import { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Reveal } from "@/components/shared/reveal";

const thumbnails = [
  "/images/portfolio/project-1.png",
  "/images/portfolio/project-2.png",
  "/images/portfolio/project-3.png",
];

type Result = { ok: true } | { ok: false; reason: string };

// Simulasi: tidak mengirim data ke server.
function simulateSubmit(name: string, email: string, message: string): Result {
  if (!name.trim()) return { ok: false, reason: "Nama wajib diisi." };
  if (!/^\S+@\S+\.\S+$/.test(email)) return { ok: false, reason: "Format email tidak valid." };
  if (message.trim().length < 10) return { ok: false, reason: "Pesan minimal 10 karakter." };
  return { ok: true };
}

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [result, setResult] = useState<Result | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setResult(simulateSubmit(form.name, form.email, form.message));
  }

  return (
    <section id="contact" className="bg-white py-24 text-brand-ink">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 md:grid-cols-2">
        <Reveal className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold md:text-5xl">Let’s Work Together</h2>
          <p className="max-w-md text-sm text-neutral-600">
            Have a project in mind or just want to say hi? Drop me a message — I’d love to hear from you.
          </p>
          <div className="flex gap-4">
            {thumbnails.map((src, i) => (
              <div key={src} className="relative h-28 w-24 overflow-hidden rounded-xl border border-neutral-200">
                <Image src={src} alt={`Contoh proyek ${i + 1}`} fill sizes="96px" className="object-cover object-top" />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="relative">
          {/* Avatar di belakang kartu: bagian bawahnya tertutup kartu, dan menembus section di atasnya */}
          <Image
            src="/images/contact/contact-avatar.png"
            alt=""
            width={600}
            height={656}
            aria-hidden
            className="pointer-events-none absolute bottom-full left-1/2 z-0 h-auto w-32 -translate-x-1/2 translate-y-[33px] md:w-40 md:translate-y-[42px]"
          />
          {/* Tangan di depan tepi atas kartu, memberi kesan berdimensi */}
          <Image
            src="/images/contact/contact-hands.png"
            alt=""
            width={1086}
            height={362}
            aria-hidden
            className="pointer-events-none absolute bottom-full left-1/2 z-20 h-auto w-30 -translate-x-1/2 translate-y-[14px] md:w-38 md:translate-y-[15px]"
          />
          <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-5 rounded-2xl border border-neutral-200 bg-white p-6 pt-12 shadow-sm md:p-8 md:pt-12">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Enter your message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            </div>
            <button
              type="submit"
              className="flex h-8 w-full items-center justify-center rounded-2xl bg-brand-rose text-sm font-semibold text-brand-white transition-colors hover:bg-brand-rose/90 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
            >
              Let&apos;s Talk
            </button>
          </form>
        </Reveal>
      </div>

      <Dialog open={result !== null} onOpenChange={(open) => !open && setResult(null)}>
        <DialogContent
          showCloseButton={false}
          className="!gap-0 !p-0 text-center sm:!max-w-[480px]"
        >
          {result?.ok ? (
            <>
              <div className="relative h-[210px] rounded-t-2xl bg-[#E9B45D]">
                <Image src="/images/contact/success.png" alt="" width={263} height={294} aria-hidden className="pointer-events-none absolute left-1/2 top-[-60px] z-10 h-[270px] w-auto -translate-x-1/2" />
              </div>
              <div className="flex flex-col gap-3 px-8 pt-8 pb-8">
                <DialogTitle className="text-xl font-bold text-brand-ink">Got Your Message!</DialogTitle>
                <DialogDescription className="text-sm text-neutral-600">
                  Really appreciate you reaching out. I&apos;ll be in touch soon.
                </DialogDescription>
                <button
                  type="button"
                  onClick={() => {
                    setResult(null);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="mt-4 h-11 w-full rounded-full bg-[#AA657E] text-sm font-semibold text-brand-white transition-colors hover:bg-[#AA657E]/90 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                >
                  Back to Home
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="relative h-[210px] rounded-t-2xl bg-[#E6E7EA]">
                <Image src="/images/contact/failed.png" alt="" width={261} height={289} aria-hidden className="pointer-events-none absolute left-1/2 top-[-60px] z-10 h-[270px] w-auto -translate-x-1/2" />
              </div>
              <div className="flex flex-col gap-3 px-8 pt-8 pb-8">
                <DialogTitle className="text-xl font-bold text-brand-ink">Message Failed to Send</DialogTitle>
                <DialogDescription className="text-sm text-neutral-600">
                  Sorry about that. Please check your connection and try again.
                </DialogDescription>
                <button
                  type="button"
                  onClick={() => setResult(null)}
                  className="mt-4 h-11 w-full rounded-full bg-[#AA657E] text-sm font-semibold text-brand-white transition-colors hover:bg-[#AA657E]/90 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                >
                  Try Again
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
