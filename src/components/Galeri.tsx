'use client';

import { useState } from 'react';
import { Camera, Eye, X, ZoomIn, Calendar, MapPin, Heart, Users, Award, BookOpen } from 'lucide-react';

interface ImageItem {
  src: string;
  title: string;
  description: string;
  category: string;
  date: string;
  location: string;
  likes: number;
}

interface StatItem {
  number: string;
  label: string;
  icon: any;
}

export default function Galeri() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const images: ImageItem[] = [
    {
      src: 'https://images.unsplash.com/photo-1618335829737-25a411562248?q=80&w=800',
      title: 'Kegiatan Mengaji',
      description: 'Suasana khusyuk santri sedang mengaji bersama dalam halaqah pagi dengan bimbingan ustadz yang berpengalaman.',
      category: 'ibadah',
      date: '15 Januari 2024',
      location: 'Masjid Al-Hadharah',
      likes: 127
    },
    {
      src: 'https://images.unsplash.com/photo-1579887829424-5c4a6e42b6a7?q=80&w=800',
      title: 'Pembelajaran Kitab',
      description: 'Diskusi mendalam tentang kitab kuning turats klasik dengan metode sorogan dan bandongan.',
      category: 'pembelajaran',
      date: '12 Januari 2024',
      location: 'Aula Utama',
      likes: 203
    },
    {
      src: 'https://images.unsplash.com/photo-1594582452339-b946892534de?q=80&w=800',
      title: 'Kegiatan Outdoor',
      description: 'Aktivitas santri di luar ruangan sebagai bagian dari program pengembangan karakter dan fisik.',
      category: 'ekstrakurikuler',
      date: '10 Januari 2024',
      location: 'Lapangan Utama',
      likes: 156
    },
    {
      src: 'https://images.unsplash.com/photo-1583923228148-39311c33a925?q=80&w=800',
      title: 'Sesi Mentoring',
      description: 'Bimbingan personal intensif dengan ustadz untuk pengembangan spiritual dan akademik santri.',
      category: 'pembelajaran',
      date: '08 Januari 2024',
      location: 'Ruang Konseling',
      likes: 189
    },
    {
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800',
      title: 'Program Tahfidz',
      description: 'Kegiatan menghafal Al-Qur\'an dengan metode talaqqi dan muraja\'ah yang terbukti efektif.',
      category: 'tahfidz',
      date: '05 Januari 2024',
      location: 'Ruang Tahfidz',
      likes: 245
    },
    {
      src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800',
      title: 'Diskusi Kelompok',
      description: 'Santri berdiskusi aktif dalam kelompok belajar untuk memahami materi dengan lebih mendalam.',
      category: 'pembelajaran',
      date: '03 Januari 2024',
      location: 'Perpustakaan',
      likes: 98
    }
  ];

  const stats: StatItem[] = [
    { number: '500+', label: 'Santri Aktif', icon: Users },
    { number: '15+', label: 'Tahun Berdiri', icon: Award },
    { number: '25+', label: 'Program Unggulan', icon: BookOpen },
    { number: '100%', label: 'Kepuasan Wali', icon: Heart },
  ];

  const categories = [
    { id: 'all', label: 'Semua', icon: Camera },
    { id: 'pembelajaran', label: 'Pembelajaran', icon: BookOpen },
    { id: 'ibadah', label: 'Ibadah', icon: Heart },
    { id: 'tahfidz', label: 'Tahfidz', icon: Users },
    { id: 'ekstrakurikuler', label: 'Ekstrakurikuler', icon: Award }
  ];

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

  const openModal = (index: number) => setSelectedImage(index);
  const closeModal = () => setSelectedImage(null);

  return (
    <>
      <section
        id="galeri"
        className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.1)_1px,transparent_0)] [background-size:24px_24px]" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-emerald-100 to-transparent rounded-full blur-3xl opacity-40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Camera className="w-4 h-4" />
              Dokumentasi Kegiatan
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Galeri 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 ml-3">
                Kegiatan
              </span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Momen-momen berharga dari kegiatan belajar dan kehidupan santri di pesantren yang penuh makna dan inspirasi. 
              Dokumentasi perjalanan spiritual dan akademik yang menginspirasi.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                    filter === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-lg transform scale-105'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-slate-100"
                onClick={() => openModal(index)}
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading={index < 2 ? 'eager' : 'lazy'}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Action Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <button className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transform hover:scale-110 transition-all duration-300 mr-2">
                      <ZoomIn className="w-5 h-5" />
                    </button>
                    <button className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transform hover:scale-110 transition-all duration-300">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {categories.find(cat => cat.id === image.category)?.label || 'Kegiatan'}
                    </span>
                  </div>

                  {/* Likes Counter */}
                  <div className="absolute top-3 right-3">
                    <div className="bg-black/30 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <Heart className="w-3 h-3 fill-red-400 text-red-400" />
                      {image.likes}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {image.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3 line-clamp-2">
                    {image.description}
                  </p>
                  
                  {/* Meta Info */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Calendar className="w-3 h-3" />
                      {image.date}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <MapPin className="w-3 h-3" />
                      {image.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="text-left">
                <h4 className="text-xl font-bold text-gray-800 mb-2">Lihat Lebih Banyak</h4>
                <p className="text-slate-600">Kunjungi media sosial kami untuk dokumentasi lengkap</p>
              </div>
              <div className="flex gap-3">
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Instagram
                </button>
                <button className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  YouTube
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <X className="w-6 h-6 text-slate-800" />
            </button>
            <div className="aspect-video md:aspect-[4/3] relative">
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-slate-800">{filteredImages[selectedImage].title}</h3>
                <div className="flex items-center gap-1 text-red-500">
                  <Heart className="w-5 h-5 fill-current" />
                  <span className="text-sm font-medium">{filteredImages[selectedImage].likes}</span>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">{filteredImages[selectedImage].description}</p>
              
              <div className="flex items-center justify-between text-sm text-slate-500">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {filteredImages[selectedImage].date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {filteredImages[selectedImage].location}
                  </span>
                </div>
                <span className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {categories.find(cat => cat.id === filteredImages[selectedImage].category)?.label || 'Kegiatan'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}