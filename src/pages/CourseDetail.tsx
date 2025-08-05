import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Clock, Users, Award, CheckCircle, ChevronDown, ChevronUp, Play, MessageCircle } from 'lucide-react';

const CourseDetail = () => {
  const { slug } = useParams();
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  // Mock data - em produção, isso viria de uma API ou contexto
  const course = {
    title: 'Apiterapia Completa',
    subtitle: 'Curso Profissionalizante',
    description: 'Curso completo sobre o uso terapêutico dos produtos da colmeia. Aprenda sobre mel, própolis, geleia real, pólen e veneno de abelha com metodologia prática e científica.',
    longDescription: 'Este curso abrangente oferece uma formação completa em apiterapia, combinando conhecimento tradicional com evidências científicas modernas. Você aprenderá sobre todos os produtos da colmeia e suas aplicações terapêuticas, desde o básico até técnicas avançadas de tratamento.',
    duration: '40 horas',
    students: '450+',
    level: 'Iniciante ao Avançado',
    image: 'https://images.pexels.com/photos/1616470/pexels-photo-1616470.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Substitua por um vídeo real
    instructor: 'Alexandre Gonçalves',
    price: 'R$ 897,00',
    installments: '12x de R$ 74,75',
    modules: [
      {
        id: 1,
        title: 'Introdução à Apiterapia',
        lessons: [
          'História e fundamentos da apiterapia',
          'Anatomia e comportamento das abelhas',
          'Produtos da colmeia: visão geral',
          'Legislação e aspectos éticos'
        ]
      },
      {
        id: 2,
        title: 'Mel Terapêutico',
        lessons: [
          'Propriedades medicinais do mel',
          'Tipos de mel e suas indicações',
          'Aplicações clínicas do mel',
          'Dosagens e contra-indicações'
        ]
      },
      {
        id: 3,
        title: 'Própolis e Suas Aplicações',
        lessons: [
          'Composição química da própolis',
          'Propriedades antimicrobianas',
          'Formas de apresentação e uso',
          'Casos clínicos práticos'
        ]
      },
      {
        id: 4,
        title: 'Geleia Real e Pólen',
        lessons: [
          'Produção e propriedades da geleia real',
          'Benefícios nutricionais do pólen',
          'Indicações terapêuticas',
          'Protocolos de administração'
        ]
      },
      {
        id: 5,
        title: 'Apitoxina (Veneno de Abelha)',
        lessons: [
          'Composição e mecanismo de ação',
          'Técnicas de aplicação segura',
          'Indicações e contra-indicações',
          'Protocolos de dessensibilização'
        ]
      },
      {
        id: 6,
        title: 'Prática Clínica',
        lessons: [
          'Anamnese em apiterapia',
          'Elaboração de protocolos',
          'Acompanhamento de casos',
          'Aspectos legais da prática'
        ]
      }
    ],
    benefits: [
      'Certificado de conclusão reconhecido',
      'Material didático completo em PDF',
      'Acesso vitalício ao conteúdo',
      'Suporte direto com o instrutor',
      'Grupo exclusivo de alunos',
      'Diploma profissionalizante',
      'Apoio para abertura de consultório',
      'Atualizations gratuitas do conteúdo'
    ],
    testimonials: [
      {
        name: 'Maria Silva',
        role: 'Terapeuta Holística',
        text: 'O curso transformou completamente minha prática. Hoje tenho uma nova fonte de renda com a apiterapia.',
        rating: 5
      },
      {
        name: 'João Santos',
        role: 'Enfermeiro',
        text: 'Conhecimento incrível! Alexandre é um mestre na área. Recomendo para todos.',
        rating: 5
      }
    ]
  };

  const whatsappMessage = `Olá Alexandre! Tenho interesse no curso "${course.title}". Gostaria de saber mais informações sobre valores e como me inscrever.`;
  const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 bg-moss-green/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-mustard font-medium text-lg">{course.subtitle}</span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-moss-green mb-6 mt-2">
                {course.title}
              </h1>
              
              <p className="text-xl text-dark-brown/80 mb-8 leading-relaxed">
                {course.description}
              </p>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-mustard" />
                  <span className="text-dark-brown font-medium">{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-mustard" />
                  <span className="text-dark-brown font-medium">{course.students} alunos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-mustard" />
                  <span className="text-dark-brown font-medium">{course.level}</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-mustard hover:bg-mustard/90 text-dark-brown px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  Quero me Inscrever
                </a>
                <button className="border-2 border-moss-green hover:bg-moss-green hover:text-cream text-moss-green px-8 py-4 rounded-full font-medium text-lg transition-all duration-300">
                  Ver Aula Demonstrativa
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-mustard/20 to-moss-green/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-cream rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <button className="bg-cream/90 hover:bg-cream p-4 rounded-full transition-all duration-300 hover:scale-110">
                    <Play className="w-8 h-8 text-moss-green ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-8 bg-moss-green text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <p className="text-cream/80 mb-2">Investimento no seu futuro profissional:</p>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold">{course.price}</span>
                <span className="text-cream/80">ou {course.installments}</span>
              </div>
            </div>
            
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-0 bg-mustard hover:bg-mustard/90 text-dark-brown px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              Garantir Minha Vaga
            </a>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-moss-green mb-6">
              Conteúdo Programático
            </h2>
            <p className="text-lg text-dark-brown/80">
              {course.modules.length} módulos completos com teoria e prática
            </p>
          </div>
          
          <div className="space-y-4">
            {course.modules.map((module) => (
              <div
                key={module.id}
                className="bg-cream border border-moss-green/20 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-moss-green/5 transition-colors duration-200"
                >
                  <div>
                    <h3 className="text-xl font-serif font-bold text-moss-green mb-1">
                      Módulo {module.id}: {module.title}
                    </h3>
                    <p className="text-dark-brown/70 text-sm">
                      {module.lessons.length} aulas
                    </p>
                  </div>
                  
                  {expandedModule === module.id ? (
                    <ChevronUp className="w-5 h-5 text-mustard" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-mustard" />
                  )}
                </button>
                
                {expandedModule === module.id && (
                  <div className="px-6 pb-6 border-t border-moss-green/10">
                    <ul className="space-y-3 mt-4">
                      {module.lessons.map((lesson, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-mustard mt-0.5 flex-shrink-0" />
                          <span className="text-dark-brown">{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-moss-green/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-moss-green mb-6">
              O Que Você Vai Receber
            </h2>
            <p className="text-lg text-dark-brown/80">
              Todos os recursos para sua formação completa em apiterapia
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {course.benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-cream p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-moss-green/10"
              >
                <CheckCircle className="w-8 h-8 text-mustard mb-4" />
                <p className="text-dark-brown font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Instructor */}
      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-moss-green mb-6">
                Seu Instrutor
              </h2>
              
              <h3 className="text-2xl font-serif font-bold text-mustard mb-4">
                Alexandre Gonçalves
              </h3>
              
              <div className="prose prose-lg text-dark-brown leading-relaxed space-y-4">
                <p>
                  Especialista em terapias naturais com mais de 15 anos de experiência, 
                  Alexandre é reconhecido como uma das principais autoridades em apiterapia do Brasil.
                </p>
                
                <p>
                  Formado pela Universidade Tradicional de Medicina Chinesa, dedicou sua carreira 
                  ao estudo e aplicação das terapias que conectam o ser humano com a natureza.
                </p>
                
                <p>
                  Através de seus cursos, já capacitou mais de 2.000 profissionais em todo o país, 
                  sempre com foco na excelência do ensino e na transformação de vidas.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2 bg-moss-green/10 px-4 py-2 rounded-full">
                  <Award className="w-5 h-5 text-mustard" />
                  <span className="text-sm font-medium text-dark-brown">15+ Anos de Experiência</span>
                </div>
                <div className="flex items-center gap-2 bg-moss-green/10 px-4 py-2 rounded-full">
                  <Users className="w-5 h-5 text-mustard" />
                  <span className="text-sm font-medium text-dark-brown">2.000+ Alunos Formados</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-mustard/20 to-moss-green/20 rounded-2xl blur-xl"></div>
              <img
                src="/api/placeholder/500/600"
                alt="Alexandre Gonçalves"
                className="relative w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-moss-green text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Pronto para Transformar sua Carreira?
          </h2>
          
          <p className="text-xl text-cream/90 mb-8 max-w-2xl mx-auto">
            Não perca a oportunidade de se especializar em uma das terapias naturais 
            mais procuradas do mercado. Vagas limitadas!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-mustard hover:bg-mustard/90 text-dark-brown px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Quero Falar com Alexandre
            </a>
            
            <button className="border-2 border-cream hover:bg-cream hover:text-moss-green text-cream px-8 py-4 rounded-full font-medium text-lg transition-all duration-300">
              Tirar Dúvidas
            </button>
          </div>
          
          <p className="text-sm text-cream/70 mt-6">
            💬 Resposta em até 2 horas • 📱 Atendimento via WhatsApp
          </p>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;