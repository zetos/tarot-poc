import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const abbess = localFont({
  src: "./fonts/Abbess__.ttf",
  variable: "--font-abbess",
  display: "swap",
});

const visit = localFont({
  src: "./fonts/visit.ttf",
  variable: "--font-visit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mage: The Ascension Tarot",
  description: "A mystical tarot reading experience using the Mage: The Ascension deck. Explore your path through interactive spreads and divine guidance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${abbess.variable} ${visit.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
