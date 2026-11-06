#!/usr/bin/env bash
# Membuat struktur folder untuk Slicing Portfolio (Next.js App Router + folder src/)
# Jalankan dari ROOT project, yaitu folder yang berisi package.json dan src/.
set -euo pipefail

if [ ! -f package.json ] || [ ! -d src ]; then
  echo "Error: jalankan script ini dari root project Next.js (yang ada package.json dan src/)." >&2
  exit 1
fi

dirs=(
  docs
  public/images/hero
  public/images/portfolio
  public/images/testimonials
  public/images/experience
  public/icons/tech
  public/icons/services
  src/components/layout
  src/components/sections/hero
  src/components/sections/tech-stack
  src/components/sections/services
  src/components/sections/projects
  src/components/sections/experience
  src/components/sections/testimonials
  src/components/sections/faq
  src/components/sections/contact
  src/components/shared
  src/components/ui
  src/data
  src/hooks
  src/lib
  src/types
)

for d in "${dirs[@]}"; do
  mkdir -p "$d"
  # .gitkeep supaya folder yang masih kosong ikut ter-commit ke Git
  touch "$d/.gitkeep"
done

echo "Struktur folder siap:"
find docs public src -type d | sort
