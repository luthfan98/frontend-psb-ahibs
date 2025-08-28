'use client';

import { useState, useEffect } from 'react';
import { ArrowUp, Phone, MessageCircle, GraduationCap } from 'lucide-react';

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setScrollProgress(scrollPercent);
      setShowBackToTop(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Floating Contact Buttons - Left Side */}
      <div className="fixed bottom-6 left-6 z-40 hidden lg:block">
        <div className="flex flex-col gap-3">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/6281233785161?text=Assalamualaikum, saya tertarik dengan pendaftaran santri baru AHIBS"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm font-medium transform hover:scale-105 hover:-translate-y-1"
            aria-label="Hubungi via WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="opacity-0 group-hover:opacity-100 max-w-0 group-hover:max-w-xs transition-all duration-300 whitespace-nowrap overflow-hidden">
              Chat WhatsApp
            </span>
          </a>

          {/* Call Button */}
          <a
            href="https://psb.ahibs.id"
            className="group flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm font-medium transform hover:scale-105 hover:-translate-y-1"
            aria-label="Telepon sekarang"
          >
            <Phone className="w-5 h-5" />
            <span className="opacity-0 group-hover:opacity-100 max-w-0 group-hover:max-w-xs transition-all duration-300 whitespace-nowrap overflow-hidden">
              Telepon
            </span>
          </a>
        </div>
      </div>

      {/* Back to Top Button - Right Side */}
      <div className="fixed bottom-6 right-6 z-40">
        <div className="flex flex-col items-end gap-4">
          {/* Progress Indicator */}
          <div className="hidden lg:block bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-emerald-200">
            <div className="w-2 h-16 bg-gray-200 rounded-full relative overflow-hidden">
              <div 
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full transition-all duration-300"
                style={{ height: `${Math.min(scrollProgress, 100)}%` }}
              />
            </div>
          </div>

          {/* Back to Top Button */}
          {showBackToTop && (
            <button
              onClick={scrollToTop}
              className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              aria-label="Kembali ke atas"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Contact Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-gray-200 shadow-lg">
        <div className="flex">
          <a
            href="https://wa.me/6281233785161?text=Assalamualaikum, saya tertarik dengan pendaftaran santri baru AHIBS"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-4 bg-green-500 hover:bg-green-600 text-white font-medium transition-colors duration-200"
            aria-label="Hubungi via WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp</span>
          </a>
          <a
            href="https://psb.ahibs.id"
            className="flex-1 flex items-center justify-center gap-2 py-4 bg-orange-500 hover:bg-blue-600 text-white font-medium transition-colors duration-200"
            aria-label="Daftar Sekarang"
          >
            <GraduationCap size={5} />
            <span>Daftar Sekarang</span>
          </a>
        </div>
      </div>
    </>
  );
}