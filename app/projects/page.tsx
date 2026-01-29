'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Plataforma de comercio electrónico completa con carrito de compras, pagos integrados y panel de administración.',
    image: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'React', 'Stripe', 'PostgreSQL'],
    liveLink: '#',
    githubLink: '#',
  },
  {
    id: 2,
    title: 'Dashboard Analítico',
    description: 'Dashboard interactivo para visualización de datos con gráficos en tiempo real y exportación de reportes.',
    image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'TypeScript', 'Chart.js', 'API REST'],
    liveLink: '#',
    githubLink: '#',
  },
  {
    id: 3,
    title: 'App de Gestión',
    description: 'Aplicación de gestión de proyectos y tareas con colaboración en tiempo real y notificaciones.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'WebSockets', 'MongoDB', 'Tailwind'],
    liveLink: '#',
    githubLink: '#',
  },
  {
    id: 4,
    title: 'Blog Personal',
    description: 'Blog minimalista con sistema de comentarios, búsqueda avanzada y optimización SEO.',
    image: 'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'MDX', 'Prisma', 'Vercel'],
    liveLink: '#',
    githubLink: '#',
  },
  {
    id: 5,
    title: 'Fitness Tracker',
    description: 'Aplicación para seguimiento de ejercicios y nutrición con estadísticas personalizadas.',
    image: 'https://images.pexels.com/photos/4162483/pexels-photo-4162483.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React Native', 'Firebase', 'Redux', 'Charts'],
    liveLink: '#',
    githubLink: '#',
  },
  {
    id: 6,
    title: 'Social Network',
    description: 'Red social con perfiles de usuario, publicaciones, likes, comentarios y mensajería instantánea.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'Socket.io', 'PostgreSQL', 'AWS'],
    liveLink: '#',
    githubLink: '#',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen px-6 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mis <span className="text-[#D9C7A2]">Proyectos</span>
          </h1>
          <div className="w-20 h-1 bg-[#3E2C20] mb-4" />
          <p className="text-lg text-white/70 mb-12 max-w-2xl">
            Una selección de proyectos que he desarrollado, desde aplicaciones web hasta
            soluciones empresariales completas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#3E2C20]/20 border border-[#3E2C20] rounded-xl overflow-hidden hover:border-[#D9C7A2] transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D9C7A2] transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/70 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-[#D9C7A2]/20 text-[#D9C7A2] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveLink}
                    className="flex items-center gap-2 text-sm text-white/80 hover:text-[#D9C7A2] transition-colors"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center gap-2 text-sm text-white/80 hover:text-[#D9C7A2] transition-colors"
                  >
                    <Github size={16} />
                    Código
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
