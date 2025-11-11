"use client";

import { motion } from "framer-motion";

export default function OrganigramaCIEF() {
  const grupos = [
    {
      titulo: "Grupo de Investigación",
      nombre: "Altos Estudios de Frontera – ALEF",
      tipo: "Líder y co-líder",
      subtitulo: "Profesores vinculados",
      sigla: "ALEF",
    },
    {
      titulo: "Grupo de Investigación",
      nombre: "Innovación e Ingenierías Aplicadas – GI3A",
      tipo: "Líder y co-líder",
      subtitulo: "Profesores vinculados",
      sigla: "GI3A",
    },
    {
      titulo: "Investigadores Nóveles",
      nombre: "",
      tipo: "",
      subtitulo: "",
      sigla: "",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#68AB6A] to-[#68AB6A] text-black py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-[url('/images/pattern-green.svg')] opacity-10 bg-repeat bg-center" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* 🟢 Título principal */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-12"
        >
          Centro de Investigación en Estudios Fronterizos (CIEF)
        </motion.h2>

        {/* 🔹 Nivel 1 */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-10"
        >
          <div className="bg-[#FFB000] rounded-2xl shadow-xl p-6 w-full sm:w-80 max-w-xs border border-white/30">
            <p className="font-bold text-lg">Manuel E. Riaño G.</p>
            <p className="text-sm text-black/80 mt-1">
              Jefe del Departamento de Investigación e Innovación – Cúcuta
            </p>
          </div>
        </motion.div>

        {/* 🔹 Nivel 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-12"
        >
          <div className="bg-[#FFB000] rounded-2xl shadow-xl p-6 w-full sm:w-96 max-w-md border border-white/30">
            <p className="font-bold text-lg">Neida Albornoz A.</p>
            <p className="text-sm text-black/80 mt-1">
              Directora del Centro de Investigación en Estudios Fronterizos – CIEF
            </p>
          </div>
        </motion.div>

      

        {/* 🔹 Nivel 3: Grupos de investigación */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center"
        >
          {grupos.map((g, i) => (
            <div
              key={i}
              className="bg-[#FFB000] rounded-2xl shadow-lg p-5 border border-white/30 hover:scale-105 transition-transform duration-300 flex flex-col items-center"
            >
              <p className="font-bold text-sm sm:text-base">{g.titulo}</p>
              {g.nombre && (
                <p className="text-sm text-black/90 mt-1">{g.nombre}</p>
              )}
              {g.tipo && (
                <p className="text-sm font-semibold text-black mt-1">{g.tipo}</p>
              )}

              {/* Subnivel (profesores vinculados) */}
              {g.subtitulo && (
                <div className="mt-4 bg-white/80 rounded-xl p-3 w-full">
                  <p className="text-xs text-black font-semibold">
                    {g.subtitulo}
                  </p>
                  <p className="text-xs text-[#68AB6A] font-bold">{g.sigla}</p>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
