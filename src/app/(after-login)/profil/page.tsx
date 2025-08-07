'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { User, KeyRound, Phone, Upload, CheckCircle } from 'lucide-react';

interface InputFieldProps {
  label: string;
  id: string;
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  icon: React.ComponentType<{ className?: string }>;
  autoComplete?: string;
}

const InputField = ({
  label,
  id,
  type,
  value,
  onChange,
  icon: Icon,
  autoComplete = 'off',
}: InputFieldProps) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
        <Icon className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        className="block w-full rounded-lg border-gray-300 py-2.5 pl-11 text-base text-gray-900 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
      />
    </div>
  </div>
);

export default function SimpleProfilePage() {
  const [username, setUsername] = useState<string>('ahmad.zaki');
  const [whatsapp, setWhatsapp] = useState<string>('081234567891');
  const [profileImage, setProfileImage] = useState<string>('/default-avatar.png');

  const [currentPassword, setCurrentPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const [successMessage, setSuccessMessage] = useState<string>('');

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfileImage(URL.createObjectURL(file));
      // TODO: upload to server
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newPassword && newPassword !== confirmPassword) {
      alert('Konfirmasi password baru tidak cocok!');
      return;
    }

    console.log('Data yang akan disimpan:', {
      username,
      whatsapp,
      ...(newPassword && { newPassword, currentPassword }),
    });

    setSuccessMessage('Perubahan berhasil disimpan!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Pengaturan Akun</h1>
        </div>
      </header>

      <main className="mx-auto max-w-4xl p-4 sm:p-6 lg:p-8">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg space-y-8"
        >
          <div className="space-y-6">
            {/* --- Profil --- */}
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Profil</h3>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <img
                  src={profileImage}
                  alt="Foto Profil"
                  className="h-24 w-24 rounded-full object-cover ring-4 ring-teal-100"
                />
                <div className="text-center sm:text-left">
                  <h2 className="text-lg font-bold text-gray-800">Ubah Foto Profil</h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Gunakan format JPG atau PNG. Ukuran maksimal 5MB.
                  </p>
                  <div className="mt-4">
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer rounded-lg bg-white px-4 py-2 text-sm font-semibold text-teal-600 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      <Upload size={16} className="inline-block mr-2" />
                      <span>Unggah Foto</span>
                    </label>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      onChange={handleImageChange}
                      accept="image/png, image/jpeg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* --- Info Akun --- */}
            <div className="rounded-xl border border-gray-200 p-6 space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Informasi Akun</h3>
              <InputField
                label="Username"
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                icon={User}
              />
              <InputField
                label="Nomor WhatsApp"
                id="whatsapp"
                type="tel"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                icon={Phone}
              />
            </div>

            {/* --- Password --- */}
            <div className="rounded-xl border border-gray-200 p-6 space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ubah Password</h3>
              <InputField
                label="Password Saat Ini"
                id="currentPassword"
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                icon={KeyRound}
                autoComplete="current-password"
              />
              <InputField
                label="Password Baru"
                id="newPassword"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                icon={KeyRound}
                autoComplete="new-password"
              />
              <InputField
                label="Konfirmasi Password Baru"
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                icon={KeyRound}
                autoComplete="new-password"
              />
            </div>
          </div>

          {/* --- Tombol & Notifikasi --- */}
          <div className="flex flex-col sm:flex-row justify-end items-center gap-4 pt-4">
            {successMessage && (
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle size={20} />
                <span className="font-semibold">{successMessage}</span>
              </div>
            )}
            <button
              type="submit"
              className="w-full sm:w-auto rounded-lg bg-teal-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 transition-colors duration-200"
            >
              Simpan Perubahan
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
