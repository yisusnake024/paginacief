"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { useState } from "react";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    mensaje: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 Función genérica para abrir Gmail u Outlook
  const handleSend = (service: "gmail" | "outlook") => {
    const emailDestino = "cief@unisimon.edu.co"; // ✅ cambia por tu correo real
    const subject = encodeURIComponent(`Mensaje de ${formData.nombre} ${formData.apellido}`);
    const body = encodeURIComponent(
      `Nombre: ${formData.nombre}\nApellido: ${formData.apellido}\nTeléfono: ${formData.telefono}\n\nMensaje:\n${formData.mensaje}`
    );

    let url = "";

    if (service === "gmail") {
      // 🔹 Gmail
      url = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailDestino}&su=${subject}&body=${body}`;
    } else if (service === "outlook") {
      // 🔹 Outlook Web
      url = `https://outlook.live.com/owa/?path=/mail/action/compose&to=${emailDestino}&subject=${subject}&body=${body}`;
    }

    // 🔹 Abre en una nueva pestaña
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#68AB6A] text-black flex flex-col">
      <Header />

      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-10">
            Contáctanos
          </h1>

          <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-2xl">
            <p className="text-gray-700 text-center mb-8 text-lg">
              Completa el formulario y elige cómo deseas enviar tu mensaje:
            </p>

            {/* 🔹 Formulario */}
            <form className="space-y-6">
              <div>
                <label className="block text-gray-800 font-semibold mb-2">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB000] focus:outline-none"
                  placeholder="Ingresa tu nombre"
                />
              </div>

              <div>
                <label className="block text-gray-800 font-semibold mb-2">Apellido</label>
                <input
                  type="text"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB000] focus:outline-none"
                  placeholder="Ingresa tu apellido"
                />
              </div>

              <div>
                <label className="block text-gray-800 font-semibold mb-2">Teléfono</label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB000] focus:outline-none"
                  placeholder="Ejemplo: +57 300 123 4567"
                />
              </div>

              <div>
                <label className="block text-gray-800 font-semibold mb-2">Mensaje</label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB000] focus:outline-none resize-none"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>

              {/* 🔹 Botones de envío */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
                <button
                  type="button"
                  onClick={() => handleSend("gmail")}
                  className="bg-[#FFB000] text-black font-semibold px-8 py-3 rounded-full hover:bg-[#ff9900] transition w-full md:w-auto"
                >
                  Enviar con Gmail
                </button>

                <button
                  type="button"
                  onClick={() => handleSend("outlook")}
                  className="bg-[#FFB000] text-black font-semibold px-8 py-3 rounded-full hover:bg-[#005ea2] transition w-full md:w-auto"
                >
                  Enviar con Outlook
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <footer className="bg-[#FFB000] text-black py-10 mt-10">
        <Footer />
      </footer>
    </div>
  );
}

