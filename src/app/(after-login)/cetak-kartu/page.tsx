'use client';

import { useRouter } from 'next/navigation';
import {
  Printer,
  ArrowLeft,
  Home,
  Calendar,
  Clock,
  MapPin,
  List,
  AlertTriangle,
} from 'lucide-react';

// --- Tipe data ujian dan kartu peserta ---
interface Ujian {
  tanggal: string;
  waktu: string;
  lokasi: string;
}

interface KartuPesertaData {
  testNumber: string;
  studentName: string;
  nisn: string;
  asalSekolah: string;
  ujian: Ujian;
}

// --- KOMPONEN KARTU UJIAN MODERN ---
const KartuPesertaModern = ({ data }: { data: KartuPesertaData }) => {
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data.testNumber}`;

  return (
    <div
      id="kartu-peserta"
      className="w-full max-w-lg rounded-2xl shadow-2xl bg-white font-sans overflow-hidden"
    >
      {/* Header */}
      <header className="bg-gradient-to-br from-teal-600 to-cyan-700 text-white p-5 flex items-center justify-between">
        <div>
          <h1 className="font-bold text-lg tracking-wide">KARTU PESERTA UJIAN</h1>
          <p className="text-xs opacity-80">Pondok Pesantren AHIBS</p>
        </div>
        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
          <p className="font-bold text-sm">Logo</p>
        </div>
      </header>

      {/* Body */}
      <main className="p-6">
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Kiri: Foto & QR */}
          <div className="flex-shrink-0 text-center">
            <div className="w-32 h-40 mx-auto bg-gray-100 border-2 border-dashed rounded-lg flex items-center justify-center text-gray-400 text-sm">
              Pas Foto 3x4
            </div>
            <img src={qrCodeUrl} alt="QR Code Peserta" className="w-24 h-24 mx-auto mt-4" />
            <p className="text-xs text-gray-500 mt-1">Scan untuk verifikasi</p>
          </div>

          {/* Kanan: Info */}
          <div className="flex-1">
            <div className="bg-teal-50 border-l-4 border-teal-500 p-3 rounded-r-lg">
              <p className="text-xs text-teal-800">Nomor Peserta</p>
              <p className="font-black text-2xl text-teal-900 tracking-wider">
                {data.testNumber}
              </p>
            </div>

            <div className="mt-4 space-y-2 text-sm text-gray-700">
              <div>
                <p className="text-xs text-gray-500">Nama Lengkap</p>
                <p className="font-semibold text-gray-900">{data.studentName}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Asal Sekolah</p>
                <p className="font-semibold text-gray-900">{data.asalSekolah}</p>
              </div>
            </div>

            <hr className="my-4 border-dashed" />

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-teal-600" />
                <div>
                  <p className="text-xs text-gray-500">Tanggal Ujian</p>
                  <p className="font-medium text-gray-800">{data.ujian.tanggal}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-teal-600" />
                <div>
                  <p className="text-xs text-gray-500">Waktu</p>
                  <p className="font-medium text-gray-800">{data.ujian.waktu}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-teal-600" />
                <div>
                  <p className="text-xs text-gray-500">Lokasi</p>
                  <p className="font-medium text-gray-800">{data.ujian.lokasi}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 p-5 text-xs text-gray-600 border-t">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-bold text-gray-800 mb-1 flex items-center gap-1.5">
              <List size={14} /> Perlengkapan Peserta:
            </h3>
            <ul className="list-disc list-inside pl-2 space-y-1">
              <li>Kartu Ujian (dokumen ini)</li>
              <li>Alat tulis (Pensil 2B & Pulpen)</li>
              <li>Papan Jalan / Alas Tulis</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-1 flex items-center gap-1.5">
              <AlertTriangle size={14} /> Peraturan Ujian:
            </h3>
            <ul className="list-disc list-inside pl-2 space-y-1">
              <li>Hadir 15 menit sebelum ujian.</li>
              <li>Berpakaian sopan dan rapi.</li>
              <li>Dilarang membawa alat komunikasi.</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

// --- KOMPONEN HALAMAN UTAMA ---
export default function CetakKartuPage() {
  const router = useRouter();

  const mockData: KartuPesertaData = {
    testNumber: 'PSB-2025-08-001',
    studentName: 'Ahmad Zaki',
    nisn: '0098765432',
    asalSekolah: 'SMP Negeri 1 Sleman',
    ujian: {
      tanggal: 'Sabtu, 10 Januari 2026',
      waktu: '08:00 - 11:00 WIB',
      lokasi: 'Gedung A, Ruang 01 - Kompleks Pesantren AHIBS',
    },
  };

  const handlePrint = () => {
    const element = document.getElementById('kartu-peserta');
    if (!element) return;

    const printContents = element.innerHTML;

    let printArea = document.getElementById('area-cetak');
    if (!printArea) {
      printArea = document.createElement('div');
      printArea.id = 'area-cetak';
      document.body.appendChild(printArea);
    }

    printArea.innerHTML = printContents;
    window.print();
    printArea.innerHTML = '';
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Cetak Kartu Peserta Ujian</h1>
          <p className="mt-2 text-gray-600">
            Kartu ini wajib dibawa saat mengikuti ujian seleksi. Silakan cetak dan simpan dengan
            baik.
          </p>
        </div>

        <div className="flex justify-center">
          <KartuPesertaModern data={mockData} />
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col md:flex-row justify-between items-center gap-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 w-full md:w-auto"
          >
            <ArrowLeft size={18} /> Kembali
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 w-full md:w-auto"
          >
            <Printer size={18} /> Cetak Kartu
          </button>
          <button
            onClick={() => router.push('/')}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white font-bold rounded-lg shadow-lg hover:bg-green-700 w-full md:w-auto"
          >
            Selesai & Kembali ke Beranda <Home size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
