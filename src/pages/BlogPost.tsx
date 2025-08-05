import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Tag, Share2 } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();

  // Mock data - em produção, isso viria de uma API
  const post = {
    title: 'Os Benefícios Científicos da Apiterapia: O Que Dizem as Pesquisas',
    author: 'Alexandre Gonçalves',
    date: '15 de Janeiro, 2024',
    category: 'Apiterapia',
    readTime: '8 min de leitura',
    // AQUI: Imagem atualizada para o arquivo da pasta public
    image: '/apiterapia.jpg',
    content: `
      <p>A apiterapia, ou terapia com produtos das abelhas, tem ganhado cada vez mais reconhecimento científico nos últimos anos. O que antes era considerado apenas medicina tradicional, hoje conta com dezenas de estudos científicos que comprovam seus benefícios terapêuticos.</p>

      <h2>O Que É Apiterapia?</h2>
      <p>A apiterapia é o uso terapêutico dos produtos da colmeia, incluindo mel, própolis, geleia real, pólen, cera de abelha e veneno de abelha (apitoxina). Cada um desses produtos possui propriedades únicas que podem beneficiar a saúde humana de diferentes maneiras.</p>

      <h2>Evidências Científicas</h2>
      <p>Recentes estudos publicados em revistas científicas de renome internacional têm demonstrado a eficácia da apiterapia em diversas condições:</p>

      <h3>1. Propriedades Antimicrobianas do Mel</h3>
      <p>Pesquisas da Universidade de Cardiff revelaram que o mel de manuka possui propriedades antibacterianas superiores a muitos antibióticos convencionais, sendo especialmente eficaz contra bactérias resistentes como MRSA.</p>

      <h3>2. Própolis como Anti-inflamatório</h3>
      <p>Estudos brasileiros da USP demonstraram que a própolis verde possui compostos fenólicos que reduzem significativamente marcadores inflamatórios no organismo, sendo comparável a anti-inflamatórios tradicionais.</p>

      <h3>3. Geleia Real e Função Cognitiva</h3>
      <p>Pesquisas japonesas indicam que a geleia real pode melhorar a função cognitiva e a memória em idosos, possivelmente devido aos seus ácidos graxos únicos e proteínas bioativas.</p>

      <h2>Aplicações Clínicas Comprovadas</h2>
      <p>A literatura científica atual suporta o uso da apiterapia em:</p>
      
      <ul>
        <li>Tratamento de feridas e queimaduras</li>
        <li>Fortalecimento do sistema imunológico</li>
        <li>Redução de processos inflamatórios</li>
        <li>Melhora da função cardiovascular</li>
        <li>Apoio no tratamento de diabetes tipo 2</li>
        <li>Alívio de sintomas alérgicos</li>
      </ul>

      <h2>Segurança e Precauções</h2>
      <p>Embora a apiterapia seja geralmente segura, é importante considerar algumas precauções:</p>
      
      <ul>
        <li>Pessoas com alergia a produtos de abelha devem evitar o tratamento</li>
        <li>Gestantes e lactantes devem consultar um profissional antes do uso</li>
        <li>Alguns produtos podem interagir com medicamentos</li>
        <li>A qualidade dos produtos é fundamental para a eficácia</li>
      </ul>

      <h2>O Futuro da Apiterapia</h2>
      <p>Com o crescente interesse da comunidade científica, novas pesquisas estão em andamento para explorar ainda mais o potencial terapêutico dos produtos das abelhas. Áreas promissoras incluem oncologia, neurologia e medicina regenerativa.</p>

      <h2>Conclusão</h2>
      <p>A apiterapia representa uma ponte entre a sabedoria tradicional e a medicina baseada em evidências. Os estudos científicos continuam a validar o que as culturas antigas já sabiam: os produtos das abelhas possuem propriedades terapêuticas extraordinárias.</p>

      <p>Para aqueles interessados em explorar a apiterapia, é fundamental buscar orientação de profissionais qualificados e usar produtos de qualidade certificada. A ciência está do nosso lado, e o futuro da apiterapia é promissor.</p>
    `
  };

  const relatedPosts = [
    {
      title: 'Própolis: O Antibiótico Natural da Natureza',
      slug: 'propolis-antibiotico-natural',
      // AQUI: Imagem atualizada
      image: '/apiterapia.jpg'
    },
    {
      title: 'Mel Medicinal: Escolhendo o Melhor para Cada Tratamento',
      slug: 'mel-medicinal-escolher-melhor',
      // AQUI: Imagem atualizada
      image: '/apiterapia.jpg'
    }
  ];

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 bg-moss-green/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-mustard hover:text-mustard/80 font-medium mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para o Blog
          </Link>
          
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-dark-brown/70">
              <div className="flex items-center gap-2 bg-moss-green text-cream px-3 py-1 rounded-full">
                <Tag className="w-3 h-3" />
                {post.category}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {post.author}
              </div>
              <span>{post.readTime}</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-moss-green mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* AQUI: Imagem de perfil do autor atualizada */}
                <img
                  src="/alexandre.avif"
                  alt={post.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-dark-brown">{post.author}</p>
                  <p className="text-sm text-dark-brown/70">Especialista em Terapias Naturais</p>
                </div>
              </div>
              
              <button className="flex items-center gap-2 text-mustard hover:text-mustard/80 transition-colors duration-200">
                <Share2 className="w-5 h-5" />
                Compartilhar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            <div
              className="text-dark-brown leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                fontSize: '18px',
                lineHeight: '1.8'
              }}
            />
          </article>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-12 bg-moss-green/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cream rounded-2xl p-8 shadow-lg border border-moss-green/10">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* AQUI: Imagem de perfil do autor atualizada */}
              <img
                src="/alexandre.avif"
                alt="Alexandre Gonçalves"
                className="w-24 h-24 rounded-full object-cover flex-shrink-0"
              />
              
              <div className="flex-1">
                <h3 className="text-2xl font-serif font-bold text-moss-green mb-2">
                  Alexandre Gonçalves
                </h3>
                <p className="text-mustard font-medium mb-4">
                  Especialista em Terapias Naturais
                </p>
                
                <p className="text-dark-brown/80 leading-relaxed mb-6">
                  Com mais de 15 anos de experiência em terapias naturais, Alexandre é reconhecido 
                  como uma das principais autoridades em apiterapia do Brasil. Através de seus cursos 
                  e atendimentos, já transformou a vida de mais de 3.000 pessoas.
                </p>
                
                <div className="flex gap-4">
                  <Link
                    to="/cursos"
                    className="bg-moss-green hover:bg-moss-green/90 text-cream px-6 py-3 rounded-full font-medium transition-all duration-300"
                  >
                    Ver Cursos
                  </Link>
                  <a
                    // AQUI: Número de WhatsApp atualizado
                    href="https://wa.me/5511999997316"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-moss-green hover:bg-moss-green hover:text-cream text-moss-green px-6 py-3 rounded-full font-medium transition-all duration-300"
                  >
                    Falar Comigo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-moss-green mb-12 text-center">
            Artigos Relacionados
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {relatedPosts.map((relatedPost, index) => (
              <Link
                key={index}
                to={`/blog/${relatedPost.slug}`}
                className="group bg-cream rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-moss-green/10 hover:border-mustard/30"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-moss-green group-hover:text-mustard transition-colors duration-300">
                    {relatedPost.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-moss-green text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Gostou do Conteúdo?
          </h2>
          
          <p className="text-xl text-cream/90 mb-8 max-w-2xl mx-auto">
            Explore nossos cursos especializados e transforme seu conhecimento 
            em uma nova carreira profissional
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/cursos"
              className="bg-mustard hover:bg-mustard/90 text-dark-brown px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              Ver Nossos Cursos
            </Link>
            
            <a
              href="https://wa.me/5511999997316?text=Olá! Li seu artigo sobre apiterapia e gostaria de saber mais sobre os cursos."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-cream hover:bg-cream hover:text-moss-green text-cream px-8 py-4 rounded-full font-medium text-lg transition-all duration-300"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;