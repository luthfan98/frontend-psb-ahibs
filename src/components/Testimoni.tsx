import { Quote, Star, Sparkles, Award, Users, BookOpen, Target } from 'lucide-react';
import Image from 'next/image';

export default function DukunganTokoh() {
  const dukungan = [
    {
      quote: "Semoga Al Hadharah Islamic Boarding School menjadi salahsatu pilar dakwah, pilar Pendidikan di Indonesia. Saya mengajak Muslimin dan muslimat di manapun Anda berada, Yogyakarta memang kota pensiunan, tapi di Sleman juga lahir generasi-generasi Qur’an yang hebat. Saya ikut merekomendasikan pesantren ini. Semoga menjadi tujuan belajar anak-anak kita semua. ",
      name: "KH. Bachtiar Nasir, Lc., M.M. ",
      role: "",
      organization: "Pimpinan AQL, Ketua JATTI",
      location: "Jakarta",
      avatar: "/assets/img/testimoni/Bachtiarnasir.jpg",
      color: "from-emerald-600 to-green-600",
      pattern: "geometric"
    },
    {
      quote: "Pembukaan pesantren Al Hadharah di Yogyakarta adalah langkah awal membangun generasi yang sadar akan ilmu syar'i dengan semangat yang murni, yang menggabungkan antara tradisi ke-Islaman dan modernitas. Semoga langkah ini diberkahi, dan saya mengajak para santri untuk berusaha dan bersungguh-sungguh dalam menuntut ilmu, karena itu adalah kunci kekuatan dan kebangkitan, serta jalan untuk melayani agama, tanah air, dan masyarakat. Saya memohon kepada Allah agar pesantren ini menjadi mercusuar ilmu, serta semoga Allah memberkahi para pengajarnya dan siswa-siswi, serta memberikan manfaat bagi umat seluruhnya.",
      name: "Syekh Naser Ali Edrees",
      role: "",
      organization: "Dosen Universitas Benghazi, Libya",
      location: "Libya",
      avatar: "/assets/img/testimoni/syeikh_naseer.jpg",
      color: "from-emerald-600 to-green-600",
      pattern: "geometric"
    }   
  ];

  return (
    <section 
      id="dukungan-tokoh" 
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%, #f8fafc 100%)'
      }}
    >
      {/* Islamic Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 800 800" className="w-full h-full">
          <defs>
            <pattern id="dukungan-islamic-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <g fill="#0f766e" opacity="0.6">
                <circle cx="60" cy="60" r="2"/>
                <path d="M60 30 L80 50 L60 70 L40 50 Z" fill="none" stroke="#0f766e" strokeWidth="1"/>
                <path d="M30 60 L50 80 L70 60 L50 40 Z" fill="none" stroke="#0f766e" strokeWidth="1"/>
                <circle cx="60" cy="60" r="25" fill="none" stroke="#0f766e" strokeWidth="0.8"/>
                <circle cx="60" cy="60" r="40" fill="none" stroke="#0f766e" strokeWidth="0.5"/>
                <path d="M60 20 L70 30 L60 40 L50 30 Z" fill="none" stroke="#0f766e" strokeWidth="0.6"/>
                <path d="M60 80 L70 90 L60 100 L50 90 Z" fill="none" stroke="#0f766e" strokeWidth="0.6"/>
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dukungan-islamic-pattern)"/>
        </svg>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-bl from-emerald-200/20 to-green-200/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-blue-200/20 to-cyan-200/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Floating Icons */}
        <div className="absolute top-1/4 left-1/6 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>
          <Quote className="w-8 h-8 text-emerald-300/50" />
        </div>
        <div className="absolute bottom-1/3 right-1/4 animate-bounce" style={{ animationDelay: '2.5s', animationDuration: '5s' }}>
          <BookOpen className="w-7 h-7 text-blue-400/50" />
        </div>
        <div className="absolute top-1/2 right-1/6 animate-bounce" style={{ animationDelay: '1.8s', animationDuration: '4.5s' }}>
          <Sparkles className="w-6 h-6 text-amber-400/50" />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-slate-700 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-slate-200 shadow-lg">
            <Award className="w-4 h-4" />
            <span className="font-semibold">Dukungan Ulama & Tokoh</span>
            <Sparkles className="w-4 h-4 text-emerald-500" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
            Dukungan 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 ml-3">
              Tokoh Besar
            </span>
          </h2>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-blue-500 rounded-full" />
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 text-amber-500 fill-current" />
              <Quote className="w-6 h-6 text-emerald-600" />
              <Star className="w-6 h-6 text-amber-500 fill-current" />
            </div>
            <div className="w-24 h-1 bg-gradient-to-l from-transparent via-emerald-500 to-blue-500 rounded-full" />
          </div>

          <p className="text-slate-600 text-lg max-w-4xl mx-auto leading-relaxed mb-6">
            Para ulama dan tokoh besar memberikan dukungan penuh terhadap berdirinya pondok pesantren ini 
            sebagai upaya mencerdaskan ummah dan membangun generasi Qur&#39;ani.
          </p>
        </div>

        {/* Support Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {dukungan.map((item, index) => (
            <div 
              key={index} 
              className="group relative bg-white/95 backdrop-blur-sm p-8 rounded-3xl border border-slate-200 hover:bg-white hover:border-slate-300 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-3">
                <svg className="w-full h-full" viewBox="0 0 300 400">
                  <defs>
                    <pattern id={`support-pattern-${index}`} x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                      {item.pattern === 'geometric' && (
                        <>
                          <circle cx="40" cy="40" r="25" fill="none" stroke="#0f766e" strokeWidth="0.8"/>
                          <path d="M40 15 L55 30 L40 45 L25 30 Z" fill="none" stroke="#0f766e" strokeWidth="0.6"/>
                          <circle cx="40" cy="40" r="6" fill="#0f766e" opacity="0.3"/>
                        </>
                      )}
                      {item.pattern === 'floral' && (
                        <>
                          <path d="M40 20 C50 30, 50 50, 40 60 C30 50, 30 30, 40 20" fill="none" stroke="#0f766e" strokeWidth="0.7"/>
                          <path d="M20 40 C30 30, 50 30, 60 40 C50 50, 30 50, 20 40" fill="none" stroke="#0f766e" strokeWidth="0.7"/>
                          <circle cx="40" cy="40" r="4" fill="#0f766e" opacity="0.4"/>
                        </>
                      )}
                      {item.pattern === 'arabesque' && (
                        <>
                          <path d="M40 10 Q60 30 40 50 Q20 30 40 10" fill="none" stroke="#0f766e" strokeWidth="0.8"/>
                          <path d="M10 40 Q30 20 50 40 Q30 60 10 40" fill="none" stroke="#0f766e" strokeWidth="0.8"/>
                          <circle cx="40" cy="40" r="3" fill="#0f766e" opacity="0.5"/>
                        </>
                      )}
                    </pattern>
                  </defs>
                  <rect width="300" height="400" fill={`url(#support-pattern-${index})`}/>
                </svg>
              </div>

              {/* Background Gradient */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-8 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Header with Organization */}
                <div className="mb-6">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r ${item.color} text-white shadow-lg mb-3`}>
                    <Award className="w-3 h-3" />
                    {item.organization}
                  </div>
                </div>

                {/* Quote */}
                <div className="relative mb-8">
                  <Quote className="absolute -top-3 -left-3 w-10 h-10 text-emerald-400/40" />
                  <p className="text-slate-700 leading-relaxed italic pl-8 text-base group-hover:text-slate-800 transition-colors duration-300">
                    &quot;{item.quote}&quot;
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-start gap-4">
                  <div className="relative flex-shrink-0">
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-300`} />
                    <Image 
                      src={item.avatar} 
                      alt={item.name} 
                      width={64} // 16 x 4 (Tailwind w-16 = 4rem = 64px)
                      height={64}
                      className="rounded-full border-3 border-white shadow-xl group-hover:scale-110 transition-transform duration-300" 
                    />
                    {/* Islamic decoration on avatar */}
                    <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg`}>
                      <Star className="w-3 h-3 text-white fill-current" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-slate-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-blue-600 transition-all duration-300 text-lg leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-300 font-medium mb-1">
                      {item.role}
                    </p>
                    <p className="text-xs text-slate-500 group-hover:text-slate-600 transition-colors duration-300 flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {item.location}
                    </p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-slate-100/50 to-slate-200/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-12" />
                
                {/* Sparkle Effect */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Foundation Info */}
        <div className="bg-gradient-to-br from-white/95 to-slate-50/95 backdrop-blur-sm rounded-3xl p-8 border border-slate-200 shadow-xl">
          {/* Visi Section */}
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center justify-center gap-3">
              <BookOpen className="w-7 h-7 text-emerald-600" />
              Visi Pondok Pesantren
            </h3>
            <div className="bg-emerald-50/80 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200 shadow-lg">
              <p className="text-emerald-800 font-semibold text-lg leading-relaxed">
                Membangun generasi Rabbani, berakhlak mulia dan berwawasan global
              </p>
            </div>
          </div>

          {/* Misi Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center flex items-center justify-center gap-3">
              <Target className="w-7 h-7 text-amber-600" />
              Misi Pondok Pesantren
            </h3>
            <div className="space-y-4">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-emerald-700 font-bold text-sm">1</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    Menyelenggarakan Pendidikan Pesantren Integral yang Memadukan Kurikulum Pendidikan Pesantren dan Kurikulum Pendidikan Nasional
                  </p>
                </div>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-emerald-700 font-bold text-sm">2</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    Menanamkan Nilai-nilai Ajaran Islam Berdasarkan Al Qur&#39;an dan As-Sunnah kepada seluruh civitas akademika
                  </p>
                </div>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-emerald-700 font-bold text-sm">3</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    Mewujudkan Pendidikan yang Menghasilkan Kader-kader Ummat yang Siap Melaksanakan Dakwah Amar Ma&#39;ruf Nahi Munkar
                  </p>
                </div>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-emerald-700 font-bold text-sm">4</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    Menyiapkan Calon Pemimpin beradab yang mampu menjawab tantangan dan perkembangan zaman
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Islamic Quote for Foundation */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 shadow-lg">
            <p className="text-emerald-700 italic font-medium text-center mb-2">
              &quot;خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ&quot;
            </p>
            <p className="text-amber-700 text-sm font-medium text-center">
              &quot;Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia lainnya&quot; - HR. Ahmad
            </p>
          </div>
        </div>

        {/* Bottom Decorative Border */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-6">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-blue-500 rounded-full" />
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-emerald-500 rounded-full animate-pulse" />
              <Quote className="w-8 h-8 text-blue-600" />
              <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse" />
            </div>
            <div className="w-32 h-1 bg-gradient-to-l from-transparent via-emerald-500 to-blue-500 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}