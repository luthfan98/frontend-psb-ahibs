// app/formulir-pendaftaran/page.tsx
'use client';

import { useState } from 'react';
import { User, Users, School, UploadCloud, Check, PenBox, PartyPopper } from 'lucide-react';

// Tipe data untuk semua field dalam form
type FormData = {
    // Step 1: Data Santri
    namaLengkap: string;
    nisn: string;
    tempatLahir: string;
    tanggalLahir: string;
    jenisKelamin: 'Laki-laki' | 'Perempuan' | '';
    alamat: string;
    // Step 2: Data Orang Tua
    namaAyah: string;
    pekerjaanAyah: string;
    namaIbu: string;
    pekerjaanIbu: string;
    noTelpOrtu: string;
    // Step 3: Pendidikan & Kesehatan
    asalSekolah: string;
    tahunLulus: string;
    riwayatPenyakit: string;
    // Step 4: Unggah Dokumen
    fileKK: File | null;
    fileAkta: File | null;
    fileFoto: File | null;
};

// Nilai awal untuk form data
const initialFormData: FormData = {
    namaLengkap: '',
    nisn: '',
    tempatLahir: '',
    tanggalLahir: '',
    jenisKelamin: '',
    alamat: '',
    namaAyah: '',
    pekerjaanAyah: '',
    namaIbu: '',
    pekerjaanIbu: '',
    noTelpOrtu: '',
    asalSekolah: '',
    tahunLulus: '',
    riwayatPenyakit: '',
    fileKK: null,
    fileAkta: null,
    fileFoto: null,
};

// Konfigurasi untuk setiap langkah pada stepper
const steps = [
    { id: 1, name: 'Data Santri', icon: User },
    { id: 2, name: 'Data Orang Tua', icon: Users },
    { id: 3, name: 'Pendidikan & Kesehatan', icon: School },
    { id: 4, name: 'Unggah Dokumen', icon: UploadCloud },
    { id: 5, name: 'Konfirmasi', icon: Check },
];

// Label yang akan ditampilkan untuk setiap field di halaman konfirmasi
const fieldLabels: { [K in keyof FormData]: string } = {
    namaLengkap: 'Nama Lengkap',
    nisn: 'NISN',
    tempatLahir: 'Tempat Lahir',
    tanggalLahir: 'Tanggal Lahir',
    jenisKelamin: 'Jenis Kelamin',
    alamat: 'Alamat Lengkap',
    namaAyah: 'Nama Ayah',
    pekerjaanAyah: 'Pekerjaan Ayah',
    namaIbu: 'Nama Ibu',
    pekerjaanIbu: 'Pekerjaan Ibu',
    noTelpOrtu: 'No. Telepon Ortu/Wali',
    asalSekolah: 'Asal Sekolah',
    tahunLulus: 'Tahun Lulus',
    riwayatPenyakit: 'Riwayat Penyakit',
    fileKK: 'Kartu Keluarga (KK)',
    fileAkta: 'Akta Kelahiran',
    fileFoto: 'Pas Foto 3x4',
};

// Pemetaan field ke setiap langkahnya, untuk validasi dan tampilan konfirmasi
const stepFields: Record<number, (keyof FormData)[]> = {
    1: ['namaLengkap', 'nisn', 'tempatLahir', 'tanggalLahir', 'jenisKelamin', 'alamat'],
    2: ['namaAyah', 'namaIbu', 'noTelpOrtu'],
    3: ['asalSekolah', 'tahunLulus'],
    4: ['fileKK', 'fileAkta', 'fileFoto'],
};


