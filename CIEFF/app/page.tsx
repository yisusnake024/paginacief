"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import MapWorld from "@/components/MapCucuta";

// ✅ Mapa dinámico (solo cliente)
const Map = dynamic(() => import("@/components/MapCucuta"), { ssr: false });

// 🔹 Contador animado
const Counter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = value;
    const increment = end / (duration * 60);
    const step = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(step);
  }, [value, duration]);
  return <span>{count}</span>;
};

export default function HomePage() {
  // 🔹 HERO INTERACTIVO integrado directamente
  const [currentImage, setCurrentImage] = useState(0);
  const particlesRef = useRef<HTMLDivElement>(null);
  const images = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const createParticle = () => {
      if (!particlesRef.current) return;
      const particle = document.createElement("div");
      particle.className =
        "absolute w-2 h-2 bg-[#68AB6A]/40 rounded-full animate-particle-float";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.top = Math.random() * 100 + "%";
      particle.style.animationDelay = Math.random() * 8 + "s";
      particle.style.animationDuration = 8 + Math.random() * 4 + "s";
      particlesRef.current.appendChild(particle);
      setTimeout(() => particle.remove(), 12000);
    };

    const interval = setInterval(createParticle, 2000);
    for (let i = 0; i < 10; i++) setTimeout(createParticle, i * 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* 🟢 Header transparente */}
      <Header />

      <main className="pt-0">
        {/* 🟢 HERO interactivo con fondo rotativo */}
        <section className="relative min-h-[80vh] sm:min-h-screen flex flex-col items-center justify-center overflow-hidden text-center px-4">
          {/* 🖼️ Fondo rotativo */}
          <div className="absolute inset-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={images[currentImage]}
                  alt="Fondo Hero"
                  fill
                  priority
                  className="object-cover object-center transition-all duration-700"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 🟢 Overlay verde esmeralda */}
          <div className="absolute inset-0 bg-[#68AB6A]/50 mix-blend-multiply"></div>

          {/* ✨ Partículas */}
          <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />

          {/* 🧭 Contenido principal */}
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-white drop-shadow-lg">
           

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
              Territorio y Globalidad
            </motion.h1>

         

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-2xl sm:text-4xl font-extrabold">
            <span className="relative text-[#68AB6A]">
              CREA
              <span className="absolute left-0 bottom-0 w-full h-1 bg-[#68AB6A]/60 rounded-full"></span>
            </span>
            <span className="text-white">-</span>
            <span className="relative text-[#FFB000]">
              CONECTA
              <span className="absolute left-0 bottom-0 w-full h-1 bg-[#FFB000]/60 rounded-full"></span>
            </span>
            <span className="text-white">-</span>
            <span className="relative text-black">
              TRASCIENDE
              <span className="absolute left-0 bottom-0 w-full h-1 bg-black/40 rounded-full"></span>
            </span>
          </div>            
            </div>
        </section>

        {/* 🔹 INICIATIVAS */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#68AB6A]">
              Iniciativas Estratégicas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 px-2 sm:px-0">
              <Link
                href="/policy"
                className="block p-6 sm:p-8 rounded-2xl shadow-md border border-[#68AB6A]/30 hover:shadow-lg transition text-center bg-gradient-to-b from-white to-gray-50"
              >
                <h3 className="text-2xl font-semibold text-[#68AB6A] mb-4">
                  Policy Lab
                </h3>
                <p className="text-gray-700">
                  Espacio para la formulación y análisis de políticas públicas
                  basadas en evidencia desde la región fronteriza.
                </p>
              </Link>

              <Link
                href="/observatorio"
                className="block p-6 sm:p-8 rounded-2xl shadow-md border border-[#68AB6A]/30 hover:shadow-lg transition text-center bg-gradient-to-b from-white to-gray-50"
              >
                <h3 className="text-2xl font-semibold text-[#68AB6A] mb-4">
                  Observatorio de Datos Fronterizos
                </h3>
                <p className="text-gray-700">
                  Plataforma para la recopilación, análisis y visualización de
                  información sobre dinámicas fronterizas.
                </p>
              </Link>
            </div>
          </div>
        </section>

                {/* 🌍 NUESTRA ACCIÓN EN EL MUNDO */}
        {/* 🌍 NUESTRA ACCIÓN EN EL MUNDO */}
        <section className="py-20 bg-[#68AB6A] text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-8 uppercase">
              Nuestra acción en el mundo
            </h2>

            {/* 🗺️ Nuevo mapa preciso */}
            <div className="mx-auto mb-12">
              <MapWorld />
            </div>

            {/* 📊 Estadísticas estilo infografía */}
            <div className="mt-8 grid grid-cols-1 gap-8">
              {/* Sección Nuevo conocimiento */}
              <div>
                <h3 className="text-2xl font-bold mb-4 flex justify-center items-center gap-2">
                  💡 Nuevo conocimiento
                </h3>
                <div className="flex flex-wrap justify-center gap-6">
                  {[
                    { label: "Artículos", value: 125, color: "#FF3B30" },
                    { label: "Cap. de libro", value: 22, color: "#FFB000" },
                    { label: "Libros", value: 9, color: "#34C759" },
                    { label: "Policy’s brief", value: 4, color: "#FF2D55" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center justify-center bg-white text-black rounded-full w-24 h-24 shadow-md hover:scale-110 transition-all"
                      style={{ border: `5px solid ${item.color}` }}
                    >
                      <span className="text-xl font-bold" style={{ color: item.color }}>
                        {item.value}
                      </span>
                      <p className="text-xs mt-1 font-medium text-center">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sección Desarrollo e innovación */}
              <div>
                <h3 className="text-2xl font-bold mb-4 flex justify-center items-center gap-2">
                  ⚙️ Desarrollo tecnológico e innovación
                </h3>
                <div className="flex flex-wrap justify-center gap-6">
                  {[
                    { label: "Innovaciones", value: 21, color: "#9B59B6" },
                    { label: "Softwares", value: 15, color: "#E67E22" },
                    { label: "Prototipos", value: 10, color: "#27AE60" },
                    { label: "Signos distintivos", value: 6, color: "#F1C40F" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center justify-center bg-white text-black rounded-full w-24 h-24 shadow-md hover:scale-110 transition-all"
                      style={{ border: `5px dashed ${item.color}` }}
                    >
                      <span className="text-xl font-bold" style={{ color: item.color }}>
                        {item.value}
                      </span>
                      <p className="text-xs mt-1 font-medium text-center">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sección de proyectos y actividades */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 justify-center">
                {[
                  { label: "Proyectos", value: 28, color: "#34C759" },
                  { label: "Eventos científicos", value: 68, color: "#FFB000" },
                  { label: "Apropiación social", value: 29, color: "#AF52DE" },
                  { label: "Redes conocimiento", value: 20, color: "#0A84FF" },
                  { label: "Consultorías", value: 17, color: "#A8E6CF" },
                  { label: "Tutorías", value: 105, color: "#FF3B30" },
                  { label: "Movilidades", value: 23, color: "#FFD60A" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center bg-white text-black p-3 rounded-xl shadow-lg hover:scale-105 transition-all"
                    style={{
                      borderBottom: `6px solid ${stat.color}`,
                    }}
                  >
                    <span
                      className="text-2xl font-bold"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </span>
                    <p className="text-xs mt-1 font-medium text-center">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>




        {/* 🔹 PLATAFORMAS */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[#68AB6A] mb-12 uppercase">
              Plataformas de Interacción y Co-Creación
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  title: "POLICY LAB: Del Dato a la Solución",
                  desc: "Espacio para organismos públicos y empresas. Busque diagnósticos y soluciones basadas en evidencia.",
                  link: "/policy",
                  btn: "Plantear un Reto Fronterizo",
                },
                {
                  title: "OBSERVATORIO DE DATOS",
                  desc: "Para investigadores y la academia. Acceso a datos filtrables, GrupLac y Directorio de Expertos.",
                  link: "/observatorio",
                  btn: "Acceder a la Base de Datos",
                },
                {
                  title: "CÁPSULAS DE CONOCIMIENTO (Video Hub)",
                  desc: "Divulgación pública de la ciencia en formato audiovisual.",
                  link: "/publirecu",
                  btn: "Ver el Video Más Reciente",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 sm:p-8 border rounded-2xl shadow-md hover:shadow-xl transition bg-gradient-to-b from-white to-gray-50"
                >
                  <h3 className="text-xl font-bold mb-2 text-[#68AB6A]">
                    {card.title}
                  </h3>
                  <hr className="my-4 border-gray-300" />
                  <p className="text-gray-700 mb-6">{card.desc}</p>
                  <Link
                    href={card.link}
                    className="inline-block px-5 py-2 bg-[#FFB000] text-black rounded-lg hover:bg-[#FFB000]/90 transition"
                  >
                    {card.btn}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

       {/* 🔹 NOVEDADES Y AGENDA */}
<section className="py-20 bg-[#68AB6A] text-white">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold text-white mb-12 uppercase">
      Novedades y Agenda
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 text-left">
      {/* 📰 Noticias */}
      <div className="p-6 sm:p-8 border border-white/20 rounded-2xl shadow-lg bg-white/10 backdrop-blur-sm">
        <h3 className="text-xl font-bold mb-2 text-[#FFB000]">
          Noticias y Prensa
        </h3>
        <hr className="my-3 border-white/30" />
        <ul className="space-y-3 text-white/90">
          <li>📅 [10 Oct 2025] - CIEF impulsa proyectos binacionales</li>
          <li>📅 [5 Oct 2025] - Nuevas alianzas académicas en frontera</li>
          <li>📅 [28 Sep 2025] - Presentación del Policy Brief sobre Migración</li>
        </ul>
        <Link
          href="/noticias"
          className="block mt-6 text-[#FFB000] hover:underline text-sm font-medium"
        >
          Ver Todas las Noticias →
        </Link>
      </div>

      {/* 📅 Agenda */}
      <div className="p-6 sm:p-8 border border-white/20 rounded-2xl shadow-lg bg-white/10 backdrop-blur-sm">
        <h3 className="text-xl font-bold mb-2 text-[#FFB000]">
          Próximos Eventos (Agenda)
        </h3>
        <hr className="my-3 border-white/30" />
        <ul className="space-y-3 text-white/90">
          <li>📅 [20 Oct 2025] - Evento Internacional: “Fronteras Sustentables”</li>
          <li>📅 [2 Nov 2025] - Seminario Dimensión de Trabajo X</li>
          <li>📅 [18 Nov 2025] - Presentación de Policy Brief Y</li>
        </ul>
        <Link
          href="/agenda"
          className="block mt-6 text-[#FFB000] hover:underline text-sm font-medium"
        >
          Ver Agenda Completa →
        </Link>
      </div>
    </div>
  </div>
</section>


{/* 🔹 ALIADOS – QUÍNTUPLE HÉLICE */}
<section className="py-20 bg-white overflow-hidden relative">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold text-[#68AB6A] mb-12 uppercase">
      Aliados – Quíntuple Hélice
    </h2>

   

    {/* Carrusel animado */}
    <motion.div
      className="flex gap-16"
      animate={{ x: ["0%", "-100%"] }}
      transition={{
        duration: 40,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {[...Array(2)].map((_, index) => (
        <div key={index} className="flex gap-16">
          {[
            {
            src:"/gobernacion.jpg",
            url: "https://www.nortedesantander.gov.co/#/inicio", 
            },
            {
            src:"/alcaldia_cucuta.png",
            url:"https://cucuta.gov.co/"
            },
            {
            src:"/migracion_colombiaa.jpg",
            url:"https://www.migracioncolombia.gov.co/"
            },
            {
            src:"/minciencias.png",
            url:"https://minciencias.gov.co/"
            },
            {
            src:"/icetex.png",
            url:"https://web.icetex.gov.co/portal"
            },
            {
            src:"/dian.jpg",
            url:"https://www.dian.gov.co/"
            },
          ].map((logo, i) => (
            <div
              key={i}
              className="w-24 h-24 sm:w-32 sm:h-32 flex justify-center items-center bg-white rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={logo.src}
                alt={`Aliado ${i + 1}`}
                className="object-contain w-20 h-20 sm:w-28 sm:h-28"
              />
            </div>
          ))}
        </div>
      ))}
    </motion.div>

    {/* Botón inferior */}
    <div className="mt-12">
      <Link
        href="/aliados"
        className="inline-block px-8 py-3 bg-[#FFB000] text-black font-semibold rounded-lg shadow-md hover:bg-[#ffb000e0] hover:scale-105 transition-all duration-300"
      >
        Conozca a todos nuestros aliados
      </Link>
    </div>
        </div>
      </section>

       



      </main>

      {/* 🟧 Footer naranja vibrante */}
      <footer className="bg-[#FFB000] text-black py-8 sm:py-10 px-4 sm:px-8 mt-10">
        <Footer />
      </footer>
    </>
  );
}
