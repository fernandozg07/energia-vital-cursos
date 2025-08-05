import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  // AQUI: O número de telefone foi atualizado
  const whatsappNumber = '5511999997316'; 
  const message = 'Olá! Gostaria de saber mais sobre os cursos da Energia Vital.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-mustard hover:bg-mustard/90 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 z-50 group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-dark-brown text-cream px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Fale comigo no WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;