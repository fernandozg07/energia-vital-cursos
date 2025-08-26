import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Tag, Share2, Eye } from 'lucide-react';

// Dados simulados para os posts do blog
// Em um aplicativo real, estes dados viriam de uma API ou banco de dados.
const blogPosts = [
  {
    // O slug foi corrigido para corresponder à URL na captura de tela do usuário
    // Original: 'beneficios-da-apiterapia'
    // Corrigido: 'beneficios-cientificos-apiterapia'
    slug: 'beneficios-cientificos-apiterapia',
    title: 'Os Benefícios Científicos da Apiterapia: O Que Dizem as Pesquisas',
    author: 'Alexandre Gonçalves',
    authorImage: 'https://placehold.co/100x100/A8A179/ffffff?text=AG',
    date: '15 de Janeiro, 2024',
    category: 'Apiterapia',
    readTime: '10 min de leitura',
    excerpt: 'A apiterapia, ou terapia com produtos das abelhas, tem ganhado cada vez mais reconhecimento científico nos últimos anos. O que antes era considerado apenas medicina tradicional, hoje conta com dezenas de estudos científicos que comprovam seus benefícios terapêuticos.',
    image: 'https://placehold.co/1200x600/D9D8C6/323F30?text=Apiterapia+e+Abelhas',
    content: `
      <p>A apiterapia, o uso medicinal dos produtos da colmeia, como mel, própolis, geleia real e veneno de abelha, tem evoluído de uma prática tradicional para uma disciplina de pesquisa robusta. A ciência moderna está desvendando os mecanismos por trás dos seus efeitos, validando o conhecimento ancestral e abrindo novos caminhos para a medicina.</p>
      <h2>A Comprovação Científica por Produto</h2>
      <h3>1. Própolis: O Escudo Natural da Colmeia</h3>
      <p>A própolis é uma resina coletada pelas abelhas para proteger a colmeia de patógenos. Sua eficácia é atribuída a uma complexa mistura de compostos, principalmente <strong>flavonoides e ácidos fenólicos</strong>.</p>
      <ul>
        <li><strong>Ação Antimicrobiana:</strong> Estudos de laboratório (<em>in vitro</em>) e clínicos têm demonstrado que a própolis possui uma potente atividade contra uma vasta gama de bactérias (incluindo <em>Staphylococcus aureus</em> resistente), vírus e fungos. Essa ação se dá pela inibição da síntese de DNA e pela desestruturação da membrana celular dos microrganismos.</li>
        <li><strong>Efeito Anti-inflamatório:</strong> Pesquisas publicadas no <em>Journal of Ethnopharmacology</em> destacam que a própolis verde brasileira, em particular, é rica em compostos como o artepelin C, que inibem enzimas pró-inflamatórias como a ciclo-oxigenase (COX) e a 5-lipo-oxigenase (5-LOX), reduzindo a inflamação de forma comparável a medicamentos sintéticos.</li>
      </ul>
      <h3>2. Mel: Mais do que um Adoçante</h3>
      <p>O mel é um alimento funcional com propriedades que vão além da nutrição. A ciência tem focado em seu uso como agente terapêutico.</p>
      <ul>
        <li><strong>Cura de Feridas:</strong> O mel é amplamente utilizado em hospitais para tratar queimaduras e úlceras. Sua eficácia se deve à sua <strong>atividade osmótica</strong> (que desidrata bactérias), seu pH ácido e à presença de <strong>peróxido de hidrogênio</strong>, que possui propriedades antissépticas. O mel de manuka, por exemplo, é estudado por sua capacidade de combater biofilmes bacterianos, tornando-o uma ferramenta valiosa contra infecções crônicas.</li>
        <li><strong>Propriedades Antioxidantes:</strong> O mel é rico em compostos fenólicos e flavonoides. Um estudo da Universidade de Illinois demonstrou que o mel de eucalipto contém ácido gálico e quercetina, que protegem as células do dano oxidativo, um fator associado a doenças crônicas como câncer e doenças cardiovasculares.</li>
      </ul>
      <h3>3. Geleia Real: O Segredo da Longevidade da Rainha</h3>
      <p>Este superalimento exclusivo é o objeto de intenso estudo devido à sua composição única e aos efeitos biológicos observados na abelha rainha.</p>
      <ul>
        <li><strong>Ácido 10-HDA e Royalactina:</strong> O principal componente da geleia real, o ácido 10-hidroxi-2-decenoico (10-HDA), é um ácido graxo com notável atividade antibacteriana e anti-inflamatória. Adicionalmente, a proteína <strong>royalactina</strong>, descoberta em 2011 por pesquisadores japoneses, é a chave para a diferenciação da larva em rainha. Em humanos, essa proteína e outros peptídeos bioativos estão sendo pesquisados por seu potencial de modulação hormonal, melhora da função cognitiva e saúde da pele.</li>
      </ul>
      <h2>Aplicações Clínicas Comprovadas</h2>
      <p>A literatura científica atual suporta o uso da apiterapia em:</p>
      <ul>
        <li>Tratamento de feridas e queimaduras</li>
        <li>Fortalecimento do sistema imunológico</li>
        <li>Redução de processos inflamatórios</li>
        <li>Melhora da função cardiovascular</li>
        <li>Apoio no tratamento de diabetes tipo 2</li>
      </ul>
      <h2>Segurança e Precauções</h2>
      <p>Embora a apiterapia seja geralmente segura, é importante considerar algumas precauções:</p>
      <ul>
        <li>Pessoas com alergia a produtos de abelha devem evitar o tratamento</li>
        <li>Gestantes e lactantes devem consultar um profissional antes do uso</li>
        <li>Alguns produtos podem interagir com medicamentos</li>
      </ul>
      <h2>O Futuro da Apiterapia</h2>
      <p>Com o crescente interesse da comunidade científica, novas pesquisas estão em andamento para explorar ainda mais o potencial terapêutico dos produtos das abelhas. Áreas promissoras incluem oncologia, neurologia e medicina regenerativa.</p>
    `,
  },
  {
    slug: 'mel-e-imunidade',
    title: 'Mel e Imunidade: Como Fortalecer a Saúde no Inverno',
    author: 'Mariana Santos',
    authorImage: 'https://placehold.co/100x100/F2E9E4/5C4033?text=MS',
    date: '22 de Junho, 2024',
    category: 'Imunologia',
    readTime: '7 min de leitura',
    excerpt: 'O mel não é apenas um adoçante natural, mas um poderoso aliado para a sua saúde, especialmente durante as estações mais frias. Descubra como o mel pode impulsionar seu sistema imunológico.',
    image: 'https://placehold.co/1200x600/C4B78A/5C4033?text=Mel+e+Imunidade',
    content: `
      <p>O mel é um alimento funcional que tem sido usado há séculos na medicina popular para tratar resfriados e dores de garganta. A ciência agora valida essas práticas, identificando compostos e mecanismos que reforçam sua eficácia no fortalecimento do sistema imunológico.</p>
      <h2>Ação Antioxidante e Anti-inflamatória</h2>
      <p>A capacidade imunomoduladora do mel está ligada ao seu rico perfil antioxidante. Ele contém <strong>polifenóis</strong>, como flavonoides (quercetina, apigenina) e ácidos fenólicos (ácido elágico, ácido gálico), que são poderosos sequestradores de radicais livres.</p>
      <ul>
        <li><strong>Combate ao Estresse Oxidativo:</strong> Os antioxidantes do mel ajudam a neutralizar o estresse oxidativo nas células imunológicas, protegendo-as de danos e mantendo sua funcionalidade. Isso é crucial para uma resposta imune eficaz.</li>
        <li><strong>Inibição da Inflamação:</strong> A inflamação crônica é prejudicial ao sistema imunológico. Pesquisas indicam que os compostos do mel podem inibir a produção de citocinas pró-inflamatórias, como o fator de necrose tumoral (TNF-α) e a interleucina-6 (IL-6), ajudando a regular a resposta inflamatória do corpo.</li>
      </ul>
      <h2>Mel como Agente Prebiótico</h2>
      <p>Um sistema digestivo saudável é a base de uma boa imunidade, e o mel desempenha um papel importante nisso. Ele contém oligossacarídeos que atuam como <strong>prebióticos</strong>.</p>
      <ul>
        <li><strong>Saúde da Microbiota:</strong> Esses prebióticos nutrem as bactérias benéficas no intestino, como as espécies de <em>Bifidobacterium</em> e <em>Lactobacillus</em>. Uma microbiota intestinal equilibrada é fundamental para a produção de células imunológicas e para a defesa contra patógenos.</li>
      </ul>
      <h2>Mecanismo Antimicrobiano</h2>
      <p>A eficácia do mel no combate a infecções, especialmente as do trato respiratório superior, é bem documentada. Seu mecanismo de ação é multifacetado:</p>
      <ul>
        <li><strong>Ação Osmótica:</strong> O alto teor de açúcar e baixo teor de água criam um ambiente hiperosmótico que impede o crescimento de bactérias.</li>
        <li><strong>Peróxido de Hidrogênio:</strong> A enzima glicose oxidase, presente no mel, produz pequenas quantidades de peróxido de hidrogênio, que atua como um antisséptico suave.</li>
      </ul>
      <p>A combinação desses fatores torna o mel uma opção segura e eficaz para o alívio de sintomas de tosse e dor de garganta, conforme recomendado pela Organização Mundial da Saúde (OMS).</p>
    `,
  },
  {
    slug: 'geleia-real-superalimento',
    title: 'Geleia Real: O Superalimento que as Abelhas Produzem',
    author: 'Alexandre Gonçalves',
    authorImage: 'https://placehold.co/100x100/A8A179/ffffff?text=AG',
    date: '10 de Maio, 2024',
    category: 'Nutrição',
    readTime: '8 min de leitura',
    excerpt: 'Produzida pelas abelhas operárias, a geleia real é o alimento exclusivo da abelha rainha, responsável por sua longevidade e fertilidade. Descubra o que torna este produto tão especial para a saúde humana.',
    image: 'https://placehold.co/1200x600/F2E9E4/A8A179?text=Geleia+Real',
    content: `
      <p>A geleia real é uma substância leitosa e viscosa, secretada pelas glândulas hipofaríngeas das abelhas operárias. É o alimento exclusivo da abelha rainha durante toda a sua vida, o que explica sua incrível longevidade e sua capacidade de reprodução. Esta composição única tem despertado o interesse da ciência para entender como seus benefícios podem ser transferidos para a saúde humana.</p>
      <h2>Composição Química e Biológica</h2>
      <p>A geleia real é uma complexa matriz de nutrientes, contendo água (60-70%), açúcares, proteínas, lipídios, vitaminas do complexo B (especialmente B5 e B7) e oligoelementos. No entanto, seus componentes mais ativos e únicos são:</p>
      <ul>
        <li><strong>Ácido 10-HDA (Ácido 10-hidroxi-2-decenoico):</strong> Este é um ácido graxo exclusivo da geleia real, considerado um marcador de qualidade. O 10-HDA demonstrou em estudos ter atividade antitumoral, anti-inflamatória e imunomoduladora. Ele ajuda a inibir a angiogênese (formação de novos vasos sanguíneos que alimentam tumores) e a induzir a apoptose (morte celular programada) em células cancerígenas.</li>
        <li><strong>Royalactina:</strong> Descoberta em 2011, esta proteína é o componente-chave que diferencia uma larva em abelha rainha. Em humanos, a royalactina e outros peptídeos menores, como a roialisin, têm sido estudados por suas propriedades neurotróficas, que podem promover a saúde e a plasticidade neuronal, além de suas ações antimicrobianas.</li>
      </ul>
      <h2>Benefícios Apoiados por Pesquisas</h2>
      <ul>
        <li><strong>Função Cognitiva:</strong> Estudos em modelos animais e testes clínicos preliminares sugerem que a geleia real pode melhorar a memória e a aprendizagem, possivelmente através da proteção de neurônios contra o estresse oxidativo e da promoção do crescimento de células nervosas.</li>
        <li><strong>Saúde Hormonal:</strong> Em mulheres na pós-menopausa, o consumo de geleia real tem mostrado potencial para reduzir sintomas vasomotores (como ondas de calor) e melhorar o perfil lipídico. Seus compostos podem ter uma suave ação estrogênica, contribuindo para o equilíbrio hormonal.</li>
        <li><strong>Propriedades Rejuvenescedoras:</strong> A combinação de vitaminas do complexo B, minerais e proteínas faz da geleia real um ingrediente popular em produtos cosméticos. Seu uso tópico e oral pode melhorar a elasticidade da pele, reduzir a produção de sebo e acelerar a regeneração celular.</li>
      </ul>
      <p>É importante ressaltar que, embora as pesquisas sejam promissoras, a geleia real deve ser consumida como um suplemento e não como um substituto para tratamentos médicos convencionais. Pessoas com alergias a produtos de abelha ou asma devem evitar o uso, pois pode haver risco de reações alérgicas graves.</p>
    `,
  },
];

