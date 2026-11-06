import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

/** Judul bagian yang dipakai berulang di setiap section. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <p className="font-script text-2xl text-brand-gold">{eyebrow}</p>
      )}
      <h2 className="font-display text-4xl uppercase leading-tight text-brand-white md:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base text-brand-white/80 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
