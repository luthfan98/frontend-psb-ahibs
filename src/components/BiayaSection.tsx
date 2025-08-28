"use client";

import { useState } from "react";
import {
  Calculator,
  CreditCard,
  GraduationCap,
  Heart,
  MessageCircle,
  DollarSign,
  Calendar,
  CheckCircle,
  Info,
  type LucideIcon,
} from "lucide-react";

interface BiayaSectionProps {
  className?: string;
}

type ProgramType = "putra" | "putri";

interface BreakdownItem {
  item: string;
  harga: string;
}

interface KetentuanItem {
  title: string;
  desc: string;
  icon: LucideIcon;
}

type JadwalStatus = "active" | "upcoming" | "closed";

interface JadwalPendaftaran {
  gelombang: string;
  periode: string;
  ujian: string;
  pengumuman: string;
  registrasi: string;
  status: JadwalStatus;
}

const BiayaSection: React.FC<BiayaSectionProps> = ({ className = "" }) => {
  const [selectedProgram, setSelectedProgram] = useState<ProgramType>("putra");

  const biayaMasuk: Record<
    ProgramType,
    {
      total: string;
      breakdown: BreakdownItem[];
    }
  > = {
    putra: {
      total: "Rp 15.800.000,-",
      breakdown: [
        { item: "Biaya Pendaftaran", harga: "Rp 250.000,-" },
        { item: "Biaya Pengembangan", harga: "Rp 7.500.000,-" },
        { item: "Biaya Seragam & Perlengkapan", harga: "Rp 2.050.000,-" },
        { item: "Biaya Asrama (1 Tahun)", harga: "Rp 6.000.000,-" },
      ],
    },
    putri: {
      total: "Rp 16.100.000,-",
      breakdown: [
        { item: "Biaya Pendaftaran", harga: "Rp 250.000,-" },
        { item: "Biaya Pengembangan", harga: "Rp 7.500.000,-" },
        { item: "Biaya Seragam & Perlengkapan", harga: "Rp 2.350.000,-" },
        { item: "Biaya Asrama (1 Tahun)", harga: "Rp 6.000.000,-" },
      ],
    },
  };

  const syahriyah = "Rp 13.880.000/tahun";
  const syahriyahBulanan = "Rp 1.157.000/bulan";

  const fasilitas: string[] = [
    "Pendidikan berkualitas tinggi",
    "Asrama dengan fasilitas lengkap",
    "Makan dan laundry",
    "Seragam dan perlengkapan belajar",
    "Program tahfidz Al-Qur'an",
    "Kegiatan ekstrakurikuler",
  ];

  const ketentuanPembayaran: KetentuanItem[] = [
    {
      title: "Biaya Awal Masuk",
      desc: "Sudah termasuk infaq, seragam 7 stel, buku paket, alat tulis, kasur, dan bantal",
      icon: CreditCard,
    },
    {
      title: "Pembayaran Fleksibel",
      desc: "Pembayaran dilakukan melalui transfer ke virtual account santri yang dikirim notifikasi via pesantren",
      icon: Calendar,
    },
    {
      title: "SPP Meliputi",
      desc: "Biaya pendidikan, asrama, makan santri dan laundry seragam",
      icon: CheckCircle,
    },
    {
      title: "Beasiswa Tersedia",
      desc: "Untuk santri yang telah membayarkan biaya awal masuk maka seluruh biaya pesantren dapat diminimalkan kembali dan dianggap sebagai infaq pesantren",
      icon: Heart,
    },
  ];

  const jadwalPendaftaran: JadwalPendaftaran[] = [
    {
      gelombang: "Gelombang 1",
      periode: "01 September - 29 November 2025",
      ujian: "30 November 2025",
      pengumuman: "05 Desember 2025",
      registrasi: "06 - 13 Desember 2025",
      status: "active",
    },
    {
      gelombang: "Gelombang 2",
      periode: "01 Desember 2025 - 30 Mei 2026",
      ujian: "31 Mei 2026",
      pengumuman: "05 Juni 2026",
      registrasi: "06 - 15 Juni 2026",
      status: "upcoming",
    },
  ];

  return (
    <section className={`py-16 bg-gradient-to-br from-emerald-50 via-white to-teal-50 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-6">
            <DollarSign className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Biaya Pendidikan AHIBS</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Investasi terbaik untuk masa depan putra-putri Anda dengan pendidikan Islam berkualitas tinggi
          </p>
        </div>

        {/* Program Selection */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-2 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex">
              <button
                type="button"
                onClick={() => setSelectedProgram("putra")}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedProgram === "putra" ? "bg-emerald-600 text-white shadow-md" : "text-gray-600 hover:text-emerald-600"
                }`}
                aria-pressed={selectedProgram === "putra"}
              >
                Putra
              </button>
              <button
                type="button"
                onClick={() => setSelectedProgram("putri")}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedProgram === "putri" ? "bg-emerald-600 text-white shadow-md" : "text-gray-600 hover:text-emerald-600"
                }`}
                aria-pressed={selectedProgram === "putri"}
              >
                Putri
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Biaya Masuk */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Biaya Masuk</h3>
                <p className="text-gray-600">Program {selectedProgram === "putra" ? "Putra" : "Putri"}</p>
              </div>
            </div>

            {/* Total Biaya */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 mb-6">
              <div className="text-center">
                <p className="text-gray-600 mb-2">Total Biaya Masuk</p>
                <div className="text-3xl md:text-4xl font-bold text-emerald-600">
                  {biayaMasuk[selectedProgram].total}
                </div>
              </div>
            </div>

            {/* Breakdown */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-800 mb-4">Rincian Biaya:</h4>
              {biayaMasuk[selectedProgram].breakdown.map((item: BreakdownItem, index: number) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                  <span className="text-gray-700">{item.item}</span>
                  <span className="font-semibold text-gray-800">{item.harga}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-xl">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-blue-700">
                  Biaya sudah termasuk infaq, seragam 7 stel, buku paket, alat tulis, kasur, dan bantal
                </p>
              </div>
            </div>
          </div>

          {/* SPP/Syahriyah */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">SPP/Syahriyah</h3>
                <p className="text-gray-600">Biaya Bulanan &amp; Tahunan</p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Biaya Tahunan */}
              <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-6">
                <div className="text-center">
                  <p className="text-gray-600 mb-2">Biaya Per Tahun</p>
                  <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">{syahriyah}</div>
                  <p className="text-gray-500 text-sm">atau</p>
                  <div className="text-xl font-semibold text-gray-700 mt-2">{syahriyahBulanan}</div>
                </div>
              </div>

              {/* Fasilitas Yang Didapat */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Fasilitas yang didapat:</h4>
                <div className="space-y-3">
                  {fasilitas.map((f, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full" />
                      <span className="text-gray-700 text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-50 rounded-xl">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-green-700">Pendidikan, asrama, makan dan laundry seragam sudah termasuk</p>
              </div>
            </div>
          </div>
        </div>

        {/* Ketentuan Pembayaran */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Ketentuan Pembayaran</h3>
            <p className="text-gray-600">Informasi penting seputar pembayaran dan fasilitas</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {ketentuanPembayaran.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Jadwal Pendaftaran */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Jadwal Pendaftaran 2026/2027</h3>
            <p className="text-gray-600">Periode pendaftaran santri baru</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {jadwalPendaftaran.map((jadwal) => (
              <div
                key={jadwal.gelombang}
                className={`bg-white rounded-2xl p-6 border-2 transition-all duration-300 ${
                  jadwal.status === "active" ? "border-emerald-300 shadow-xl" : "border-gray-200 shadow-lg"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-gray-800">{jadwal.gelombang}</h4>
                  {jadwal.status === "active" && (
                    <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-xs font-medium">
                      Sedang Buka
                    </span>
                  )}
                </div>

                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-500">Pendaftaran:</span>
                    <div className="font-medium text-gray-700">{jadwal.periode}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Ujian Masuk:</span>
                    <div className="font-medium text-gray-700">{jadwal.ujian}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Pengumuman:</span>
                    <div className="font-medium text-gray-700">{jadwal.pengumuman}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Registrasi:</span>
                    <div className="font-medium text-gray-700">{jadwal.registrasi}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calculator className="w-8 h-8 text-emerald-600" />
              <h3 className="text-2xl font-bold text-gray-800">Butuh Konsultasi Biaya?</h3>
            </div>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Tim kami siap membantu Anda memahami detail biaya, sistem pembayaran, dan program beasiswa yang tersedia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6281233785161"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={20} />
                Konsultasi via WhatsApp
              </a>
              <a
                href="https://psb.ahibs.id/daftar"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                <GraduationCap size={20} />
                Daftar Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiayaSection;
