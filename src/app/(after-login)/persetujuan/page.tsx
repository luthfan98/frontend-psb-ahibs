// app/persetujuan/page.tsx
'use client';

import { useState } from 'react';
import { Printer, CheckSquare, Square } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function PersetujuanGabunganPage() {
    const router = useRouter();

    // --- Data ini seharusnya ditarik dari state/database ---
    const mockData = {
        parentName: 'Budi Santoso',
        studentName: 'Ahmad Zaki',
        studentGender: 'Putra',
        infaqAmount: 1000000,
    };
    // --------------------------------------------------------

    const [pernyataanUmumSetuju, setPernyataanUmumSetuju] = useState(false);
    const [selectedSpp, setSelectedSpp] = useState<string | null>(null);

    const biayaAwal = mockData.studentGender === 'Putra' ? 15800000 : 16100000;
    const formatRupiah = (number: number) => new Intl.NumberFormat('id-ID', {
        style: 'currency', currency: 'IDR', minimumFractionDigits: 0
    }).format(number);

    const handleCetak = () => {
        if (pernyataanUmumSetuju && selectedSpp) {
            // Navigasi ke halaman cetak sambil membawa data pilihan SPP via query params
            router.push(`/cetak-pernyataan?spp=${selectedSpp}`);
        }
    };

    return (
        <div className="bg-slate-50 py-10 px-4 font-sans">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Persetujuan & Komitmen Orang Tua/Wali</h1>
                    <p className="mt-2 text-gray-600">Mohon baca dengan saksama dan setujui kedua pernyataan di bawah ini untuk melanjutkan.</p>
                </div>

                {/* --- KOTAK 1: SURAT PERNYATAAN ORANG TUA (NON-FINANSIAL) --- */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                    <h2 className="text-xl font-bold text-center uppercase">Surat Pernyataan Orang Tua/Wali Santri</h2>
                    <h3 className="text-lg font-bold text-center uppercase mb-6">Pondok Pesantren Al Hadharah Islamic Boarding School (AHIBS) Yogyakarta</h3>
                    
                    <p className="mb-4">Setelah anak saya dinyatakan lulus ujian seleksi masuk Pondok Pesantren Al Hadharah Islamic Boarding School (AHIBS) Yogyakarta, maka dengan ini saya menyatakan:</p>
                    <ol className="list-decimal list-inside space-y-3 text-gray-700 text-sm">
                        <li>Menyerahkan sepenuhnya anak saya untuk dididik dan dibina sesuai visi dan misi pesantren.</li>
                        <li>Menyetujui dan percaya dengan kebijakan pesantren terkait program, pendidikan, kepesantrenan dan aturan yang berlaku di pesantren.</li>
                        <li>Bersedia menjalin komunikasi yang baik dengan pesantren menyangkut perkembangan anak saya pada saat berada di pesantren dan memberikan bimbingan kepada anak saya ketika berada di rumah.</li>
                        <li>Bersedia menyelesaikan semua administrasi pendidikan, baik berupa keuangan maupun perlengkapan yang dibutuhkan anak saya selama belajar di pesantren.</li>
                        <li>Apabila mengundurkan diri sebelum masuk pesantren, maka biaya awal masuk dikembalikan sebesar 50% dari total biaya, dan jika mengundurkan diri setelah santri masuk pesantren, maka akan dikembalikan berupa barang yang melekat pada anak (baju, buku, Kasur dan bantal).</li>
                        <li>Akan mengedepankan komunikasi dan tabayun/klarifikasi apa bila terjadi permasalahan dan tidak melibatkan pihak luar pesantren (aparat hukum, LSM, Ormas) dalam menyelesaikan urusan dengan pesantren dan menyelesaikan dengan cara kekeluargaan (tidak menuntut jalur hukum) serta tidak menggunakan media masa maupun media sosial (WA, Facebook, IG, TikTok, dll) dalam setiap mensikapi permasalahan yang terjadi di pesantren.</li>
                        <li>Bersedia menerima segala konsekuensi/sanksi dalam proses pendidikan anak saya yang diberikan pondok akibat dari kesalahan.</li>
                        <li>Bersedia melaksanakan keputusan dan ketentuan yang ditetapkan oleh pesantren berkaitan dengan kelancaran proses pendidikan anak saya.</li>
                    </ol>

                    <div className="mt-8 border-t pt-6">
                        <label className="flex items-start gap-3 cursor-pointer">
                            <input type="checkbox" checked={pernyataanUmumSetuju} onChange={(e) => setPernyataanUmumSetuju(e.target.checked)} className="sr-only"/>
                            {pernyataanUmumSetuju ? <CheckSquare className="h-6 w-6 text-teal-600 flex-shrink-0 mt-0.5"/> : <Square className="h-6 w-6 text-gray-400 flex-shrink-0 mt-0.5"/>}
                            <span className="text-gray-800">
                                <span className="font-bold">Saya telah membaca, memahami, dan menyetujui</span> seluruh poin dalam Surat Pernyataan Orang Tua di atas dengan penuh kesadaran.
                            </span>
                        </label>
                    </div>
                </div>

                {/* --- KOTAK 2: SURAT PERNYATAAN PEMBAYARAN (FINANSIAL) --- */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <h2 className="text-xl font-bold text-center uppercase">Surat Pernyataan Kesanggupan Pembayaran</h2>
                    <h3 className="text-lg font-bold text-center uppercase mb-6">Pondok Pesantren Al Hadharah Islamic Boarding School (AHIBS) Yogyakarta</h3>
                    <p className="mb-4">Menyatakan bahwa saya bertanggung jawab penuh terhadap biaya Pendidikan anak saya dan sanggup untuk:</p>
                    
                    <ul className="list-disc list-inside space-y-3 text-gray-700 text-sm">
                        <li>Membayar biaya awal masuk sebesar: <span className="font-bold">{formatRupiah(biayaAwal)} ({mockData.studentGender})</span>.</li>
                        <li>Membayar pengembangan dan Pembangunan pesantren sebesar <span className="font-bold">{formatRupiah(mockData.infaqAmount)}</span> dibayarkan 1 kali di awal tahun.</li>
                        <li>Membayar biaya awal masuk setelah dinyatakan diterima pada waktu yang ditentukan oleh pesantren.</li>
                        <li className="font-bold">Membayar seluruh biaya Pendidikan/SPP sejumlah:</li>
                    </ul>

                    <div className="pl-8 mt-2 space-y-2">
                         <p className="text-xs italic text-gray-500">(ceklist pada pilihan kesanggupan)</p>
                         <label className="flex items-center gap-3 cursor-pointer">
                            <input type="radio" name="spp" value="15000000" onChange={(e) => setSelectedSpp(e.target.value)} />
                            <span>{formatRupiah(15000000)}/tahun</span>
                         </label>
                         <label className="flex items-center gap-3 cursor-pointer">
                            <input type="radio" name="spp" value="13680000" onChange={(e) => setSelectedSpp(e.target.value)} />
                            <span>{formatRupiah(13680000)}/tahun</span>
                         </label>
                         <label className="flex items-center gap-3 cursor-pointer">
                            <input type="radio" name="spp" value="10080000" onChange={(e) => setSelectedSpp(e.target.value)} />
                            <span>{formatRupiah(10080000)}/tahun</span>
                         </label>
                    </div>
                </div>

                {/* Tombol Aksi Final */}
                <div className="mt-8">
                     <button
                        onClick={handleCetak}
                        disabled={!pernyataanUmumSetuju || !selectedSpp}
                        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-green-600 text-white font-bold transition-all disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-green-700"
                    >
                        <Printer size={20} /> Setuju & Lanjut ke Halaman Cetak
                    </button>
                </div>
            </div>
        </div>
    );
}