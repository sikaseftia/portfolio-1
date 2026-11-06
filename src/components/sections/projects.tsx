import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";

// Thumbnail di bawah ini adalah gambar dari desain Figma (contoh). Ganti dengan proyek Anda sendiri.
const projects = [
  { title: "Portfolio 1", category: "Web Development", src: "/images/portfolio/project-1.png", href: "#" },
  { title: "Portfolio 2", category: "Web Development", src: "/images/portfolio/project-2.png", href: "#" },
  { title: "Portfolio 3", category: "Web Development", src: "/images/portfolio/project-3.png", href: "#" },
];

export function Projects() {
  return (
    <section id="projects" className="bg-white py-24 text-brand-ink">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold md:text-5xl">
              Design to <span className="text-brand-maroon">Code Accuracy</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm text-neutral-600">
              We translated design mockups into pixel-perfect, responsive components, ensuring a smooth user
              experience across all devices.
            </p>
          </div>
          <a href="#projects" className="inline-flex w-fit items-center gap-3 rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold">
            See All
            <span className="flex size-6 items-center justify-center rounded-full bg-brand-ink text-brand-white">
              <ArrowRight size={14} />
            </span>
          </a>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <Reveal key={p.title} className="group flex flex-col rounded-2xl bg-neutral-50 transition-shadow hover:shadow-xl">
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
                  <Image
                    src={p.src}
                    alt={p.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Badge di luar area gambar agar melapisi tepi frame, seperti di Figma */}
                <Image
                  src="/images/badge/best-portfolio-layered.png"
                  alt="Best Portfolio"
                  width={144}
                  height={43}
                  className="absolute -top-2 -left-2 z-10 h-auto w-36"
                />
              </div>
              <div className="flex items-center justify-between gap-4 p-5">
                <div>
                  <p className="font-bold">{p.title}</p>
                  <p className="text-sm text-neutral-500">{p.category}</p>
                </div>
                <a
                  href={p.href}
                  aria-label={`Buka ${p.title}`}
                  className="flex size-9 items-center justify-center rounded-full bg-brand-maroon text-brand-white"
                >
                  <ArrowRight size={16} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
