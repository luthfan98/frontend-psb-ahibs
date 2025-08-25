'use client';

import { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Printer, ArrowLeft, ArrowRight } from 'lucide-react';

// Define data structure
interface SuratData {
  parentName: string;
  parentAddress: string;
  parentPhone: string;
  studentName: string;
  studentDob: string;
  studentGender: string;
  testNumber: string;
  infaqAmount: number;
  biayaAwal: number;
}

// Komponen Surat Pernyataan Orang Tua
const SuratPernyataanOrangTua = ({ data, tanggal }: { data: SuratData; tanggal: string }) => (
  <div id="dokumen-satu" className="font-serif bg-white text-black p-10">
    <header className="text-center">
      <h1 className="text-lg font-bold uppercase">SURAT PERNYATAAN ORANG TUA/WALI SANTRI</h1>
      <h2 className="text-lg font-bold uppercase">PONDOK PESANTREN AL HADHARAH ISLAMIC BOARDING SCHOOL (AHIBS) YOGYAKARTA</h2>
      <p className="text-2xl my-4">بِسْمِ اللهِ الرَّحْمنِ الرَّحِيمِ</p>
    </header>
    <main className="mt-8 text-sm">
      <p>Yang bertanda tangan di bawah ini, saya:</p>
      <table className="w-full my-2"><tbody>
        <tr><td className="w-40">Nama</td><td>: {data.parentName}</td></tr>
        <tr><td className="w-40 align-top">Alamat lengkap</td><td className="align-top">: {data.parentAddress}</td></tr>
        <tr><td className="w-40">Nomor HP.</td><td>: {data.parentPhone}</td></tr>
      </tbody></table>
      <p>Adalah orang tua / wali dari calon santri:</p>
      <table className="w-full my-2"><tbody>
        <tr><td className="w-40">Nama Anak</td><td>: {data.studentName}</td></tr>
        <tr><td className="w-40">Tempat, tanggal lahir</td><td>: {data.studentDob}</td></tr>
        <tr><td className="w-40">Nomor peserta tes</td><td>: {data.testNumber}</td></tr>
      </tbody></table>
      <p className="mt-6">Setelah anak saya dinyatakan lulus ujian seleksi, maka dengan ini saya menyatakan:</p>
      <ol className="list-decimal list-outside ml-6 space-y-1 mt-4 leading-relaxed">
        <li>Menyerahkan sepenuhnya anak saya untuk dididik dan dibina sesuai visi dan misi pesantren.</li>
        <li>Menyetujui dan percaya dengan kebijakan pesantren terkait program, pendidikan, kepesantrenan dan aturan yang berlaku di pesantren.</li>
        <li>Bersedia menjalin komunikasi yang baik dengan pesantren.</li>
        <li>Bersedia menyelesaikan semua administrasi pendidikan.</li>
        <li>Apabila mengundurkan diri sebelum masuk pesantren, biaya awal masuk dikembalikan 50%, dan jika setelah masuk, akan dikembalikan berupa barang.</li>
        <li>Akan mengedepankan komunikasi dan tabayun/klarifikasi bila terjadi permasalahan.</li>
        <li>Bersedia menerima segala konsekuensi/sanksi yang diberikan pondok akibat dari kesalahan.</li>
        <li>Bersedia melaksanakan keputusan dan ketentuan yang ditetapkan oleh pesantren.</li>
      </ol>
    </main>
    <footer className="mt-12 flex justify-end">
      <div className="text-center text-sm">
        <p>{`Sleman, ${tanggal}`}</p>
        <p>Orang Tua / Wali Santri,</p>
        <div className="h-20 w-32 flex items-center justify-center my-2 text-gray-400 text-xs border-2 border-dashed">Materai 10.000</div>
        <p className="font-bold">( {data.parentName} )</p>
      </div>
    </footer>
  </div>
);

