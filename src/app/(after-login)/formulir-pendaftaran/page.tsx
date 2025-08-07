// app/formulir-pendaftaran/page.tsx
'use client';

import { useState } from 'react';
import { User, Users, School, HeartPulse, UploadCloud, Check, PenBox } from 'lucide-react';

// Tipe data untuk form
type FormData = {
    // Step 1
    namaLengkap?: string;
    nisn?: string;
    tempatLahir?: string;
    tanggalLahir?: string;
    jenisKelamin?: 'Laki-laki' | 'Perempuan';
    alamat?: string;
    // Step 2
    namaAyah?: string;
    pekerjaanAyah?: string;
    namaIbu?: string;
    pekerjaanIbu?: string;
    noTelpOrtu?: string;
    // Step 3
    asalSekolah?: string;
    tahunLulus?: string;
    riwayatPenyakit?: string;
    // Step 4
    fileKK?: File | null;
    fileAkta?: File | null;
    fileFoto?: File | null;
};

const steps = [
    { id: 1, name: 'Data Santri', icon: User },
    { id: 2, name: 'Data Orang Tua', icon: Users },
    { id: 3, name: 'Pendidikan & Kesehatan', icon: School },
    { id: 4, name: 'Unggah Dokumen', icon: UploadCloud },
    { id: 5, name: 'Konfirmasi', icon: Check },
];

