"use client";

import { motion } from "framer-motion";

export default function OrganigramaCucuta() {
  const nivel2 = [
    { nombre: "Miembros del comité", cargo: "Comité Científico - Cúcuta" },
    { nombre: "Neida Albornoz A.", cargo: "Centro de Investigación en Estudios Fronterizos - CIEF" },
    { nombre: "Carolina Ramírez M.", cargo: "Unidad de Proyectos" },
  ];

  const nivel3 = [
    { nombre: "José María Rincón", cargo: "Coordinación de Formación para la Investigación - Proyecto" },
    { nombre: "Jovany Gómez V.", cargo: "Coordinación de Formación para la Investigación - Pedagogía" },
    { nombre: "Nidia Bonilla", cargo: "Coordinación del Programa Institucional de Semilleros" },
    { nombre: "Jhon F. Espinosa", cargo: "Coordinación de Publicaciones" },
    { nombre: "Jessica Leal", cargo: "Coordinación de Emprendimiento e Innovación" },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white to-white text-black py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-[url('/images/pattern-green.svg')] opacity-10 bg-repeat bg-center" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* 🟢 Título */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#68AB6A] mb-12"
        >
          Departamento de Investigación e Innovación – Cúcuta
        </motion.h2>

        {/* 🔹 Nivel 1 */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-12"
        >
          <div className="bg-[#FFB000] text-black rounded-2xl shadow-xl p-6 w-full sm:w-80 max-w-xs border border-[#68AB6A]/30">
            <p className="font-bold text-lg">Manuel Riaño G.</p>
            <p className="text-sm text-black/80 mt-1">
              Jefe del Departamento de Investigación e Innovación – Cúcuta
            </p>
          </div>
        </motion.div>

        {/* 🔹 Nivel 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center mb-12"
        >
          {nivel2.map((p, i) => (
            <div
              key={i}
              className="bg-[#FFB000] rounded-2xl shadow-md p-5 border border-[#68AB6A]/30 hover:scale-105 transition-transform duration-300"
            >
              <p className="font-bold text-sm sm:text-base">{p.nombre}</p>
              <p className="text-xs sm:text-sm text-black/80 mt-1">{p.cargo}</p>
            </div>
          ))}
        </motion.div>

       

        {/* 🔹 Nivel 3 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center"
        >
          {nivel3.map((p, i) => (
            <div
              key={i}
              className="bg-[#FFB000] rounded-2xl shadow-md p-5 border border-[#68AB6A]/30 hover:scale-105 transition-transform duration-300"
            >
              <p className="font-bold text-sm sm:text-base">{p.nombre}</p>
              <p className="text-xs sm:text-sm text-black/80 mt-1">{p.cargo}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
