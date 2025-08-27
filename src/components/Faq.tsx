"use client";

import { useState } from 'react';
import { ChevronDown, MessageCircleQuestion, CheckCircle, Users, BookOpen } from 'lucide-react';
import Link from 'next/link';

const faqData = [
  {
    question: "Apakah pendaftaran bisa dilakukan secara online?",
    answer: "Betul, seluruh proses pendaftaran awal mulai dari pembuatan akun, pengisian formulir, hingga pembayaran dapat dilakukan sepenuhnya secara online melalui website ini. Sistem kami telah terintegrasi dengan gateway pembayaran yang aman dan terpercaya.",
    icon: "💻",
    category: "Pendaftaran"
  },
  {
    question: "Apa saja berkas yang perlu disiapkan?",
    answer: "Berkas yang umum diperlukan adalah fotokopi Akta Kelahiran, Kartu Keluarga, Ijazah terakhir, pas foto terbaru, dan surat keterangan sehat. Detail lengkap beserta format dan ukuran file akan diinformasikan setelah Anda membuat akun pendaftar.",
    icon: "📄",
    category: "Persyaratan"
  },
  {
    question: "Berapa biaya pendaftaran dan biaya pendidikannya?",
    answer: "Informasi detail mengenai rincian biaya pendaftaran dan biaya pendidikan per jenjang akan tersedia di brosur yang dapat diunduh setelah Anda login ke akun pendaftar. Kami juga menyediakan sistem pembayaran yang fleksibel dengan cicilan yang terjangkau.",
    icon: "💰",
    category: "Biaya"
  },
  {
    question: "Apakah ada program beasiswa?",
    answer: "Ya, kami menyediakan beberapa program beasiswa bagi calon santri berprestasi dan bagi mereka yang berasal dari keluarga kurang mampu. Tersedia beasiswa prestasi akademik, hafalan Al-Qur'an, dan beasiswa sosial. Syarat dan ketentuan berlaku sesuai dengan jenis beasiswa yang dipilih.",
    icon: "🎓",
    category: "Beasiswa"
  },
  {
    question: "Bagaimana sistem pembelajaran di pesantren?",
    answer: "Sistem pembelajaran kami menggabungkan kurikulum pesantren tradisional dengan pendidikan formal. Santri akan mempelajari kitab-kitab klasik, tahfidz Al-Qur'an, serta mata pelajaran umum. Metode pembelajaran menggunakan pendekatan modern dengan fasilitas teknologi yang mendukung.",
    icon: "📚",
    category: "Pembelajaran"
  },
  {
    question: "Apakah orang tua bisa mengunjungi santri?",
    answer: "Ya, kami mengadakan jadwal kunjungan rutin setiap bulan. Selain itu, orang tua dapat memantau perkembangan santri melalui sistem monitoring online dan laporan berkala dari pembimbing. Komunikasi dengan santri juga dapat dilakukan melalui telepon pada waktu-waktu tertentu.",
    icon: "👨‍👩‍👧‍👦",
    category: "Kunjungan"
  }
];

const FaqItem = ({ question, answer, icon, category }: { question: string, answer: string, icon: string, category: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group bg-white rounded-2xl border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg mb-4 overflow-hidden">
      <button
        className="flex justify-between items-center w-full text-left p-6 hover:bg-slate-50/50 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-start space-x-4 flex-1">
          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center text-lg group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                {category}
              </span>
            </div>
            <span className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors duration-200">
              {question}
            </span>
          </div>
        </div>
        <div className="flex-shrink-0 ml-4">
          <ChevronDown
            className={`w-5 h-5 text-slate-400 transform transition-all duration-300 ${
              isOpen ? 'rotate-180 text-blue-500' : 'group-hover:text-slate-600'
            }`}
          />
        </div>
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 pt-0">
          <div className="ml-14 border-l-2 border-blue-100 pl-6">
            <p className="text-slate-600 leading-relaxed">
              {answer}
            </p>
            <div className="flex items-center gap-2 mt-4 text-sm text-blue-600">
              <CheckCircle className="w-4 h-4" />
              <span>Informasi terverifikasi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Faq() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  
  const categories = ['Semua', 'Pendaftaran', 'Persyaratan', 'Biaya', 'Beasiswa', 'Pembelajaran', 'Kunjungan'];
  
  const filteredFaqData = activeCategory === 'Semua' 
    ? faqData 
    : faqData.filter(item => item.category === activeCategory);

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl mb-6">
            <MessageCircleQuestion className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text text-transparent mb-6">
            Pertanyaan Umum (FAQ)
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Temukan jawaban atas pertanyaan yang paling sering diajukan oleh calon wali santri dan dapatkan informasi lengkap seputar pesantren.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 hover:border-blue-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* FAQ Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {filteredFaqData.map((item, index) => (
                <FaqItem 
                  key={index} 
                  question={item.question} 
                  answer={item.answer}
                  icon={item.icon}
                  category={item.category}
                />
              ))}
            </div>
          </div>
          
          {/* Sidebar Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Contact Card */}
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-semibold mb-4">Masih Ada Pertanyaan?</h3>
                <p className="text-blue-100 mb-6 text-sm leading-relaxed">
                  Tim kami siap membantu Anda 24/7. Jangan ragu untuk menghubungi kami.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      📞
                    </div>
                    <span>+62 812 3378 5161</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      ✉️
                    </div>
                    <span>alhadharah.ibs@gmail.com</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Statistik Pesantren</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-blue-500" />
                      <span className="text-sm text-slate-600">Total Santri</span>
                    </div>
                    <span className="font-semibold text-slate-800">500+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-slate-600">Program</span>
                    </div>
                    <span className="font-semibold text-slate-800">25+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                      <span className="text-sm text-slate-600">Kepuasan</span>
                    </div>
                    <span className="font-semibold text-slate-800">98%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Siap Memulai Perjalanan Spiritual Anak Anda?
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan keluarga yang telah mempercayakan pendidikan spiritual anak-anak mereka kepada kami.
          </p>
          <Link href="https://psb.ahibs.id/">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 w-full cursor-pointer">
              Daftar Sekarang
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}