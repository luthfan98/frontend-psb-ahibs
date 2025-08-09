// src/app/layout.tsx
import type { Metadata,Viewport  } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pendaftaran Santri Baru | Pesantren Al-Hadharah Islamic Boarding School",
  description: "Penerimaan Santri Baru Tahun Pelajaran 2026/2027. Bergabunglah dalam lingkungan Islami yang unggul dalam akademik dan tahfidz.",
  keywords: "pendaftaran santri, pesantren, islamic boarding school, Al-Hadharah, pendaftaran online, tahfizh, pendidikan islam",
  authors: [{ name: "Pesantren Modern Al-Hadharah Islamic Boarding School" }],
  openGraph: {
    title: "Pendaftaran Santri Baru | Pesantren Modern Al-Hadharah Islamic Boarding School",
    description: "Penerimaan Santri Baru Tahun Pelajaran 2026/2027. Bergabunglah dalam lingkungan Islami yang unggul dalam akademik dan tahfidz.",
    type: "website",
    locale: "id_ID",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ✅ Pindahkan viewport ke ekspor terpisah
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head />
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-white text-slate-900 flex flex-col min-h-screen overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
