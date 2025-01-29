import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pavel Eichler",
  description: "Personal web for Pavel Eichler",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bg.jpg')", // Nastavenie obrázku ako pozadie
          backgroundSize: 'cover', // Zabezpečí, že obrázok pokryje celú obrazovku
          backgroundPosition: 'center', // Umiestni obrázok na stred
          backgroundAttachment: 'fixed', // Udrží obrázok na mieste pri scrollovaní
        }}
      >
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}


