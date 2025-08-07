import { Quote, Star, Heart, GraduationCap, Users, Award, Calendar, Sparkles } from 'lucide-react';

export default function Testimoni() {
  const testimonials = [
    {
      quote: "Alhamdulillah, anak saya menjadi lebih mandiri dan agamis setelah di pesantren ini. Pengajarnya sangat sabar dan perhatian dalam membimbing setiap santri.",
      name: "Ahmad Subarjo",
      role: "Orang Tua Santri",
      location: "Sleman, Yogyakarta",
      rating: 5,
      year: "2024",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      category: "parent",
      color: "from-blue-500 to-cyan-500"
    },
    {
      quote: "Lingkungan yang sangat mendukung untuk menghafal Al-Qur'an. Saya berhasil menyelesaikan hafalan 30 juz di sini. Terima kasih para ustadz dan ustadzah.",
      name: "Fatimah Az-Zahra",
      role: "Alumni Program Tahfidz",
      location: "Brebes, Yogyakarta",
      rating: 5,
      year: "2022",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      category: "alumni",
      color: "from-emerald-500 to-green-500"
    },
    {
      quote: "Selain ilmu agama, kami juga dibekali ilmu umum yang mumpuni. Saya merasa siap bersaing di jenjang pendidikan selanjutnya dan diterima di PTN favorit.",
      name: "Muhammad Rizki",
      role: "Alumni MA",
      location: "Pemalang, Yogyakarta",
      rating: 5,
      year: "2021",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026706d",
      category: "alumni",
      color: "from-purple-500 to-violet-500"
    },
    {
      quote: "Program pembinaan karakter di sini luar biasa. Anak saya tidak hanya pintar secara akademik, tapi juga memiliki akhlak yang mulia dan sopan santun yang baik.",
      name: "Siti Khadijah",
      role: "Orang Tua Santriwati",
      location: "Pekalongan, Yogyakarta",
      rating: 5,
      year: "2023",
      avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
      category: "parent",
      color: "from-pink-500 to-rose-500"
    },
    {
      quote: "Fasilitas asrama yang nyaman dan kegiatan yang terstruktur membuat saya betah tinggal di pesantren. Seperti keluarga besar yang saling mendukung.",
      name: "Abdullah Al-Faqih",
      role: "Santri Aktif MTs",
      location: "Batang, Yogyakarta",
      rating: 5,
      year: "2024",
      avatar: "https://i.pravatar.cc/150?u=a04258b2462d826712d",
      category: "student",
      color: "from-amber-500 to-orange-500"
    },
    {
      quote: "Metode pembelajaran kitab kuning yang diterapkan sangat efektif. Saya sekarang bisa membaca dan memahami kitab-kitab klasik dengan baik.",
      name: "Aisyah Maryam",
      role: "Alumni MA",
      location: "Kendal, Yogyakarta",
      rating: 5,
      year: "2020",
      avatar: "https://i.pravatar.cc/150?u=a04258c2462d826712d",
      category: "alumni",
      color: "from-teal-500 to-cyan-500"
    },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'parent':
        return <Heart className="w-4 h-4" />;
      case 'alumni':
        return <GraduationCap className="w-4 h-4" />;
      case 'student':
        return <Users className="w-4 h-4" />;
      default:
        return <Star className="w-4 h-4" />;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'parent':
        return 'Orang Tua';
      case 'alumni':
        return 'Alumni';
      case 'student':
        return 'Santri Aktif';
      default:
        return 'Testimoni';
    }
  };

  return (
    <section 
      id="testimoni" 
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 25%, #cbd5e1 50%, #e2e8f0 75%, #f1f5f9 100%)'
      }}
    >
      {/* Islamic Pattern Background */}
      <div className="absolute inset-0 opacity-8">
        <svg width="100%" height="100%" viewBox="0 0 800 800" className="w-full h-full">
          <defs>
            <pattern id="testimoni-islamic-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <g fill="#0f766e" opacity="0.1">
                <circle cx="50" cy="50" r="3"/>
                <path d="M50 25 L70 40 L50 55 L30 40 Z" fill="none" stroke="#0f766e" strokeWidth="0.8"/>
                <path d="M25 50 L40 70 L55 50 L40 30 Z" fill="none" stroke="#0f766e" strokeWidth="0.8"/>
                <circle cx="50" cy="50" r="20" fill="none" stroke="#0f766e" strokeWidth="0.5"/>
                <circle cx="50" cy="50" r="35" fill="none" stroke="#0f766e" strokeWidth="0.3"/>
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#testimoni-islamic-pattern)"/>
        </svg>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-bl from-blue-200/30 to-cyan-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-emerald-200/30 to-green-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Floating Quote Icons */}
        <div className="absolute top-1/4 left-1/6 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>
          <Quote className="w-8 h-8 text-blue-300/40" />
        </div>
        <div className="absolute bottom-1/3 right-1/4 animate-bounce" style={{ animationDelay: '2.5s', animationDuration: '5s' }}>
          <Star className="w-6 h-6 text-amber-400/40 fill-current" />
        </div>
        <div className="absolute top-1/2 right-1/6 animate-bounce" style={{ animationDelay: '1.8s', animationDuration: '4.5s' }}>
          <Sparkles className="w-7 h-7 text-emerald-400/40" />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Islamic Greeting */}
          <div className="mb-6">
            <p className="text-2xl text-amber-600 font-bold mb-2">
              جَزَاكُمُ اللَّهُ خَيْرًا
            </p>
            <p className="text-emerald-700 text-sm italic font-medium">
              "Semoga Allah membalas kalian dengan kebaikan"
            </p>
          </div>

          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-slate-700 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-slate-200 shadow-lg">
            <Quote className="w-4 h-4" />
            <span className="font-semibold">Testimoni Terpercaya</span>
            <Sparkles className="w-4 h-4 text-emerald-500" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
            Apa Kata 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 ml-3">
              Mereka?
            </span>
          </h2>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-emerald-500 rounded-full" />
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 text-amber-500 fill-current" />
              <Quote className="w-6 h-6 text-blue-600" />
              <Star className="w-6 h-6 text-amber-500 fill-current" />
            </div>
            <div className="w-24 h-1 bg-gradient-to-l from-transparent via-blue-500 to-emerald-500 rounded-full" />
          </div>

          <p className="text-slate-600 text-lg max-w-4xl mx-auto leading-relaxed mb-6">
            Testimoni dari para orang tua, alumni, dan santri aktif yang telah merasakan langsung 
            kualitas pendidikan dan pembinaan karakter di pesantren kami.
          </p>

          {/* Islamic Quote */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto border border-slate-200 shadow-lg">
            <p className="text-emerald-700 italic text-lg font-medium mb-2">
              "وَمَن يَشْكُرْ فَإِنَّمَا يَشْكُرُ لِنَفْسِهِ"
            </p>
            <p className="text-amber-700 text-sm font-medium">
              "Dan barangsiapa bersyukur, maka sesungguhnya dia bersyukur untuk dirinya sendiri" - QS. Luqman: 12
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-slate-200 hover:bg-white hover:border-slate-300 transition-all duration-500 hover:-translate-y-3 hover:shadow-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Islamic Pattern Background for Card */}
              <div className="absolute inset-0 opacity-3">
                <svg className="w-full h-full" viewBox="0 0 200 300">
                  <defs>
                    <pattern id={`card-pattern-testimoni-${index}`} x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                      <circle cx="30" cy="30" r="20" fill="none" stroke="#0f766e" strokeWidth="0.5"/>
                      <circle cx="30" cy="30" r="12" fill="none" stroke="#0f766e" strokeWidth="0.5"/>
                      <path d="M30 10 L40 20 L30 30 L20 20 Z" fill="none" stroke="#0f766e" strokeWidth="0.5"/>
                      <circle cx="30" cy="30" r="4" fill="#0f766e"/>
                    </pattern>
                  </defs>
                  <rect width="200" height="300" fill={`url(#card-pattern-testimoni-${index})`}/>
                </svg>
              </div>

              {/* Background Gradient */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-xs font-medium bg-gradient-to-r ${testimonial.color} text-white shadow-lg`}>
                    {getCategoryIcon(testimonial.category)}
                    {getCategoryLabel(testimonial.category)}
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-400/40" />
                  <p className="text-slate-700 leading-relaxed italic pl-6 group-hover:text-slate-800 transition-colors duration-300">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${testimonial.color} blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="relative w-14 h-14 rounded-full border-3 border-white shadow-lg group-hover:scale-110 transition-transform duration-300" 
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-emerald-600 transition-all duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-300 font-medium">
                      {testimonial.role}
                    </p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs text-slate-500 group-hover:text-slate-600 transition-colors duration-300">
                        {testimonial.location}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-slate-500 group-hover:text-slate-600 transition-colors duration-300">
                        <Calendar className="w-3 h-3" />
                        {testimonial.year}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-slate-100/70 to-slate-200/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-12" />
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-slate-200/50 to-slate-100/70 rounded-full opacity-0 group-hover:opacity-70 transition-all duration-500 transform group-hover:rotate-45" />
                
                {/* Sparkle Effect */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: Users, label: "Total Testimoni", value: "500+", color: "from-blue-500 to-cyan-500" },
            { icon: Star, label: "Rating Rata-rata", value: "4.9/5", color: "from-amber-500 to-yellow-500" },
            { icon: GraduationCap, label: "Alumni Puas", value: "98%", color: "from-emerald-500 to-green-500" },
            { icon: Award, label: "Kepercayaan Orang Tua", value: "100%", color: "from-purple-500 to-violet-500" }
          ].map((stat, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 text-center group hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-slate-800 mb-1">{stat.value}</h4>
              <p className="text-sm text-slate-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          {/* Islamic Quote */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto mb-8 border border-slate-200 shadow-lg">
            <p className="text-emerald-700 italic font-medium mb-2">
              "إِنَّ اللَّهَ يُحِبُّ إِذَا عَمِلَ أَحَدُكُمْ عَمَلًا أَنْ يُتْقِنَهُ"
            </p>
            <p className="text-amber-700 text-sm font-medium">
              "Sesungguhnya Allah menyukai apabila salah seorang dari kalian bekerja, dia mengerjakannya dengan itqan (sempurna)" - HR. Thabrani
            </p>
          </div>

          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-left">
              <h4 className="text-xl font-bold text-slate-800 mb-2 flex items-center gap-2">
                Ingin Berbagi Pengalaman?
                <Sparkles className="w-5 h-5 text-emerald-500" />
              </h4>
              <p className="text-slate-600 font-medium">Ceritakan pengalaman Anda bersama kami dan bantu calon santri lainnya</p>
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap flex items-center gap-2 group">
              <span>Kirim Testimoni</span>
              <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-300">
                <Star className="w-4 h-4 fill-current" />
                <Sparkles className="w-4 h-4" />
              </div>
            </button>
          </div>

          {/* Bottom Decorative Border */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-6">
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-emerald-500 rounded-full" />
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse" />
                <Quote className="w-8 h-8 text-emerald-600" />
                <div className="w-4 h-4 bg-emerald-500 rounded-full animate-pulse" />
              </div>
              <div className="w-32 h-1 bg-gradient-to-l from-transparent via-blue-500 to-emerald-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}