export default function FormulirPendaftaranPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // --- Handlers ---
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Hapus error ketika user mulai mengetik
        if (errors[name as keyof FormData]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };
    
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;
        if (files && files.length > 0) {
            setFormData(prev => ({ ...prev, [name]: files[0] }));
        }
    };

    // --- Validasi ---
    const validateStep = (step: number): boolean => {
        const newErrors: Partial<Record<keyof FormData, string>> = {};
        const fieldsToValidate = stepFields[step] || [];
        
        fieldsToValidate.forEach(field => {
            const value = formData[field];
            if (value === null || value === undefined || value === '') {
                newErrors[field] = `${fieldLabels[field]} wajib diisi.`;
            }
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // --- Navigasi ---
    const nextStep = () => {
        if (validateStep(currentStep)) {
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
        // Hanya bisa kembali ke step yang sudah dilewati
        if (step < currentStep) {
            setCurrentStep(step);
        }
    }

    // --- Submit ---
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Lakukan validasi akhir untuk semua field wajib jika perlu
        console.log('Formulir Dikirim:', formData);
        setIsSubmitted(true);
    };
    
    // --- Komponen-komponen Input ---

    // Interface untuk props InputField
    interface InputFieldProps {
        label: string;
        name: keyof FormData;
        value: string | undefined;
        onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
        error?: string;
        type?: string;
        required?: boolean;
        placeholder?: string;
    }

    const InputField = ({ label, name, value, onChange, error, type = 'text', required = false, placeholder='' }: InputFieldProps) => (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label} {required && <span className="text-red-500">*</span>}</label>
            <input
                type={type}
                id={name}
                name={name}
                value={value || ''}
                onChange={onChange}
                placeholder={placeholder}
                className={`mt-1 block w-full px-3 py-2 bg-white border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm`}
            />
            {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
        </div>
    );
    
    // Interface untuk props FileUploadField
    interface FileUploadFieldProps {
        label: string;
        name: keyof Pick<FormData, 'fileKK' | 'fileAkta' | 'fileFoto'>;
        file: File | null | undefined;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        required?: boolean;
    }

    const FileUploadField = ({ label, name, file, onChange, required = false }: FileUploadFieldProps) => (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{label} {required && <span className="text-red-500">*</span>}</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                    <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                        <label htmlFor={name} className="relative cursor-pointer bg-white rounded-md font-medium text-teal-600 hover:text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-teal-500">
                            <span>Pilih file</span>
                            <input id={name} name={name} type="file" className="sr-only" onChange={onChange} accept=".png,.jpg,.jpeg,.pdf"/>
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
        </div>
    );
    
    // --- Render ---

    if (isSubmitted) {
        return (
            <div className="bg-slate-50 min-h-screen flex items-center justify-center py-10 px-4">
                <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center animate-fade-in">
                    <PartyPopper className="mx-auto h-16 w-16 text-green-500" />
                    <h2 className="mt-4 text-2xl font-bold text-gray-800">Pendaftaran Berhasil!</h2>
                    <p className="mt-2 text-gray-600">
                        Terima kasih! Formulir pendaftaran Anda telah kami terima.
                        Informasi selanjutnya akan kami sampaikan melalui kontak yang Anda berikan.
                    </p>
                    <button 
                        onClick={() => {
                            // Reset form untuk pendaftaran baru
                            setIsSubmitted(false);
                            setFormData(initialFormData);
                            setCurrentStep(1);
                        }}
                        className="mt-6 w-full px-6 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
                    >
                        Daftarkan Santri Lain
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-slate-50 min-h-screen py-10 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-center text-3xl font-bold text-gray-800 mb-2">Formulir Pendaftaran Santri Baru</h1>
                <p className="text-center text-gray-500 mb-8">Tahun Ajaran 2025/2026</p>

                <div className="bg-white rounded-2xl shadow-xl p-8">
                    {/* Stepper */}
                    <div className="flex items-center justify-between mb-12">
                        {steps.map((step, index) => (
                            <div key={step.id} className="flex items-center w-full">
                                <div className="flex flex-col items-center cursor-pointer" onClick={() => goToStep(step.id)}>
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${currentStep > step.id ? 'bg-teal-600 text-white' : currentStep === step.id ? 'bg-teal-100 text-teal-700 ring-4 ring-teal-200' : 'bg-gray-200 text-gray-500'}`}>
                                        {currentStep > step.id ? <Check size={24} /> : <step.icon size={24} />}
                                    </div>
                                    <p className={`mt-2 text-xs text-center font-semibold transition-colors duration-300 ${currentStep >= step.id ? 'text-teal-700' : 'text-gray-500'}`}>{step.name}</p>
                                </div>
                                {index < steps.length - 1 && <div className={`flex-auto border-t-2 transition-colors duration-500 mx-4 ${currentStep > step.id ? 'border-teal-600' : 'border-gray-200'}`}></div>}
                            </div>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit}>
                        {/* Step 1: Data Santri */}
                        {currentStep === 1 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                                <InputField label="Nama Lengkap" name="namaLengkap" value={formData.namaLengkap} onChange={handleInputChange} error={errors.namaLengkap} required />
                                <InputField label="NISN" name="nisn" value={formData.nisn} onChange={handleInputChange} error={errors.nisn} required />
                                <InputField label="Tempat Lahir" name="tempatLahir" value={formData.tempatLahir} onChange={handleInputChange} error={errors.tempatLahir} required />
                                <InputField label="Tanggal Lahir" name="tanggalLahir" value={formData.tanggalLahir} onChange={handleInputChange} type="date" error={errors.tanggalLahir} required />
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Jenis Kelamin <span className="text-red-500">*</span></label>
                                    <select name="jenisKelamin" value={formData.jenisKelamin} onChange={handleInputChange} className={`mt-1 block w-full px-3 py-2 bg-white border ${errors.jenisKelamin ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm`}>
                                        <option value="">Pilih...</option>
                                        <option value="Laki-laki">Laki-laki</option>
                                        <option value="Perempuan">Perempuan</option>
                                    </select>
                                    {errors.jenisKelamin && <p className="mt-1 text-xs text-red-500">{errors.jenisKelamin}</p>}
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">Alamat Lengkap <span className="text-red-500">*</span></label>
                                    <textarea name="alamat" value={formData.alamat} onChange={handleInputChange} rows={3} className={`mt-1 block w-full px-3 py-2 bg-white border ${errors.alamat ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm`}></textarea>
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
                                 <InputField label="No. Telepon Orang Tua/Wali" name="noTelpOrtu" value={formData.noTelpOrtu} onChange={handleInputChange} error={errors.noTelpOrtu} required type="tel" placeholder="08123456789" />
                             </div>
                        )}
                        
                        {/* Step 3: Riwayat Pendidikan & Kesehatan */}
                         {currentStep === 3 && (
                             <div className="space-y-6 animate-fade-in">
                                 <InputField label="Asal Sekolah (SMP/MTs)" name="asalSekolah" value={formData.asalSekolah} onChange={handleInputChange} error={errors.asalSekolah} required/>
                                 <InputField label="Tahun Lulus" name="tahunLulus" value={formData.tahunLulus} onChange={handleInputChange} type="number" error={errors.tahunLulus} required placeholder="Contoh: 2024"/>
                                 <div>
                                     <label className="block text-sm font-medium text-gray-700">Riwayat Penyakit (jika ada)</label>
                                     <textarea name="riwayatPenyakit" value={formData.riwayatPenyakit} onChange={handleInputChange} rows={3} placeholder="Contoh: Alergi debu, Asma. Kosongkan jika tidak ada." className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"></textarea>
                                 </div>
                             </div>
                         )}
                        
                        {/* Step 4: Unggah Dokumen */}
                         {currentStep === 4 && (
                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
                                 <FileUploadField label="Kartu Keluarga (KK)" name="fileKK" file={formData.fileKK} onChange={handleFileChange} required/>
                                 <FileUploadField label="Akta Kelahiran" name="fileAkta" file={formData.fileAkta} onChange={handleFileChange} required/>
                                 <FileUploadField label="Pas Foto 3x4" name="fileFoto" file={formData.fileFoto} onChange={handleFileChange} required/>
                             </div>
                         )}
                        
                        {/* Step 5: Konfirmasi */}
                        {currentStep === 5 && (
                             <div className="space-y-8 animate-fade-in">
                                {steps.slice(0, 4).map(step => (
                                    <div key={step.id}>
                                        <div className="flex justify-between items-center mb-3 pb-2 border-b">
                                            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2"><step.icon size={20} className="text-teal-600"/> {step.name}</h3>
                                            <button type="button" onClick={() => goToStep(step.id)} className="text-sm text-teal-600 hover:underline flex items-center gap-1"><PenBox size={14}/> Edit</button>
                                        </div>
                                        <div className="bg-slate-50 rounded-lg p-4 text-sm grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                                            {(stepFields[step.id] || []).map(fieldKey => {
                                                const value = formData[fieldKey];
                                                if (value instanceof File) {
                                                    return <div key={fieldKey}><span className="text-gray-500">{fieldLabels[fieldKey]}:</span> <span className="font-semibold text-green-700">{value.name}</span></div>
                                                }
                                                if (value) {
                                                    return <div key={fieldKey}><span className="text-gray-500">{fieldLabels[fieldKey]}:</span> <span className="font-semibold">{value.toString()}</span></div>
                                                }
                                                return null;
                                            })}
                                        </div>
                                    </div>
                                ))}
                             </div>
                        )}


                        {/* Tombol Navigasi */}
                        <div className="mt-10 flex justify-between items-center">
                            <div>
                                {currentStep > 1 && (
                                    <button type="button" onClick={prevStep} className="px-6 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-colors">
                                        Sebelumnya
                                    </button>
                                )}
                            </div>
                            <div>
                                {currentStep < steps.length - 1 && (
                                    <button type="button" onClick={nextStep} className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors">
                                        Selanjutnya
                                    </button>
                                )}
                                {currentStep === steps.length - 1 && (
                                     <button type="button" onClick={nextStep} className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors">
                                        Lanjut ke Konfirmasi
                                    </button>
                                )}
                                {currentStep === steps.length && (
                                    <button type="submit" className="px-6 py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
                                        <Check size={18}/> Kirim Pendaftaran
                                    </button>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
