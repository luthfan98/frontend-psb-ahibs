"use client";

import { Phone, MessageCircle, Menu, X, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

interface QuickMenuProps {
  className?: string;
}

const QuickMenu: React.FC<QuickMenuProps> = ({ className = "" }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const menuItems = [
    { title: "Kenapa Memilih AHIBS", icon: "⭐", link: "/kenapa-ahibs", color: "bg-yellow-50 hover:bg-yellow-100 border-yellow-200" },
    { title: "Program Unggulan AHIBS", icon: "🎓", link: "/program", color: "bg-blue-50 hover:bg-blue-100 border-blue-200" },
    { title: "Visi Misi", icon: "🎯", link: "/visi-misi", color: "bg-red-50 hover:bg-red-100 border-red-200" },
    { title: "Lokasi", icon: "📍", link: "/lokasi", color: "bg-rose-50 hover:bg-rose-100 border-rose-200" },
    { title: "Alur Pendaftaran", icon: "📋", link: "/alur-pendaftaran", color: "bg-slate-50 hover:bg-slate-100 border-slate-200" },
    { title: "Brosur", icon: "📄", link: "/brosur", color: "bg-indigo-50 hover:bg-indigo-100 border-indigo-200" },
    { title: "Biaya", icon: "💰", link: "/biaya", color: "bg-amber-50 hover:bg-amber-100 border-amber-200" },
    { title: "Syarat Pendaftaran", icon: "📝", link: "/syarat", color: "bg-cyan-50 hover:bg-cyan-100 border-cyan-200" },
    { title: "Beasiswa", icon: "🎖️", link: "/beasiswa", color: "bg-orange-50 hover:bg-orange-100 border-orange-200" },
    { title: "Dukungan Tokoh Besar", icon: "👑", link: "/dukungan", color: "bg-purple-50 hover:bg-purple-100 border-purple-200" }
  ];

  useEffect(() => {
    const checkScreenSize = (): void => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Desktop Version - Normal Section
  const DesktopVersion: React.FC = () => (
    <section className={`py-16 bg-gradient-to-br from-emerald-50 via-white to-teal-50 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            Informasi Lengkap AHIBS
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Temukan semua yang perlu Anda ketahui tentang AHIBS dalam satu tempat
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className={`group flex flex-col items-center p-4 md:p-6 rounded-2xl transition-all duration-300 border ${item.color}`}
            >
              <div className="text-3xl md:text-4xl mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="font-medium text-gray-700 text-center text-xs md:text-sm leading-tight group-hover:text-gray-900 transition-colors duration-300">
                {item.title}
              </h3>
            </a>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 border border-gray-100">
            <div className="text-center mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                Siap Bergabung dengan AHIBS?
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Wujudkan impian pendidikan Anda bersama kami
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/6281233785161"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium text-sm md:text-base transition-colors duration-300 flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle size={18} />
                Konsultasi WA
              </a>
              <a
                href="https://psb.ahibs.id/daftar"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-medium text-sm md:text-base transition-colors duration-300 flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone size={18} />
                Daftar Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Mobile Version - Fixed Bottom Button + Overlay
  const MobileVersion: React.FC = () => (
    <>
      {/* Fixed Bottom Button */}
      <div className="fixed bottom-4 left-4 right-4 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-4 px-6 rounded-2xl font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
        >
          <Menu size={20} />
          Informasi Lengkap AHIBS
          <ChevronUp size={20} />
        </button>
      </div>

      {/* Full Screen Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div 
            className="w-full bg-white rounded-t-3xl max-h-[90vh] overflow-hidden animate-in slide-in-from-bottom duration-300"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <div className="text-center flex-1">
                  <h2 className="text-xl font-bold text-gray-800">
                    Informasi Lengkap AHIBS
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Temukan semua info yang Anda butuhkan
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="ml-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
                >
                  <X size={20} className="text-gray-600" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-120px)] p-4">
              {/* Menu Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    onClick={() => setIsOpen(false)}
                    className={`group flex flex-col items-center p-4 rounded-xl transition-all duration-300 border ${item.color}`}
                  >
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="font-medium text-gray-700 text-center text-xs leading-tight group-hover:text-gray-900 transition-colors duration-300">
                      {item.title}
                    </h3>
                  </a>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-4 space-y-3">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    Siap Bergabung?
                  </h3>
                  <p className="text-sm text-gray-600">
                    Wujudkan impian pendidikan Anda
                  </p>
                </div>
                <div className="space-y-2">                  
                  <a
                    href="https://psb.ahibs.id/daftar"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-xl font-medium text-sm transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <Phone size={16} />
                    Daftar Sekarang
                  </a>
                  <a
                    href="https://wa.me/6281233785161"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-xl font-medium text-sm transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={16} />
                    Konsultasi WA
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );

  return isMobile ? <MobileVersion /> : <DesktopVersion />;
};

export default QuickMenu;