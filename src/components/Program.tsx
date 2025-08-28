'use client';

import { type ElementType } from 'react';
import { GraduationCap, BookOpen, Users, Heart, Star, Calendar, MapPin, Clock, Sparkles, Landmark, Sunrise, Gift, CheckCircle } from 'lucide-react';
import Link from 'next/link';

interface Program {
  title: string;
  description: string;
  icon: ElementType;
  level: string;
  duration: string;
  capacity: string;
  highlight: string;
  color: string;
  arabicText?: string;
  quranRef?: string;
  features: string[];
}

export default function Program() {
  const programs: Program[] = [
    { 
      title: "MTs Putra", 
      description: "Program perdana Madrasah Tsanawiyah khusus putra dengan kurikulum terintegrasi, pembinaan karakter Islami yang kuat, dan metode pembelajaran modern berbasis pesantren.",
      icon: GraduationCap,
      level: "SMP Setara",
      duration: "3 Tahun",
      capacity: "30 Santri",
      highlight: "Angkatan Pertama",
      color: "from-emerald-500 via-teal-500 to-emerald-600",
      arabicText: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ",
      quranRef: "HR. Ibnu Majah",
      features: ["Tahfidz Al-Quran", "Bahasa Arab", "Sains Modern", "Pembinaan Akhlaq"]
    },
    { 
      title: "MTs Putri", 
      description: "Program perdana Madrasah Tsanawiyah khusus putri dengan pendampingan intensif, pengembangan potensi diri, dan lingkungan yang mendukung tumbuh kembang optimal santriwati.",
      icon: Heart,
      level: "SMP Setara", 
      duration: "3 Tahun",
      capacity: "30 Santriwati",
      highlight: "Angkatan Pertama",
      color: "from-pink-500 via-rose-500 to-pink-600",
      arabicText: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
      quranRef: "HR. Bukhari",
      features: ["Tarbiyah Islami", "Keterampilan Putri", "Tahfidz", "Adab & Akhlaq"]
    }

  ];

  const programUnggulan = [
    "Belajar langsung di Mekkah dan Madinah",
    "Kerjasama Internasional", 
    "Pembelajaran Multilingual (Bahasa Arab, Bahasa Inggris, Bahasa Indonesia)",
    "Hafal Al Qur'an Minimal 11 Juz",
    "Praktek Dakwah",
    "Qiroatul Kutub",
    "Living Values Education (Pendidikan Nilai)"
  ];

  return (
    <section 
      id="program" 
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #cbd5e1 50%, #e2e8f0 75%, #f8fafc 100%)'
      }}
    >
      {/* Islamic Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 800 800" className="w-full h-full">
          <defs>
            <pattern id="program-islamic-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <g fill="#065f46">
                <circle cx="40" cy="40" r="2"/>
                <path d="M40 20 L55 30 L40 40 L25 30 Z" fill="none" stroke="#065f46" strokeWidth="0.5"/>
                <path d="M20 40 L30 55 L40 40 L30 25 Z" fill="none" stroke="#065f46" strokeWidth="0.5"/>
                <circle cx="40" cy="40" r="15" fill="none" stroke="#065f46" strokeWidth="0.3"/>
                <circle cx="40" cy="40" r="25" fill="none" stroke="#065f46" strokeWidth="0.2"/>
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#program-islamic-pattern)"/>
        </svg>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-amber-200/30 to-yellow-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Floating Icons */}
        <div className="absolute top-1/4 left-1/6 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>
          <BookOpen className="w-8 h-8 text-emerald-400/40" />
        </div>
        <div className="absolute bottom-1/3 right-1/4 animate-bounce" style={{ animationDelay: '2.5s', animationDuration: '5s' }}>
          <Sunrise className="w-6 h-6 text-amber-400/40 fill-current" />
        </div>
        <div className="absolute top-1/2 right-1/6 animate-bounce" style={{ animationDelay: '1.8s', animationDuration: '4.5s' }}>
          <Sparkles className="w-7 h-7 text-teal-400/40" />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          {/* New Badge */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-100 to-emerald-100 text-emerald-700 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-emerald-200 shadow-lg">
            <Sunrise className="w-5 h-5 text-amber-600" />
            <span className="font-semibold">Pesantren Baru - Generasi Pertama</span>
            <div className="flex items-center gap-1">
              <Gift className="w-4 h-4 text-amber-500" />
              <Sparkles className="w-4 h-4 text-emerald-500" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
            Program Unggulan
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-emerald-600 to-teal-600 ml-3 block md:inline">
              AHIBS
            </span>
          </h2>
          
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-emerald-500 rounded-full" />
            <div className="flex items-center gap-2">
              <Sunrise className="w-6 h-6 text-amber-500 fill-current" />
              <Landmark className="w-6 h-6 text-emerald-600" />
              <Star className="w-6 h-6 text-amber-500 fill-current" />
            </div>
            <div className="w-24 h-1 bg-gradient-to-l from-transparent via-amber-500 to-emerald-500 rounded-full" />
          </div>

          {/* Enhanced Program Unggulan Section */}
          <div className="bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-800 p-8 rounded-2xl shadow-2xl mb-12 max-w-5xl mx-auto">
            {/* Decorative Header */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-amber-400/60 to-emerald-400/60 rounded-full" />
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Sunrise className="w-6 h-6 text-amber-400 drop-shadow-lg" />
                <Landmark className="w-7 h-7 text-emerald-300 drop-shadow-lg" />
                <Star className="w-6 h-6 text-amber-400 drop-shadow-lg" />
              </div>
              <div className="w-20 h-0.5 bg-gradient-to-l from-transparent via-amber-400/60 to-emerald-400/60 rounded-full" />
            </div>

            {/* Title */}
            <div className="text-center mb-10">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                Keunggulan Program
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-emerald-400 mx-auto rounded-full" />
            </div>

            {/* Program List */}
            <div className="grid gap-4 max-w-4xl mx-auto">
              {programUnggulan.map((program, index) => (
                <div 
                  key={index}
                  className="group flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-amber-400/30 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-6 h-6 text-amber-400 group-hover:text-amber-300 transition-colors duration-300 drop-shadow-sm" />
                  </div>
                  <span className="text-emerald-50 text-left font-medium leading-relaxed group-hover:text-white transition-colors duration-300">
                    {program}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Accent */}
            <div className="flex justify-center mt-8">
              <div className="w-32 h-0.5 bg-gradient-to-r from-amber-400/40 via-emerald-400/60 to-amber-400/40 rounded-full" />
            </div>
          </div>

          {/* Special Launch Message */}
          <div className="bg-gradient-to-r from-amber-50 to-emerald-50 rounded-2xl p-6 max-w-4xl mx-auto border border-amber-200 shadow-lg mb-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sunrise className="w-8 h-8 text-amber-600" />
              <h3 className="text-xl font-bold text-slate-800">Menjadi Bagian Sejarah</h3>
              <Sunrise className="w-8 h-8 text-amber-600" />
            </div>
            <p className="text-emerald-700 font-medium text-lg mb-3">
              &quot;Beruntunglah mereka yang menjadi perintis dalam kebaikan&quot;
            </p>
            <p className="text-slate-700">
              Menjadi santri generasi pertama adalah kehormatan istimewa. Anda akan menjadi bagian dari sejarah 
              pembentukan pesantren dan mendapatkan perhatian khusus dalam setiap tahap pembelajaran.
            </p>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div 
                key={index} 
                className="group relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-3 transition-all duration-500 border border-slate-200 overflow-hidden hover:border-emerald-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* New Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-orange-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                  BARU
                </div>

                {/* Islamic Pattern Background */}
                <div className="absolute inset-0 opacity-5">
                  <svg className="w-full h-full" viewBox="0 0 200 300">
                    <defs>
                      <pattern id={`card-pattern-program-${index}`} x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                        <circle cx="25" cy="25" r="18" fill="none" stroke="#065f46" strokeWidth="0.5"/>
                        <circle cx="25" cy="25" r="10" fill="none" stroke="#065f46" strokeWidth="0.5"/>
                        <path d="M25 7 L35 17 L25 27 L15 17 Z" fill="none" stroke="#065f46" strokeWidth="0.5"/>
                        <circle cx="25" cy="25" r="3" fill="#065f46"/>
                      </pattern>
                    </defs>
                    <rect width="200" height="300" fill={`url(#card-pattern-program-${index})`}/>
                  </svg>
                </div>

                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Arabic Text */}
                  {program.arabicText && (
                    <div className="text-center mb-6">
                      <p className="text-amber-700 text-lg font-bold mb-1">
                        {program.arabicText}
                      </p>
                      <p className="text-emerald-600 text-xs font-medium">
                        {program.quranRef}
                      </p>
                    </div>
                  )}

                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="relative mb-4">
                        <div className={`absolute inset-0 bg-gradient-to-r ${program.color} rounded-xl blur-md opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                        <div className={`relative inline-flex p-4 rounded-xl bg-gradient-to-r ${program.color} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        {/* Sparkle Effect */}
                        <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Sparkles className="w-5 h-5 text-amber-500" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-emerald-600 transition-all duration-300">
                        {program.title}
                      </h3>
                      {/* Highlight Badge */}
                      <span className={`inline-block text-sm font-semibold px-4 py-2 rounded-full text-white bg-gradient-to-r ${program.color} shadow-lg mb-4`}>
                        ✦ {program.highlight} ✦
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed mb-6 group-hover:text-slate-700 transition-colors duration-300">
                    {program.description}
                  </p>

                  
                  {/* Program Details */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-4 text-sm">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${program.color} bg-opacity-10 backdrop-blur-sm`}>
                        <MapPin className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">{program.level}</p>
                        <p className="text-slate-600 text-xs">Jenjang Pendidikan</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${program.color} bg-opacity-10 backdrop-blur-sm`}>
                        <Clock className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">{program.duration}</p>
                        <p className="text-slate-600 text-xs">Masa Pendidikan</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${program.color} bg-opacity-10 backdrop-blur-sm`}>
                        <Users className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">{program.capacity}</p>
                        <p className="text-slate-600 text-xs">Kuota Terbatas</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-slate-200">
                    <Link href={`https://psb.ahibs.id/`}>
                      <button
                        className={`w-full py-4 px-6 rounded-xl bg-gradient-to-r ${program.color} text-white font-bold text-sm hover:shadow-lg hover:shadow-emerald-500/20 transform hover:scale-105 transition-all duration-300 opacity-90 hover:opacity-100 flex items-center justify-center gap-2 cursor-pointer`}
                      >
                        <span>Daftar Sebagai Generasi Pertama</span>
                        <Sunrise className="w-5 h-5" />
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Decorative Corner Elements */}
                <div className="absolute top-16 right-4 w-12 h-12 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-12" />
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-45" />
              </div>
            );
          })}
        </div>

        {/* Bottom Section - Call to Action */}
        <div className="text-center mt-16">
          {/* Motivational Quote */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto mb-8 border border-emerald-200 shadow-lg">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sunrise className="w-6 h-6 text-amber-600" />
              <p className="text-emerald-700 italic font-bold text-xl">
                &quot;خَيْرُ النَّاسِ مَنْ نَفَعَ النَّاسَ&quot;
              </p>
              <Sunrise className="w-6 h-6 text-amber-600" />
            </div>
            <p className="text-amber-700 font-medium mb-3">
              &quot;Sebaik-baik manusia adalah yang bermanfaat bagi manusia lainnya&quot; - HR. Ahmad
            </p>
            <p className="text-slate-700 text-lg">
              Jadilah bagian dari generasi pertama yang akan membawa keberkahan dan manfaat bagi umat
            </p>
          </div>

          {/* Registration CTA */}
          <div className="bg-gradient-to-r from-white/95 to-emerald-50/95 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-emerald-200 hover:border-emerald-300 transition-all duration-300 max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 text-left">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full blur-md opacity-30" />
                    <div className="relative p-3 bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full shadow-lg">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-xl flex items-center gap-2">
                      Pendaftaran Santri Baru Dibuka!
                      <Gift className="w-5 h-5 text-amber-500" />
                    </h4>
                    <p className="text-emerald-700 font-medium">Tahun Ajaran 2026-2027</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <p className="text-slate-700 font-medium">✨ <strong>Kuota Terbatas:</strong> Hanya 60 santri untuk generasi pertama</p>
                  <p className="text-slate-700 font-medium">🎯 <strong>Seleksi Khusus:</strong> Program intensif untuk calon santri unggulan</p>
                  <p className="text-slate-700 font-medium">🏆 <strong>Beasiswa:</strong> Tersedia untuk santri berprestasi dan Yatim Dhuafa</p>
                </div>

                <div className="flex items-center gap-4 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Pendaftaran: 1 September - 29 November 2025 (Gelombang 1)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>Kuota: 60 Santri</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <Link href="https://psb.ahibs.id/">
                  <button className="bg-gradient-to-r from-amber-500 via-emerald-500 to-teal-500 text-white px-10 py-4 rounded-2xl font-bold text-xl hover:shadow-lg hover:shadow-amber-500/20 transform hover:scale-105 transition-all duration-300 flex items-center gap-3 group w-full cursor-pointer">
                    <span>Daftar Sekarang</span>
                    <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-300">
                      <Sunrise className="w-6 h-6" />
                      <Sparkles className="w-5 h-5" />
                    </div>
                  </button>
                </Link>

                <Link href="/assets/doc/brosur.jpg">
                  <button className="border-2 border-emerald-500 text-emerald-600 px-8 py-3 rounded-2xl font-semibold hover:bg-emerald-50 transition-all duration-300 flex items-center gap-2 justify-center w-full cursor-pointer">
                    <BookOpen className="w-5 h-5" />
                    <span>Download Brosur</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Decorative Border */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-6">
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-500 to-emerald-500 rounded-full" />
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-amber-500 rounded-full animate-pulse" />
                <Sunrise className="w-8 h-8 text-amber-600" />
                <Landmark className="w-8 h-8 text-emerald-600" />
                <div className="w-4 h-4 bg-emerald-500 rounded-full animate-pulse" />
              </div>
              <div className="w-32 h-1 bg-gradient-to-l from-transparent via-amber-500 to-emerald-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}