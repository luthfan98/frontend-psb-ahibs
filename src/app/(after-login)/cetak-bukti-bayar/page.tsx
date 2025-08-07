// app/cetak-bukti/page.tsx
'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Printer, ArrowLeft } from 'lucide-react';

export default function CetakBuktiPage() {
    // Data ini idealnya diambil dari database berdasarkan ID transaksi
    const data = {
        pendaftar: {
            nama: 'Uphan Uddin',
            noPendaftaran: 'PSB-2025-08-001',
            program: 'SMA Putra',
        },
        transaksi: {
            id: 'TRX-20250806-XYZ-123',
            tanggal: new Date().toLocaleDateString('id-ID', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
            }),
            metode: 'BRI Virtual Account',
            total: 250000,
        },
    };

    // Otomatis membuka dialog print saat halaman dimuat
    useEffect(() => {
        window.print();
    }, []);

    const formatRupiah = (number: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(number);
    };

    return (
        <div className="bg-gray-200 print:bg-white">
            {/* --- Tombol Aksi (Hanya tampil di layar) --- */}
            <div className="max-w-4xl mx-auto p-4 flex justify-between items-center print:hidden">
                <Link href="/lunas" legacyBehavior>
                    <a className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-gray-50">
                        <ArrowLeft size={16} /> Kembali
                    </a>
                </Link>
                <button
                    onClick={() => window.print()}
                    className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg shadow-sm hover:bg-teal-700"
                >
                    <Printer size={16} /> Cetak Ulang
                </button>
            </div>

            {/* --- Konten Kuitansi (Area Cetak) --- */}
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-lg print:shadow-none">
                {/* 1. Kop Surat */}
                <header className="flex justify-between items-center pb-6 border-b-2 border-black">
                    <div>
                        {/* Ganti dengan logo sekolah Anda */}
                        <img src="/assets/img/logo_ahibs_bs.png" alt="Logo Sekolah" className="h-16 w-auto"/>
                    </div>
                    <div className="text-right">
                        <h1 className="text-2xl font-bold text-gray-800">Pondok Pesantren Modern</h1>
                        <p className="text-sm text-gray-600">Jl. Pendidikan No. 1, Sleman, Sleman, Yogyakarta</p>
                        <p className="text-sm text-gray-600">Telp: (0283) 123-456 | Email: info@pesantrenmodern.id</p>
                    </div>
                </header>

                {/* 2. Judul dan Detail Transaksi */}
                <section className="mt-8">
                    <h2 className="text-center text-3xl font-bold tracking-wider uppercase">Bukti Pembayaran</h2>
                    <div className="mt-4 flex justify-between text-sm">
                        <p className="text-gray-600">No. Transaksi: <span className="font-semibold text-black">{data.transaksi.id}</span></p>
                        <p className="text-gray-600">Tanggal: <span className="font-semibold text-black">{data.transaksi.tanggal}</span></p>
                    </div>
                </section>

                {/* 3. Informasi Pendaftar */}
                <section className="mt-8">
                    <h3 className="font-bold text-gray-800">Informasi Pendaftar:</h3>
                    <div className="mt-2 text-sm grid grid-cols-2 gap-x-8 gap-y-1">
                        <div className="flex justify-between"><span className="text-gray-600">Nama Lengkap</span> <span className="font-semibold text-right">{data.pendaftar.nama}</span></div>
                        <div className="flex justify-between"><span className="text-gray-600">No. Pendaftaran</span> <span className="font-semibold text-right">{data.pendaftar.noPendaftaran}</span></div>
                        <div className="flex justify-between"><span className="text-gray-600">Program</span> <span className="font-semibold text-right">{data.pendaftar.program}</span></div>
                        <div className="flex justify-between"><span className="text-gray-600">Metode Pembayaran</span> <span className="font-semibold text-right">{data.transaksi.metode}</span></div>
                    </div>
                </section>

                {/* 4. Tabel Rincian Pembayaran */}
                <section className="mt-8">
                    <table className="w-full text-sm border-collapse border border-gray-400">
                        <thead className="bg-gray-100 print:bg-gray-100">
                            <tr>
                                <th className="border border-gray-400 p-2 text-left font-bold">Deskripsi</th>
                                <th className="border border-gray-400 p-2 text-center font-bold w-24">Kuantitas</th>
                                <th className="border border-gray-400 p-2 text-right font-bold w-40">Jumlah</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-400 p-2">Biaya Pendaftaran Santri Baru Tahun Ajaran 2025/2026</td>
                                <td className="border border-gray-400 p-2 text-center">1</td>
                                <td className="border border-gray-400 p-2 text-right">{formatRupiah(data.transaksi.total)}</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr className="bg-gray-100 print:bg-gray-100 font-bold">
                                <td colSpan={2} className="border border-gray-400 p-2 text-right">TOTAL</td>
                                <td className="border border-gray-400 p-2 text-right text-base">{formatRupiah(data.transaksi.total)}</td>
                            </tr>
                        </tfoot>
                    </table>
                </section>

                {/* 5. Konfirmasi LUNAS dan Tanda Tangan */}
                <section className="mt-8 flex justify-between items-start">
                    {/* Stempel LUNAS */}
                    <div className="relative">
                        <div className="border-4 border-green-600 text-green-600 font-bold text-4xl uppercase px-8 py-2 -rotate-12 transform">
                            Lunas
                        </div>
                    </div>

                    {/* Tanda Tangan */}
                    <div className="text-center text-sm">
                        <p>Hormat kami,</p>
                        <p className="mt-20 font-bold border-b border-black">( Bagian Keuangan )</p>
                        <p>Panitia Penerimaan Santri Baru</p>
                    </div>
                </section>

                <footer className="mt-12 pt-4 border-t text-center text-xs text-gray-500">
                    <p>Terima kasih telah melakukan pembayaran. Ini adalah bukti pembayaran yang sah.</p>
                    <p>www.pesantrenmodern.id</p>
                </footer>
            </div>
        </div>
    );
}