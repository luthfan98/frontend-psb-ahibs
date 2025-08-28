import { BookOpen, Target } from 'lucide-react';

export default function VisiMisiPondok() {
  return (
    <section
      id="visi-misi"
      className="py-20 relative overflow-hidden bg-gradient-to-br from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">
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
                    Menyelenggarakan Pendidikan Pesantren Integral yang Memadukan Kurikulum Pendidikan
                    Pesantren dan Kurikulum Pendidikan Nasional
                  </p>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-emerald-700 font-bold text-sm">2</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    Menanamkan Nilai-nilai Ajaran Islam Berdasarkan Al Qur&#39;an dan As-Sunnah kepada seluruh
                    civitas akademika
                  </p>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-emerald-700 font-bold text-sm">3</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    Mewujudkan Pendidikan yang Menghasilkan Kader-kader Ummat yang Siap Melaksanakan Dakwah Amar
                    Ma&#39;ruf Nahi Munkar
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
      </div>
    </section>
  );
}
