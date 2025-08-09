import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // tambahkan ini kembali jika kamu memang ingin mode static export
  images: {
    unoptimized: true, // wajib untuk mode export
    domains: ['i.pravatar.cc'], // ini yang menyelesaikan error "Invalid src"
  },
};

export default nextConfig;
