import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você enviaria os dados para seu backend
    console.log('Form submitted:', formData);
    
    // AQUI: O número de telefone do WhatsApp foi atualizado
    const whatsappMessage = `Olá Alexandre! Meu nome é ${formData.name}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/5511999997316?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-moss-green/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-moss-green mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl text-dark-brown/80 max-w-3xl mx-auto mb-8">
              Estou aqui para esclarecer suas dúvidas, orientar sobre nossos cursos 
              e ajudá-lo a dar o primeiro passo na sua jornada das terapias naturais
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-moss-green/10 px-4 py-2 rounded-full">
                <MessageCircle className="w-5 h-5 text-mustard" />
                <span className="text-sm font-medium text-dark-brown">Resposta Rápida</span>
              </div>
              <div className="flex items-center gap-2 bg-moss-green/10 px-4 py-2 rounded-full">
                <Clock className="w-5 h-5 text-mustard" />
                <span className="text-sm font-medium text-dark-brown">Atendimento Personalizado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-moss-green mb-6">
                  Vamos Conversar
                </h2>
                <p className="text-lg text-dark-brown/80 leading-relaxed mb-8">
                  Prefiro o contato pessoal e direto. Entre em contato comigo através 
                  dos canais abaixo e terei prazer em atendê-lo pessoalmente.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-moss-green/5 rounded-2xl border border-moss-green/10">
                  <div className="w-12 h-12 bg-mustard rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-cream" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-moss-green mb-2">
                      WhatsApp (Preferencial)
                    </h3>
                    <p className="text-dark-brown/80 mb-3">
                      Resposta em até 2 horas durante horário comercial
                    </p>
                    <a
                      href="https://wa.me/5511999997316"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-mustard hover:text-mustard/80 font-medium transition-colors duration-200"
                    >
                      <Phone className="w-4 h-4" />
                      (11) 99999-7316
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-moss-green/5 rounded-2xl border border-moss-green/10">
                  <div className="w-12 h-12 bg-moss-green rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-cream" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-moss-green mb-2">
                      E-mail
                    </h3>
                    <p className="text-dark-brown/80 mb-3">
                      Para dúvidas mais detalhadas ou documentos
                    </p>
                    <a
                      href="mailto:apiterapiaeacupuntura@gmail.com"
                      className="inline-flex items-center gap-2 text-mustard hover:text-mustard/80 font-medium transition-colors duration-200"
                    >
                      <Mail className="w-4 h-4" />
                      apiterapiaeacupuntura@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-moss-green/5 rounded-2xl border border-moss-green/10">
                  <div className="w-12 h-12 bg-moss-green rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-cream" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-moss-green mb-2">
                      Localização
                    </h3>
                    <p className="text-dark-brown/80 mb-3">
                      Atendimento presencial e online
                    </p>
                    <p className="text-mustard font-medium">
                      São Paulo - SP, Brasil
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-moss-green/5 rounded-2xl border border-moss-green/10">
                  <div className="w-12 h-12 bg-moss-green rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-cream" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-moss-green mb-2">
                      Horário de Atendimento
                    </h3>
                    <div className="space-y-1 text-dark-brown/80">
                      <p>Segunda a Sexta: 9h às 18h</p>
                      <p>Sábado: 9h às 14h</p>
                      <p>Domingo: Apenas emergências</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-cream border-2 border-moss-green/20 rounded-2xl p-8 shadow-xl">
              <div className="mb-8">
                <h3 className="text-2xl font-serif font-bold text-moss-green mb-4">
                  Envie sua Mensagem
                </h3>
                <p className="text-dark-brown/80">
                  Preencha o formulário abaixo e entrarei em contato em breve
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark-brown mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-moss-green/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-mustard/50 focus:border-mustard transition-colors duration-200 bg-cream"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-brown mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-moss-green/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-mustard/50 focus:border-mustard transition-colors duration-200 bg-cream"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-dark-brown mb-2">
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-moss-green/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-mustard/50 focus:border-mustard transition-colors duration-200 bg-cream"
                      placeholder="(11) 99999-7316"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-dark-brown mb-2">
                      Assunto *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-moss-green/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-mustard/50 focus:border-mustard transition-colors duration-200 bg-cream"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="curso-apiterapia">Curso de Apiterapia</option>
                      <option value="curso-acupuntura">Curso de Acupuntura</option>
                      <option value="outros-cursos">Outros Cursos</option>
                      <option value="consultoria">Consultoria</option>
                      <option value="parcerias">Parcerias</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-brown mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-moss-green/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-mustard/50 focus:border-mustard transition-colors duration-200 bg-cream resize-none"
                    placeholder="Conte-me sobre seu interesse, dúvidas ou como posso ajudá-lo..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-moss-green hover:bg-moss-green/90 text-cream px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Enviar Mensagem
                </button>

                <p className="text-sm text-dark-brown/70 text-center">
                  * Campos obrigatórios. Sua mensagem será enviada diretamente para meu WhatsApp.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-moss-green/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-moss-green mb-6">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-dark-brown/80">
              Respostas para as dúvidas mais comuns sobre nossos cursos
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-cream p-6 rounded-2xl shadow-sm border border-moss-green/10">
              <h3 className="text-xl font-serif font-bold text-moss-green mb-3">
                Como funcionam os cursos?
              </h3>
              <p className="text-dark-brown/80 leading-relaxed">
                Nossos cursos combinam teoria e prática, com aulas presenciais em São Paulo 
                e material de apoio digital. Cada curso inclui certificado, material didático 
                e suporte vitalício do instrutor.
              </p>
            </div>

            <div className="bg-cream p-6 rounded-2xl shadow-sm border border-moss-green/10">
              <h3 className="text-xl font-serif font-bold text-moss-green mb-3">
                Preciso de formação prévia na área da saúde?
              </h3>
              <p className="text-dark-brown/80 leading-relaxed">
                Não é obrigatório, mas é recomendado. Nossos cursos são adaptados tanto para 
                profissionais da saúde quanto para pessoas interessadas em iniciar uma nova carreira. 
                O importante é ter dedicação e interesse genuíno pelas terapias naturais.
              </p>
            </div>

            <div className="bg-cream p-6 rounded-2xl shadow-sm border border-moss-green/10">
              <h3 className="text-xl font-serif font-bold text-moss-green mb-3">
                Os certificados são reconhecidos?
              </h3>
              <p className="text-dark-brown/80 leading-relaxed">
                Sim, nossos certificados são válidos para comprovação de horas complementares 
                e capacitação profissional. Para atendimento clínico, é necessário verificar 
                a regulamentação local de cada município.
              </p>
            </div>

            <div className="bg-cream p-6 rounded-2xl shadow-sm border border-moss-green/10">
              <h3 className="text-xl font-serif font-bold text-moss-green mb-3">
                Qual é a forma de pagamento?
              </h3>
              <p className="text-dark-brown/80 leading-relaxed">
                Oferecemos diversas opções: à vista com desconto, parcelamento no cartão de crédito 
                em até 12 vezes, PIX e transferência bancária. Entre em contato para conhecer 
                as condições especiais disponíveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-moss-green text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Pronto para Começar?
          </h2>
          
          <p className="text-xl text-cream/90 mb-8 max-w-2xl mx-auto">
            A jornada das terapias naturais começa com uma conversa. 
            Entre em contato e vamos planejar juntos seu futuro profissional.
          </p>
          
          <a
            href="https://wa.me/5511999997316?text=Olá Alexandre! Vi seu site e gostaria de conversar sobre os cursos da Energia Vital."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-mustard hover:bg-mustard/90 text-dark-brown px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Conversar no WhatsApp
          </a>
          
          <p className="text-sm text-cream/70 mt-6">
            💬 Resposta em até 2 horas • 📱 Atendimento personalizado • 🔒 Sem compromisso
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;