'use client';

import { BookOpen, Landmark, Users, Award, Heart, Target, Star, Sparkles } from 'lucide-react';

interface Feature {
  icon: any;
  title: string;
  description: string;
  highlight?: string;
  arabicText?: string;
  quranRef?: string;
}

const features: Feature[] = [
  {
    icon: BookOpen,
    title: "Kurikulum Terpadu",
    description: "Mengintegrasikan kurikulum nasional dengan program diniyah dan tahfidz Al-Qur'an untuk pendidikan yang holistik dan seimbang.",
    highlight: "Diniyah & Tahfidz",
    arabicText: "وَعَلَّمَ الْإِنْسَانَ مَا لَمْ يَعْلَمْ",
    quranRef: "QS. Al-Alaq: 5"
  },
  {
    icon: Landmark,
    title: "Lingkungan Islami",
    description: "Membentuk karakter santri yang berakhlakul karimah dalam lingkungan yang kondusif dan mendukung spiritualitas.",
    highlight: "Akhlakul Karimah",
    arabicText: "إِنَّمَا بُعِثْتُ لِأُتَمِّمَ مَكَارِمَ الْأَخْلَاقِ",
    quranRef: "HR. Ahmad"
  },
  {
    icon: Users,
    title: "Pengajar Profesional",
    description: "Dibimbing oleh para asatidz dan asatidzah yang kompeten, berpengalaman, dan berdedikasi tinggi dalam mendidik.",
    highlight: "Asatidz Berpengalaman",
    arabicText: "وَقُلْ رَبِّ زِدْنِي عِلْمًا",
    quranRef: "QS. Taha: 114"
  },
  {
    icon: Award,
    title: "Prestasi Terbukti",
    description: "Track record yang konsisten dalam menghasilkan lulusan berprestasi, hafidz Al-Quran, dan berkarakter unggul.",
    highlight: "Lulusan Hafidz",
    arabicText: "وَمَنْ يُؤْتَ الْحِكْمَةَ فَقَدْ أُوتِيَ خَيْرًا كَثِيرًا",
    quranRef: "QS. Al-Baqarah: 269"
  },
  {
    icon: Heart,
    title: "Pembinaan Karakter",
    description: "Program pembinaan karakter yang komprehensif untuk mengembangkan kepribadian yang mulia dan bertakwa.",
    highlight: "Tarbiyah Ruhiyyah",
    arabicText: "وَتَزَوَّدُوا فَإِنَّ خَيْرَ الزَّادِ التَّقْوَىٰ",
    quranRef: "QS. Al-Baqarah: 197"
  },
  {
    icon: Target,
    title: "Visi Jangka Panjang",
    description: "Mempersiapkan generasi rabbani yang siap menghadapi tantangan masa depan dengan iman yang kuat dan ilmu yang bermanfaat.",
    highlight: "Generasi Rabbani",
    arabicText: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً",
    quranRef: "QS. Al-Baqarah: 201"
  }
];

