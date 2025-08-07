import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Hero from "@/components/Hero";
import Keunggulan from "@/components/Keunggulan";
import Program from "@/components/Program";
import AlurPendaftaran from "@/components/AlurPendaftaran";
import Testimoni from "@/components/Testimoni";
import Galeri from "@/components/Galeri";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import FloatingActions from "@/components/FloatingActions";

// Loading component untuk Suspense
function SectionSkeleton() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded-md w-1/3 mx-auto mb-6"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Schema.org structured data untuk SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Pesantren Al Hadharah Islamic Boarding School",
  "description": "Pesantren modern dengan program tahfizh dan pendidikan akademik unggulan",
  "url": "https://ahibs.id",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Pendidikan No. 1",
    "addressLocality": "Sleman",
    "addressRegion": "Yogyakarta",
    "postalCode": "52194",
    "addressCountry": "ID"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+62-283-123-4567",
    "contactType": "admissions",
    "email": "info@ahibs.id"
  },
  "sameAs": [
    "https://facebook.com/pesantren-ahibs",
    "https://instagram.com/pesantren.ahibs"
  ]
};

export default function HomePage() {
  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Navbar di atas semua */}
      <Navbar />

      {/* Hero Section - Full viewport */}
      <Hero />

      {/* Main Content Sections */}
      <div className="relative">
        {/* Keunggulan Section */}
        <section className="section-padding bg-gradient-to-b from-white to-emerald-50/30">
          <Suspense fallback={<SectionSkeleton />}>
            <Keunggulan />
          </Suspense>
        </section>

        {/* Program Section */}
        <section className="section-padding bg-white">
          <Suspense fallback={<SectionSkeleton />}>
            <Program />
          </Suspense>
        </section>

        {/* Visual Separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />

        {/* Alur Pendaftaran Section */}
        <section className="section-padding bg-gradient-to-b from-emerald-50/30 to-white">
          <Suspense fallback={<SectionSkeleton />}>
            <AlurPendaftaran />
          </Suspense>
        </section>

        {/* Testimoni Section */}
        <section className="section-padding bg-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>
          <div className="relative z-10">
            <Suspense fallback={<SectionSkeleton />}>
              <Testimoni />
            </Suspense>
          </div>
        </section>

        {/* Galeri Section */}
        <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
          <Suspense fallback={<SectionSkeleton />}>
            <Galeri />
          </Suspense>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-white relative">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/20 via-transparent to-teal-50/20" />
          <div className="relative z-10">
            <Suspense fallback={<SectionSkeleton />}>
              <Faq />
            </Suspense>
          </div>
        </section>

        {/* Visual Separator before CTA */}
        <div className="h-0.5 bg-gradient-to-r from-emerald-200 via-green-300 to-teal-200" />

        {/* CTA Section */}
        <Suspense fallback={<SectionSkeleton />}>
          <Cta />
        </Suspense>
      </div>

      {/* Floating Actions */}
      <FloatingActions />

      {/* Footer di paling bawah */}
      <Footer />
    </>
  );
}
