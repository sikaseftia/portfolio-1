"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

import { fadeUp } from "@/lib/animations";

type RevealProps = HTMLMotionProps<"div">;

/** Membungkus konten agar muncul dengan fade-up saat masuk viewport (sekali saja). */
export function Reveal({ children, className, ...props }: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
