// app/lunas/page.tsx
'use client';

import Link from 'next/link';
import { CheckCircle2, FileText, ArrowRight } from 'lucide-react';

// Bonus: Jika Anda ingin menambahkan efek confetti
// import Confetti from 'react-confetti';
// import { useWindowSize } from '@react-hook/window-size';


export default function LunasPage() {
    // Bonus: Untuk efek confetti
    // const { width, height } = useWindowSize();

    // Data ini idealnya didapat dari server setelah pembayaran berhasil
    const transactionDetails = {
        id: 'TRX-20250806-XYZ-123',
        total: 250000,
        metode: 'BRI Virtual Account',
        waktu: new Date().toLocaleString('id-ID', {
            dateStyle: 'full',
            timeStyle: 'short',
        }),
    };

    const formatRupiah = (number: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(number);
    };

    return (
        <div className="bg-slate-50 min-h-screen flex items-center justify-center p-4">
            {/* Bonus: Komponen Confetti, akan aktif jika Anda menginstalnya */}
            {/* <Confetti width={width} height={height} recycle={false} numberOfPieces={300} /> */}

            <main className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8 text-center animate-fade-in">
                
                {/* Header Ikon */}
                <div className="flex justify-center mb-5">
                    <div className="bg-green-100 p-4 rounded-full">
                        <CheckCircle2 className="h-16 w-16 text-green-600" />
                    </div>
                </div>

                {/* Pesan Konfirmasi */}
                <h1 className="text-3xl font-bold text-gray-800">
                    Pembayaran Berhasil!
                </h1>
                <p className="text-gray-500 mt-2">
                    Terima kasih! Pembayaran Anda telah kami terima dan konfirmasi.
                </p>

                {/* Garis Pemisah */}
                <hr className="my-6 border-gray-200" />

                {/* Detail Transaksi */}
                <div className="space-y-4 text-left text-sm">
                    <div className="flex justify-between">
                        <span className="text-gray-500">Total Pembayaran</span>
                        <span className="font-semibold text-gray-800">{formatRupiah(transactionDetails.total)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">Metode Pembayaran</span>
                        <span className="font-semibold text-gray-800">{transactionDetails.metode}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">Waktu Pembayaran</span>
                        <span className="font-semibold text-gray-800">{transactionDetails.waktu}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">ID Transaksi</span>
                        <span className="font-semibold text-gray-800">{transactionDetails.id}</span>
                    </div>
                </div>

                {/* Garis Pemisah */}
                <hr className="my-6 border-gray-200" />

                {/* Tombol Aksi */}
                <div className="space-y-4">
                    <Link href="/formulir-pendaftaran" legacyBehavior>
                        <a className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold transition-all text-base">
                            Lanjutkan ke Formulir <ArrowRight className="h-5 w-5" />
                        </a>
                    </Link>
                    <button 
                        onClick={() => window.print()} 
                        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold transition-all text-base"
                    >
                        <FileText className="h-5 w-5" /> Cetak Bukti Pembayaran
                    </button>
                </div>
                
                <p className="text-xs text-gray-400 mt-8">
                    Jika ada kendala, silakan hubungi <a href="mailto:help@sekolah.id" className="text-teal-600 underline">bantuan kami</a>.
                </p>
            </main>
        </div>
    );
}
