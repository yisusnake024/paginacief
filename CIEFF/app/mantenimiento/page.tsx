"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function MantenimientoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#68AB6A] text-white">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 py-20">
        {/* 🔹 Ícono o emoji temporal */}
        <div className="text-6xl mb-6 animate-bounce">🚧</div>

        {/* 🔹 Texto principal */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Página en mantenimiento
        </h1>

        {/* 🔹 Texto secundario */}
        <p className="text-lg md:text-2xl max-w-2xl leading-relaxed">
          Muy pronto vas a poder conocer a más detalle a nuestros{" "}
          <span className="font-semibold text-[#FFB000]">investigadores</span>.
        </p>

        {/* 🔹 Línea decorativa */}
        <div className="w-24 h-1 bg-[#FFB000] mt-8 rounded-full"></div>
      </main>

      <footer className="bg-[#FFB000] text-black py-10 mt-10">
        <Footer />
      </footer>
    </div>
  );
}
