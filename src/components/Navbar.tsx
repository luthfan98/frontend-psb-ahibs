// File: components/Navbar.tsx

"use client";

import Image from 'next/image';
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Home, BookOpen, MapPin, Camera, MessageSquare, HelpCircle, Phone } from "lucide-react";

// [Praktik Baik] Data statis didefinisikan di luar komponen dengan ikon
const menuItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "Program", href: "#program", icon: BookOpen },
  { name: "Alur", href: "#alur", icon: MapPin },
  { name: "Galeri", href: "#galeri", icon: Camera },
  { name: "Testimoni", href: "#testimoni", icon: MessageSquare },
  { name: "FAQ", href: "#faq", icon: HelpCircle },
  { name: "Kontak", href: "#kontak", icon: Phone },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Overlay untuk mobile menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-lg shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex flex-shrink-0 items-center gap-3 group cursor-pointer" 
              onClick={() => setIsOpen(false)}
            >
              <div className="relative">
                <Image
                    src="/assets/img/logo_ahibs_bs.png"
                    alt="Logo AHIBS"
                    width={40}
                    height={40}
                    className="group-hover:scale-110 transition-transform duration-300"
                    unoptimized
                />
                {/* Shimmer effect background */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
                  Al Hadharah
                </span>
                <div className="text-xs text-gray-500 font-medium -mt-1">
                  Islamic Boarding School
                </div>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {menuItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 rounded-lg transition-all duration-200 hover:bg-emerald-50 group cursor-pointer"
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </Link>
              ))}
            </nav>
            
            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center gap-3 flex-shrink-0">
              <Link 
                href="https://psb.ahibs.id/login" 
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 rounded-lg transition-all duration-200 hover:bg-gray-50 cursor-pointer"
              >
                Login
              </Link>
              <Link 
                href="https://psb.ahibs.id/" 
                className="relative overflow-hidden bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-600 hover:via-green-600 hover:to-teal-600 text-white font-semibold py-2.5 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 group cursor-pointer "
              >
                <span className="relative z-10">Daftar Sekarang</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="relative p-2 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
                aria-label="Toggle Menu"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                <div className="relative w-6 h-6">
                  <Menu className={`absolute inset-0 h-6 w-6 transition-all duration-200 ${isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
                  <X className={`absolute inset-0 h-6 w-6 transition-all duration-200 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div 
          id="mobile-menu"
          className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-100 transition-all duration-300 ease-out ${
            isOpen 
              ? 'opacity-100 translate-y-0 visible' 
              : 'opacity-0 -translate-y-4 invisible'
          }`}
        >
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col gap-1">
              {menuItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link 
                    key={item.name} 
                    href={item.href} 
                    className="flex items-center gap-3 py-3 px-4 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200 group cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-emerald-500 transition-colors duration-200" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
              
              {/* Mobile CTA Section */}
              <div className="border-t border-gray-200 mt-4 pt-4 flex flex-col gap-3">
                <Link 
                  href="https://psb.ahibs.id/login" 
                  className="text-center w-full py-3 px-4 rounded-lg text-gray-700 hover:text-emerald-600 hover:bg-gray-50 font-medium transition-all duration-200 cursor-pointer" 
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  href="https://psb.ahibs.id/" 
                  className="relative overflow-hidden text-center w-full bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-600 hover:via-green-600 hover:to-teal-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 shadow-md group cursor-pointer" 
                  onClick={() => setIsOpen(false)}
                >
                  <span className="relative z-10">Daftar Sekarang</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}