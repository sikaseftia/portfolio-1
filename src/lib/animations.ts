import type { Variants } from "framer-motion";

// Muncul dari bawah sambil memudar. Dipakai saat elemen masuk viewport.
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Membuat anak-anaknya muncul berurutan, bukan sekaligus.
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};
