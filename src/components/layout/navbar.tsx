"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full bg-brand-ink/40 px-5 py-3 text-brand-white backdrop-blur-md">
        <a href="#home" className="font-display text-xl uppercase tracking-wide">
          {siteConfig.name}
        </a>
        <ul className="hidden items-center gap-6 text-sm md:flex">
          {siteConfig.navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-brand-gold">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {open && (
        <ul className="mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-2xl bg-brand-ink/90 p-4 text-brand-white md:hidden">
          {siteConfig.navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 hover:bg-brand-white/10"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
