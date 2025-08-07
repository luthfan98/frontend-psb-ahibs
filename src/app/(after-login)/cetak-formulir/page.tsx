'use client';

import { useRouter } from 'next/navigation';
import { Printer, ArrowLeft } from 'lucide-react';

// --- TIPE DATA ---
interface FormulirData {
  jenisPendaftaran: string;
  asalSekolah: string;
  nomorPesertaUjian: string;
  nomorSeriIjazah: string;

  namaLengkap: string;
  jenisKelamin: string;
  nisn: string;
  nik: string;
  tempatLahir: string;
  tanggalLahir: string;
  nomorAktaLahir: string;
  agama: string;
  kewarganegaraan: string;
  berkebutuhanKhusus: string;

  alamatJalan: string;
  rt: string;
  rw: string;
  namaDusun: string;
  desaKelurahan: string;
  kecamatan: string;
  kodePos: string;
  tempatTinggal: string;
  modaTransportasi: string;
  nomorTelepon: string;
  email: string;
  tinggiBadan: string;
  beratBadan: string;
  jumlahSaudara: string;
  anakKe: string;
  penerimaKIP: string;
  nomorKIP: string;

  namaAyah: string;
  nikAyah: string;
  tahunLahirAyah: string;
  pendidikanAyah: string;
  pekerjaanAyah: string;
  penghasilanAyah: string;

  namaIbu: string;
  nikIbu: string;
  tahunLahirIbu: string;
  pendidikanIbu: string;
  pekerjaanIbu: string;
  penghasilanIbu: string;

  namaWali: string;
  nikWali: string;
  pekerjaanWali: string;
}

// --- KOMPONEN FIELD ---
const DataField = ({ label, value }: { label: string; value: string }) => (
  <div className="py-2">
    <p className="text-xs text-gray-500">{label}</p>
    <p className="font-semibold text-gray-800">{value || '-'}</p>
  </div>
);

