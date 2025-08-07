import '@/app/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AHIBS PSB',
  description: 'Pendaftaran Santri Baru',
};

export default function AfterLoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-gray-50 text-black`}>
        {/* Gunakan wrapper flex-col min-h-screen agar layout stabil */}
        <div className="flex flex-col min-h-screen">
          {/* Fixed Header tetap di atas, tapi beri padding-top di main */}
          <Header />

          <main className="flex-1 pt-[72px] px-4 sm:px-6 max-w-screen-lg w-full mx-auto">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
