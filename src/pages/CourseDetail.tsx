import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Clock, Users, Award, CheckCircle, ChevronDown, ChevronUp, Play, MessageCircle, Star } from 'lucide-react';

const coursesData = [
  {
    slug: 'apiterapia-completa',
    title: 'Apiterapia Completa',
    subtitle: 'Curso Profissionalizante',
    description: 'Curso completo sobre o uso terapêutico dos produtos da colmeia. Aprenda sobre mel, própolis, geleia real, pólen e veneno de abelha com metodologia prática e científica.',
    duration: '40 horas',
    students: '450+',
    level: 'Iniciante ao Avançado',
    image: '/apiterapia.jpg',
    videoUrl: 'http://googleusercontent.com/youtube.com/apiterapia-video',
    instructor: 'Alexandre Gonçalves',
    price: 'R$ 3.000,00',
    installments: '12x de R$ 323,20',
    modules: [
      { id: 1, title: 'Apicultura Básica', lessons: ['História da Apicultura', 'Ciclo de Vida das Abelhas', 'Morfologia da Abelha'] },
      { id: 2, title: 'História da Apiterapia', lessons: ['Antiguidade', 'Moderna'] },
      { id: 3, title: 'Produtos Apícolas', lessons: ['Mel', 'Cera', 'Pólen', 'Pão de Abelha', 'Própolis', 'Geleia Real', 'Larva de Zangão', 'Ar da Colmeia', 'Apitoxina'] },
      { id: 4, title: 'Anatomia', lessons: ['Visão Geral', 'Sistemas do Organismo Humano'] },
      { id: 5, title: 'Medicina Tradicional Chinesa', lessons: ['O que é MTC?', 'Patologias na MTC', 'Teoria de Yin e Yang', 'Órgãos e Vísceras', '5 Elementos', 'Canais e Colaterais - Meridianos', 'Localização de Pontos', 'Técnica dos Pontos Alarme', 'Técnica Bei Shu', 'Técnica Tonificação e Sedação', 'Moxabustão', 'Auriculoterapia na Apiterapia', 'Diagnóstico de Língua e Pulso', 'Anamnese'] },
      { id: 6, title: 'Enfermidades e Tratamentos', lessons: ['Dores Crônicas', 'Doenças Autoimunes', 'Doenças Emocionais', 'Disfunções Hormonais', 'Técnicas de Aplicação de Apitoxina', 'Posologia produtos'] },
      { id: 7, title: 'Segurança e Anafilaxia', lessons: ['Molecular', 'Componentes', 'Efeitos no Organismo Humano', 'Anafilaxia', 'Segurança Clínica'] },
      { id: 8, title: 'Ambulatório', lessons: ['Prática', 'Estudos de Casos', 'Avaliação', 'Entrega de certificados'] }
    ],
    benefits: [
      'Aulas gravadas com acesso por 1 ano',
      'Certificado de Apiterapeuta',
      'Avaliação final (pré-requisito para entrega de certificado)',
      'Link com vários arquivos bônus',
    ],
    testimonials: [
      { name: 'Maria Silva', role: 'Terapeuta Holística', text: 'O curso transformou completamente minha prática. Hoje tenho uma nova fonte de renda com a apiterapia.', rating: 5 },
      { name: 'João Santos', role: 'Enfermeiro', text: 'Conhecimento incrível! Alexandre é um mestre na área. Recomendo para todos.', rating: 5 }
    ]
  },
  {
    slug: 'terapia-respiratoria-combinada',
    title: 'Terapia Respiratória Combinada (TRC)',
    subtitle: 'Abordagem Integrativa',
    description: 'Um método inovador que une respiração terapêutica, acupressão, moxabustão e ventosaterapia para um alívio profundo e duradouro da ansiedade e do estresse.',
    duration: '16 horas',
    students: '80+',
    level: 'Iniciante',
    image: '/trc.png',
    videoUrl: 'http://googleusercontent.com/youtube.com/trc-video',
    instructor: 'Alexandre Gonçalves',
    price: 'A consultar',
    installments: 'Fale conosco',
    modules: [
      { id: 1, title: 'Módulos detalhados', lessons: ['Passo a passo de como aplicar a TRC'] }
    ],
    benefits: [
      'Protocolos Respiratórios específicos para insônia, ansiedade, estresse, energia, foco e concentração.',
      'Guia e Aulas Práticas de Ventosaterapia para potencializar seus resultados e aplicar a técnica com segurança.',
      'Guia e Aulas Práticas de Moxabustão para aumentar sua energia vital e reduzir o estresse.',
      'Mapa de Acupuntura para localizar os pontos corretos e garantir uma aplicação eficaz.'
    ],
    testimonials: []
  },
  {
    slug: 'ventosaterapia',
    title: 'Ventosaterapia',
    subtitle: 'Técnica Milenar de Cura',
    description: 'Técnicas avançadas de ventosaterapia e cupping. Aprenda diferentes métodos e suas aplicações terapêuticas.',
    duration: '24 horas',
    students: '280+',
    level: 'Iniciante',
    image: '/ventosa.jpg',
    videoUrl: 'http://googleusercontent.com/youtube.com/ventosa-video',
    instructor: 'Alexandre Gonçalves',
    price: 'A consultar',
    installments: 'Fale conosco',
    modules: [
      { id: 1, title: 'Conteúdo', lessons: ['DICAS IMPORTANTES', 'SUA ORIGEM E HISTÓRIA', 'COMO FUNCIONA', 'OS TIPOS DE VENTOSAS', 'VENTOSA FIXA', 'VENTOSA DESLIZANTE', 'VENTOSA COM ACUPUNTURA', 'VENTOSA COM MOXABUSTÃO', 'VENTOSA COM SANGRIA', 'VENTOSA COM APITERAPIA', 'VENTOSA COM OZÔNIOTERAPIA', 'VENTOSA NA ESTÉTICA', 'INDICAÇÕES E BENEFÍCIOS', 'CONTRAINDICAÇÕES E EFEITOS', 'PRECAUÇÕES IMPORTANTES', 'COMO UTILIZAR', 'O TRATAMENTO SISTÊMICO QUE VISA UM EQUILÍBRIO GERAL', 'ÁREA DE TRATAMENTO', 'BIOSSEGURANÇA', 'ANAMNESE', 'NORMAS LEGAIS DE CONDUTA DOS TERAPEUTAS HOLÍSTICO'] }
    ],
    benefits: [],
    testimonials: []
  },
];

