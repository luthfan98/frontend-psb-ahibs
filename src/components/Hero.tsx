'use client';

import Link from 'next/link';
import { ArrowRight, Play, Star, BookOpen, Calendar, MapPin, Sparkles, Heart, Building2, Zap } from 'lucide-react';

export default function Hero() {
  const highlights = [
    { icon: Building2, text: "Program Bahasa Multilingual", color: "text-emerald-600" },
    { icon: BookOpen, text: "Program Tahfizh Intensif", color: "text-teal-600" },
    { icon: Zap, text: "Generasi Pertama", color: "text-amber-600" },
  ];

  const features = [
    " ✅ Kurikulum Modern & Islami",
    " ✅ Fasilitas Baru & Lengkap", 
    " ✅ Penerapan Nilai-Nilai Islam",
    " ✅ Digitalisasi Pesantren"
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0d4f3c 0%, #1a5f4a 20%, #0f6b5a 40%, #1a5f4a 60%, #0d4f3c 100%)'
      }}
    >
      {/* Islamic Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 800 800" className="w-full h-full">
          <defs>
            <pattern id="hero-islamic-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <g fill="white">
                <circle cx="40" cy="40" r="2"/>
                <path d="M40 20 L55 30 L40 40 L25 30 Z"/>
                <path d="M20 40 L30 55 L40 40 L30 25 Z"/>
                <path d="M40 60 L55 50 L40 40 L25 50 Z"/>
                <path d="M60 40 L50 25 L40 40 L50 55 Z"/>
                <circle cx="40" cy="40" r="15" fill="none" stroke="white" strokeWidth="0.5"/>
                <circle cx="40" cy="40" r="25" fill="none" stroke="white" strokeWidth="0.3"/>
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-islamic-pattern)"/>
        </svg>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Gradient Orbs with Islamic Colors */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-emerald-400/10 to-amber-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-teal-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-amber-400/5 to-teal-400/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Floating Islamic Icons */}
        <div className="absolute top-32 right-1/4 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4s' }}>
          <BookOpen className="w-10 h-10 text-emerald-300/40" />
        </div>
        <div className="absolute bottom-1/3 left-1/4 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '5s' }}>
          <Star className="w-8 h-8 text-amber-300/40 fill-current" />
        </div>
        <div className="absolute top-1/2 right-1/3 animate-bounce" style={{ animationDelay: '2.5s', animationDuration: '4.5s' }}>
          <Building2 className="w-9 h-9 text-teal-300/40" />
        </div>
        <div className="absolute top-1/4 left-1/3 animate-bounce" style={{ animationDelay: '3s', animationDuration: '6s' }}>
          <Heart className="w-7 h-7 text-emerald-300/30 fill-current" />
        </div>
      </div>

      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              {/* Islamic Greeting */}
              <div className="text-center lg:text-left">
                <p className="text-2xl md:text-3xl text-amber-200 font-bold mb-2 arabic-font">
                  بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ
                </p>
                <p className="text-sm text-emerald-200 italic">
                  &quot;Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang&quot;
                </p>
              </div>

              {/* Badge with Islamic Touch - Updated for new pesantren */}
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm text-emerald-100 px-6 py-3 rounded-full text-sm font-medium border border-emerald-400/30 shadow-lg">
                <Calendar className="w-5 h-5" />
                <span className="font-semibold">Pesantren Baru - Penerimaan Perdana 2026/2027</span>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                  <Sparkles className="w-4 h-4 text-amber-400" />
                </div>
              </div>

              {/* Main Heading with Islamic Typography - Updated */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-white">Jadilah Bagian</span>
                  <span className="block bg-gradient-to-r from-amber-300 via-emerald-300 to-teal-300 bg-clip-text text-transparent">
                    Santri SHOLIH
                  </span>
                  <span className="text-emerald-100 text-4xl leading-tight">(Smart, Hardworking, Optimistic, Leadership, Inspire, Humble)</span>
                </h1>
                
                {/* Islamic Decorative Line */}
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <div className="w-20 h-1 bg-gradient-to-r from-amber-400 via-emerald-400 to-teal-400 rounded-full" />
                  <div className="flex items-center gap-1">
                    <Star className="w-6 h-6 text-amber-300 fill-current" />
                    <div className="w-3 h-3 bg-emerald-400 rounded-full" />
                    <Star className="w-6 h-6 text-amber-300 fill-current" />
                  </div>
                  <div className="w-20 h-1 bg-gradient-to-l from-amber-400 via-emerald-400 to-teal-400 rounded-full" />
                </div>
              </div>

              {/* Description with Islamic Values - Updated */}
              <div className="space-y-4">
                <p className="text-lg md:text-xl text-emerald-100 leading-relaxed max-w-2xl">
                  Menjadi perintis dalam membangun tradisi keislaman yang unggul. Bergabunglah sebagai 
                  <span className="font-semibold text-amber-200"> santri generasi pertama</span> yang akan 
                  menjadi fondasi dan teladan bagi generasi selanjutnya.
                </p>
              </div>

              {/* Features with Islamic Style - Updated */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 text-emerald-100 group hover:text-white transition-colors duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-amber-400 group-hover:scale-110 transition-transform duration-200 text-lg">
                      ✦
                    </span>
                    <span className="font-medium">{feature.slice(3)}</span>
                  </div>
                ))}
              </div>

              {/* Highlights with Islamic Design - Updated */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                {highlights.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div 
                      key={index}
                      className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20 hover:border-emerald-300/50"
                    >
                      <IconComponent className={`w-5 h-5 text-amber-300`} />
                      <span className="text-sm font-medium text-emerald-100">{item.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons with Islamic Style - Updated */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-6">
                <Link 
                  href="https://psb.ahibs.id/" 
                  className="group relative overflow-hidden bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-600 hover:via-amber-500 hover:to-amber-600 text-emerald-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 transform hover:-translate-y-2 hover:scale-105 min-w-[260px] cursor-pointer"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <Zap className="w-5 h-5" />
                    Jadi Generasi Pertama
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </Link>

                <button className="group flex items-center gap-3 text-emerald-200 hover:text-white font-semibold py-4 px-6 rounded-full border-2 border-emerald-300/30 hover:border-emerald-300 hover:bg-emerald-600/20 backdrop-blur-sm transition-all duration-300">
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" />
                  Tonton Profil Pesantren
                </button>
              </div>

              {/* Location Info with Islamic Style */}
              <div className="flex items-center justify-center lg:justify-start gap-3 text-emerald-200 pt-4">
  <a
    href="https://www.google.com/maps/place/Jl.+Tempel-Turi,+Ngentak,+Bangunkerto,+Turi,+Sleman,+Yogyakarta"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 
               cursor-pointer transition hover:bg-white/20"
  >
    <MapPin className="w-4 h-4 text-emerald-300" />
    <span className="text-sm font-medium">Jl. Tempel-Turi, Ngentak, Bangunkerto, Turi, Sleman Yogyakarta</span>
  </a>
</div>


            </div>

            {/* Right Content - Enhanced Hero Image with Background Image */}
            <div className="relative">
              <div className="relative">
                {/* Main Image Container with Background Image */}
                <div className="relative bg-gradient-to-br from-white/10 to-emerald-500/10 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500 hover:shadow-emerald-500/20 border border-white/20">
                  
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src="/assets/img/card_home2.png"
                      alt="Pesantren Islamic Architecture"
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay gradient for better text readability */}
                    <div className="absolute inset-0 from-emerald-900/10 via-emerald-800/10 to-teal-900/10"></div>
                  </div>

                  
                  
                  {/* Content with Islamic Elements - Updated with better contrast */}
                  <div className="aspect-[4/5] flex flex-col items-center justify-end relative p-8 z-10">
                    {/* Overlay hanya bagian bawah */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/0 to-transparent rounded-lg"></div>

                    {/* Konten */}
                    <div className="relative z-10 text-center">
                      <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                        Generasi Perintis
                      </h3>
                      <p className="text-emerald-100 font-medium max-w-xs mx-auto drop-shadow">
                        Menjadi Pionir Peradaban Islam yang Mulia dan Modern
                      </p>
                    </div>

                    {/* Bottom Decoration */}
                    <div className="relative z-10 mt-6 flex items-center gap-2">
                      <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse drop-shadow" />
                      <div className="w-8 h-0.5 bg-emerald-300 drop-shadow"></div>
                      <Star className="w-5 h-5 text-amber-400 fill-current drop-shadow" />
                      <div className="w-8 h-0.5 bg-emerald-300 drop-shadow"></div>
                      <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse drop-shadow" />
                    </div>
                  </div>



                  {/* Enhanced Floating Achievement Cards - Updated for new pesantren */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-amber-200/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-800">Pioneer</div>
                        <div className="text-xs text-slate-600">Angkatan 1</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-emerald-200/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-800">Tahfizh</div>
                        <div className="text-xs text-slate-600">Intensif</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-1/2 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-xl border border-teal-200/50">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-teal-600" />
                      <div>
                        <div className="text-xs font-bold text-slate-800">Fasilitas</div>
                        <div className="text-xs text-slate-600">Modern</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Decorative Elements */}
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-emerald-400/20 rounded-full blur-2xl animate-pulse" />
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-teal-400/20 to-amber-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 -left-4 w-24 h-24 bg-gradient-to-br from-emerald-400/15 to-teal-400/15 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Border */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-400 via-emerald-400 to-teal-400"></div>
    </section>
  );
}