export default function FormulirPendaftaranPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<FormData>({});
    const [errors, setErrors] = useState<Partial<FormData>>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;
        if (files && files.length > 0) {
            setFormData(prev => ({ ...prev, [name]: files[0] }));
        }
    };
    
    const validateStep = () => {
        const newErrors: Partial<FormData> = {};
        if (currentStep === 1) {
            if (!formData.namaLengkap) newErrors.namaLengkap = 'Nama lengkap wajib diisi.';
            if (!formData.nisn) newErrors.nisn = 'NISN wajib diisi.';
            if (!formData.alamat) newErrors.alamat = 'Alamat wajib diisi.';
        }
        if (currentStep === 2) {
            if (!formData.namaAyah) newErrors.namaAyah = 'Nama Ayah wajib diisi.';
            if (!formData.namaIbu) newErrors.namaIbu = 'Nama Ibu wajib diisi.';
            if (!formData.noTelpOrtu) newErrors.noTelpOrtu = 'No. Telepon wajib diisi.';
        }
        // Tambahkan validasi untuk step lain jika diperlukan
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const nextStep = () => {
        if (validateStep()) {
            if (currentStep < steps.length) {
                setCurrentStep(currentStep + 1);
            }
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };
    
    const goToStep = (step: number) => {
        if (step < currentStep) {
            setCurrentStep(step);
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Lakukan validasi akhir jika perlu
        console.log('Formulir Dikirim:', formData);
        alert('Selamat! Formulir pendaftaran Anda berhasil dikirim.');
        // Redirect atau tampilkan pesan sukses
    };

    // Komponen kecil untuk input field agar tidak repetitif
    const InputField = ({ label, name, value, onChange, error, type = 'text', required = false }: any) => (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label} {required && <span className="text-red-500">*</span>}</label>
            <input
                type={type}
                id={name}
                name={name}
                value={value || ''}
                onChange={onChange}
                className={`mt-1 block w-full px-3 py-2 bg-white border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm`}
            />
            {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
        </div>
    );
    
    const FileUploadField = ({ label, name, file, onChange, required = false }: any) => (
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
                <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                    <label htmlFor={name} className="relative cursor-pointer bg-white rounded-md font-medium text-teal-600 hover:text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-teal-500">
                        <span>{label}</span>
                        <input id={name} name={name} type="file" className="sr-only" onChange={onChange} />
                    </label>
                    <p className="pl-1">atau seret dan lepas</p>
                </div>
                {file ? (
                    <p className="text-xs text-green-600 font-semibold">{file.name}</p>
                ) : (
                    <p className="text-xs text-gray-500">PNG, JPG, PDF hingga 2MB</p>
                )}
            </div>
        </div>
    );


    return (
        <div className="bg-slate-50 min-h-screen py-10 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-center text-3xl font-bold text-gray-800 mb-2">Formulir Pendaftaran Santri Baru</h1>
                <p className="text-center text-gray-500 mb-8">Tahun Ajaran 2025/2026</p>

                <div className="bg-white rounded-2xl shadow-xl p-8">
                    {/* Stepper */}
                    <div className="flex items-center justify-between mb-8">
                        {steps.map((step, index) => (
                            <>
                                <div key={step.id} className="flex flex-col items-center">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${currentStep > step.id ? 'bg-teal-600 text-white' : currentStep === step.id ? 'bg-teal-100 text-teal-700 ring-4 ring-teal-200' : 'bg-gray-200 text-gray-500'}`}>
                                        {currentStep > step.id ? <Check size={24} /> : <step.icon size={24} />}
                                    </div>
                                    <p className={`mt-2 text-xs font-semibold ${currentStep >= step.id ? 'text-teal-700' : 'text-gray-500'}`}>{step.name}</p>
                                </div>
                                {index < steps.length - 1 && <div className={`flex-auto border-t-2 transition-colors duration-500 ${currentStep > step.id ? 'border-teal-600' : 'border-gray-200'}`}></div>}
                            </>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit}>
                        {/* Step 1: Data Santri */}
                        {currentStep === 1 && (
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                                <InputField label="Nama Lengkap" name="namaLengkap" value={formData.namaLengkap} onChange={handleInputChange} error={errors.namaLengkap} required />
                                <InputField label="NISN" name="nisn" value={formData.nisn} onChange={handleInputChange} error={errors.nisn} required />
                                <InputField label="Tempat Lahir" name="tempatLahir" value={formData.tempatLahir} onChange={handleInputChange} />
                                <InputField label="Tanggal Lahir" name="tanggalLahir" value={formData.tanggalLahir} onChange={handleInputChange} type="date" />
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Jenis Kelamin</label>
                                    <select name="jenisKelamin" value={formData.jenisKelamin || ''} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm">
                                        <option value="">Pilih...</option>
                                        <option value="Laki-laki">Laki-laki</option>
                                        <option value="Perempuan">Perempuan</option>
                                    </select>
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">Alamat Lengkap {errors.alamat && <span className="text-red-500">*</span>}</label>
                                    <textarea name="alamat" value={formData.alamat || ''} onChange={handleInputChange} rows={3} className={`mt-1 block w-full px-3 py-2 bg-white border ${errors.alamat ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm`}></textarea>
                                    {errors.alamat && <p className="mt-1 text-xs text-red-500">{errors.alamat}</p>}
                                </div>
                            </div>
                        )}
                        
                        {/* Step 2: Data Orang Tua */}
                        {currentStep === 2 && (
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                                <InputField label="Nama Ayah" name="namaAyah" value={formData.namaAyah} onChange={handleInputChange} error={errors.namaAyah} required/>
                                <InputField label="Pekerjaan Ayah" name="pekerjaanAyah" value={formData.pekerjaanAyah} onChange={handleInputChange} />
                                <InputField label="Nama Ibu" name="namaIbu" value={formData.namaIbu} onChange={handleInputChange} error={errors.namaIbu} required />
                                <InputField label="Pekerjaan Ibu" name="pekerjaanIbu" value={formData.pekerjaanIbu} onChange={handleInputChange} />
                                <InputField label="No. Telepon Orang Tua/Wali" name="noTelpOrtu" value={formData.noTelpOrtu} onChange={handleInputChange} error={errors.noTelpOrtu} required />
                            </div>
                        )}
                        
                        {/* Step 3: Riwayat Pendidikan & Kesehatan */}
                         {currentStep === 3 && (
                             <div className="space-y-6 animate-fade-in">
                                <InputField label="Asal Sekolah (SMP/MTs)" name="asalSekolah" value={formData.asalSekolah} onChange={handleInputChange}/>
                                <InputField label="Tahun Lulus" name="tahunLulus" value={formData.tahunLulus} onChange={handleInputChange} type="number"/>
                                 <div>
                                    <label className="block text-sm font-medium text-gray-700">Riwayat Penyakit (jika ada)</label>
                                    <textarea name="riwayatPenyakit" value={formData.riwayatPenyakit || ''} onChange={handleInputChange} rows={3} placeholder="Contoh: Alergi debu, Asma" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"></textarea>
                                </div>
                            </div>
                        )}
                        
                        {/* Step 4: Unggah Dokumen */}
                         {currentStep === 4 && (
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
                                 <FileUploadField label="Unggah Kartu Keluarga (KK)" name="fileKK" file={formData.fileKK} onChange={handleFileChange} />
                                 <FileUploadField label="Unggah Akta Kelahiran" name="fileAkta" file={formData.fileAkta} onChange={handleFileChange} />
                                 <FileUploadField label="Unggah Pas Foto 3x4" name="fileFoto" file={formData.fileFoto} onChange={handleFileChange} />
                            </div>
                        )}
                        
                        {/* Step 5: Konfirmasi */}
                        {currentStep === 5 && (
                             <div className="space-y-8 animate-fade-in">
                                {Object.keys(formData).length > 0 ? (
                                    steps.slice(0, 4).map(step => (
                                        <div key={step.id}>
                                            <div className="flex justify-between items-center mb-2">
                                                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2"><step.icon size={20}/> {step.name}</h3>
                                                <button type="button" onClick={() => goToStep(step.id)} className="text-sm text-teal-600 hover:underline flex items-center gap-1"><PenBox size={14}/> Edit</button>
                                            </div>
                                            <div className="bg-slate-50 rounded-lg p-4 text-sm grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                                                {Object.entries(formData).map(([key, value]) => {
                                                    // Logika untuk menampilkan data sesuai step-nya bisa dibuat lebih kompleks
                                                    // Ini versi sederhana
                                                    if (value && typeof value !== 'object') {
                                                        return <div key={key}><span className="text-gray-500">{key}:</span> <span className="font-semibold">{value.toString()}</span></div>
                                                    }
                                                    if (value && typeof value === 'object' && 'name' in value) {
                                                        return <div key={key}><span className="text-gray-500">{key}:</span> <span className="font-semibold">{value.name}</span></div>
                                                    }
                                                    return null;
                                                })}
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-center text-gray-500">Belum ada data yang diisi. Silakan kembali ke langkah sebelumnya.</p>
                                )}
                            </div>
                        )}


                        {/* Tombol Navigasi */}
                        <div className="mt-10 flex justify-between">
                            {currentStep > 1 && (
                                <button type="button" onClick={prevStep} className="px-6 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-colors">
                                    Sebelumnya
                                </button>
                            )}
                            <div className="flex-grow"></div> {/* Spacer */}
                            {currentStep < steps.length && (
                                <button type="button" onClick={nextStep} className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors">
                                    Selanjutnya
                                </button>
                            )}
                            {currentStep === steps.length && (
                                <button type="submit" className="px-6 py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors">
                                    Kirim Pendaftaran
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}