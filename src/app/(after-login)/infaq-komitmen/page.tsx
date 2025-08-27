// app/infaq-komitmen/page.tsx
'use client';

import { useState, useMemo } from 'react';
import { HeartHandshake, Info, Save } from 'lucide-react';

// Pilihan nominal infaq yang sudah ditentukan
const OPSI_INFAQ = [
    { value: '500000', label: 'Rp 500.000' },
    { value: '1000000', label: 'Rp 1.000.000' },
    { value: '1500000', label: 'Rp 1.500.000' },
    { value: '2000000', label: 'Rp 2.000.000' },
    { value: '2500000', label: 'Rp 2.500.000' },
];

export default function InfaqKomitmenPage() {
    const [selectedNominal, setSelectedNominal] = useState<string | null>(null);
    const [customNominal, setCustomNominal] = useState('');

    // Fungsi untuk memformat angka menjadi format Rupiah saat diketik
    const handleCustomNominalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = e.target.value.replace(/\D/g, ''); // Hapus semua selain angka
        setCustomNominal(rawValue);
    };

    const finalAmount = useMemo(() => {
        if (selectedNominal === 'custom') {
            return parseInt(customNominal, 10) || 0;
        }
        return parseInt(selectedNominal || '0', 10);
    }, [selectedNominal, customNominal]);
    
    const formatRupiah = (number: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(number);
    };

    const handleNominalSelect = (value: string) => {
        setSelectedNominal(value);
        if (value !== 'custom') {
            setCustomNominal(''); // Reset custom nominal jika memilih opsi lain
        }
    }
    
    const handleSubmit = () => {
      // Logika untuk menyimpan data komitmen infaq ke database
      console.log({
        type: 'INFAQ_PLEDGE',
        amount: finalAmount,
        status: 'pending_acceptance'
      });
      alert(`Terima kasih. Niat infaq Anda sebesar ${formatRupiah(finalAmount)} telah kami catat. Informasi pembayaran akan diberikan kemudian setelah pengumuman kelulusan.`);
      // Redirect ke halaman berikutnya atau halaman terima kasih
    }

    return (
        <div className="bg-slate-50 min-h-screen py-10 px-4">
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 animate-fade-in">
                
                {/* Header */}
                <div className="text-center mb-8">
                    <HeartHandshake className="mx-auto h-16 w-16 text-teal-500 mb-4" />
                    <h1 className="text-3xl font-bold text-gray-800">Komitmen Infaq Pembangunan</h1>
                    <p className="mt-2 text-gray-600">
                        Dengan mengisi formulir ini, Anda menyatakan niat untuk berinfaq yang akan digunakan untuk pembangunan dan pendidikan di lingkungan pesantren.
                    </p>
                </div>
                
                {/* Kotak Informasi Penting */}
                <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-800 p-4 rounded-r-lg mb-8 flex items-start gap-3">
                    <Info className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <div>
                        <h4 className="font-bold">Informasi Penting</h4>
                        <p className="text-sm">Ini adalah halaman komitmen infaq. Anda **tidak perlu membayar sekarang**. Tagihan infaq akan disertakan bersamaan dengan biaya daftar ulang setelah Anda dinyatakan **LULUS** seleksi.</p>
                    </div>
                </div>

                {/* Pilih Nominal */}
                <fieldset className="mb-8">
                    <legend className="text-lg font-semibold text-gray-800 mb-4">Pilih Nominal Komitmen Infaq</legend>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {OPSI_INFAQ.map(opsi => (
                            <label key={opsi.value} className={`block text-center cursor-pointer rounded-lg border-2 p-4 transition-all ${selectedNominal === opsi.value ? 'border-teal-500 ring-2 ring-teal-100' : 'border-gray-300 hover:border-teal-400'}`}>
                                <input type="radio" name="nominal" value={opsi.value} checked={selectedNominal === opsi.value} onChange={() => handleNominalSelect(opsi.value)} className="sr-only"/>
                                <span className="font-bold text-gray-800">{opsi.label}</span>
                            </label>
                        ))}
                         <label key="custom" className={`block text-center cursor-pointer rounded-lg border-2 p-4 transition-all ${selectedNominal === 'custom' ? 'border-teal-500 ring-2 ring-teal-100' : 'border-gray-300 hover:border-teal-400'}`}>
                            <input type="radio" name="nominal" value="custom" checked={selectedNominal === 'custom'} onChange={() => handleNominalSelect('custom')} className="sr-only"/>
                            <span className="font-bold text-gray-800">Lainnya</span>
                        </label>
                    </div>
                </fieldset>

                {/* Input untuk nominal kustom */}
                {selectedNominal === 'custom' && (
                    <div className="mb-8 animate-fade-in">
                        <label htmlFor="customNominal" className="block text-sm font-medium text-gray-700 mb-1">Masukkan Nominal Lain</label>
                        <div className="relative">
                           <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">Rp</span>
                           <input
                                type="text"
                                id="customNominal"
                                name="customNominal"
                                placeholder="Contoh: 150.000"
                                value={customNominal ? new Intl.NumberFormat('id-ID').format(parseInt(customNominal)) : ''}
                                onChange={handleCustomNominalChange}
                                className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                                autoFocus
                            />
                        </div>
                    </div>
                )}
                
                {/* Total yang Dipilih */}
                {finalAmount > 0 && (
                    <div className="animate-fade-in bg-slate-50 border p-4 rounded-lg mb-8 text-center">
                        <p className="text-sm text-gray-600">Anda berkomitmen untuk berinfaq sebesar:</p>
                        <p className="text-3xl font-bold text-gray-800">{formatRupiah(finalAmount)}</p>
                    </div>
                )}
                
                {/* Tombol Aksi */}
                <div className="mt-10">
                    <button
                        onClick={handleSubmit}
                        disabled={!finalAmount}
                        className="w-full py-3 rounded-xl bg-teal-600 text-white font-bold transition-all disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:bg-teal-700"
                    >
                        <Save className="h-5 w-5" /> Simpan Komitmen Infaq
                    </button>
                     
                </div>
            </div>
        </div>
    );
}