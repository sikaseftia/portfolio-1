import type { Metadata } from "next";
import { Anton, Bonheur_Royale, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

const bonheurRoyale = Bonheur_Royale({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bonheur",
});

export const metadata: Metadata = {
  title: "Sika Seftia | Junior Frontend Developer",
  description: "Portfolio Sika Seftia, Junior Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${anton.variable} ${bonheurRoyale.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
