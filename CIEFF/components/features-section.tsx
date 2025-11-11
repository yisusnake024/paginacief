"use client";

import { motion } from "framer-motion";

export default function Organigrama() {
  const filas = [
    {
      titulo: "Direcciones Principales",
      personas: [
        { img: "/nataly_freyle.jpg", nombre: "Nataly Galán Freyle", cargo: "Dirección de Investigaciones" },
        { img: "/freddy_sanchez.jpg", nombre: "Fredy Sánchez Merino", cargo: "Dirección de Innovación" },
        { img: "/luisa_echeverria.jpg", nombre: "Luisa Echeverría King", cargo: "Dirección de Diplomacia y Cooperación Científica Internacional" },
        { img: "/ronald_alvarez.jpg", nombre: "Ronald Álvarez Martínez", cargo: "Dirección de Proyectos" },
        { img: "/tatyana_bolivar.jpg", nombre: "Tatyana Bolívar Vasilef", cargo: "Dirección de Extensión" },
      ],
    },
    {
      titulo: "Centros de Investigación",
      personas: [
        { img: "/lilia_campos.jpg", nombre: "Lilia Campo Temera", cargo: "Directora del centro CIIISO" },
        { img: "/antonio_acosta.jpg", nombre: "Antonio Acosta", cargo: "Director del centro CICV" },
        { img: "/reynaldo_villareal.jpg", nombre: "Reynaldo Villarreal González", cargo: "Director del centro AUDACIA" },
        { img: "/yani_aranguren.jpg", nombre: "Yani Aranguren", cargo: "Directora Cambio Climático y Biodiversidad - Adaptia" },
        { img: "/neida_albornoz.jpg", nombre: "Neida Albornoz", cargo: "Directora del centro de estudios fronterizos CIEF Cúcuta" },
        { img: "/gloria_naranjo.jpg", nombre: "Gloria Naranjo", cargo: "Dirección de MacondoLab" },
      ],
    },
     {
      titulo: "Coordinaciones Académicas y Técnicas",
      personas: [
        { img: "/marbel_gravini.jpg", nombre: "Marbel Gravini Donado", cargo: "Jefe Oficina Formación para la Investigación" },
        { img: "/manuel_riaño.jpg", nombre: "Manuel Riaño", cargo: "Jefe de Investigación - Cúcuta" },
        { img: "/dhayana_fernandez.jpg", nombre: "Dhayana Fernández Matos", cargo: "Jefe de Publicaciones" },
        { img: "/ivon_romero.jpg", nombre: "Ivon Romero Pérez", cargo: "Jefe Oficina Metri-k" },
        { img: "/jennifer_davila.jpg", nombre: "Jennifer Dávila", cargo: "Dirección de Extensión - Cúcuta" },
      ],
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#68AB6A] to-[#68AB6A] text-black py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* 🌿 Fondo decorativo sutil */}
      <div className="absolute inset-0 bg-[url('/images/pattern-green.svg')] opacity-10 bg-repeat bg-center" />

      <div className="relative z-10 text-center max-w-7xl mx-auto">
        {/* 🟢 Título principal */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-10 sm:mb-12"
        >
          Vicerrectoría de Investigación, Extensión e Innovación
        </motion.h2>

        {/* 👤 Director General */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-12"
        >
          <img
            src="/luis_ortiz.jpg"
            alt="Luis Ortiz Ospino"
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full shadow-xl border-4 border-white/40 object-cover"
          />
          <p className="mt-4 text-lg sm:text-xl font-bold text-white">Luis Ortiz Ospino</p>
          <p className="text-sm sm:text-base text-white/80">
            Vicerrector de Investigación, Extensión e Innovación
          </p>
        </motion.div>

        {/* 🔹 Recorremos filas de cargos */}
        {filas.map((fila, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-6">{fila.titulo}</h3>

            <div
              className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-${Math.min(
                fila.personas.length,
                5
              )} gap-6 sm:gap-8 justify-center`}
            >
              {fila.personas.map((p, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center bg-[#FFB000] text-black rounded-2xl p-4 sm:p-5 shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={p.img}
                    alt={p.nombre}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-white/50 object-cover"
                  />
                  <p className="mt-3 font-semibold text-center text-sm sm:text-base">{p.nombre}</p>
                  <p className="text-xs sm:text-sm text-center text-black/70">{p.cargo}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
