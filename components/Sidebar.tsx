'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, Briefcase, Mail, Linkedin, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const navigationItems = [
  { name: 'Inicio', path: '/', icon: Home },
  { name: 'Sobre mí', path: '/about', icon: User },
  { name: 'Proyectos', path: '/projects', icon: Briefcase },
  { name: 'Contacto', path: '/contact', icon: Mail },
];

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/nathalie-carrascocampos/', 
    icon: Linkedin,
  },
  {
    name: 'Credly',
    url: 'https://www.credly.com/users/nathalie-carrasco-c', 
    icon: Award,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex lg:flex-col lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-64 bg-black border-r border-[#3E2C20]">
      <div className="flex flex-col h-full">
        <div className="p-8">
          <motion.h1
            className="text-2xl font-bold text-[#D9C7A2]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Nath_Dev
          </motion.h1>
          <p className="text-sm text-[#D9C7A2]/70 mt-2">CloudWeb Developer</p>
        </div>

        <nav className="flex-1 px-4">
          <ul className="space-y-2">
            {navigationItems.map((item, index) => {
              const isActive = pathname === item.path;
              const Icon = item.icon;

              return (
                <motion.li
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.path}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300
                      ${isActive
                        ? 'bg-[#3E2C20] text-[#D9C7A2]'
                        : 'text-white/70 hover:text-[#D9C7A2] hover:bg-[#3E2C20]/50'
                      }
                    `}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </nav>

        <div className="px-4 pb-4">
          <div className="flex gap-3 justify-center mb-4">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#3E2C20] text-[#D9C7A2] hover:bg-[#D9C7A2] hover:text-black transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  aria-label={link.name}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </div>
        </div>

        <div className="p-6 border-t border-[#3E2C20]">
          <p className="text-xs text-white/50 text-center">
            © Desarrollado con ❤️ por Nath - Todos los derechos reservados
          </p>
        </div>
      </div>
    </aside>
  );
}