// Komponen Surat Pernyataan Pembayaran
const SuratPernyataanPembayaran = ({
  data,
  tanggal,
  spp,
  formatRupiah,
}: {
  data: SuratData;
  tanggal: string;
  spp: string | null;
  formatRupiah: (num: number) => string;
}) => (
  <div id="dokumen-dua" className="font-serif bg-white text-black p-10">
    <header className="text-center">
      <h1 className="text-lg font-bold uppercase">SURAT PERNYATAAN KESANGGUPAN PEMBAYARAN</h1>
      <h2 className="text-lg font-bold uppercase">PONDOK PESANTREN AL HADHARAH ISLAMIC BOARDING SCHOOL (AHIBS) YOGYAKARTA</h2>
    </header>
    <main className="mt-8 text-sm">
      <p>
        Yang bertanda tangan di bawah ini, saya: <span className="font-bold">{data.parentName}</span>, orang tua dari calon santri bernama <span className="font-bold">{data.studentName}</span>.
      </p>
      <p className="mt-6">Menyatakan bahwa saya bertanggung jawab penuh terhadap biaya Pendidikan dan sanggup untuk:</p>
      <ol className="list-decimal list-outside ml-6 space-y-2 mt-4 leading-relaxed">
        <li>
          Membayar biaya awal masuk sebesar: <span className="font-bold">{formatRupiah(data.biayaAwal)} ({data.studentGender})</span>.
        </li>
        <li>
          <p>Membayar seluruh biaya Pendidikan/SPP sejumlah:</p>
          <div className="pl-4 font-bold">
            {spp ? `${formatRupiah(parseInt(spp))}/tahun` : 'Belum Dipilih'}
          </div>
        </li>
        <li>Membayar biaya awal masuk setelah dinyatakan diterima pada waktu yang ditentukan.</li>
        <li>
          Membayar pengembangan dan Pembangunan pesantren sebesar <span className="font-bold">{formatRupiah(data.infaqAmount)}</span>.
        </li>
      </ol>
    </main>
    <footer className="mt-12 flex justify-end">
      <div className="text-center text-sm">
        <p>{`Sleman, ${tanggal}`}</p>
        <p>Orang Tua / Wali Santri,</p>
        <div className="h-20 w-32 flex items-center justify-center my-2 text-gray-400 text-xs border-2 border-dashed">Materai 10.000</div>
        <p className="font-bold">( {data.parentName} )</p>
      </div>
    </footer>
  </div>
);

// Komponen utama
function CetakPernyataanContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedSpp = searchParams.get('spp');

  const mockData: SuratData = {
    parentName: 'Budi Santoso',
    parentAddress: 'Jl. Merdeka No. 45, Sleman, Sleman, Yogyakarta',
    parentPhone: '081233785161',
    studentName: 'Ahmad Zaki',
    studentDob: 'Sleman, 15 Juli 2009',
    studentGender: 'Putra',
    testNumber: 'PSB-2025-08-001',
    infaqAmount: 1000000,
    biayaAwal: 15800000,
  };

  const tanggalSurat = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formatRupiah = (number: number): string =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(number);

  const handlePrint = (elementId: string) => {
    const element = document.getElementById(elementId);
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
    <div className="bg-slate-50 py-10 px-4 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Pusat Dokumen Pernyataan</h1>
          <p className="mt-2 text-gray-600">Silakan tinjau dan cetak dokumen-dokumen penting di bawah ini.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gray-50 flex justify-between items-center">
            <h3 className="font-bold text-lg text-gray-800">Surat Pernyataan Orang Tua/Wali</h3>
            <button onClick={() => handlePrint('dokumen-satu')} className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg shadow-sm hover:bg-teal-700">
              <Printer size={16} /> Cetak Surat Ini
            </button>
          </div>
          <div className="p-4 border-t">
            <SuratPernyataanOrangTua data={mockData} tanggal={tanggalSurat} />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gray-50 flex justify-between items-center">
            <h3 className="font-bold text-lg text-gray-800">Surat Pernyataan Kesanggupan Pembayaran</h3>
            <button onClick={() => handlePrint('dokumen-dua')} className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg shadow-sm hover:bg-teal-700">
              <Printer size={16} /> Cetak Surat Ini
            </button>
          </div>
          <div className="p-4 border-t">
            <SuratPernyataanPembayaran data={mockData} tanggal={tanggalSurat} spp={selectedSpp} formatRupiah={formatRupiah} />
          </div>
        </div>

        <div className="flex justify-between items-center pt-6">
          <button onClick={() => router.back()} className="flex items-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-lg shadow-sm hover:bg-gray-100">
            <ArrowLeft size={18} /> Kembali
          </button>
          <button onClick={() => alert("Lanjut ke tahap berikutnya...")} className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-bold rounded-lg shadow-lg hover:bg-green-700">
            Lanjutkan ke Tahap Berikutnya <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

// Export utama
export default function CetakPernyataanPageWrapper() {
  return (
    <Suspense fallback={<div>Loading Preview...</div>}>
      <CetakPernyataanContent />
    </Suspense>
  );
}
