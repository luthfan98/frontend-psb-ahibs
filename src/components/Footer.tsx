import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Mail, Phone, BookOpen, Users, Award, Clock } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Program Pendidikan', href: '#program', icon: BookOpen },
    { name: 'Alur Pendaftaran', href: '#alur', icon: Users },
    { name: 'Prestasi', href: '#prestasi', icon: Award },
    { name: 'FAQ', href: '#faq', icon: Clock },
    { name: 'Portal Wali Santri', href: '/login', icon: Users },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/pesantren-ahibs', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/pesantren_ahibs', color: 'hover:text-sky-400' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/pesantren.ahibs', color: 'hover:text-pink-400' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@pesantrenahibs', color: 'hover:text-red-400' },
  ];

  const programs = [
    'Tahfizh Al-Quran',
    'Bahasa Arab & Inggris',
    'Sains & Teknologi',
    'Kewirausahaan',
  ];

  return (
    <footer id="kontak" className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-gray-300 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Top Decorative Border */}
      <div className="h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500" />
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* About Section - Enhanced */}
            <div className="lg:col-span-2 space-y-6">
              {/* Logo and Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="48" 
                    height="48" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="text-emerald-400"
                  >
                    <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/>
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                    <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/>
                    <path d="M2 7h20"/>
                    <path d="M22 7v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
                    Pesantren Al Hadharah Islamic Boarding School
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">Membentuk Generasi Qurani & Berakhlak Mulia</p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <MapPin className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <div>
                    <p className="text-sm font-medium text-white">Alamat Lengkap</p>
                    <p className="text-sm text-gray-300">Jl. Tempel-Turi, Ngentak, Bangunkerto, Turi, Sleman Yogyakarta</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 group">
                  <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <div>
                    <p className="text-sm font-medium text-white">Email</p>
                    <a href="mailto:info@pesantren-ahibs.id" className="text-sm text-gray-300 hover:text-emerald-400 transition-colors">
                      alhadharah.ibs@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 group">
                  <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <div>
                    <p className="text-sm font-medium text-white">Telepon</p>
                    <a href="tel:+622831234567" className="text-sm text-gray-300 hover:text-emerald-400 transition-colors">
                      (0812-3378-5161)
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="font-semibold text-white text-lg mb-6 relative">
                Tautan Cepat
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full" />
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <li key={link.name}>
                      <Link 
                        href={link.href} 
                        className="flex items-center gap-3 text-sm text-gray-300 hover:text-emerald-400 transition-all duration-200 group hover:translate-x-1"
                      >
                        <IconComponent className="w-4 h-4 text-gray-500 group-hover:text-emerald-400 transition-colors duration-200" />
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Social Media & Newsletter */}
            <div className="space-y-6">
              <h4 className="font-semibold text-white text-lg mb-6 relative">
                Tetap Terhubung
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full" />
              </h4>
              
              {/* Social Media */}
              <div>
                <p className="text-sm text-gray-400 mb-4">Ikuti media sosial kami untuk update terbaru</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        className={`p-3 bg-slate-700/50 rounded-lg ${social.color} hover:bg-slate-700 transition-all duration-200 hover:scale-110 hover:-translate-y-1 group`}
                        aria-label={social.name}
                      >
                        <IconComponent className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>


              {/* Operating Hours */}
              <div className="text-sm">
                <h5 className="font-medium text-white mb-2">Jam Operasional</h5>
                <div className="space-y-1 text-gray-400">
                  <p>Senin - Jumat: 07:00 - 15:00</p>
                  <p>Sabtu: 07:00 - 12:00</p>
                  <p>Ahad: Tutup</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-400 text-center md:text-left">
                &copy; {new Date().getFullYear()} Pesantren Modern Al-Hadharah Islamic Boarding School. Semua Hak Cipta Dilindungi.
              </p>
              <div className="flex items-center gap-6 text-xs text-gray-500">
                <Link href="/privacy" className="hover:text-emerald-400 transition-colors">Kebijakan Privasi</Link>
                <Link href="/terms" className="hover:text-emerald-400 transition-colors">Syarat & Ketentuan</Link>
                <Link href="/sitemap" className="hover:text-emerald-400 transition-colors">Sitemap</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}