import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Award, ChevronRight } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Apiterapia Completa',
      subtitle: 'Curso Profissionalizante',
      description: 'Curso completo sobre o uso terapêutico dos produtos da colmeia. Aprenda sobre mel, própolis, geleia real, pólen e veneno de abelha.',
      duration: '40 horas',
      students: '450+',
      level: 'Iniciante ao Avançado',
      // Imagem corrigida
      image: '/apiterapia.jpg',
      slug: 'apiterapia-completa',
      featured: true
    },
    // AQUI: Novo curso de Terapia Respiratória Combinada
    {
      id: 2,
      title: 'Terapia Respiratória Combinada (TRC)',
      subtitle: 'Abordagem Integrativa',
      description: 'Técnicas de respiração para controle da ansiedade e melhora da saúde física e mental. Ideal para complementar outras terapias.',
      duration: '16 horas',
      students: '80+',
      level: 'Iniciante',
      // Nova imagem para o TRC
      image: '/trc.png',
      slug: 'terapia-respiratoria-combinada',
      featured: true
    },
    // Curso de Ventosaterapia mantido com imagem corrigida
    {
      id: 3,
      title: 'Ventosaterapia',
      subtitle: 'Técnica Milenar de Cura',
      description: 'Técnicas avançadas de ventosaterapia e cupping. Aprenda diferentes métodos e suas aplicações terapêuticas.',
      duration: '24 horas',
      students: '280+',
      level: 'Iniciante',
      // Imagem corrigida
      image: '/ventosa.jpg',
      slug: 'ventosaterapia',
      featured: false
    },
    // Curso de Auriculoterapia mantido com imagem corrigida
    {
      id: 4,
      title: 'Auriculoterapia',
      subtitle: 'Acupuntura Auricular',
      description: 'Técnicas de auriculoterapia e microssistema auricular. Diagnóstico e tratamento através da orelha.',
      duration: '20 horas',
      students: '190+',
      level: 'Iniciante',
      // Imagem corrigida
      image: '/auriculo.jpg',
      slug: 'auriculoterapia',
      featured: false
    }
    // Os outros cursos foram removidos
  ];

  const featuredCourses = courses.filter(course => course.featured);
  const regularCourses = courses.filter(course => !course.featured);

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-moss-green/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-moss-green mb-6">
              Nossos Cursos
            </h1>
            <p className="text-xl text-dark-brown/80 max-w-3xl mx-auto mb-8">
              Descubra uma jornada transformadora através das terapias naturais. 
              Cursos completos e práticos que irão capacitá-lo para uma nova carreira.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 bg-moss-green/10 px-4 py-2 rounded-full">
                <Award className="w-5 h-5 text-mustard" />
                <span className="text-sm font-medium text-dark-brown">Certificação Profissional</span>
              </div>
              <div className="flex items-center gap-2 bg-moss-green/10 px-4 py-2 rounded-full">
                <Users className="w-5 h-5 text-mustard" />
                <span className="text-sm font-medium text-dark-brown">Aulas Práticas</span>
              </div>
              <div className="flex items-center gap-2 bg-moss-green/10 px-4 py-2 rounded-full">
                <Clock className="w-5 h-5 text-mustard" />
                <span className="text-sm font-medium text-dark-brown">Suporte Vitalício</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-moss-green mb-4">
              Cursos em Destaque
            </h2>
            <p className="text-lg text-dark-brown/80">
              Nossos cursos mais procurados e completos
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredCourses.map((course) => (
              <div
                key={course.id}
                className="group bg-cream rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-mustard/20 hover:border-mustard/40"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-mustard text-cream px-3 py-1 rounded-full text-sm font-medium">
                    Destaque
                  </div>
                  <div className="absolute top-4 right-4 bg-moss-green text-cream px-3 py-1 rounded-full text-sm font-medium">
                    {course.duration}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-8">
                  <div className="mb-4">
                    <span className="text-sm text-mustard font-medium">{course.subtitle}</span>
                    <h3 className="text-2xl font-serif font-bold text-moss-green mb-2">
                      {course.title}
                    </h3>
                  </div>
                  
                  <p className="text-dark-brown/80 mb-6 leading-relaxed">
                    {course.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-dark-brown/70">
                      <Clock className="w-4 h-4 text-mustard" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-dark-brown/70">
                      <Users className="w-4 h-4 text-mustard" />
                      {course.students} alunos
                    </div>
                    <div className="flex items-center gap-2 text-sm text-dark-brown/70">
                      <Award className="w-4 h-4 text-mustard" />
                      {course.level}
                    </div>
                  </div>
                  
                  <Link
                    to={`/curso/${course.slug}`}
                    className="inline-flex items-center gap-2 bg-moss-green hover:bg-moss-green/90 text-cream px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                  >
                    Ver Detalhes
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Courses */}
      <section className="py-16 bg-moss-green/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-moss-green mb-4">
              Todos os Cursos
            </h2>
            <p className="text-lg text-dark-brown/80">
              Explore nossa grade completa de cursos especializados
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="group bg-cream rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-moss-green/10 hover:border-mustard/30"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-moss-green text-cream px-3 py-1 rounded-full text-sm font-medium">
                    {course.duration}
                  </div>
                  {course.featured && (
                    <div className="absolute top-4 left-4 bg-mustard text-cream px-3 py-1 rounded-full text-sm font-medium">
                      Destaque
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="mb-3">
                    <span className="text-sm text-mustard font-medium">{course.subtitle}</span>
                    <h3 className="text-xl font-serif font-bold text-moss-green mb-2">
                      {course.title}
                    </h3>
                  </div>
                  
                  <p className="text-dark-brown/80 mb-4 leading-relaxed text-sm">
                    {course.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-4 text-xs">
                    <div className="flex items-center gap-1 text-dark-brown/70">
                      <Users className="w-3 h-3 text-mustard" />
                      {course.students}
                    </div>
                    <div className="flex items-center gap-1 text-dark-brown/70">
                      <Award className="w-3 h-3 text-mustard" />
                      {course.level}
                    </div>
                  </div>
                  
                  <Link
                    to={`/curso/${course.slug}`}
                    className="inline-flex items-center gap-2 text-mustard hover:text-mustard/80 font-medium transition-colors duration-200 text-sm"
                  >
                    Saiba Mais
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-moss-green to-moss-green/90 rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream mb-6">
              Pronto para Começar sua Jornada?
            </h2>
            <p className="text-xl text-cream/90 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra qual curso é ideal para seus objetivos profissionais
            </p>
            
            <a
              href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os cursos da Energia Vital."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-mustard hover:bg-mustard/90 text-dark-brown px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              Fale Comigo no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;