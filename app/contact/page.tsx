"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [glow, setGlow] = useState({ x: 0, y: 0 });

  const EMAILJS_SERVICE_ID = "portafolio_Mail_service";
  const EMAILJS_TEMPLATE_ID = "template_03h2whd";
  const EMAILJS_PUBLIC_KEY = "CeKnmQLrJHYeErPCb";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Enviar email usando EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "carrascocampos.na@gmail.com", // Tu email
        },
        EMAILJS_PUBLIC_KEY,
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error al enviar:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setGlow({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "carrascocampos.na@gmail.com",
      href: "mailto:carrascocampos.na@gmail.com",
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+56 9 XXXXXXX",
      href: "tel:+569XXXXXXX",
    },
    { icon: MapPin, label: "Ubicación", value: "Chile", href: "#" },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nathalie-carrascocampos/",
    },
  ];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6 py-16 lg:py-24 relative overflow-hidden">
      <div
        className="pointer-events-none absolute w-[600px] h-[600px] rounded-full blur-[180px] opacity-25 bg-purple-600 transition-all duration-300"
        style={{ top: glow.y - 300, left: glow.x - 300 }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl rounded-xl border border-purple-800/50 bg-[#0B0A0E]/90 shadow-lg shadow-purple-900/40 overflow-hidden font-mono text-purple-200 backdrop-blur-md relative"
      >
        <div className="flex items-center gap-2 px-4 py-2 bg-purple-950/40 border-b border-purple-800/50">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
          <p className="ml-4 text-sm text-purple-300/70 select-none">
            nath@clouddev:~$ contact.sh
          </p>
        </div>

        <div className="p-8 md:p-12 space-y-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-purple-300"
          >
            &gt; Contáctame{" "}
            <span className="text-purple-500 animate-pulse">▌</span>
          </motion.h1>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 bg-purple-950/10 border border-purple-800/50 rounded-lg p-6 shadow-inner shadow-purple-900/30 hover:shadow-purple-700/30 transition-all duration-300"
            >
              <p className="text-sm text-purple-400/70 mb-4">
                # Ingresa tu comando:
              </p>

              <label className="flex flex-col">
                <span className="text-purple-300/80 mb-1">&gt; nombre:</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                  className="bg-transparent border-b border-purple-900 focus:border-purple-400 text-purple-200 placeholder-purple-400/40 py-2 focus:outline-none transition-all duration-300 focus:shadow-[0_0_8px_#a855f7]"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-purple-300/80 mb-1">&gt; email:</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                  className="bg-transparent border-b border-purple-900 focus:border-purple-400 text-purple-200 placeholder-purple-400/40 py-2 focus:outline-none transition-all duration-300 focus:shadow-[0_0_8px_#a855f7]"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-purple-300/80 mb-1">&gt; mensaje:</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Cuéntame sobre tu proyecto..."
                  className="bg-transparent border-b border-purple-900 focus:border-purple-400 text-purple-200 placeholder-purple-400/40 py-2 focus:outline-none resize-none transition-all duration-300 focus:shadow-[0_0_8px_#a855f7]"
                />
              </label>

              {/* Mensajes de estado */}
              {submitStatus === "success" && (
                <div className="text-green-400 text-sm border border-green-500/30 bg-green-500/10 rounded p-3">
                  ✓ Mensaje enviado correctamente
                </div>
              )}
              {submitStatus === "error" && (
                <div className="text-red-400 text-sm border border-red-500/30 bg-red-500/10 rounded p-3">
                  ✗ Error al enviar. Intenta de nuevo.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-purple-800/60 hover:bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-900/50 hover:shadow-purple-500/70 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Ejecutando ./enviar.sh..." : "./enviar.sh"}
              </button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-xl font-bold text-purple-300 mb-4">
                  &gt; info_contacto:
                </h2>
                <div className="space-y-3">
                  {contactInfo.map((info, i) => {
                    const Icon = info.icon;
                    return (
                      <motion.a
                        key={info.label}
                        href={info.href}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                        className="flex items-center gap-4 border border-purple-900/60 bg-purple-950/20 hover:bg-purple-800/20 hover:border-purple-500/60 transition-colors rounded-lg p-3"
                      >
                        <Icon className="text-purple-400" size={20} />
                        <span className="text-sm">
                          <span className="text-purple-400/60">
                            {info.label}:
                          </span>{" "}
                          {info.value}
                        </span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-purple-300 mb-4">
                  &gt; redes_sociales:
                </h2>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                        className="p-3 border border-purple-900/60 rounded-lg hover:bg-purple-500 hover:text-black transition-colors group"
                      >
                        <Icon
                          className="text-purple-300 group-hover:text-black transition-colors"
                          size={22}
                        />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              <div className="bg-purple-950/20 border border-purple-900/60 rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-2">
                  &gt; estado_actual:
                </h3>
                <p className="text-purple-300/70 mb-3">
                  Disponible para proyectos freelance, colaboraciones o
                  posiciones full-time.
                </p>
                <div className="flex items-center gap-2 text-purple-400">
                  <div className="w-2 h-2 rounded-full bg-[#a2d9af] animate-pulse" />
                  <span className="text-sm">online</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
