"use client";

import { useState } from "react";
import { Download, Eye, FileText, Share2, Printer, X } from "lucide-react";
import Image from "next/image";

interface BrosurSectionProps {
  className?: string;
}

const BrosurSection: React.FC<BrosurSectionProps> = ({ className = "" }) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  const brosurImage = "/assets/doc/brosur.jpg";

  const handleDownload = async () => {
    setIsDownloading(true);
    
    try {
      // Simulasi proses download
      const response = await fetch(brosurImage);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Brosur_AHIBS.jpg';
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback: open in new tab
      window.open(brosurImage, '_blank');
    }
    
    setTimeout(() => setIsDownloading(false), 1000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Brosur AHIBS',
          text: 'Lihat brosur lengkap AHIBS - Akademi Hukum Islam Bina Saufa',
          url: window.location.href
        });
      } catch (error) {
        console.error('Share failed:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link berhasil disalin ke clipboard!');
    }
  };

  const handlePrint = () => {
    const printWindow = window.open(brosurImage, '_blank');
    if (printWindow) {
      printWindow.onload = () => {
        printWindow.print();
      };
    }
  };

  return (
    <section className={`py-16 bg-gradient-to-br from-emerald-50 via-white to-teal-50 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-6">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Brosur AHIBS
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Dapatkan informasi lengkap tentang program studi, fasilitas, dan keunggulan AHIBS dalam satu brosur praktis
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Brosur Preview */}
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl transform rotate-3 scale-105 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="aspect-[3/4] relative">
                  <Image
                    src={brosurImage}
                    alt="Brosur AHIBS"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                    <button
                      onClick={() => setIsPreviewOpen(true)}
                      className="bg-white/90 hover:bg-white text-gray-800 px-6 py-3 rounded-full font-medium flex items-center gap-2 transform translate-y-4 hover:translate-y-0 transition-all duration-300"
                    >
                      <Eye size={18} />
                      Lihat Preview
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-emerald-600">2025</div>
                  <div className="text-sm text-gray-600">Tahun Terbaru</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-teal-600">HD</div>
                  <div className="text-sm text-gray-600">Kualitas Tinggi</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">JPG</div>
                  <div className="text-sm text-gray-600">Format Digital</div>
                </div>
              </div>
            </div>
          </div>

          {/* Download Section */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Download Brosur
              </h3>
              <p className="text-gray-600 mb-6">
                Brosur ini berisi informasi lengkap tentang program studi, biaya kuliah, fasilitas kampus, dan proses pendaftaran di AHIBS.
              </p>

              {/* Main Download Button */}
              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:hover:transform-none"
              >
                {isDownloading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Mengunduh...
                  </>
                ) : (
                  <>
                    <Download size={20} />
                    Download Brosur
                  </>
                )}
              </button>

              {/* Action Buttons */}
              <div className="grid grid-cols-3 gap-3 mt-6">
                <button
                  onClick={() => setIsPreviewOpen(true)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Eye size={16} />
                  Preview
                </button>
                
                <button
                  onClick={handleShare}
                  className="bg-blue-100 hover:bg-blue-200 text-blue-700 py-3 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Share2 size={16} />
                  Share
                </button>
                
                <button
                  onClick={handlePrint}
                  className="bg-purple-100 hover:bg-purple-200 text-purple-700 py-3 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Printer size={16} />
                  Print
                </button>
              </div>
            </div>

            {/* Features List */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
              <h4 className="font-semibold text-gray-800 mb-4">Yang Anda dapatkan:</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  Informasi lengkap program studi
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  Detail biaya kuliah dan beasiswa
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  Fasilitas dan keunggulan kampus
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  Panduan pendaftaran lengkap
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  Kontak dan lokasi kampus
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Punya Pertanyaan Tentang Program Kami?
            </h3>
            <p className="text-gray-600 mb-6">
              Tim akademik kami siap membantu Anda memahami lebih detail tentang program studi dan proses pendaftaran
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6281233785161"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Download size={18} />
                Konsultasi via WhatsApp
              </a>
              <a
                href="https://psb.ahibs.id/daftar"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <FileText size={18} />
                Daftar Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {isPreviewOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setIsPreviewOpen(false)}>
          <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setIsPreviewOpen(false)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300"
            >
              <X size={20} />
            </button>
            
            <div className="relative aspect-[3/4] max-h-[80vh]">
              <Image
                src={brosurImage}
                alt="Preview Brosur AHIBS"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 70vw"
              />
            </div>
            
            <div className="p-4 bg-gray-50 border-t">
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <button
                  onClick={handleDownload}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Download size={16} />
                  Download
                </button>
                <button
                  onClick={handlePrint}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Printer size={16} />
                  Print
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BrosurSection;