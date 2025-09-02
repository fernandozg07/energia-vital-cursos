import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, Mail, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-moss-green text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              {/* Substituindo a div com a sigla pela tag img */}
              <img
                src="/logo.jpg" // O caminho para a imagem da pasta public
                alt="Logo Energia Vital"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="text-2xl font-serif font-bold">Energia Vital</h3>
                <p className="text-cream/80 text-sm">Apiterapia & Acupuntura</p>
              </div>
            </div>
            
            <p className="text-cream/80 leading-relaxed mb-6 max-w-md">
              Transformando vidas através do conhecimento das terapias naturais. 
              Mais de 15 anos dedicados ao ensino e prática da apiterapia e acupuntura.
            </p>
            
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/5511999997316"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-cream/80 hover:text-mustard transition-colors duration-200 w-fit"
              >
                <MessageCircle className="w-5 h-5" />
                <span>(11) 99999-7316</span>
              </a>
              
              <a
                href="https://www.instagram.com/energiavital.acupuntura?igsh=azkwam54dzdldjFk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-cream/80 hover:text-mustard transition-colors duration-200 w-fit"
              >
                <Instagram className="w-5 h-5" />
                <span>energiavital.acupuntura</span>
              </a>
              
              <a
                href="mailto:apiterapiaeacupuntura@gmail.com"
                className="flex items-center gap-3 text-cream/80 hover:text-mustard transition-colors duration-200 w-fit"
              >
                <Mail className="w-5 h-5" />
                <span>apiterapiaeacupuntura@gmail.com</span>
              </a>
              
              <div className="flex items-center gap-3 text-cream/80">
                <MapPin className="w-5 h-5" />
                <span>São Paulo - SP, Brasil</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Navegação</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-cream/80 hover:text-mustard transition-colors duration-200"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/cursos"
                  className="text-cream/80 hover:text-mustard transition-colors duration-200"
                >
                  Cursos
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-cream/80 hover:text-mustard transition-colors duration-200"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="text-cream/80 hover:text-mustard transition-colors duration-200"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Cursos</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/curso/apiterapia-completa"
                  className="text-cream/80 hover:text-mustard transition-colors duration-200"
                >
                  Apiterapia
                </Link>
              </li>
              <li>
                <Link
                  to="/curso/terapia-respiratoria-combinada"
                  className="text-cream/80 hover:text-mustard transition-colors duration-200"
                >
                  Terapia Respiratória Combinada (TRC)
                </Link>
              </li>
              <li>
                <Link
                  to="/curso/ventosaterapia"
                  className="text-cream/80 hover:text-mustard transition-colors duration-200"
                >
                  Ventosaterapia
                </Link>
              </li>
              <li>
                <Link
                  to="/cursos"
                  className="text-cream/80 hover:text-mustard transition-colors duration-200"
                >
                  Ver Todos os Cursos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-cream/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-cream/80">
              <span>© {currentYear} Energia Vital. Feito com</span>
              <Heart className="w-4 h-4 text-mustard fill-current" />
              <span>por Alexandre Gonçalves</span>
            </div>
            
            <div className="flex gap-6 text-sm text-cream/80">
              <a href="#" className="hover:text-mustard transition-colors duration-200">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-mustard transition-colors duration-200">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;