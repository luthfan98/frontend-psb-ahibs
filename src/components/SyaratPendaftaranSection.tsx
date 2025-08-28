"use client";

import { useState } from "react";
import { FileText, CheckCircle, Upload, User, Calendar, Phone, MessageCircle, AlertCircle, Eye } from "lucide-react";

interface SyaratPendaftaranSectionProps {
  className?: string;
}

const SyaratPendaftaranSection: React.FC<SyaratPendaftaranSectionProps> = ({ className = "" }) => {
  const [activeTab, setActiveTab] = useState<string>("persyaratan");

  const persyaratanUmum = [
    {
      kategori: "Usia",
      items: [
        "Lulus SD/MI atau kelas 6 untuk jenjang MTs",
        "Usia maksimal 15 tahun pada saat mendaftar"
      ],
      icon: Calendar,
      color: "bg-blue-50 border-blue-200"
    },
    {
      kategori: "Kesehatan",
      items: [
        "Sehat jasmani dan rohani",
        "Tidak memiliki penyakit menular",
        "Mampu mengikuti kegiatan pesantren dengan baik"
      ],
      icon: User,
      color: "bg-green-50 border-green-200"
    },
    {
      kategori: "Akademik",
      items: [
        "Memiliki motivasi tinggi untuk belajar",
        "Sanggup mengikuti aturan pesantren",
        "Siap tinggal di asrama"
      ],
      icon: FileText,
      color: "bg-purple-50 border-purple-200"
    }
  ];

  const berkasPendaftaran = [
    {
      nama: "Mengisi formulir pendaftaran",
      keterangan: "Formulir dapat diisi secara online atau diambil langsung di pesantren",
      wajib: true,
      icon: FileText
    },
    {
      nama: "Menyerahkan berkas berupa:",
      keterangan: "Dokumen-dokumen penting yang harus disiapkan",
      wajib: true,
      icon: Upload,
      subItems: [
        "Fotokopi raport kelas 5 dan 6 (3 lembar)",
        "Fotokopi Ijazah SD/MI yang sudah dilegalisir (3 lembar)", 
        "Fotokopi Kartu Keluarga (3 lembar)",
        "Foto ukuran 3 x 4 sebanyak 5 lembar"
      ]
    },
    {
      nama: "Mengikuti rangkaian tes masuk",
      keterangan: "Tes wawancara dan kemampuan dasar",
      wajib: true,
      icon: CheckCircle,
      subItems: [
        "Tes tulis (Matematika, Bahasa Indonesia, Agama)",
        "Tes lisan (Wawancara dan Mengaji)",
        "Tes kesehatan"
      ]
    },
    {
      nama: "Bersedia menaati peraturan yang berlaku di Pesantren",
      keterangan: "Komitmen untuk mengikuti tata tertib pesantren",
      wajib: true,
      icon: AlertCircle
    }
  ];

  const alurPendaftaran = [
    {
      step: 1,
      title: "Pendaftaran Online",
      desc: "Isi formulir pendaftaran di website atau datang langsung",
      icon: FileText,
      status: "active"
    },
    {
      step: 2, 
      title: "Melengkapi Berkas",
      desc: "Siapkan dan serahkan semua dokumen yang diperlukan",
      icon: Upload,
      status: "upcoming"
    },
    {
      step: 3,
      title: "Ujian Masuk",
      desc: "Ikuti tes tulis, lisan, dan wawancara sesuai jadwal",
      icon: CheckCircle,
      status: "upcoming"
    },
    {
      step: 4,
      title: "Pengumuman",
      desc: "Hasil seleksi akan diumumkan sesuai jadwal",
      icon: Eye,
      status: "upcoming"
    },
    {
      step: 5,
      title: "Registrasi",
      desc: "Daftar ulang dan pembayaran bagi yang diterima",
      icon: Calendar,
      status: "upcoming"
    }
  ];

  const jadwalPendaftaran = [
    {
      gelombang: "Gelombang 1",
      pendaftaran: "01 September - 29 November 2025",
      ujianMasuk: "30 November 2025", 
      pengumuman: "05 Desember 2025",
      registrasi: "06 - 13 Desember 2025",
      status: "active"
    },
    {
      gelombang: "Gelombang 2",
      pendaftaran: "01 Desember 2025 - 30 Mei 2026",
      ujianMasuk: "31 Mei 2026",
      pengumuman: "05 Juni 2026", 
      registrasi: "06 - 15 Juni 2026",
      status: "upcoming"
    }
  ];

  const tipsPersiapan = [
    {
      kategori: "Persiapan Mental",
      tips: [
        "Yakinkan diri untuk siap hidup mandiri di pesantren",
        "Diskusikan dengan keluarga tentang komitmen menjalani pendidikan",
        "Persiapkan mental untuk mengikuti aturan pesantren"
      ],
      icon: User,
      color: "text-blue-600"
    },
    {
      kategori: "Persiapan Akademik", 
      tips: [
        "Pelajari materi dasar Matematika, Bahasa Indonesia, dan Agama",
        "Latihan membaca Al-Qur'an dengan tartil",
        "Siapkan diri untuk wawancara dalam bahasa Indonesia"
      ],
      icon: FileText,
      color: "text-green-600"
    },
    {
      kategori: "Persiapan Dokumen",
      tips: [
        "Siapkan semua berkas jauh-jauh hari sebelum deadline",
        "Pastikan semua fotokopi sudah dilegalisir dengan benar",
        "Siapkan foto dengan background dan ukuran yang sesuai"
      ],
      icon: Upload,
      color: "text-purple-600"
    }
  ];

  return (
    <section className={`py-16 bg-gradient-to-br from-emerald-50 via-white to-teal-50 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-6">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Syarat Pendaftaran Santri Baru
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Panduan lengkap persyaratan dan prosedur pendaftaran untuk calon santri AHIBS tahun ajaran 2026/2027
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-2 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex flex-wrap">
              <button
                onClick={() => setActiveTab("persyaratan")}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === "persyaratan" 
                    ? "bg-emerald-600 text-white shadow-md" 
                    : "text-gray-600 hover:text-emerald-600"
                }`}
              >
                Persyaratan
              </button>
              <button
                onClick={() => setActiveTab("berkas")}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === "berkas" 
                    ? "bg-emerald-600 text-white shadow-md" 
                    : "text-gray-600 hover:text-emerald-600"
                }`}
              >
                Berkas
              </button>
              <button
                onClick={() => setActiveTab("alur")}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === "alur" 
                    ? "bg-emerald-600 text-white shadow-md" 
                    : "text-gray-600 hover:text-emerald-600"
                }`}
              >
                Alur
              </button>
              <button
                onClick={() => setActiveTab("jadwal")}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === "jadwal" 
                    ? "bg-emerald-600 text-white shadow-md" 
                    : "text-gray-600 hover:text-emerald-600"
                }`}
              >
                Jadwal
              </button>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          
          {/* Persyaratan Tab */}
          {activeTab === "persyaratan" && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                {persyaratanUmum.map((item, index) => (
                  <div key={index} className={`p-6 rounded-2xl border ${item.color} hover:shadow-lg transition-shadow duration-300`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <item.icon className="w-6 h-6 text-gray-700" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{item.kategori}</h3>
                    </div>
                    <ul className="space-y-2">
                      {item.items.map((requirement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Tips Persiapan */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Tips Persiapan</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {tipsPersiapan.map((tip, index) => (
                    <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <div className="flex items-center gap-3 mb-4">
                        <tip.icon className={`w-8 h-8 ${tip.color}`} />
                        <h4 className="font-semibold text-gray-800">{tip.kategori}</h4>
                      </div>
                      <ul className="space-y-2">
                        {tip.tips.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Berkas Tab */}
          {activeTab === "berkas" && (
            <div className="space-y-6">
              {berkasPendaftaran.map((berkas, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <berkas.icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-800">{berkas.nama}</h3>
                        {berkas.wajib && (
                          <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-medium">
                            Wajib
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{berkas.keterangan}</p>
                      
                      {berkas.subItems && (
                        <ul className="space-y-2 ml-4">
                          {berkas.subItems.map((subItem, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{subItem}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-2">Catatan Penting:</h4>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• Semua berkas harus asli dan fotokopi yang sudah dilegalisir</li>
                      <li>• Berkas yang sudah diserahkan tidak dapat dikembalikan</li>
                      <li>• Pastikan semua data yang diisi benar dan sesuai dokumen</li>
                      <li>• Pendaftaran hanya dianggap sah setelah semua berkas lengkap</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Alur Tab */}
          {activeTab === "alur" && (
            <div className="space-y-8">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-emerald-200 hidden md:block"></div>
                
                <div className="space-y-8">
                  {alurPendaftaran.map((step, index) => (
                    <div key={index} className="relative flex items-start gap-6">
                      {/* Step Number */}
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white relative z-10 ${
                        step.status === "active" ? "bg-emerald-600" : "bg-gray-400"
                      }`}>
                        {step.step}
                      </div>
                      
                      {/* Content */}
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <step.icon className={`w-6 h-6 ${
                            step.status === "active" ? "text-emerald-600" : "text-gray-400"
                          }`} />
                          <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
                        </div>
                        <p className="text-gray-600">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Jadwal Tab */}
          {activeTab === "jadwal" && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Tahun Ajaran 2026/2027</h3>
                <p className="text-gray-600">Jadwal lengkap pendaftaran santri baru</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {jadwalPendaftaran.map((jadwal, index) => (
                  <div key={index} className={`bg-white rounded-2xl p-6 border-2 shadow-lg transition-all duration-300 ${
                    jadwal.status === "active" 
                      ? "border-emerald-300 shadow-emerald-100" 
                      : "border-gray-200"
                  }`}>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-bold text-gray-800">{jadwal.gelombang}</h4>
                      {jadwal.status === "active" && (
                        <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-xs font-medium animate-pulse">
                          Sedang Buka
                        </span>
                      )}
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-emerald-600 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-700">Pendaftaran</p>
                          <p className="text-sm text-gray-600">{jadwal.pendaftaran}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <FileText className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-700">Ujian Masuk</p>
                          <p className="text-sm text-gray-600">{jadwal.ujianMasuk}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Eye className="w-5 h-5 text-purple-600 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-700">Pengumuman</p>
                          <p className="text-sm text-gray-600">{jadwal.pengumuman}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-700">Registrasi</p>
                          <p className="text-sm text-gray-600">{jadwal.registrasi}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Phone className="w-8 h-8 text-emerald-600" />
              <h3 className="text-2xl font-bold text-gray-800">
                Butuh Bantuan Pendaftaran?
              </h3>
            </div>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Tim admisi kami siap membantu Anda dalam proses pendaftaran dan menjawab semua pertanyaan seputar syarat dan prosedur
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6281233785161"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle size={20} />
                Tanya via WhatsApp
              </a>
              <a
                href="https://psb.ahibs.id/daftar"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                <FileText size={20} />
                Mulai Pendaftaran
              </a>
            </div>
            
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-emerald-500" />
                <span>Bantuan 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-emerald-500" />
                <span>Pendaftaran Online</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-emerald-500" />
                <span>Proses Cepat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SyaratPendaftaranSection;