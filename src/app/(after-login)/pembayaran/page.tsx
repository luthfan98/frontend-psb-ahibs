'use client';

import Image from 'next/image';
import { useState } from 'react';
import { User, Wallet, ArrowRight, CaseSensitive, CheckCircle2, Clipboard, Clock, ChevronDown } from 'lucide-react';

// Menambahkan logo untuk setiap metode pembayaran
const metodeTripay = [
  { code: 'BRIVA', name: 'BRI Virtual Account', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/BRI_2020.svg/2560px-BRI_2020.svg.png' },
  { code: 'MANDIRIVA', name: 'Mandiri Virtual Account', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/2560px-Bank_Mandiri_logo_2016.svg.png' },
  { code: 'QRIS', name: 'QRIS (semua e-wallet & m-banking)', logo: 'https://i.pinimg.com/736x/69/5e/3a/695e3a709eccbe055c311aac6b25729d.jpg' },
];

export default function PembayaranPage() {
  const [selectedMetode, setSelectedMetode] = useState<string | null>(null);
  const [step, setStep] = useState(1); // 1: Pilih Metode, 2: Lakukan Pembayaran

  const handleGenerate = () => {
    if (!selectedMetode) {
      alert('Silakan pilih metode pembayaran terlebih dahulu.');
      return;
    }
    // Pindah ke step berikutnya
    setStep(2);
  };

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Nomor Virtual Account berhasil disalin!');
  };

  const data = {
    namaLengkap: "Uphan Uddin",
    jenisKelamin: "Laki-laki",
    program: "SMA Putra",
    nominalTagihan: 250000,
  };

  const formatRupiah = (number: number | bigint) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(number);
  };

  const getSelectedMetodeName = () => {
      return metodeTripay.find(m => m.code === selectedMetode)?.name || '';
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-2xl mx-auto px-4 py-12">
        
        {/* === KARTU INFORMASI PENDAFTAR === */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-br from-teal-500 to-cyan-500 p-6">
            <div className="flex items-center space-x-4">
              <div className="bg-white/30 p-3 rounded-full">
                <User className="text-white h-8 w-8" />
              </div>
              <div>
                <p className="text-xl font-bold text-white">{data.namaLengkap}</p>
                <p className="text-sm text-cyan-100">{data.program}</p>
              </div>
            </div>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center text-gray-700">
              <CaseSensitive className="h-5 w-5 mr-3 text-gray-400" />
              <div>
                <p className="text-xs text-gray-500">Jenis Kelamin</p>
                <p className="font-medium">{data.jenisKelamin}</p>
              </div>
            </div>
            <div className="flex items-center text-gray-700">
              <Wallet className="h-5 w-5 mr-3 text-gray-400" />
              <div>
                <p className="text-xs text-gray-500">Nominal Tagihan</p>
                <p className="font-bold text-lg text-green-600">{formatRupiah(data.nominalTagihan)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* === PROSES PEMBAYARAN === */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            {/* Stepper */}
            <div className="flex items-center mb-6">
                <div className="flex items-center text-teal-600">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 1 ? 'bg-teal-600 text-white' : 'bg-teal-100 text-teal-600'}`}>1</div>
                    <span className={`ml-2 font-semibold ${step === 1 ? 'text-teal-700' : 'text-gray-500'}`}>Pilih Metode</span>
                </div>
                <div className="flex-auto border-t-2 mx-4 border-gray-200"></div>
                <div className="flex items-center text-gray-500">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 2 ? 'bg-teal-600 text-white' : 'bg-gray-200'}`}>2</div>
                    <span className={`ml-2 font-semibold ${step === 2 ? 'text-teal-700' : 'text-gray-500'}`}>Bayar</span>
                </div>
            </div>

            {/* === STEP 1: PILIH METODE === */}
            {step === 1 && (
              <div>
                <h2 className="text-xl font-bold mb-1 text-gray-800">Pilih Metode Pembayaran</h2>
                <p className="text-gray-500 mb-5">Pilih salah satu metode untuk melanjutkan.</p>
                <div className="space-y-4">
                  {metodeTripay.map((metode) => (
                    <label key={metode.code} className="relative flex items-center gap-4 cursor-pointer rounded-xl border-2 p-4 transition-all has-[:checked]:border-teal-500 has-[:checked]:ring-2 has-[:checked]:ring-teal-100">
                      <input
                        type="radio"
                        name="metode"
                        value={metode.code}
                        checked={selectedMetode === metode.code}
                        onChange={() => setSelectedMetode(metode.code)}
                        className="absolute opacity-0 h-full w-full"
                      />
                      <Image src={metode.logo} alt={metode.name} className="h-8 w-auto object-contain" unoptimized/>
                      <span className="font-semibold text-gray-800 flex-grow">{metode.name}</span>
                      <CheckCircle2 className={`h-6 w-6 text-teal-500 transition-opacity ${selectedMetode === metode.code ? 'opacity-100' : 'opacity-0'}`} />
                    </label>
                  ))}
                </div>
                <button
                  onClick={handleGenerate}
                  disabled={!selectedMetode}
                  className="w-full mt-8 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold transition-all disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  Lanjutkan Pembayaran <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            )}

            {/* === STEP 2: LAKUKAN PEMBAYARAN === */}
            {step === 2 && selectedMetode && (
              <div className="animate-fade-in">
                <h2 className="text-xl font-bold text-gray-800 mb-2">Selesaikan Pembayaran Anda</h2>
                <p className="text-gray-500 mb-6">Lakukan pembayaran menggunakan <span className="font-semibold text-teal-700">{getSelectedMetodeName()}</span> sebelum batas waktu berakhir.</p>
                
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                    {selectedMetode === 'QRIS' ? (
                        <div className="text-center">
                            <p className="text-gray-600 mb-4">Scan kode QR di bawah ini dengan aplikasi perbankan atau e-wallet Anda.</p>
                            <Image src="/assets/img/qris-sample.png" alt="QRIS" className="w-56 h-56 mx-auto mb-4 p-2 bg-white border rounded-lg" unoptimized/>
                            <a href="/assets/img/qris-sample.png" download className="text-sm font-semibold text-teal-600 hover:text-teal-700">Unduh Kode QR</a>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-gray-500">Nomor Virtual Account</p>
                                <div className="flex items-center gap-3 mt-1">
                                    <p className="text-2xl font-bold text-gray-900 tracking-wider">8808 1234 5678 9012</p>
                                    <button onClick={() => handleCopyToClipboard('8808123378516112')} className="text-gray-500 hover:text-teal-600 p-2 rounded-md hover:bg-gray-200 transition-colors">
                                        <Clipboard className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Bank Tujuan</p>
                                <p className="text-lg font-semibold text-gray-800">{selectedMetode === 'BRIVA' ? 'Bank Rakyat Indonesia (BRI)' : 'Bank Mandiri'}</p>
                            </div>
                        </div>
                    )}
                    <div className="border-t my-5"></div>
                    <div className="flex items-center text-red-600">
                        <Clock className="h-5 w-5 mr-2" />
                        <p className="text-sm font-medium">Batas Waktu Pembayaran: <span className="font-bold">23 Jam, 59 Menit</span></p>
                    </div>
                </div>

                <details className="mt-6 group">
                    <summary className="flex justify-between items-center cursor-pointer text-gray-600 font-semibold list-none">
                        Lihat Petunjuk Pembayaran
                        <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="mt-4 text-sm text-gray-600 space-y-2 prose-sm">
                        <p>1. Buka aplikasi M-Banking atau ATM.</p>
                        <p>2. Pilih menu Transfer, lalu pilih Virtual Account.</p>
                        <p>3. Masukkan nomor Virtual Account di atas.</p>
                        <p>4. Pastikan nominal dan nama penerima sudah sesuai.</p>
                        <p>5. Selesaikan transaksi sesuai instruksi.</p>
                    </div>
                </details>

                <button
                    onClick={() => alert('Ini akan lanjut ke formulir atau halaman status')}
                    className="mt-8 w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all"
                >
                    Saya Sudah Bayar, Lanjutkan
                </button>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

// Tambahkan ini di file globals.css Anda jika belum ada untuk animasi
/*
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}
*/