export default function Keunggulan() {
  return (
    <section 
      id="keunggulan" 
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 25%, #bbf7d0 50%, #dcfce7 75%, #f0fdf4 100%)'
      }}
    >
      {/* Islamic Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 600 600" className="w-full h-full">
          <defs>
            <pattern id="keunggulan-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <g fill="currentColor" className="text-emerald-600">
                <circle cx="50" cy="50" r="3"/>
                <path d="M50 25 L65 40 L50 55 L35 40 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
                <path d="M25 50 L40 65 L55 50 L40 35 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
                <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.3"/>
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#keunggulan-pattern)"/>
        </svg>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-emerald-300/10 to-amber-300/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-teal-300/10 to-emerald-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Floating Icons */}
        <div className="absolute top-1/4 left-1/4 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>
          <Star className="w-6 h-6 text-amber-400/30 fill-current" />
        </div>
        <div className="absolute bottom-1/3 right-1/4 animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}>
          <Sparkles className="w-8 h-8 text-emerald-400/30" />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Islamic Greeting */}
          <div className="mb-6">
            <p className="text-2xl text-emerald-700 font-bold mb-2">
              بِسْمِ ٱللَّٰهِ نَبْدَأُ
            </p>
            <p className="text-sm text-emerald-600 italic">
              "Dengan nama Allah kami memulai"
            </p>
          </div>

          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/10 to-amber-500/10 backdrop-blur-sm text-emerald-700 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-emerald-200/50 shadow-lg">
            <Award className="w-5 h-5" />
            <span className="font-semibold">Keunggulan Pesantren Kami</span>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-amber-500 fill-current" />
              <Sparkles className="w-4 h-4 text-emerald-500" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight">
            Kenapa Memilih 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 ml-3 relative">
              Pesantren Kami?
            </span>
          </h2>
          
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-amber-400 rounded-full" />
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-400 fill-current" />
              <div className="w-3 h-3 bg-emerald-500 rounded-full" />
              <Star className="w-5 h-5 text-amber-400 fill-current" />
            </div>
            <div className="w-20 h-1 bg-gradient-to-l from-transparent via-emerald-400 to-amber-400 rounded-full" />
          </div>

          <p className="text-slate-700 text-lg max-w-4xl mx-auto leading-relaxed">
            Kami berkomitmen untuk memberikan pendidikan terbaik yang seimbang antara dunia dan akhirat, 
            mempersiapkan generasi rabbani yang unggul dalam ilmu dan mulia dalam akhlak.
          </p>

          {/* Islamic Quote */}
          <div className="mt-8 bg-white/60 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto border border-emerald-200/50 shadow-lg">
            <p className="text-emerald-700 italic text-lg font-medium mb-2">
              "خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ"
            </p>
            <p className="text-emerald-600 text-sm">
              "Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia lainnya" - HR. Ahmad
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-white/50 overflow-hidden hover:border-emerald-200/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <svg className="w-full h-full" viewBox="0 0 200 200">
                    <defs>
                      <pattern id={`card-pattern-${index}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <circle cx="20" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-emerald-500"/>
                        <circle cx="20" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-emerald-500"/>
                        <path d="M20 5 L30 15 L20 25 L10 15 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-emerald-500"/>
                      </pattern>
                    </defs>
                    <rect width="200" height="200" fill={`url(#card-pattern-${index})`}/>
                  </svg>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-transparent to-amber-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
                      <div className="relative bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 p-5 rounded-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
                        <Icon className="h-8 w-8 text-white" aria-hidden="true" />
                      </div>
                      {/* Sparkle Effect */}
                      <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Sparkles className="w-5 h-5 text-amber-400" />
                      </div>
                    </div>
                  </div>

                  {/* Arabic Text */}
                  {feature.arabicText && (
                    <div className="text-center mb-4">
                      <p className="text-emerald-700 text-lg font-bold mb-1">
                        {feature.arabicText}
                      </p>
                      <p className="text-emerald-600 text-xs">
                        {feature.quranRef}
                      </p>
                    </div>
                  )}

                  {/* Main Content */}
                  <div className="text-center">
                    {feature.highlight && (
                      <span className="inline-block bg-gradient-to-r from-emerald-100 to-amber-100 text-emerald-700 text-xs font-semibold px-4 py-2 rounded-full mb-4 border border-emerald-200/50">
                        ✦ {feature.highlight}
                      </span>
                    )}
                    <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-emerald-700 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300 text-sm">
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative Bottom Element */}
                  <div className="flex justify-center mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                      <div className="w-6 h-0.5 bg-gradient-to-r from-emerald-300 to-amber-300"></div>
                      <Star className="w-4 h-4 text-amber-400 fill-current" />
                      <div className="w-6 h-0.5 bg-gradient-to-l from-emerald-300 to-amber-300"></div>
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Border Highlight */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-emerald-300/30 transition-all duration-300" />
                
                {/* Corner Decoration */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-amber-200/50 to-emerald-200/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-12" />
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          {/* Islamic Quote */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto mb-8 border border-emerald-200/50 shadow-lg">
            <p className="text-emerald-700 italic font-medium mb-2">
              "وَمَا كَانَ اللَّهُ لِيُضِيعَ إِيمَانَكُمْ"
            </p>
            <p className="text-emerald-600 text-sm">
              "Dan Allah tidak akan menyia-nyiakan keimanan kalian" - QS. Al-Baqarah: 143
            </p>
          </div>

          {/* Call to Action */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/10 to-amber-500/10 backdrop-blur-sm border border-emerald-200/50 px-8 py-4 rounded-full text-emerald-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Heart className="w-5 h-5 text-emerald-600 fill-current" />
            <span className="font-medium">Bergabunglah dengan Keluarga Besar Pesantren Kami</span>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-amber-500 fill-current" />
              <Sparkles className="w-4 h-4 text-emerald-500" />
            </div>
          </div>

          {/* Bottom Decorative Border */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-4">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-amber-400 rounded-full" />
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                <Star className="w-6 h-6 text-amber-400 fill-current" />
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
              </div>
              <div className="w-24 h-1 bg-gradient-to-l from-transparent via-emerald-400 to-amber-400 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}