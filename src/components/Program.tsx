'use client';

import { GraduationCap, BookOpen, Users, Heart, Star, Calendar, MapPin, Clock, Award, Sparkles, Landmark } from 'lucide-react';

interface Program {
  title: string;
  description: string;
  icon: any;
  level: string;
  duration: string;
  students: string;
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
      description: "Jenjang Madrasah Tsanawiyah khusus putra dengan kurikulum terintegrasi, pembinaan karakter Islami, dan program tahfidz yang intensif.",
      icon: GraduationCap,
      level: "SMP Setara",
      duration: "3 Tahun",
      students: "150+ Santri",
      highlight: "Tahfidz 10 Juz",
      color: "from-emerald-500 via-teal-500 to-emerald-600",
      arabicText: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ",
      quranRef: "HR. Ibnu Majah",
      features: ["Tahfidz Al-Quran", "Bahasa Arab", "Sains Modern", "Olahraga"]
    },
    { 
      title: "MTs Putri", 
      description: "Jenjang Madrasah Tsanawiyah khusus putri dengan pendampingan khusus, keterampilan putri, dan lingkungan yang mendukung perkembangan optimal.",
      icon: Heart,
      level: "SMP Setara", 
      duration: "3 Tahun",
      students: "120+ Santriwati",
      highlight: "Keterampilan Putri",
      color: "from-pink-500 via-rose-500 to-pink-600",
      arabicText: "الْجَنَّةُ تَحْتَ أَقْدَامِ الْأُمَّهَاتِ",
      quranRef: "HR. An-Nasai",
      features: ["Tarbiyah Khusus", "Keterampilan", "Tahfidz", "Adab Islami"]
    },
    { 
      title: "MA Putra", 
      description: "Jenjang Madrasah Aliyah khusus putra dengan program unggulan persiapan perguruan tinggi, leadership, dan kajian keislaman mendalam.",
      icon: Award,
      level: "SMA Setara",
      duration: "3 Tahun", 
      students: "100+ Santri",
      highlight: "Persiapan PTN",
      color: "from-amber-500 via-yellow-500 to-amber-600",
      arabicText: "وَفَوْقَ كُلِّ ذِي عِلْمٍ عَلِيمٌ",
      quranRef: "QS. Yusuf: 76",
      features: ["UTBK Prep", "Leadership", "Kajian Islam", "Bahasa Asing"]
    },
    { 
      title: "MA Putri", 
      description: "Jenjang Madrasah Aliyah khusus putri dengan fokus pengembangan potensi akademik, spiritual, dan kepemimpinan dalam perspektif Islam.",
      icon: Star,
      level: "SMA Setara",
      duration: "3 Tahun",
      students: "80+ Santriwati", 
      highlight: "Leadership Training",
      color: "from-purple-500 via-violet-500 to-purple-600",
      arabicText: "وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوفِ",
      quranRef: "QS. Al-Baqarah: 228",
      features: ["Academic Plus", "Da'wah Skills", "Leadership", "Entrepreneur"]
    },
    { 
      title: "Program Tahfidz", 
      description: "Program intensif menghafal Al-Qur'an 30 Juz dengan metode pembelajaran yang terbukti efektif, muraja'ah rutin, dan pembinaan tajwid.",
      icon: BookOpen,
      level: "Semua Jenjang",
      duration: "6 Tahun",
      students: "200+ Huffadz",
      highlight: "30 Juz Target", 
      color: "from-teal-500 via-emerald-500 to-teal-600",
      arabicText: "إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ",
      quranRef: "QS. Al-Hijr: 9",
      features: ["Tahfidz 30 Juz", "Tajwid Mutqin", "Muraja'ah", "Tilawah"]
    },
    { 
      title: "Kitab Kuning", 
      description: "Kajian mendalam kitab-kitab turats klasik dengan manhaj salaf, pemahaman komprehensif, dan aplikasi dalam kehidupan modern.",
      icon: Landmark,
      level: "MA & Pasca",
      duration: "Berkelanjutan", 
      students: "50+ Santri",
      highlight: "Turats Klasik",
      color: "from-indigo-500 via-blue-500 to-indigo-600",
      arabicText: "وَقُلْ رَبِّ زِدْنِي عِلْمًا",
      quranRef: "QS. Taha: 114",
      features: ["Fiqh", "Ushul Fiqh", "Tafsir", "Hadits"]
    },
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
          <Star className="w-6 h-6 text-amber-400/40 fill-current" />
        </div>
        <div className="absolute top-1/2 right-1/6 animate-bounce" style={{ animationDelay: '1.8s', animationDuration: '4.5s' }}>
          <Sparkles className="w-7 h-7 text-teal-400/40" />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Islamic Greeting */}
          <div className="mb-6">
            <p className="text-3xl text-amber-600 font-bold mb-2">
              بَرَكَاتُ اللَّهِ عَلَيْكُمْ
            </p>
            <p className="text-emerald-700 text-sm italic font-medium">
              "Semoga keberkahan Allah menyertai kalian"
            </p>
          </div>

          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm text-emerald-700 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-emerald-200 shadow-lg">
            <GraduationCap className="w-5 h-5" />
            <span className="font-semibold">Program Unggulan Pesantren</span>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-amber-500 fill-current" />
              <Sparkles className="w-4 h-4 text-emerald-500" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
            Program 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-emerald-600 to-teal-600 ml-3">
              Pendidikan Islam
            </span>
          </h2>
          
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-emerald-500 rounded-full" />
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 text-amber-500 fill-current" />
              <Landmark className="w-6 h-6 text-emerald-600" />
              <Star className="w-6 h-6 text-amber-500 fill-current" />
            </div>
            <div className="w-24 h-1 bg-gradient-to-l from-transparent via-amber-500 to-emerald-500 rounded-full" />
          </div>

          <p className="text-slate-600 text-lg max-w-4xl mx-auto leading-relaxed mb-6">
            Pilihan program pendidikan Islam yang dirancang khusus untuk memenuhi kebutuhan santri dalam mengembangkan 
            potensi akademik, spiritual, dan karakter Islami yang unggul dengan manhaj yang lurus.
          </p>

          {/* Islamic Quote */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto border border-emerald-200 shadow-lg">
            <p className="text-emerald-700 italic text-lg font-medium mb-2">
              "مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ طَرِيقًا إِلَى الْجَنَّةِ"
            </p>
            <p className="text-amber-700 text-sm font-medium">
              "Barangsiapa menempuh jalan untuk mencari ilmu, Allah mudahkan baginya jalan menuju surga" - HR. Muslim
            </p>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div 
                key={index} 
                className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-3 transition-all duration-500 border border-slate-200 overflow-hidden hover:border-emerald-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
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
                    <div className="text-center mb-4">
                      <p className="text-amber-700 text-sm font-bold mb-1">
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
                          <Icon className="h-7 w-7 text-white" />
                        </div>
                        {/* Sparkle Effect */}
                        <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Sparkles className="w-5 h-5 text-amber-500" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-emerald-600 transition-all duration-300">
                        {program.title}
                      </h3>
                    </div>
                    {program.highlight && (
                      <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full text-white bg-gradient-to-r ${program.color} shadow-lg`}>
                        ✦ {program.highlight}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed mb-6 group-hover:text-slate-700 transition-colors duration-300 text-sm">
                    {program.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="grid grid-cols-2 gap-2">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${program.color}`} />
                          <span className="text-emerald-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Program Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${program.color} bg-opacity-10 backdrop-blur-sm`}>
                        <MapPin className="h-4 w-4 text-emerald-600" />
                      </div>
                      <span className="text-slate-700 font-medium">{program.level}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${program.color} bg-opacity-10 backdrop-blur-sm`}>
                        <Clock className="h-4 w-4 text-emerald-600" />
                      </div>
                      <span className="text-slate-700 font-medium">{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${program.color} bg-opacity-10 backdrop-blur-sm`}>
                        <Users className="h-4 w-4 text-emerald-600" />
                      </div>
                      <span className="text-slate-700 font-medium">{program.students}</span>
                    </div>
                  </div>

                  {/* Decorative Element */}
                  <div className="flex justify-center mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                      <div className="w-8 h-0.5 bg-gradient-to-r from-amber-500 to-emerald-500"></div>
                      <Star className="w-4 h-4 text-amber-500 fill-current" />
                      <div className="w-8 h-0.5 bg-gradient-to-l from-amber-500 to-emerald-500"></div>
                      <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-slate-200">
                    <button className={`w-full py-3 px-4 rounded-xl bg-gradient-to-r ${program.color} text-white font-semibold text-sm hover:shadow-lg hover:shadow-emerald-500/20 transform hover:scale-105 transition-all duration-300 opacity-90 hover:opacity-100 flex items-center justify-center gap-2`}>
                      <span>Pelajari Program</span>
                      <Sparkles className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Decorative Corner Elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-slate-100/50 to-slate-200/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-12" />
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-slate-200/30 to-slate-100/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-45" />
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          {/* Islamic Quote */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto mb-8 border border-emerald-200 shadow-lg">
            <p className="text-emerald-700 italic font-medium mb-2">
              "وَمَنْ أَرَادَ الْآخِرَةَ وَسَعَىٰ لَهَا سَعْيَهَا وَهُوَ مُؤْمِنٌ"
            </p>
            <p className="text-amber-700 text-sm font-medium">
              "Dan barangsiapa menghendaki akhirat dan berusaha ke arah itu dengan sungguh-sungguh sedang dia beriman" - QS. Al-Isra: 19
            </p>
          </div>

          {/* Bottom CTA */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-slate-200 hover:border-emerald-300 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full blur-md opacity-30" />
                <div className="relative p-3 bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full shadow-lg">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-left">
                <h4 className="font-bold text-slate-800 text-lg flex items-center gap-2">
                  Pendaftaran Santri Baru Dibuka!
                  <Sparkles className="w-5 h-5 text-amber-500" />
                </h4>
                <p className="text-emerald-700 font-medium">Tahun Ajaran 1446 H / 2025-2026 M</p>
                <p className="text-slate-600 text-sm">Program Lengkap & Beasiswa Tersedia</p>
              </div>
            </div>
            <button className="bg-gradient-to-r from-amber-500 via-emerald-500 to-teal-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-lg hover:shadow-amber-500/20 transform hover:scale-105 transition-all duration-300 flex items-center gap-3 group">
              <span>Daftar Sekarang</span>
              <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-300">
                <Star className="w-5 h-5 fill-current" />
                <Sparkles className="w-5 h-5" />
              </div>
            </button>
          </div>

          {/* Bottom Decorative Border */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-6">
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-500 to-emerald-500 rounded-full" />
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-amber-500 rounded-full animate-pulse" />
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