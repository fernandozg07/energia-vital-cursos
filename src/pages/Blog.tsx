import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ChevronRight, Tag } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Os Benefícios Científicos da Apiterapia: O Que Dizem as Pesquisas',
      excerpt: 'Descubra como estudos recentes comprovam a eficácia dos produtos da colmeia no tratamento de diversas condições de saúde.',
      author: 'Alexandre Gonçalves',
      date: '15 de Janeiro, 2024',
      category: 'Apiterapia',
      // AQUI: Imagem atualizada para o arquivo da pasta public
      image: '/apiterapia.jpg',
      slug: 'beneficios-cientificos-apiterapia',
      featured: true
    },
    {
      id: 2,
      title: 'Acupuntura e Medicina Integrativa: Uma Abordagem Holística',
      excerpt: 'Como a acupuntura se integra à medicina moderna para oferecer tratamentos mais completos e eficazes.',
      author: 'Alexandre Gonçalves',
      date: '12 de Janeiro, 2024',
      category: 'Acupuntura',
      // AQUI: Imagem atualizada para o arquivo da pasta public
      image: '/acupuntura.jpg',
      slug: 'acupuntura-medicina-integrativa',
      featured: true
    },
    {
      id: 3,
      title: 'Própolis: O Antibiótico Natural da Natureza',
      excerpt: 'Conheça as propriedades antimicrobianas da própolis e suas aplicações terapêuticas comprovadas pela ciência.',
      author: 'Alexandre Gonçalves',
      date: '10 de Janeiro, 2024',
      category: 'Apiterapia',
      // AQUI: Imagem atualizada para o arquivo da pasta public
      image: '/apiterapia.jpg',
      slug: 'propolis-antibiotico-natural',
      featured: false
    },
    {
      id: 4,
      title: 'Ventosaterapia: Técnica Milenar para Dores Modernas',
      excerpt: 'Aprenda sobre esta antiga técnica terapêutica e como ela pode ajudar no tratamento de dores crônicas.',
      author: 'Alexandre Gonçalves',
      date: '8 de Janeiro, 2024',
      category: 'Ventosaterapia',
      // AQUI: Imagem atualizada para o arquivo da pasta public
      image: '/ventosa.jpg',
      slug: 'ventosaterapia-tecnica-milenar',
      featured: false
    },
    {
      id: 5,
      title: 'A História da Energia Vital: Nossa Jornada até Aqui',
      excerpt: 'Conheça a história e os valores que fundamentam a Energia Vital, desde o início até se tornar referência em terapias naturais.',
      author: 'Alexandre Gonçalves',
      date: '5 de Janeiro, 2024',
      category: 'Carreira',
      // AQUI: Imagem atualizada para o arquivo da pasta public
      image: '/logo.jpg',
      slug: 'iniciar-carreira-terapias-naturais',
      featured: false
    },
    {
      id: 6,
      title: 'Auriculoterapia: Tratamento através da orelha',
      excerpt: 'Entenda como a auriculoterapia, uma técnica da Medicina Tradicional Chinesa, pode ser utilizada para tratar dores e outros distúrbios.',
      author: 'Alexandre Gonçalves',
      date: '3 de Janeiro, 2024',
      category: 'Acupuntura',
      // AQUI: Imagem atualizada para o arquivo da pasta public
      image: '/auriculo.jpg',
      slug: 'mel-medicinal-escolher-melhor',
      featured: false
    }
  ];

  const categories = ['Todos', 'Apiterapia', 'Acupuntura', 'Ventosaterapia', 'Carreira'];
  const [selectedCategory, setSelectedCategory] = React.useState('Todos');

  const filteredPosts = selectedCategory === 'Todos' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const featuredPosts = posts.filter(post => post.featured);

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-moss-green/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-moss-green mb-6">
              Blog Energia Vital
            </h1>
            <p className="text-xl text-dark-brown/80 max-w-3xl mx-auto mb-8">
              Conhecimento, experiências e insights sobre terapias naturais, 
              apiterapia e acupuntura direto do especialista Alexandre Gonçalves
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-moss-green/10 px-4 py-2 rounded-full">
                <Tag className="w-5 h-5 text-mustard" />
                <span className="text-sm font-medium text-dark-brown">Artigos Especializados</span>
              </div>
              <div className="flex items-center gap-2 bg-moss-green/10 px-4 py-2 rounded-full">
                <User className="w-5 h-5 text-mustard" />
                <span className="text-sm font-medium text-dark-brown">Por Alexandre Gonçalves</span>
              </div>
            </div>
        </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-moss-green mb-4">
              Artigos em Destaque
            </h2>
            <p className="text-lg text-dark-brown/80">
              Os posts mais lidos e importantes da nossa comunidade
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-cream rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-mustard/20 hover:border-mustard/40"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-mustard text-cream px-3 py-1 rounded-full text-sm font-medium">
                    Destaque
                  </div>
                  <div className="absolute top-4 right-4 bg-moss-green text-cream px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4 text-sm text-dark-brown/70">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-serif font-bold text-moss-green mb-4 group-hover:text-mustard transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-dark-brown/80 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-mustard hover:text-mustard/80 font-medium transition-colors duration-200"
                  >
                    Ler Artigo Completo
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-moss-green/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-moss-green text-cream shadow-md'
                    : 'bg-cream text-dark-brown hover:bg-moss-green/10 border border-moss-green/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-moss-green mb-4">
              {selectedCategory === 'Todos' ? 'Todos os Artigos' : `Artigos sobre ${selectedCategory}`}
            </h2>
            <p className="text-lg text-dark-brown/80">
              {filteredPosts.length} artigo{filteredPosts.length !== 1 ? 's' : ''} encontrado{filteredPosts.length !== 1 ? 's' : ''}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-cream rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-moss-green/10 hover:border-mustard/30"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-moss-green text-cream px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </div>
                  {post.featured && (
                    <div className="absolute top-4 left-4 bg-mustard text-cream px-3 py-1 rounded-full text-sm font-medium">
                      Destaque
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-dark-brown/70">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-serif font-bold text-moss-green mb-3 group-hover:text-mustard transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-dark-brown/80 mb-4 leading-relaxed text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-mustard hover:text-mustard/80 font-medium transition-colors duration-200 text-sm"
                  >
                    Ler Mais
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-moss-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream mb-6">
            Não Perca Nenhum Conteúdo!
          </h2>
          
          <p className="text-xl text-cream/90 mb-8 max-w-2xl mx-auto">
            Receba dicas exclusivas, novos artigos e conteúdos especiais 
            sobre terapias naturais direto no seu WhatsApp
          </p>
          
          <a
            href="https://wa.me/5511999997316?text=Olá! Gostaria de receber dicas e conteúdos sobre terapias naturais."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-mustard hover:bg-mustard/90 text-dark-brown px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105"
          >
            Receber Conteúdos no WhatsApp
          </a>
          
          <p className="text-sm text-cream/70 mt-6">
            📱 Conteúdo gratuito • 🔒 Sem spam • ❌ Descadastre quando quiser
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;