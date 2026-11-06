"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
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
          <Image
            src="/images/avatar/sika-avatar.png"
            alt=""
            width={96}
            height={96}
            aria-hidden
            className="absolute -top-14 left-1/2 z-10 size-24 -translate-x-1/2 object-contain"
          />
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-2xl border border-neutral-200 bg-white p-6 pt-12 shadow-sm md:p-8 md:pt-12">
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
            <Button type="submit" className="h-11 w-full rounded-full bg-brand-rose text-brand-white hover:bg-brand-rose/90">
              Let&apos;s Talk
            </Button>
          </form>
        </Reveal>
      </div>

      <Dialog open={result !== null} onOpenChange={(open) => !open && setResult(null)}>
        <DialogContent className="max-w-sm text-center">
          {result?.ok ? (
            <>
              <Image src="/images/contact/success.png" alt="" width={120} height={120} className="mx-auto h-auto w-28" />
              <DialogHeader>
                <DialogTitle className="text-center">Message Sent!</DialogTitle>
                <DialogDescription className="text-center">Terima kasih, pesan Anda sudah diterima.</DialogDescription>
              </DialogHeader>
            </>
          ) : (
            <>
              <Image src="/images/contact/failed.png" alt="" width={120} height={120} className="mx-auto h-auto w-28" />
              <DialogHeader>
                <DialogTitle className="text-center">Message Failed</DialogTitle>
                <DialogDescription className="text-center">{result?.reason}</DialogDescription>
              </DialogHeader>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
