"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Users,Shield,Cloud } from "lucide-react";
import Image from "next/image";

const skills = [
  {
    name: "Frontend",
    icon: Code2,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Backend",
    icon: Rocket,
    items: ["Node.js", "Python", "PostgreSQL", "API REST"],
  },
  {
    name: "Diseño",
    icon: Palette,
    items: ["Figma", "UI/UX", "Responsive Design", "Wireframing"],
  },
  {
    name: "Soft Skills",
    icon: Users,
    items: ["Trabajo en equipo", "Comunicación", "Liderazgo", "Creatividad"],
  },
 {
  name: "Cloud Computing",
  icon: Cloud,
  items: [
    "AWS Certified Cloud Practitioner",
    "AWS Solutions Architect Associate (AWS Academy Graduate)",
    "Diseño de arquitecturas cloud escalables",
    "Buenas prácticas de seguridad en la nube",
    "Trabajo colaborativo y liderazgo técnico"
  ],
},
{
  name: "Security Fundamentals",
  icon: Shield,
  items: [
    "Escaneo básico de puertos y análisis de exposición",
    "Aplicación de reglas de control de acceso (IAM, security groups)",
    "Principios de mínimo privilegio",
    "Monitoreo básico de eventos y actividad",
    "Buenas prácticas de hardening en entornos cloud"
  ],
},
];

export default function About() {
  return (
    <div className="min-h-screen px-6 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sobre <span className="text-[#D9C7A2]">Mí</span>
          </h1>
          <div className="w-20 h-1 bg-[#3E2C20] mb-12" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative group w-full max-w-md mx-auto">
              <div className="relative w-full aspect-square">
                <Image
                  src="/images/nthl_dev.png"
                  alt="Nath - ilustracion"
                  fill
                  className="object-contain transition-all duration-300 drop-shadow-lg group-hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-lg text-white/80 leading-relaxed">
              Soy desarrolladora web apasionada por crear soluciones digitales
              funcionales y bien diseñadas. Me motiva transformar ideas en
              aplicaciones modernas, poniendo especial atención en la
              experiencia de usuario y la calidad del código.
            </p>

            <p className="text-lg text-white/80 leading-relaxed">
              Tengo cerca de dos años de experiencia trabajando con tecnologías
              cloud y más de un año liderando y acompañando equipos de estudio y
              trabajo técnico. Actualmente soy graduada del programa AWS Academy
              en arquitectura de soluciones, lo que me ha permitido fortalecer
              mis bases en buenas prácticas y diseño de soluciones escalables.
            </p>

            <p className="text-lg text-white/80 leading-relaxed">
              Me encuentro en constante aprendizaje, profundizando en
              ciberseguridad y entornos multinube. Participo activamente en
              grupos de estudio, donde comparto conocimientos y aprendo de otras
              personas del área. Me caracterizo por mis ganas de crecer, mi
              compromiso y mi entusiasmo por seguir construyendo una carrera
              sólida en tecnología.
            </p>
          </motion.div>
        </div>

        <motion.div id="habilidades"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">Habilidades</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-[#3E2C20]/20 border border-[#3E2C20] rounded-xl p-6 hover:bg-[#3E2C20]/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-[#D9C7A2]/20 rounded-lg">
                      <Icon className="text-[#D9C7A2]" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {skill.name}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li
                        key={item}
                        className="text-white/70 text-sm flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D9C7A2]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
