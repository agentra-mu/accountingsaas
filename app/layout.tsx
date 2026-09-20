import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, Inter } from "next/font/google";
import { ScrollProgress } from "@/components/velora/scroll-progress";
import Splash from "@/components/Splash";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Finly — Stop chasing clients for documents",
  description:
    "Send one link. Finly reads what comes back, checks it against what you asked for, and chases anything missing — so you don't have to.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${plexMono.variable} ${inter.variable}`}>
        <ScrollProgress />
        <Splash>{children}</Splash>
      </body>
    </html>
  );
}
