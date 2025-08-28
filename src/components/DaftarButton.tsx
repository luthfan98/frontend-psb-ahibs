import { ArrowRight, UserPlus, Sparkles } from "lucide-react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "cta";
type Size = "sm" | "default" | "lg" | "xl";

interface DaftarButtonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  href?: string;
  children?: React.ReactNode;
}

const variants: Record<Variant, string> = {
  primary: "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg hover:shadow-xl",
  secondary: "bg-white text-emerald-600 border-2 border-emerald-500 hover:bg-emerald-50",
  outline: "border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white",
  ghost: "text-emerald-600 hover:bg-emerald-50",
  cta: "bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-lg hover:shadow-xl"
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  default: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
  xl: "px-10 py-5 text-xl"
};

const DaftarButton = ({
  variant = "primary",
  size = "default",
  className = "",
  href = "/daftar",
  children = "Daftar Sekarang"
}: DaftarButtonProps) => {

  return (
    <a
      href={href}
      className={`
        inline-flex items-center justify-center gap-2 
        font-semibold rounded-full 
        transform hover:-translate-y-0.5 
        transition-all duration-300 
        group relative overflow-hidden
        ${variants[variant]} 
        ${sizes[size]} 
        ${className}
      `}
    >
      {/* Background shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      
      {variant === "cta" && (
        <Sparkles className="w-5 h-5 animate-pulse" />
      )}
      {variant !== "cta" && (
        <UserPlus className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
      )}
      
      <span className="relative z-10">{children}</span>
      
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
    </a>
  );
};

// Komponen CTA Section yang menggunakan DaftarButton
const DaftarSection = ({ className = "" }) => {
  return (
    <section className={`section-padding bg-gradient-to-br from-emerald-50 to-teal-50 ${className}`}>
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-6">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Siap Memulai Perjalanan Akademik Anda?
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan mahasiswa yang telah memilih AHIBS sebagai tempat untuk meraih impian dan membangun masa depan yang cemerlang.
            </p>

            {/* Multiple CTA Options */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <DaftarButton variant="cta" size="lg">
                Daftar Sekarang
              </DaftarButton>
              
              <DaftarButton variant="secondary" size="lg" href="/konsultasi">
                Konsultasi Gratis
              </DaftarButton>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>Pendaftaran Online 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>Konsultasi Gratis</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>Beasiswa Tersedia</span>
              </div>
            </div>
          </div>

          {/* Alternative CTA Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Sudah Yakin dengan Jurusan?
              </h3>
              <p className="text-gray-600 mb-4">
                Langsung daftar dan amankan kursi Anda!
              </p>
              <DaftarButton variant="primary" className="w-full">
                Daftar Langsung
              </DaftarButton>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Masih Bingung Pilih Jurusan?
              </h3>
              <p className="text-gray-600 mb-4">
                Konsultasi gratis dengan tim akademik kami.
              </p>
              <DaftarButton variant="outline" href="/konsultasi" className="w-full">
                Konsultasi Dulu
              </DaftarButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { DaftarButton, DaftarSection };