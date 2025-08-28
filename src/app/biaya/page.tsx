import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BiayaSection from "@/components/BiayaSection";
import QuickMenu from "@/components/QuickMenu";

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

export default function KenapaAhibs() {
  return (
    <>    
      {/* Navbar di atas semua */}
      <Navbar />
      
      {/* Main Content Sections */}
      <div className="relative">
        {/* Keunggulan Section */}
        <section className="section-padding bg-gradient-to-b from-white to-emerald-50/30">
          <Suspense fallback={<SectionSkeleton />}>
            <BiayaSection />
          </Suspense>
        </section>

        {/* Quick Menu Section */}
        <Suspense fallback={<SectionSkeleton />}>
          <QuickMenu />
        </Suspense>
      </div>

      <Footer />
    </>
  );
}