// --- KOMPONEN PRATINJAU FORMULIR ---
const FormulirPreview = ({ data }: { data: FormulirData }) => (
  <div id="formulir-cetak" className="bg-white p-8 font-sans text-sm">
    <header className="text-center border-b-2 border-black pb-4">
      <h1 className="text-xl font-bold uppercase">Formulir Pendaftaran Peserta Didik Baru</h1>
      <h2 className="text-lg font-medium uppercase">Pondok Pesantren Al Hadharah Islamic Boarding School (AHIBS)</h2>
      <p className="text-sm">Tahun Ajaran 2025/2026</p>
    </header>

    <main className="mt-6 space-y-6">
      {/* --- A --- */}
      <section>
        <h3 className="font-bold text-base bg-gray-100 p-2 rounded-md">A. DATA REGISTRASI</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 mt-2">
          <DataField label="Jenis Pendaftaran" value={data.jenisPendaftaran} />
          <DataField label="Nomor Peserta Ujian" value={data.nomorPesertaUjian} />
          <DataField label="Asal Sekolah" value={data.asalSekolah} />
          <DataField label="Nomor Seri Ijazah" value={data.nomorSeriIjazah} />
        </div>
      </section>

      {/* --- B --- */}
      <section>
        <h3 className="font-bold text-base bg-gray-100 p-2 rounded-md">B. IDENTITAS CALON PESERTA DIDIK</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 mt-2">
          <DataField label="Nama Lengkap" value={data.namaLengkap} />
          <DataField label="Jenis Kelamin" value={data.jenisKelamin} />
          <DataField label="NISN" value={data.nisn} />
          <DataField label="NIK" value={data.nik} />
          <DataField label="Tempat Lahir" value={data.tempatLahir} />
          <DataField label="Tanggal Lahir" value={data.tanggalLahir} />
          <DataField label="No. Registrasi Akta Lahir" value={data.nomorAktaLahir} />
          <DataField label="Agama" value={data.agama} />
          <DataField label="Kewarganegaraan" value={data.kewarganegaraan} />
          <DataField label="Berkebutuhan Khusus" value={data.berkebutuhanKhusus} />
        </div>
      </section>

      {/* --- C --- */}
      <section>
        <h3 className="font-bold text-base bg-gray-100 p-2 rounded-md">C. DATA RINCI ALAMAT & PERIODIK</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 mt-2">
          <div className="lg:col-span-3">
            <DataField label="Alamat Jalan" value={data.alamatJalan} />
          </div>
          <DataField label="RT / RW" value={`${data.rt} / ${data.rw}`} />
          <DataField label="Dusun" value={data.namaDusun} />
          <DataField label="Desa / Kelurahan" value={data.desaKelurahan} />
          <DataField label="Kecamatan" value={data.kecamatan} />
          <DataField label="Kode Pos" value={data.kodePos} />
          <DataField label="Tempat Tinggal" value={data.tempatTinggal} />
          <DataField label="Moda Transportasi" value={data.modaTransportasi} />
          <DataField label="Nomor HP" value={data.nomorTelepon} />
          <DataField label="Email" value={data.email} />
          <DataField label="Tinggi / Berat Badan" value={`${data.tinggiBadan} cm / ${data.beratBadan} kg`} />
          <DataField label="Jumlah Saudara Kandung" value={data.jumlahSaudara} />
          <DataField label="Anak ke-" value={data.anakKe} />
          <DataField label="Penerima KIP" value={data.penerimaKIP} />
          {data.penerimaKIP === 'Ya' && <DataField label="Nomor KIP" value={data.nomorKIP} />}
        </div>
      </section>

      {/* --- D --- */}
      <section>
        <h3 className="font-bold text-base bg-gray-100 p-2 rounded-md">D. DATA ORANG TUA / WALI</h3>

        {/* Ayah */}
        <div className="mt-4">
          <h4 className="font-semibold text-gray-700 border-b pb-1">Data Ayah Kandung</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 mt-2">
            <DataField label="Nama Ayah" value={data.namaAyah} />
            <DataField label="NIK Ayah" value={data.nikAyah} />
            <DataField label="Tahun Lahir" value={data.tahunLahirAyah} />
            <DataField label="Pendidikan" value={data.pendidikanAyah} />
            <DataField label="Pekerjaan" value={data.pekerjaanAyah} />
            <DataField label="Penghasilan" value={data.penghasilanAyah} />
          </div>
        </div>

        {/* Ibu */}
        <div className="mt-4">
          <h4 className="font-semibold text-gray-700 border-b pb-1">Data Ibu Kandung</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 mt-2">
            <DataField label="Nama Ibu" value={data.namaIbu} />
            <DataField label="NIK Ibu" value={data.nikIbu} />
            <DataField label="Tahun Lahir" value={data.tahunLahirIbu} />
            <DataField label="Pendidikan" value={data.pendidikanIbu} />
            <DataField label="Pekerjaan" value={data.pekerjaanIbu} />
            <DataField label="Penghasilan" value={data.penghasilanIbu} />
          </div>
        </div>

        {/* Wali */}
        <div className="mt-4">
          <h4 className="font-semibold text-gray-700 border-b pb-1">Data Wali (Jika Ada)</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 mt-2">
            <DataField label="Nama Wali" value={data.namaWali} />
            <DataField label="NIK Wali" value={data.nikWali} />
            <DataField label="Pekerjaan Wali" value={data.pekerjaanWali} />
          </div>
        </div>
      </section>
    </main>

    <footer className="mt-10 pt-6 border-t-2 border-black text-xs text-gray-700">
      <p className="mb-10">Dengan ini saya menyatakan bahwa data yang saya isikan dalam formulir ini adalah benar dan dapat dipertanggungjawabkan.</p>
      <div className="flex justify-end">
        <div className="text-center">
          <p>
            Sleman,{' '}
            {new Date().toLocaleDateString('id-ID', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>
          <p>Orang Tua / Wali Pendaftar,</p>
          <div className="h-20" />
          <p className="font-bold border-t border-gray-500 pt-1">
            ( {data.namaAyah || data.namaIbu || data.namaWali} )
          </p>
        </div>
      </div>
    </footer>
  </div>
);

// --- HALAMAN UTAMA ---
export default function CetakFormulirPage() {
  const router = useRouter();

  const mockData: FormulirData = {
    jenisPendaftaran: 'Siswa Baru',
    asalSekolah: 'SMP Negeri 1 Sleman',
    nomorPesertaUjian: '2-25-12-04-0015-0021-9',
    nomorSeriIjazah: 'DN-02 D-D/13 0012345',
    namaLengkap: 'Ahmad Zaki',
    jenisKelamin: 'Laki-laki',
    nisn: '0098765432',
    nik: '3301021507090001',
    tempatLahir: 'Sleman',
    tanggalLahir: '2009-07-15',
    nomorAktaLahir: 'AL-12345/2009',
    agama: 'Islam',
    kewarganegaraan: 'Indonesia (WNI)',
    berkebutuhanKhusus: 'Tidak',
    alamatJalan: 'Jl. Merdeka No. 45',
    rt: '003',
    rw: '005',
    namaDusun: 'Krajan',
    desaKelurahan: 'Sleman',
    kecamatan: 'Sleman',
    kodePos: '52194',
    tempatTinggal: 'Bersama orang tua',
    modaTransportasi: 'Kendaraan pribadi',
    nomorTelepon: '081234567891',
    email: 'ahmad.zaki@email.com',
    tinggiBadan: '165',
    beratBadan: '52',
    jumlahSaudara: '2',
    anakKe: '1',
    penerimaKIP: 'Tidak',
    nomorKIP: '-',
    namaAyah: 'Budi Santoso',
    nikAyah: '3301021004800002',
    tahunLahirAyah: '1980',
    pendidikanAyah: 'D4/S1',
    pekerjaanAyah: 'Karyawan Swasta',
    penghasilanAyah: 'Rp. 5.000.000 - Rp. 20.000.000',
    namaIbu: 'Siti Aminah',
    nikIbu: '3301025008820003',
    tahunLahirIbu: '1982',
    pendidikanIbu: 'SMA Sederajat',
    pekerjaanIbu: 'Ibu Rumah Tangga',
    penghasilanIbu: 'Tidak Berpenghasilan',
    namaWali: '',
    nikWali: '',
    pekerjaanWali: '',
  };

  const handlePrint = () => {
    const element = document.getElementById('formulir-cetak');
    if (!element) return;

    let printArea = document.getElementById('area-cetak');
    if (!printArea) {
      printArea = document.createElement('div');
      printArea.id = 'area-cetak';
      document.body.appendChild(printArea);
    }

    printArea.innerHTML = element.innerHTML;
    window.print();
    printArea.innerHTML = '';
  };

  return (
    <div className="bg-slate-100 py-10 px-4 font-sans">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Cetak Formulir Pendaftaran</h1>
          <p className="mt-2 text-gray-600">
            Ini adalah salinan dari data yang telah Anda kirimkan. Silakan cetak untuk arsip Anda.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg flex justify-between items-center">
          <button
            onClick={() => router.push('/dashboard')}
            className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
          >
            <ArrowLeft size={18} /> Kembali ke Dashboard
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700"
          >
            <Printer size={18} /> Cetak Formulir
          </button>
        </div>

        {/* Area Pratinjau Formulir */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <FormulirPreview data={mockData} />
        </div>
      </div>
    </div>
  );
}
