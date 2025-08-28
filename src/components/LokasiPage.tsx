"use client";

import { useState } from "react";
import { MapPin, Navigation, Phone, Clock, Car, Bus, Copy, Check, ExternalLink } from "lucide-react";

const LokasiPage = () => {
  const [copied, setCopied] = useState(false);

  const alamatLengkap = "Jl. Ngentak, Ngendak, Bangun Kerto, Kec. Turi, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55551, Indonesia";
  const mapsUrl = "https://www.google.com/maps/place/Jl.+Ngentak,+Ngendak,+Bangun+Kerto,+Kec.+Turi,+Kabupaten+Sleman,+Daerah+Istimewa+Yogyakarta+55551/@-7.649,110.3612,1078m/data=!3m1!1e3!4m6!3m5!1s0x2e7a5fc6d4944575:0x99486de3a2d9b14d!8m2!3d-7.6490408!4d110.3612186!16s%2Fg%2F11hzxjwxb2?hl=id&entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D";
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1978.4!2d110.3612186!3d-7.6490408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5fc6d4944575%3A0x99486de3a2d9b14d!2sJl.%20Ngentak%2C%20Ngendak%2C%20Bangun%20Kerto%2C%20Kec.%20Turi%2C%20Kabupaten%20Sleman%2C%20Daerah%20Istimewa%20Yogyakarta%2055551!5e0!3m2!1sid!2sid!4v1693234567890!5m2!1sid!2sid";

  const copyAlamat = async () => {
    try {
      await navigator.clipboard.writeText(alamatLengkap);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const jamOperasional = [
    { hari: "Senin - Jumat", jam: "07:00 - 15:00 WIB" },
    { hari: "Sabtu", jam: "07:00 - 12:00 WIB" },
    { hari: "Ahad", jam: "Tutup" }
  ];

  const aksesTransportasi = [
    {
      icon: Car,
      title: "Kendaraan Pribadi",
      desc: "Tersedia area parkir luas untuk mobil dan motor",
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: Bus,
      title: "Transportasi Umum",
      desc: "Akses mudah dari Terminal Jombor, dilanjut ojek/angkot",
      color: "bg-green-50 border-green-200"
    }
  ];

  const petunjukArah = [
    "Dari Yogyakarta: Arah Jalan Solo, belok kanan di Jombor menuju Turi",
    "Dari Solo: Arah Yogyakarta, belok kiri di Jombor menuju Turi",
    "Dari Turi: Ikuti jalan utama, lokasi berada di area Bangun Kerto",
    "Landmark: Dekat dengan area persawahan dan pemukiman warga"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <MapPin className="w-10 h-10" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Lokasi Kampus AHIBS
            </h1>
            <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
              Temukan lokasi kampus kami yang strategis dan mudah dijangkau di Sleman, Yogyakarta
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Alamat Section */}
        <div className="mb-12">
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Alamat Lengkap</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  {alamatLengkap}
                </p>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={copyAlamat}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors duration-300"
                  >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                    {copied ? "Tersalin!" : "Salin Alamat"}
                  </button>
                  
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    Buka di Google Maps
                  </a>
                  
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(alamatLengkap)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-300"
                  >
                    <Navigation size={16} />
                    Petunjuk Arah
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Maps Section */}
        <div className="mb-12">
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Peta Lokasi</h2>
              <p className="text-gray-600">Lihat lokasi kampus secara detail dan area sekitarnya</p>
            </div>
            <div className="relative h-96 md:h-[500px]">
              <iframe
                src={embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Lokasi AHIBS"
              />
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Jam Operasional */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Jam Operasional</h3>
            </div>
            
            <div className="space-y-3">
              {jamOperasional.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                  <span className="font-medium text-gray-700">{item.hari}</span>
                  <span className="text-gray-600">{item.jam}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-emerald-50 rounded-xl">
              <p className="text-sm text-emerald-700">
                <strong>Catatan:</strong> Untuk kunjungan di luar jam operasional, mohon konfirmasi terlebih dahulu melalui WhatsApp.
              </p>
            </div>
          </div>

          {/* Kontak */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Hubungi Kami</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">WhatsApp</p>
                <a 
                  href="https://wa.me/6281233785161"
                  className="text-green-600 hover:text-green-700 font-medium text-lg"
                >
                  +62 812-3378-5161
                </a>
              </div>
              
              <div>
                <p className="text-sm text-gray-500 mb-1">Website</p>
                <a 
                  href="https://ahibs.id"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  www.ahibs.id
                </a>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <a
                href="https://wa.me/6281233785161"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-xl font-medium transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                Chat WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Akses Transportasi */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              Akses Transportasi
            </h2>
            <p className="text-gray-600">Berbagai pilihan transportasi untuk mencapai kampus</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {aksesTransportasi.map((item, index) => (
              <div key={index} className={`p-6 rounded-2xl border ${item.color} transition-all duration-300 hover:shadow-md`}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <item.icon className="w-6 h-6 text-gray-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Petunjuk Arah */}
        <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Petunjuk Arah</h3>
          <div className="space-y-4">
            {petunjukArah.map((petunjuk, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  {index + 1}
                </div>
                <p className="text-gray-700 flex-1">{petunjuk}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LokasiPage;