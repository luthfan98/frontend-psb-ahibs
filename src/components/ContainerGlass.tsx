import { ReactNode } from 'react';

export default function ContainerGlass({ children }: { children: ReactNode }) {
  return (
    <div className="w-full max-w-md p-6 sm:p-8 rounded-2xl shadow-xl bg-white/10 border border-white/20 backdrop-blur-lg"
         style={{ background: 'rgba(208, 255, 208, 0.2)' }}>
      {children}
    </div>
  );
}
