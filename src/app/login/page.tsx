// app/login/page.tsx
'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { Mail, LockKeyhole, Star } from 'lucide-react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(''); // Reset error sebelum submit baru

        // Validasi sederhana
        if (!email || !password) {
            setError('Email dan password wajib diisi.');
            return;
        }

        // --- Logika Autentikasi ---
        // Di sini Anda akan memanggil API backend Anda untuk verifikasi login
        console.log('Mencoba login dengan:', { email, password });
        
        try {
            // Contoh pemanggilan API (ganti dengan implementasi Anda)
            // const response = await fetch('/api/auth/login', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ email, password }),
            // });

            // if (!response.ok) {
            //     const data = await response.json();
            //     throw new Error(data.message || 'Gagal untuk login.');
            // }

            // // Jika sukses, redirect ke halaman dashboard atau profil
            // window.location.href = '/dashboard';

            // Placeholder untuk simulasi sukses
            alert('Login berhasil! (Ini hanya simulasi)');

        } catch (err: any) {
            setError(err.message);
            console.error(err);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center relative overflow-hidden" 
             style={{
                 background: 'linear-gradient(135deg, #0d4f3c 0%, #1a5f4a 50%, #0d4f3c 100%)'
             }}>
                <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/img/back.png"
                    alt="Background"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 backdrop-blur-sm bg-black/30" />
                </div>
            
            

            <div className="relative z-10 w-full max-w-md">
                {/* Decorative Top Border */}
                <div className="mb-6 text-center">
                    <div className="inline-block">
                        <div className="h-1 w-24 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 rounded-full mb-2"></div>
                        <div className="h-0.5 w-16 bg-amber-200 rounded-full mx-auto"></div>
                    </div>
                </div>

                <div className="rounded-3xl bg-white/95 backdrop-blur-sm p-8 shadow-2xl border border-white/20">
                    
                    {/* Header */}
                    <div className="mb-8 text-center">
                        <div className="mb-4 inline-block rounded-full bg-gradient-to-br from-emerald-100 to-teal-50 p-4 shadow-lg">
                            <Star className="h-12 w-12 text-emerald-700" />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">
                            بِسْمِ ٱللَّٰهِ
                        </h1>
                        <h2 className="text-2xl font-semibold text-emerald-700 mb-1">Selamat Datang</h2>
                        <p className="text-gray-600">Masukkan kredensial Anda untuk melanjutkan</p>
                        
                        {/* Decorative Element */}
                        <div className="mt-4 flex justify-center">
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                                <div className="w-3 h-0.5 bg-emerald-300"></div>
                                <div className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                                <div className="w-3 h-0.5 bg-emerald-300"></div>
                                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Form Login */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Input Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>
                            <div className="relative">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                                    <Mail className="h-5 w-5 text-emerald-400" />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full rounded-xl border-2 border-gray-200 py-3 pl-12 pr-4 text-base shadow-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200"
                                    placeholder="anda@email.com"
                                />
                            </div>
                        </div>

                        {/* Input Password */}
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <Link href="/forgot-password" className="font-medium text-emerald-600 hover:text-emerald-500 hover:underline transition-colors">
                                        Lupa password?
                                    </Link>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                                    <LockKeyhole className="h-5 w-5 text-emerald-400" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full rounded-xl border-2 border-gray-200 py-3 pl-12 pr-4 text-base shadow-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>
                        
                        {/* Pesan Error */}
                        {error && (
                            <div className="rounded-xl bg-red-50 border border-red-200 p-4">
                                <p className="text-sm font-medium text-red-700">{error}</p>
                            </div>
                        )}

                        {/* Tombol Submit */}
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center items-center rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:from-emerald-700 hover:to-teal-700 hover:shadow-xl transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                            >
                                <span>Masuk</span>
                            </button>
                        </div>
                    </form>

                    {/* Islamic Quote */}
                    <div className="mt-6 text-center">
                        <p className="text-sm text-emerald-700 italic font-medium">
                            "Dan barangsiapa bertakwa kepada Allah, niscaya Dia akan mengadakan baginya jalan keluar"
                        </p>
                        <p className="text-xs text-gray-500 mt-1">QS. At-Talaq: 2</p>
                    </div>

                    {/* Footer */}
                    <div className="mt-8 text-center">
                        <div className="flex justify-center mb-4">
                            <div className="flex items-center space-x-1">
                                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-amber-300"></div>
                                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                                <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-amber-300"></div>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600">
                            Belum punya akun?{' '}
                            <Link href="/register" className="font-semibold text-emerald-600 hover:text-emerald-500 hover:underline transition-colors">
                                Daftar sekarang
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Decorative Bottom Border */}
                <div className="mt-6 text-center">
                    <div className="inline-block">
                        <div className="h-0.5 w-16 bg-amber-200 rounded-full mb-2 mx-auto"></div>
                        <div className="h-1 w-24 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}