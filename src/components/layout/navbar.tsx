"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="relative mx-auto flex max-w-4xl items-center justify-start rounded-full bg-white/20 px-6 py-3 text-brand-ink ring-1 ring-white/40 backdrop-blur-md md:justify-center">
        <span className="font-display text-base uppercase tracking-wide md:hidden">{siteConfig.name}</span>
        <ul className="hidden items-center gap-8 text-sm md:flex">
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
          className="absolute right-5 md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {open && (
        <ul className="mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-2xl bg-white/20 p-4 text-brand-ink ring-1 ring-white/40 backdrop-blur-md md:hidden">
          {siteConfig.navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 hover:bg-white/30"
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
