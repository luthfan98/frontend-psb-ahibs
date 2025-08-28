import { PencilLine, Wallet, FileText, Printer, CheckCircle, Smartphone, ArrowRight, Clock, Users, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function AlurPendaftaran() {
  const steps = [
    { 
      icon: PencilLine, 
      title: 'Pilih Program & Daftar', 
      description: 'Calon santri memilih program yang sesuai dan membuat akun pendaftaran online dengan mudah.',
      time: '5 Menit',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700'
    },
    { 
      icon: Smartphone, 
      title: 'Verifikasi WhatsApp', 
      description: 'Lakukan verifikasi nomor WhatsApp untuk menerima notifikasi dan update pendaftaran.',
      time: '2 Menit',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700'
    },
    { 
      icon: Wallet, 
      title: 'Pembayaran Formulir', 
      description: 'Lakukan pembayaran biaya pendaftaran melalui berbagai channel yang tersedia.',
      time: '10 Menit',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-700'
    },
    { 
      icon: FileText, 
      title: 'Isi Formulir Lengkap', 
      description: 'Lengkapi seluruh data diri dan upload berkas yang dibutuhkan secara online.',
      time: '20 Menit',
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700'
    },
    { 
      icon: Printer, 
      title: 'Cetak Kartu Ujian', 
      description: 'Setelah formulir terverifikasi, cetak kartu ujian sebagai bukti pendaftaran resmi.',
      time: '3 Menit',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-700'
    },
    { 
      icon: CheckCircle, 
      title: 'Mengikuti Ujian Seleksi', 
      description: 'Datang ke lokasi untuk mengikuti tes seleksi sesuai jadwal yang telah ditentukan.',
      time: '2 Jam',
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-700'
    },
  ];

  return (
    <section id="alur" className="py-20 bg-gradient-to-br from-slate-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.1)_1px,transparent_0)] [background-size:24px_24px]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-emerald-100 to-transparent rounded-full blur-3xl opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            Panduan Pendaftaran
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Alur 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 ml-3">
              Pendaftaran <br/>(Gel 1)
            </span>
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Ikuti 6 langkah mudah untuk menjadi bagian dari keluarga besar kami. 
            Proses pendaftaran yang simple, cepat, dan terpandu dengan baik.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Connection Lines for Desktop */}
          <div className="hidden lg:block">
            <div className="absolute top-20 left-0 w-full h-0.5">
              <div className="flex items-center justify-between h-full px-20">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div key={index} className="flex-1 relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t-2 border-dashed border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-end pr-4">
                      <ArrowRight className="w-6 h-6 text-gray-400 bg-white rounded-full p-1 border-2 border-gray-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="group relative">
                  {/* Mobile Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-gray-300 to-transparent"></div>
                  )}
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 relative overflow-hidden h-full">
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    
                    {/* Step Number */}
                    <div className="absolute top-4 right-4">
                      <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold text-white bg-gradient-to-r ${step.color}`}>
                        {index + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon Container */}
                      <div className="flex justify-center mb-6">
                        <div className={`relative p-4 rounded-2xl bg-gradient-to-r ${step.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-gray-800 mb-3 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-emerald-600 transition-all duration-300">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-slate-600 text-center leading-relaxed mb-4 group-hover:text-slate-700 transition-colors duration-300">
                        {step.description}
                      </p>

                      {/* Time Badge */}
                      <div className="flex justify-center">
                        <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${step.bgColor} ${step.textColor}`}>
                          <Clock className="w-3 h-3" />
                          {step.time}
                        </div>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Info Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="inline-flex p-3 rounded-full bg-blue-100 mb-4">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Pendaftaran Dibuka</h4>
            <p className="text-sm text-slate-600">1 September - 29 November 2025</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="inline-flex p-3 rounded-full bg-emerald-100 mb-4">
              <MapPin className="w-6 h-6 text-emerald-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Lokasi Ujian</h4>
            <p className="text-sm text-slate-600">Kampus Utama Pondok Pesantren</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="inline-flex p-3 rounded-full bg-amber-100 mb-4">
              <Users className="w-6 h-6 text-amber-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Bantuan Pendaftaran</h4>
            <p className="text-sm text-slate-600">WhatsApp: 0812-3378-5161</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Link href="https://psb.ahibs.id/">
            <button className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 w-full cursor-pointer">
              Mulai Pendaftaran Sekarang
            </button>
          </Link>
          <p className="text-sm text-slate-500 mt-3">
            Proses pendaftaran hanya membutuhkan waktu ± 40 menit
          </p>
        </div>
      </div>
    </section>
  );
}