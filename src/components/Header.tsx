// src/components/Header.tsx - CÓDIGO FINAL E OTIMIZADO PARA LOGO HORIZONTAL

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Início' },
    { path: '/cursos', label: 'Cursos' },
    { path: '/blog', label: 'Blog' },
    { path: '/contato', label: 'Contato' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-cream/95 backdrop-blur-sm border-b border-moss-green/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 py-4"> 
          <Link to="/" className="flex items-center">
            {/* Div para exibir o logo horizontal */}
            {/* Altura do logo ajustada para 70px em telas pequenas e 80px em telas grandes */}
            <div className="h-[70px] md:h-20"> {/* ALTERADO AQUI: Altura customizada h-[70px] */}
              <img
                src="/LogoEnergiaVital_VersaoHorizontal_RGB_Cores.png" // Garanta que este arquivo esteja na pasta 'public'
                alt="Energia Vital Logo"
                className="h-full object-contain" // 'object-contain' garante que a imagem inteira seja visível sem cortar
              />
            </div>
            {/* O bloco de texto duplicado foi REMOVIDO daqui */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-mustard ${
                  isActive(item.path) ? 'text-mustard' : 'text-dark-brown'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-moss-green/10 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-moss-green" />
            ) : (
              <Menu className="w-6 h-6 text-moss-green" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-moss-green/10">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-mustard ${
                    isActive(item.path) ? 'text-mustard' : 'text-dark-brown'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;