// Componente para a página de lista de posts do blog
const BlogList = () => {
  return (
    <div className="bg-cream min-h-screen py-16 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-moss-green mb-12 text-center">
          Nosso Blog
        </h1>
        <p className="text-xl text-dark-brown/80 text-center mb-16 max-w-3xl mx-auto">
          Descubra o universo da apiterapia e o poder da natureza através de nossos artigos. Conhecimento, saúde e bem-estar, tudo em um só lugar.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group bg-cream rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-moss-green/10 hover:border-mustard/30"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2 mb-2 text-sm text-dark-brown/70">
                  <div className="flex items-center gap-1 bg-moss-green text-cream px-2 py-0.5 rounded-full">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </div>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-bold text-moss-green group-hover:text-mustard transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-dark-brown/80 mt-2 text-base line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

// Componente para a página de um post individual
const BlogPost = () => {
  // Obtém o slug do URL usando o hook useParams do React Router
  const { slug } = useParams();

  // Encontra o post correspondente nos dados simulados
  const post = blogPosts.find(p => p.slug === slug);

  // Se o post não for encontrado, exibe uma mensagem de erro
  if (!post) {
    return (
      <div className="bg-cream min-h-screen py-16 text-center font-sans">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold text-moss-green mb-4">Post não encontrado</h1>
          <p className="text-dark-brown/80 mb-8">O artigo que você está procurando não existe ou foi removido.</p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-mustard hover:text-mustard/80 font-medium transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para o Blog
          </Link>
        </div>
      </div>
    );
  }

  // Filtra os posts relacionados (exclui o post atual)
  const relatedPosts = blogPosts.filter(p => p.slug !== slug);

  return (
    <div className="bg-cream min-h-screen font-sans">
      {/* Seção Principal (Hero) */}
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
                <img
                  src={post.authorImage}
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

      {/* Imagem em Destaque */}
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

      {/* Conteúdo do Artigo */}
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

      {/* Biografia do Autor */}
      <section className="py-12 bg-moss-green/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cream rounded-2xl p-8 shadow-lg border border-moss-green/10">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <img
                src={post.authorImage}
                alt={post.author}
                className="w-24 h-24 rounded-full object-cover flex-shrink-0"
              />

              <div className="flex-1">
                <h3 className="text-2xl font-serif font-bold text-moss-green mb-2">
                  {post.author}
                </h3>
                <p className="text-mustard font-medium mb-4">
                  Especialista em Terapias Naturais
                </p>

                <p className="text-dark-brown/80 leading-relaxed mb-6">
                  Com mais de 15 anos de experiência em terapias naturais, {post.author} é reconhecido
                  como uma das principais autoridades em apiterapia do Brasil. Através de seus cursos
                  e atendimentos, já transformou a vida de mais de 3.000 pessoas.
                </p>

                <div className="flex gap-4">
                  {/* Links de navegação são mockados, pois não há outras páginas na aplicação. */}
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="bg-moss-green hover:bg-moss-green/90 text-cream px-6 py-3 rounded-full font-medium transition-all duration-300"
                  >
                    Ver Cursos
                  </a>
                  <a
                    href="https://wa.me/5511999997316"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-moss-green hover:bg-moss-green hover:text-cream text-moss-green px-6 py-3 rounded-full font-medium transition-all duration-300"
                  >
                    Falar no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artigos Relacionados */}
      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-moss-green mb-12 text-center">
            Artigos Relacionados
          </h2>

          {relatedPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {relatedPosts.slice(0, 2).map((relatedPost, index) => (
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
          ) : (
            <p className="text-center text-dark-brown/70">Não há artigos relacionados disponíveis.</p>
          )}
        </div>
      </section>

      {/* Seção de Chamada para Ação (CTA) */}
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
            {/* Links de navegação são mockados, pois não há outras páginas na aplicação. */}
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="bg-mustard hover:bg-mustard/90 text-dark-brown px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              Ver Nossos Cursos
            </a>

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

// Componente principal da aplicação que configura as rotas
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rota para a lista de posts do blog */}
        <Route path="/blog" element={<BlogList />} />
        {/* Rota para um post individual, com um parâmetro dinâmico 'slug' */}
        <Route path="/blog/:slug" element={<BlogPost />} />
        {/* Rota padrão que redireciona para o blog */}
        <Route path="/" element={<BlogList />} />
      </Routes>
    </Router>
  );
};

export default App;