const CourseDetail = () => {
  const { slug } = useParams();
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  const course = coursesData.find(c => c.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!course) {
    return <div className="text-center py-20">Curso não encontrado.</div>;
  }

  const whatsappMessage = `Olá Alexandre! Tenho interesse no curso "${course.title}". Gostaria de saber mais informações.`;
  const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(whatsappMessage)}`;

  const showPriceSection = course.price !== 'A consultar';
  const showModulesSection = course.modules && course.modules.length > 0;
  const showBenefitsSection = course.benefits && course.benefits.length > 0;
  const showTestimonialsSection = course.testimonials && course.testimonials.length > 0;

  return (
    <div className="bg-cream min-h-screen" key={slug}>
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

      {/* Pricing Section - Condicional */}
      {showPriceSection && (
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
      )}

      {/* Course Content - Condicional */}
      {showModulesSection && (
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
      )}

      {/* Benefits - Condicional */}
      {showBenefitsSection && (
        <section className="py-16 bg-moss-green/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-moss-green mb-6">
                O Que Você Vai Receber
              </h2>
              <p className="text-lg text-dark-brown/80">
                {course.title === 'Terapia Respiratória Combinada (TRC)' 
                  ? '+ 4 Bônus Exclusivos' 
                  : 'Todos os recursos para sua formação completa'}
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
      )}

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
                  Especialista em terapias naturais com mais de 10 anos de experiência, 
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
                  <span className="text-sm font-medium text-dark-brown">10+ Anos de Experiência</span>
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
                src="/alexandre-.avif"
                alt="Alexandre Gonçalves"
                className="relative w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Condicional */}
      {showTestimonialsSection && (
        <section className="py-16 bg-moss-green/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-moss-green mb-6">
                O Que Nossos Alunos Dizem
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {course.testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-cream p-8 rounded-lg shadow-lg border border-moss-green/10"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-mustard fill-current" />
                    ))}
                  </div>
                  <p className="text-dark-brown/90 leading-relaxed mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-bold text-moss-green">{testimonial.name}</p>
                  <p className="text-sm text-dark-brown/70">{testimonial.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
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