"use client";

import { useState } from "react";
import { Award, Heart, Star, Users, BookOpen, Trophy, MessageCircle, FileText, CheckCircle, AlertCircle, Calculator, Gift, Target, Clock } from "lucide-react";

interface BeasiswaSectionProps {
  className?: string;
}

const BeasiswaSection: React.FC<BeasiswaSectionProps> = ({ className = "" }) => {
  const [selectedBeasiswa, setSelectedBeasiswa] = useState<string>("prestasi");

  const jenisBeasiswa = [
    {
      id: "prestasi",
      nama: "Beasiswa Prestasi Akademik",
      icon: Trophy,
      color: "bg-yellow-500",
      bgColor: "bg-yellow-50 border-yellow-200",
      coverage: "25% - 50%",
      deskripsi: "Untuk santri dengan prestasi akademik outstanding dan kemampuan mengaji yang baik",
      kriteria: [
        "Nilai rata-rata rapor minimal 8.5",
        "Juara kelas atau prestasi akademik lainnya",
        "Mampu membaca Al-Qur'an dengan baik",
        "Berkelakuan baik dan berakhlak mulia"
      ],
      kuota: "10 santri per tahun",
      benefit: [
        "Potongan biaya SPP 25-50%",
        "Bebas biaya kegiatan ekstrakurikuler",
        "Prioritas program tahfidz intensif",
        "Mentoring khusus dari ustadz senior"
      ]
    },
    {
      id: "tahfidz",
      nama: "Beasiswa Tahfidz Al-Qur'an",
      icon: BookOpen,
      color: "bg-green-500",
      bgColor: "bg-green-50 border-green-200",
      coverage: "30% - 75%",
      deskripsi: "Khusus untuk calon santri yang sudah memiliki hafalan Al-Qur'an",
      kriteria: [
        "Minimal hafal 5 juz dengan tartil",
        "Lulus tes tahfidz dari tim penguji",
        "Komitmen melanjutkan program tahfidz",
        "Sanggup menjadi tutor sebaya"
      ],
      kuota: "5 santri per tahun",
      benefit: [
        "Potongan biaya SPP hingga 75%",
        "Program tahfidz intensif gratis",
        "Kesempatan mengikuti kompetisi",
        "Bimbingan khusus dari huffadz"
      ]
    },
    {
      id: "ekonomi",
      nama: "Beasiswa Ekonomi Kurang Mampu",
      icon: Heart,
      color: "bg-blue-500",
      bgColor: "bg-blue-50 border-blue-200",
      coverage: "50% - 100%",
      deskripsi: "Program bantuan untuk keluarga dengan kondisi ekonomi yang membutuhkan",
      kriteria: [
        "Surat keterangan tidak mampu dari desa/kelurahan",
        "Slip gaji orang tua atau surat penghasilan",
        "Rekomendasi dari tokoh masyarakat",
        "Wawancara dengan tim beasiswa"
      ],
      kuota: "15 santri per tahun",
      benefit: [
        "Potongan biaya SPP 50-100%",
        "Bantuan biaya hidup bulanan",
        "Gratis seragam dan perlengkapan",
        "Program keterampilan life skill"
      ]
    },
    {
      id: "yatim",
      nama: "Beasiswa Yatim Piatu",
      icon: Users,
      color: "bg-purple-500",
      bgColor: "bg-purple-50 border-purple-200",
      coverage: "75% - 100%",
      deskripsi: "Program khusus untuk anak yatim, piatu, atau yatim piatu",
      kriteria: [
        "Surat kematian orang tua",
        "Akta kelahiran yang sah",
        "Surat keterangan dari RT/RW",
        "Tidak sedang menerima beasiswa sejenis"
      ],
      kuota: "8 santri per tahun",
      benefit: [
        "Bebas biaya SPP 75-100%",
        "Uang saku bulanan",
        "Prioritas dalam kegiatan pesantren",
        "Pendampingan psikologis"
      ]
    }
  ];

  const prosedurPendaftaran = [
    {
      step: 1,
      title: "Daftar Santri Reguler",
      desc: "Lakukan pendaftaran sebagai santri reguler terlebih dahulu",
      icon: FileText
    },
    {
      step: 2,
      title: "Pilih Jenis Beasiswa",
      desc: "Tentukan jenis beasiswa yang sesuai dengan kondisi Anda",
      icon: Target
    },
    {
      step: 3,
      title: "Siapkan Berkas",
      desc: "Lengkapi semua dokumen pendukung sesuai persyaratan",
      icon: CheckCircle
    },
    {
      step: 4,
      title: "Submit Aplikasi",
      desc: "Serahkan berkas dan ikuti proses seleksi beasiswa",
      icon: Award
    },
    {
      step: 5,
      title: "Pengumuman",
      desc: "Tunggu hasil seleksi dan pengumuman penerima beasiswa",
      icon: Gift
    }
  ];

  const jadwalBeasiswa = [
    {
      periode: "Pendaftaran Beasiswa",
      tanggal: "01 September - 15 November 2025",
      keterangan: "Batas akhir pengumpulan berkas",
      status: "active"
    },
    {
      periode: "Seleksi Berkas",
      tanggal: "16 - 25 November 2025", 
      keterangan: "Verifikasi dan penilaian dokumen",
      status: "upcoming"
    },
    {
      periode: "Tes & Wawancara",
      tanggal: "26 - 28 November 2025",
      keterangan: "Tes kemampuan dan wawancara",
      status: "upcoming"
    },
    {
      periode: "Pengumuman",
      tanggal: "01 Desember 2025",
      keterangan: "Hasil seleksi penerima beasiswa",
      status: "upcoming"
    }
  ];

  const statistikBeasiswa = [
    {
      icon: Users,
      angka: "38",
      label: "Total Penerima",
      sublabel: "Santri aktif dengan beasiswa",
      color: "text-blue-600"
    },
    {
      icon: Award,
      angka: "4",
      label: "Jenis Beasiswa",
      sublabel: "Program beasiswa tersedia",
      color: "text-green-600"
    },
    {
      icon: Calculator,
      angka: "2.1M",
      label: "Total Bantuan",
      sublabel: "Rupiah per tahun",
      color: "text-purple-600"
    },
    {
      icon: Trophy,
      angka: "95%",
      label: "Tingkat Kelulusan",
      sublabel: "Penerima beasiswa lulus tepat waktu",
      color: "text-yellow-600"
    }
  ];

  const tips = [
    {
      kategori: "Persiapan Dokumen",
      items: [
        "Siapkan semua berkas asli dan fotokopinya",
        "Pastikan surat-surat masih berlaku",
        "Legalisir dokumen dari instansi berwenang"
      ],
      icon: FileText,
      color: "text-blue-600"
    },
    {
      kategori: "Persiapan Tes",
      items: [
        "Pelajari materi sesuai jenis beasiswa",
        "Latihan mengaji untuk beasiswa tahfidz",
        "Persiapkan mental untuk wawancara"
      ],
      icon: BookOpen,
      color: "text-green-600"
    },
    {
      kategori: "Sikap & Mental",
      items: [
        "Tunjukkan motivasi dan komitmen tinggi",
        "Jujur dalam menyampaikan kondisi keluarga",
        "Siap menjalankan kewajiban penerima beasiswa"
      ],
      icon: Heart,
      color: "text-red-600"
    }
  ];

  const kewajibanPenerima = [
    "Mempertahankan prestasi akademik minimal 8.0",
    "Aktif mengikuti kegiatan pesantren",
    "Menjadi teladan bagi santri lainnya",
    "Tidak boleh pindah ke pesantren lain selama masa beasiswa",
    "Membuat laporan perkembangan setiap semester",
    "Bersedia membantu kegiatan pesantren sesuai kemampuan"
  ];

  return (
    <section className={`py-16 bg-gradient-to-br from-emerald-50 via-white to-teal-50 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-6">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Program Beasiswa AHIBS
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Wujudkan impian pendidikan Islam berkualitas dengan berbagai program beasiswa yang tersedia untuk calon santri berprestasi
          </p>
        </div>

        {/* Statistik */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {statistikBeasiswa.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
              <div className={`text-2xl md:text-3xl font-bold mb-1 ${stat.color}`}>
                {stat.angka}
              </div>
              <div className="font-medium text-gray-800 text-sm mb-1">{stat.label}</div>
              <div className="text-xs text-gray-500">{stat.sublabel}</div>
            </div>
          ))}
        </div>

        {/* Jenis Beasiswa */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              Jenis Beasiswa Tersedia
            </h3>
            <p className="text-gray-600">Pilih program beasiswa yang sesuai dengan kondisi dan prestasi Anda</p>
          </div>

          {/* Beasiswa Selection */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {jenisBeasiswa.map((beasiswa) => (
              <button
                key={beasiswa.id}
                onClick={() => setSelectedBeasiswa(beasiswa.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedBeasiswa === beasiswa.id
                    ? "bg-emerald-600 text-white shadow-md"
                    : "bg-white text-gray-600 hover:text-emerald-600 shadow-sm border border-gray-200"
                }`}
              >
                <beasiswa.icon size={16} />
                <span className="text-sm">{beasiswa.nama.split(' ')[1]}</span>
              </button>
            ))}
          </div>

          {/* Selected Beasiswa Detail */}
          {jenisBeasiswa.map((beasiswa) => (
            selectedBeasiswa === beasiswa.id && (
              <div key={beasiswa.id} className={`rounded-3xl p-8 border ${beasiswa.bgColor} shadow-lg`}>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 ${beasiswa.color} rounded-full flex items-center justify-center`}>
                        <beasiswa.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-gray-800">{beasiswa.nama}</h4>
                        <p className="text-gray-600">{beasiswa.deskripsi}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-emerald-600 mb-1">{beasiswa.coverage}</div>
                          <div className="text-sm text-gray-600">Cakupan Biaya</div>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-teal-600 mb-1">{beasiswa.kuota}</div>
                          <div className="text-sm text-gray-600">Kuota Tersedia</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-800 mb-3">Persyaratan:</h5>
                      <ul className="space-y-2">
                        {beasiswa.kriteria.map((kriteria, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                            <span>{kriteria}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-4">Benefit yang Diperoleh:</h5>
                    <div className="space-y-3">
                      {beasiswa.benefit.map((benefit, idx) => (
                        <div key={idx} className="bg-white rounded-lg p-4 shadow-sm flex items-center gap-3">
                          <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Gift className="w-4 h-4 text-emerald-600" />
                          </div>
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>

        {/* Prosedur Pendaftaran */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              Prosedur Pendaftaran Beasiswa
            </h3>
            <p className="text-gray-600">Ikuti langkah-langkah berikut untuk mendaftar beasiswa</p>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-emerald-200 hidden md:block"></div>
            
            <div className="space-y-6">
              {prosedurPendaftaran.map((step, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center font-bold text-white relative z-10">
                    {step.step}
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <step.icon className="w-6 h-6 text-emerald-600" />
                      <h4 className="text-lg font-semibold text-gray-800">{step.title}</h4>
                    </div>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline & Tips */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Jadwal */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <Clock className="w-6 h-6 text-emerald-600" />
              Timeline Beasiswa 2025
            </h3>
            
            <div className="space-y-4">
              {jadwalBeasiswa.map((jadwal, index) => (
                <div key={index} className={`p-4 rounded-lg border-l-4 ${
                  jadwal.status === 'active' 
                    ? 'border-emerald-500 bg-emerald-50' 
                    : 'border-gray-300 bg-gray-50'
                }`}>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-800">{jadwal.periode}</h4>
                    {jadwal.status === 'active' && (
                      <span className="bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full text-xs font-medium">
                        Aktif
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-medium text-gray-700">{jadwal.tanggal}</p>
                  <p className="text-sm text-gray-600">{jadwal.keterangan}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <Star className="w-6 h-6 text-emerald-600" />
              Tips Sukses Beasiswa
            </h3>
            
            <div className="space-y-6">
              {tips.map((tip, index) => (
                <div key={index}>
                  <div className="flex items-center gap-3 mb-3">
                    <tip.icon className={`w-5 h-5 ${tip.color}`} />
                    <h4 className="font-semibold text-gray-800">{tip.kategori}</h4>
                  </div>
                  <ul className="space-y-1 ml-8">
                    {tip.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
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

        {/* Kewajiban Penerima */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Kewajiban Penerima Beasiswa
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {kewajibanPenerima.map((kewajiban, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-emerald-600 font-bold text-xs">{index + 1}</span>
                </div>
                <span className="text-sm text-gray-700">{kewajiban}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="w-8 h-8 text-emerald-600" />
              <h3 className="text-2xl font-bold text-gray-800">
                Siap Meraih Beasiswa?
              </h3>
            </div>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Jangan sia-siakan kesempatan emas ini! Konsultasikan kondisi Anda dengan tim beasiswa kami dan dapatkan panduan lengkap untuk meraih beasiswa impian.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6281233785161"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle size={20} />
                Konsultasi Beasiswa
              </a>
              <a
                href="https://psb.ahibs.id/daftar"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                <FileText size={20} />
                Daftar Sekarang
              </a>
            </div>
            
            <div className="mt-6 p-4 bg-emerald-50 rounded-xl">
              <div className="flex items-center justify-center gap-2 text-emerald-700">
                <AlertCircle size={16} />
                <span className="text-sm font-medium">Pendaftaran beasiswa berakhir 15 November 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeasiswaSection;