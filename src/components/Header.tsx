// src/components/Header.tsx - CÓDIGO CORRIGIDO
// - A borda amarela foi removida do logo.

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
            {/* AQUI: As classes de borda foram removidas desta div */}
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src="/logo.jpg" 
                alt="Energia Vital Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="ml-2 hidden md:block">
              <h3 className="text-lg font-serif font-bold text-dark-brown leading-none">Energia Vital</h3>
              <p className="text-xs text-dark-brown/70 leading-none">Apiterapia & Acupuntura</p>
            </div>
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
