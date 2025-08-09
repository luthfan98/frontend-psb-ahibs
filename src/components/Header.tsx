'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, Transition } from '@headlessui/react';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { Fragment } from 'react';

export default function Header() {
  const router = useRouter();

  const handleLogout = () => {
    // Di aplikasi nyata, Anda akan membersihkan token atau sesi di sini
    alert('Logout berhasil!');
    // router.push('/login');
  };

  const dropdownItems = [
    { label: 'Profil', action: () => router.push('/profil') },
    { label: 'Keluar', action: handleLogout },
  ];

  return (
    <>
      {/* Definisi animasi shimmer */}
      <style>
        {`
          @keyframes shimmer {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
          .animate-shimmer {
            animation: shimmer 5s linear infinite;
          }
        `}
      </style>

      <header className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-md border-b border-white/20 z-50">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          {/* Logo dan Judul */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/assets/img/logo_ahibs_bs.png"
              alt="Logo AHIBS"
              width={40}
              height={40}
              className="group-hover:scale-110 transition-transform duration-300"
              unoptimized
            />
            <div className="font-bold tracking-wide animate-shimmer bg-gradient-to-r from-green-300 via-emerald-400 to-teal-500 bg-[length:200%_auto] bg-clip-text text-transparent">
              {/* Desktop title */}
              <span className="hidden md:block text-xl">
                Al Hadharah Islamic Boarding School
              </span>
              {/* Mobile title */}
              <span className="block md:hidden text-lg">AHIBS</span>
            </div>
          </Link>

          {/* Dropdown Akun */}
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex items-center justify-center gap-2 w-full rounded-md px-4 py-2 text-sm font-medium text-black hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 transition-colors">
                <UserCircleIcon className="w-5 h-5" />
                Akun
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-50">
                <div className="px-1 py-1">
                  {dropdownItems.map((item) => (
                    <Menu.Item key={item.label}>
                      {({ active }) => (
                        <button
                          onClick={item.action}
                          className={`${
                            active ? 'bg-green-700 text-white' : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-3 py-2 text-sm transition-colors`}
                        >
                          {item.label}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </header>
    </>
  );
}
