// src/pages/Home.tsx - CÓDIGO CORRIGIDO
// - A seção de depoimentos foi reestruturada para ter um vídeo e 4 boxes de depoimento.
// - Um novo depoimento foi adicionado.
// - Os cursos em destaque foram atualizados para incluir o novo curso de TRC e remover os cursos antigos.
// - O número de telefone do WhatsApp foi atualizado na seção Hero.

import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, BookOpen, Award, ChevronRight } from 'lucide-react';

const Home = () => {
  // AQUI: A lista de cursos em destaque foi atualizada
  const courses = [
    {
      id: 1,
      title: 'Apiterapia Completa',
      description: 'Curso completo sobre o uso terapêutico dos produtos da colmeia',
      duration: '40 horas',
      image: 'apiterapia.jpg',
      slug: 'apiterapia-completa'
    },
    {
      id: 2,
      title: 'Terapia Respiratória Combinada (TRC)',
      description: 'Técnicas de respiração para controle da ansiedade e melhora da saúde',
      duration: '16 horas',
      image: 'trc.png', // AQUI: Imagem para o novo curso de TRC
      slug: 'terapia-respiratoria-combinada'
    },
    {
      id: 3,
      title: 'Ventosaterapia',
      description: 'Técnicas avançadas de ventosaterapia e cupping',
      duration: '24 horas',
      image: 'ventosa.jpg',
      slug: 'ventosaterapia'
    }
  ];

  // A seção de depoimentos permanece a mesma
  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Terapeuta Holística',
      text: 'O curso de apiterapia mudou completamente minha prática profissional. Alexandre é um professor excepcional.',
      rating: 5
    },
    {
      name: 'João Santos',
      role: 'Acupunturista',
      text: 'Conhecimento profundo e didática incrível. Recomendo todos os cursos da Energia Vital.',
      rating: 5
    },
    {
      name: 'Ana Paula',
      role: 'Fisioterapeuta',
      text: 'A experiência foi transformadora. Hoje aplico as técnicas aprendidas com total segurança.',
      rating: 5
    },
    {
      name: 'Carlos Oliveira',
      role: 'Estudante de Naturologia',
      text: 'Didática clara, conteúdo rico e muita prática. O melhor investimento para minha formação!',
      rating: 5
    }
  ];

  return (
    <div className="bg-cream">
      {/* O Header é renderizado em App.tsx, então não precisa aqui */}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/acupuntura.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-moss-green/70"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-cream mb-6 leading-tight">
            Energia Vital
          </h1>
          
          <p className="text-xl md:text-2xl text-cream/90 mb-4 font-medium">
            Apiterapia & Acupuntura
          </p>
          
          <p className="text-lg md:text-xl text-cream/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Conhecimento que Transforma Vidas e Profissionais
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/cursos"
              className="bg-mustard hover:bg-mustard/90 text-dark-brown px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              Conheça Nossos Cursos
            </Link>
            {/* AQUI: O número de telefone do WhatsApp foi atualizado */}
            <a
              href="https://wa.me/5511999997316"
              className="border-2 border-cream hover:bg-cream hover:text-moss-green text-cream px-8 py-4 rounded-full font-medium text-lg transition-all duration-300"
            >
              Fale Comigo
            </a>
          </div>
        </div>
      </section>

      {/* Sobre Alexandre */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-mustard/20 to-moss-green/20 rounded-2xl blur-xl"></div>
              <img
                src="alexandre-.avif"
                alt="Alexandre Gonçalves"
                className="relative w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-moss-green mb-4">
                  Alexandre Gonçalves
                </h2>
                <p className="text-xl text-mustard font-medium mb-6">
                  Especialista em Terapias Naturais
                </p>
              </div>
              
              <div className="prose prose-lg text-dark-brown leading-relaxed">
                <p>
                  Com mais de 15 anos de experiência em terapias naturais, Alexandre Gonçalves 
                  é reconhecido como um dos principais especialistas em apiterapia e acupuntura 
                  do Brasil.
                </p>
                
                <p>
                  Formado pela Universidade Tradicional de Medicina Chinesa, Alexandre 
                  dedicou sua carreira ao estudo e aplicação das terapias que conectam 
                  o ser humano com a natureza, promovendo cura e bem-estar de forma integral.
                </p>
                
                <p>
                  Através da Energia Vital, já transformou a vida de mais de 3.000 pessoas, 
                  seja como pacientes ou como profissionais capacitados em suas técnicas únicas.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 bg-moss-green/10 px-4 py-2 rounded-full">
                  <Award className="w-5 h-5 text-mustard" />
                  <span className="text-sm font-medium text-dark-brown">15+ Anos de Experiência</span>
                </div>
                <div className="flex items-center gap-2 bg-moss-green/10 px-4 py-2 rounded-full">
                  <Users className="w-5 h-5 text-mustard" />
                  <span className="text-sm font-medium text-dark-brown">3.000+ Vidas Transformadas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Pilares */}
      <section className="py-20 bg-moss-green/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-moss-green mb-6">
              Nossos Pilares
            </h2>
            <p className="text-xl text-dark-brown/80 max-w-3xl mx-auto">
              Os valores que guiam nossa missão de transformar vidas através do conhecimento
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-cream p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-moss-green/10">
              <div className="w-16 h-16 bg-moss-green rounded-full flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-cream" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-moss-green mb-4">Nossa Missão</h3>
              <p className="text-dark-brown leading-relaxed">
                Disseminar o conhecimento das terapias naturais de forma ética e responsável, 
                capacitando profissionais e transformando vidas através da sabedoria ancestral.
              </p>
            </div>
            
            <div className="bg-cream p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-moss-green/10">
              <div className="w-16 h-16 bg-mustard rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-cream" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-moss-green mb-4">Nossos Valores</h3>
              <p className="text-dark-brown leading-relaxed">
                Excelência no ensino, respeito à tradição, inovação responsável e compromisso 
                com o bem-estar integral de cada pessoa que confia em nosso trabalho.
              </p>
            </div>
            
            <div className="bg-cream p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-moss-green/10">
              <div className="w-16 h-16 bg-moss-green rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-cream" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-moss-green mb-4">Nossa Comunidade</h3>
              <p className="text-dark-brown leading-relaxed">
                Uma rede de profissionais comprometidos com a cura natural, unidos pela 
                paixão em promover saúde e bem-estar através das terapias ancestrais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cursos em Destaque */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-moss-green mb-6">
              Cursos em Destaque
            </h2>
            <p className="text-xl text-dark-brown/80 max-w-3xl mx-auto">
              Transforme sua carreira com nossos cursos especializados em terapias naturais
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="group bg-cream rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-moss-green/10 hover:border-mustard/30"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-mustard text-cream px-3 py-1 rounded-full text-sm font-medium">
                    {course.duration}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-moss-green mb-3">
                    {course.title}
                  </h3>
                  <p className="text-dark-brown/80 mb-6 leading-relaxed">
                    {course.description}
                  </p>
                  
                  <Link
                    to={`/curso/${course.slug}`}
                    className="inline-flex items-center gap-2 text-mustard hover:text-mustard/80 font-medium transition-colors duration-200"
                  >
                    Saiba Mais
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/cursos"
              className="bg-moss-green hover:bg-moss-green/90 text-cream px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              Ver Todos os Cursos
            </Link>
          </div>
        </div>
      </section>

      {/* Depoimentos - Seção REESTRUTURADA */}
      <section className="py-20 bg-moss-green/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-moss-green mb-6">
              O Que Dizem Nossos Alunos
            </h2>
            <p className="text-xl text-dark-brown/80 max-w-3xl mx-auto">
              Histórias reais de transformação e sucesso profissional
            </p>
          </div>
          
          {/* AQUI: Nova estrutura com grid de duas colunas */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Lado Esquerdo: Vídeo */}
            <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/SUA_ID_DO_VIDEO" // Substitua SUA_ID_DO_VIDEO pelo ID do seu vídeo do YouTube
                title="Depoimento de Alunos Energia Vital"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Lado Direito: Depoimentos Escritos */}
            <div className="grid sm:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-cream p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-moss-green/10"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-mustard fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-dark-brown/90 leading-relaxed mb-4 italic text-sm">
                    "{testimonial.text}"
                  </p>
                  
                  <div>
                    <h4 className="font-medium text-moss-green text-base">{testimonial.name}</h4>
                    <p className="text-xs text-dark-brown/70">{testimonial.role}</p>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-moss-green to-moss-green/90 rounded-3xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-6">
              Explore Nosso Blog
            </h2>
            <p className="text-xl text-cream/90 mb-8 max-w-2xl mx-auto">
              Artigos, dicas e conhecimentos sobre terapias naturais, 
              apiterapia e acupuntura direto do especialista
            </p>
            
            <Link
              to="/blog"
              className="bg-mustard hover:bg-mustard/90 text-dark-brown px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              Visite o Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;