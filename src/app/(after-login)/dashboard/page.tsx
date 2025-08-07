// app/dashboard/page.tsx
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
    LayoutDashboard, User, FileText, Gift, CreditCard, Calendar, CheckCircle2, Loader, Clock, HelpCircle, Megaphone,
    CheckSquare
} from 'lucide-react';

export default function DashboardPage() {
    const router = useRouter();

    // --- Data ini seharusnya ditarik dari database untuk pengguna yang login ---
    const userData = {
        name: 'Ahmad Zaki',
        testNumber: 'PSB-2025-08-001',
        status: 'Pendaftaran Selesai, Menunggu Jadwal Ujian',
        progress: 80, // dalam persen
        infaqAmount: 1000000,
        timeline: [
            { id: 1, title: 'Pembuatan Akun & Pembayaran Biaya Daftar', date: '01 Agu 2025', status: 'completed' },
            { id: 2, title: 'Pengisian Formulir Pendaftaran', date: '02 Agu 2025', status: 'completed' },
            { id: 3, title: 'Komitmen Infaq & Pernyataan', date: '05 Agu 2025', status: 'completed' },
            { id: 4, title: 'Ujian Seleksi Masuk', date: '10 Jan 2026', status: 'active' },
            { id: 5, title: 'Pengumuman Kelulusan', date: '25 Jan 2026', status: 'upcoming' },
            { id: 6, title: 'Daftar Ulang', date: '26 Jan - 05 Feb 2026', status: 'upcoming' },
        ],
    };
    // ------------------------------------------------------------------------------------

    const formatRupiah = (number: number | bigint) => new Intl.NumberFormat('id-ID', {
        style: 'currency', currency: 'IDR', minimumFractionDigits: 0
    }).format(number);

    return (
        <div className="bg-slate-100 min-h-screen">
            <header className="bg-white shadow-sm sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                        <LayoutDashboard className="text-teal-600" />
                        Dashboard Peserta
                    </h1>
                    <button className="text-sm font-medium text-gray-600 hover:text-red-500">Logout</button>
                </div>
            </header>

            <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    
                    {/* Kolom Utama (Kiri) */}
                    <div className="lg:col-span-2 space-y-6">

                        {/* Kartu Selamat Datang & Status */}
                        <div className="bg-gradient-to-br from-teal-600 to-cyan-600 text-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold">Selamat Datang, {userData.name}!</h2>
                            <p className="mt-1 opacity-80">Status Pendaftaran Anda: <span className="font-semibold">{userData.status}</span></p>
                            <div className="w-full bg-white/20 rounded-full h-2.5 mt-4">
                                <div className="bg-white rounded-full h-2.5" style={{ width: `${userData.progress}%` }}></div>
                            </div>
                            <p className="text-right text-xs mt-1 opacity-90">{userData.progress}% Selesai</p>
                        </div>
                        
                        {/* Kartu Akses Cepat */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h3 className="font-bold text-lg text-gray-800 mb-4">Akses Cepat</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                <Link href="/cetak-formulir" className="p-4 bg-slate-50 rounded-xl hover:bg-teal-50 hover:shadow-md transition-all">
                                    <FileText className="mx-auto h-8 w-8 text-teal-600"/>
                                    <p className="text-sm font-semibold mt-2 text-gray-700">Cetak Formulir</p>
                                </Link>
                                <Link href="/infaq-komitmen" className="p-4 bg-slate-50 rounded-xl hover:bg-teal-50 hover:shadow-md transition-all">
                                    <Gift className="mx-auto h-8 w-8 text-teal-600"/>
                                    <p className="text-sm font-semibold mt-2 text-gray-700">Edit Infaq</p>
                                </Link>
                                <Link href="/persetujuan" className="p-4 bg-slate-50 rounded-xl hover:bg-teal-50 hover:shadow-md transition-all">
                                    <CheckSquare className="mx-auto h-8 w-8 text-teal-600"/>
                                    <p className="text-sm font-semibold mt-2 text-gray-700">Lihat Pernyataan</p>
                                </Link>
                                <Link href="/cetak-kartu" className="p-4 bg-slate-50 rounded-xl hover:bg-teal-50 hover:shadow-md transition-all">
                                    <CreditCard className="mx-auto h-8 w-8 text-teal-600"/>
                                    <p className="text-sm font-semibold mt-2 text-gray-700">Cetak Kartu</p>
                                </Link>
                            </div>
                        </div>

                        {/* Kartu Timeline PSB */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
                                <Calendar />
                                Timeline Proses PSB
                            </h3>
                            <div className="relative pl-4">
                                <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-gray-200"></div>
                                {userData.timeline.map(item => (
                                    <div key={item.id} className="relative pl-8 pb-8">
                                        <div className={`absolute top-1 left-4 -ml-1.5 h-3 w-3 rounded-full ${
                                            item.status === 'completed' ? 'bg-green-500' : item.status === 'active' ? 'bg-teal-500 animate-pulse' : 'bg-gray-300'
                                        }`}></div>
                                        <p className={`text-xs font-medium ${
                                            item.status === 'completed' ? 'text-green-600' : 'text-teal-600'
                                        }`}>{item.date}</p>
                                        <h4 className="font-semibold text-gray-800">{item.title}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Kolom Samping (Kanan) */}
                    <div className="space-y-6">
                        {/* Kartu Data Diri */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                             <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2"><User />Ringkasan Data</h3>
                             <div className="space-y-2 text-sm">
                                <p className="text-gray-500">No. Peserta: <span className="font-semibold text-gray-900">{userData.testNumber}</span></p>
                                <p className="text-gray-500">Nama: <span className="font-semibold text-gray-900">{userData.name}</span></p>
                             </div>
                        </div>
                        
                        {/* Kartu Infaq */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                             <h3 className="font-bold text-lg text-gray-800 mb-2 flex items-center gap-2"><Gift />Komitmen Infaq</h3>
                             <p className="text-3xl font-bold text-green-600">{formatRupiah(userData.infaqAmount)}</p>
                             <p className="text-xs text-gray-500 mt-1">Akan ditagihkan saat daftar ulang.</p>
                        </div>

                        {/* Kartu Pengumuman & Bantuan */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                             <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2"><Megaphone />Pengumuman</h3>
                             <p className="text-sm text-gray-600 bg-yellow-50 p-3 rounded-lg">Jadwal ujian seleksi akan dilaksanakan pada tanggal <span className="font-bold">10 Januari 2026</span>. Harap mempersiapkan diri.</p>
                             <hr className="my-4"/>
                             <h3 className="font-bold text-lg text-gray-800 mb-2 flex items-center gap-2"><HelpCircle />Butuh Bantuan?</h3>
                             <p className="text-sm text-gray-600">Hubungi panitia PSB di nomor <span className="font-semibold text-teal-700">0812-3456-7890</span>.</p>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}