import Link from "next/link";
import { ArrowRight, Star, Users, Award, BookOpen } from "lucide-react";

export default function Cta() {
  const stats = [
    { icon: Users, value: "500+", label: "Santri Aktif" },
    { icon: Award, value: "15+", label: "Tahun Pengalaman" },
    { icon: BookOpen, value: "10+", label: "Program Unggulan" },
    { icon: Star, value: "4.9", label: "Rating Orang Tua" },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-400 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-teal-400 rounded-full blur-lg animate-pulse delay-1000" />
        <div className="absolute top-40 right-20 w-12 h-12 bg-green-400 rounded-full blur-lg animate-pulse delay-500" />
      </div>

      {/* Geometric Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0h2v20H9V0zm25.426.402l.571 1.93-19.251 5.693-.57-1.93L34.426.402zM53.853 4.92l1.115 1.664-16.673 11.15-1.115-1.664L53.853 4.92zm15.17 8.308l1.414 1.414-14.142 14.142-1.414-1.414L69.024 13.23zM74.07 25.284l1.664 1.115-11.15 16.673-1.664-1.115L74.07 25.284zm8.308 15.17l1.93.571-5.693 19.251-1.93-.57L82.378 40.452zM86 60v2H66v-2h20zm-.402 25.426l-1.93.571-5.693-19.251 1.93-.57 5.693 19.25zm-4.92 18.427l-1.664 1.115-11.15-16.673 1.664-1.115L80.678 103.853zm-8.308 15.17l-1.414 1.414-14.142-14.142 1.414-1.414L71.772 118.024z' fill='%23ffffff' fill-opacity='0.03'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Heading */}
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Siap Menjadi Bagian dari
                <span className="block bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent animate-pulse">
                  Generasi Qur&#39;ani?
                </span>
              </h2>

              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-emerald-400" />
                <Star className="w-6 h-6 text-yellow-400 fill-current" />
                <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-emerald-400" />
              </div>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              Jangan lewatkan kesempatan emas untuk mendaftarkan putra-putri Anda di pesantren terbaik. 
              <span className="font-semibold text-white"> Kuota terbatas tersisa!</span>
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={stat.label} 
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <IconComponent className="w-6 h-6 text-emerald-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-emerald-200 font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              {/* Primary CTA */}
              <Link 
                href="https://psb.ahibs.id/" 
                className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-400 hover:via-green-400 hover:to-teal-400 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25 transform hover:-translate-y-2 hover:scale-105 min-w-[280px] cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Daftar Sekarang Juga
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                {/* Pulse Ring */}
                <div className="absolute inset-0 rounded-full bg-emerald-400 opacity-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500" />
              </Link>

              {/* Secondary CTA */}
              <Link 
                href="/assets/doc/brosur.jpg" 
                className="group flex items-center gap-3 text-emerald-300 hover:text-white font-semibold py-4 px-6 rounded-full border-2 border-emerald-400/50 hover:border-emerald-400 transition-all duration-300 hover:bg-emerald-400/10 min-w-[200px] justify-center cursor-pointer"
              >
                Download Brosur
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Urgency Message */}
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/30 rounded-full px-4 py-2 text-red-200">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium">⚡ Pendaftaran ditutup dalam 30 hari!</span>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-emerald-800/50">
              <p className="text-emerald-200 text-sm mb-4">Dipercaya oleh ribuan keluarga di Indonesia</p>
              <div className="flex items-center justify-center gap-8 opacity-60">
                <div className="text-xs text-emerald-300">✓ Terakreditasi A</div>
                <div className="text-xs text-emerald-300">✓ ISO 21001:2018</div>
                <div className="text-xs text-emerald-300">✓ Sertifikat Halal</div>
                <div className="text-xs text-emerald-300">✓ Standar Nasional</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}