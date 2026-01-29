'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, Briefcase, Mail, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigationItems = [
  { name: 'Inicio', path: '/', icon: Home },
  { name: 'Sobre mí', path: '/about', icon: User },
  { name: 'Proyectos', path: '/projects', icon: Briefcase },
  { name: 'Contacto', path: '/contact', icon: Mail },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="lg:hidden">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-[#3E2C20] px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-[#D9C7A2]">Portafolio</h1>
          <button
            onClick={toggleMenu}
            className="text-[#D9C7A2] hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/80 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />

            <motion.aside
              className="fixed top-0 right-0 h-screen w-64 bg-black border-l border-[#3E2C20] z-50"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-[#3E2C20]">
                  <h2 className="text-lg font-bold text-[#D9C7A2]">Menú</h2>
                  <button
                    onClick={toggleMenu}
                    className="text-[#D9C7A2] hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <nav className="flex-1 px-4 py-6">
                  <ul className="space-y-2">
                    {navigationItems.map((item) => {
                      const isActive = pathname === item.path;
                      const Icon = item.icon;

                      return (
                        <li key={item.path}>
                          <Link
                            href={item.path}
                            onClick={toggleMenu}
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
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                <div className="p-6 border-t border-[#3E2C20]">
                  <p className="text-xs text-white/50 text-center">
                    © Desarrollado con ❤️ por Nath - Todos los derechos reservados
                  </p>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
