import type { Metadata } from "next";
import { Instrument_Sans, Inter } from "next/font/google";
import "@designcodeio/threeui/style.css";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Santino — Full-Stack Developer",
  description:
    "Desarrollo software para organizaciones reales: plataformas SaaS multi-tenant para agrupaciones folclóricas chilenas.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${instrumentSans.variable} ${inter.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
