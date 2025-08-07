'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DaftarPage() {
  const [nama, setNama] = useState('');
  const [gender, setGender] = useState('');
  const [step, setStep] = useState(1);
  const [info, setInfo] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [otp, setOtp] = useState('');

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Background Image + Blur */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/img/back.png"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 backdrop-blur-sm bg-black/30" />
      </div>

      {/* Form Wrapper */}
      <motion.div
        className="relative z-10 w-full max-w-md w-[90%] p-6 sm:p-8 rounded-2xl shadow-xl bg-white/10 border border-white/20 backdrop-blur-lg"
        style={{ background: 'rgba(208, 255, 208, 0.2)' }}
      >
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              {/* Logo */}
              <div className="flex justify-center mb-6">
                <div className="w-[100px] sm:w-[120px]">
                  <Image
                    src="/assets/img/logo_ahibs_bs.png"
                    alt="Logo"
                    width={120}
                    height={120}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Judul */}
              <h2 className="text-lg sm:text-2xl font-bold text-center text-white mb-4">
                Form Pendaftaran
              </h2>

              {/* Input: Nama Lengkap */}
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-white">Nama Lengkap</label>
                <input
                  type="text"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  placeholder="Masukkan nama lengkap"
                  className="w-full px-4 py-3 rounded-xl bg-white text-black placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-green-100 transition-all duration-200 shadow-sm"
                />
              </div>

              {/* Input: Jenis Kelamin */}
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-white">Jenis Kelamin</label>
                <div className="flex gap-4">
                  {[
                    { value: 'Laki-laki', label: 'Laki-laki', icon: '👦' },
                    { value: 'Perempuan', label: 'Perempuan', icon: '👧' },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border bg-white text-black font-medium cursor-pointer transition-all hover:shadow-md ${
                        gender === option.value
                          ? 'ring-2 ring-green-500 border-green-400'
                          : 'border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="gender"
                        value={option.value}
                        checked={gender === option.value}
                        onChange={(e) => setGender(e.target.value)}
                        className="hidden"
                      />
                      <span className="text-xl">{option.icon}</span>
                      <span>{option.label}</span>
                      {gender === option.value && (
                        <span className="text-green-600 text-lg">✅</span>
                      )}
                    </label>
                  ))}
                </div>
              </div>

              {/* Input: Program Pendidikan */}
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-white">Program Pendidikan</label>
                <select
                  className="w-full px-4 py-3 rounded-xl bg-white text-black border border-gray-300 focus:outline-none focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-green-100 transition-all duration-200 shadow-sm"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Pilih program
                  </option>
                  <option value="SMP Putra">SMP Putra</option>
                  <option value="SMP Putri">SMP Putri</option>
                  <option value="SMA Putra">SMA Putra</option>
                  <option value="SMA Putri">SMA Putri</option>
                </select>
              </div>

              {/* Tombol Lanjut */}
              <button
                onClick={() => setStep(2)}
                className="mt-4 w-full py-3 rounded-xl bg-green-600 hover:bg-green-700 active:scale-[0.98] shadow-md hover:shadow-lg transition-all duration-200 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                Lanjut
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
             

              {/* Tombol Kembali */}
              <button
                onClick={() => setStep(1)}
                className="mt-1 mb-4 inline-flex items-center justify-center gap-2 text-sm text-white/80 hover:text-white font-medium transition-all"
              >
                ← <span>Kembali</span>
              </button>

              {/* Info PSB */}
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-white">
                  Tahu info PSB dari mana?
                </label>
                <select
                  className="w-full px-4 py-3 rounded-xl bg-white text-black border border-gray-300 focus:outline-none focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-green-100 transition-all duration-200 shadow-sm"
                  value={info}
                  onChange={(e) => setInfo(e.target.value)}
                >
                  <option value="" disabled>
                    Pilih salah satu
                  </option>
                  <option value="Media Sosial">Media Sosial</option>
                  <option value="Teman/Keluarga">Teman/Keluarga</option>
                  <option value="Brosur">Brosur</option>
                  <option value="Kunjungan Langsung">Kunjungan Langsung</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>

              {/* WhatsApp */}
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-white">
                  Nomor WhatsApp Aktif
                </label>
                <input
                  type="tel"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="08xxxxxxxxxx"
                  className="w-full px-4 py-3 rounded-xl bg-white text-black placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-green-100 transition-all duration-200 shadow-sm"
                />
              </div>

              {/* Tombol Kirim PIN */}
              <div className="mb-6">
                <button
                  onClick={() => alert('Simulasi kirim PIN ke WhatsApp')}
                  className="w-full py-3 rounded-xl bg-white/20 text-green-200 hover:bg-green-500 hover:text-white transition-all font-semibold border border-green-300 backdrop-blur-md"
                >
                  Kirim PIN ke WhatsApp
                </button>
              </div>



              {/* OTP */}
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-white">Kode Verifikasi</label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Masukkan 6 digit PIN"
                  maxLength={6}
                  className="w-full px-4 py-3 rounded-xl bg-white text-black placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-green-100 transition-all duration-200 shadow-sm tracking-widest text-center font-mono"
                />
              </div>

              {/* Tombol Daftar */}
              <button
                onClick={() => alert('Form berhasil dikirim!')}
                className="w-full py-3 rounded-xl bg-green-600 hover:bg-green-700 active:scale-[0.98] shadow-md text-white font-semibold transition-all duration-200"
              >
                Daftar Sekarang
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Tombol Baca Panduan Daftar */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        onClick={() => window.open('/panduan-pendaftaran', '_blank')}
        className="relative z-10 mt-6 text-sm text-white/90 hover:text-white underline underline-offset-4 transition-all text-center"
      >
        📘 Baca Panduan Daftar
      </motion.button>
    </div>
  );
}
