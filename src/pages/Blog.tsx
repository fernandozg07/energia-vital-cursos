import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Calendar, User, ArrowLeft, Tag, Share2, Eye } from 'lucide-react';

// Define a type for a single blog post. This helps with type safety.
interface Post {
  slug: string;
  title: string;
  author: string;
  authorImage: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  image: string;
  content: string;
}

// Simulated blog post data. Replicating the provided data.
const blogPosts: Post[] = [
  {
    slug: 'beneficios-cientificos-apiterapia',
    title: 'Os Benefícios Científicos da Apiterapia: O Que Dizem as Pesquisas',
    author: 'Alexandre Gonçalves',
    authorImage: 'https://placehold.co/100x100/A8A179/ffffff?text=AG',
    date: '15 de Janeiro, 2024',
    category: 'Apiterapia',
    readTime: '8 min de leitura',
    excerpt: 'A apiterapia, ou terapia com produtos das abelhas, tem ganhado cada vez mais reconhecimento científico nos últimos anos. O que antes era considerado apenas medicina tradicional, hoje conta com dezenas de estudos científicos que comprovam seus benefícios terapêuticos.',
    image: 'https://placehold.co/1200x600/D9D8C6/323F30?text=Apiterapia+e+Abelhas',
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
    `,
  },
  {
    slug: 'mel-e-imunidade',
    title: 'Mel e Imunidade: Como Fortalecer a Saúde no Inverno',
    author: 'Mariana Santos',
    authorImage: 'https://placehold.co/100x100/F2E9E4/5C4033?text=MS',
    date: '22 de Junho, 2024',
    category: 'Imunologia',
    readTime: '6 min de leitura',
    excerpt: 'O mel não é apenas um adoçante natural, mas um poderoso aliado para a sua saúde, especialmente durante as estações mais frias. Descubra como o mel pode impulsionar seu sistema imunológico.',
    image: 'https://placehold.co/1200x600/C4B78A/5C4033?text=Mel+e+Imunidade',
    content: `
      <p>Quando pensamos em mel, a primeira coisa que vem à mente é o seu sabor doce e reconfortante. No entanto, o mel é muito mais do que isso. Ele é um superalimento natural, repleto de nutrientes e compostos bioativos que podem fazer maravilhas pelo nosso sistema imunológico.</p>
      <h2>Propriedades Nutricionais</h2>
      <p>O mel contém uma variedade de vitaminas, minerais e enzimas. Ele é rico em antioxidantes como flavonoides e ácidos fenólicos, que ajudam a combater o estresse oxidativo e a inflamação no corpo.</p>
      <h2>Efeito Antimicrobiano</h2>
      <p>Uma das propriedades mais notáveis do mel é a sua capacidade antimicrobiana. Ele contém peróxido de hidrogênio e outros compostos que podem inibir o crescimento de bactérias e fungos. Essa ação o torna um remédio natural eficaz para o alívio da tosse e dor de garganta.</p>
      <h2>Fortalecimento Imunológico</h2>
      <p>O consumo regular de mel, especialmente o mel cru e orgânico, pode ajudar a fortalecer o sistema imunológico. Ele age como um prebiótico, nutrindo as bactérias benéficas em nosso intestino, que são cruciais para a nossa saúde imunológica geral.</p>
      <h2>Como Usar o Mel para a Imunidade</h2>
      <ul>
        <li>Adicione uma colher de mel ao seu chá de camomila ou gengibre.</li>
        <li>Misture mel com limão e água morna para uma bebida matinal purificante.</li>
        <li>Consuma mel com açafrão ou canela para potencializar seus efeitos anti-inflamatórios.</li>
      </ul>
      <p>Lembre-se de que a qualidade do mel é fundamental. Opte por mel de produtores locais e evite os industrializados, que podem conter aditivos e perder suas propriedades benéficas durante o processamento.</p>
    `,
  },
  {
    slug: 'geleia-real-superalimento',
    title: 'Geleia Real: O Superalimento que as Abelhas Produzem',
    author: 'Alexandre Gonçalves',
    authorImage: 'https://placehold.co/100x100/A8A179/ffffff?text=AG',
    date: '10 de Maio, 2024',
    category: 'Nutrição',
    readTime: '7 min de leitura',
    excerpt: 'Produzida pelas abelhas operárias, a geleia real é o alimento exclusivo da abelha rainha, responsável por sua longevidade e fertilidade. Descubra o que torna este produto tão especial para a saúde humana.',
    image: 'https://placehold.co/1200x600/F2E9E4/A8A179?text=Geleia+Real',
    content: `
      <p>A geleia real é uma substância leitosa e viscosa, produzida pelas glândulas hipofaríngeas das abelhas operárias. É o alimento exclusivo da abelha rainha durante toda a sua vida, o que explica sua incrível longevidade (ela vive até 50 vezes mais que as abelhas operárias) e sua capacidade de botar mais de 2.000 ovos por dia.</p>
      <h2>Composição Rica e Complexa</h2>
      <p>A geleia real é um superalimento complexo, contendo uma mistura de água, proteínas, açúcares, lipídios e vitaminas. O seu componente mais notável é o ácido 10-HDA (ácido 10-hidroxi-2-decenoico), um ácido graxo único que não é encontrado em nenhum outro lugar na natureza e é responsável por muitas de suas propriedades benéficas.</p>
      <h2>Benefícios para a Saúde Humana</h2>
      <ul>
        <li><strong>Saúde da pele e cabelo:</strong> Graças ao seu alto teor de vitaminas do complexo B, a geleia real é usada em cosméticos para rejuvenescer a pele e fortalecer o cabelo.</li>
        <li><strong>Energia e vitalidade:</strong> Ajuda a combater a fadiga e aumentar os níveis de energia. Muitos atletas a utilizam como um suplemento natural para melhorar o desempenho.</li>
        <li><strong>Apoio ao sistema nervoso:</strong> O ácido 10-HDA e outras proteínas podem ter um efeito neuroprotetor, auxiliando na saúde cerebral e na memória.</li>
        <li><strong>Equilíbrio hormonal:</strong> Estudos sugerem que a geleia real pode ajudar a regular o ciclo menstrual e aliviar os sintomas da menopausa.</li>
      </ul>
      <p>Embora seja um produto poderoso, a geleia real deve ser consumida com moderação e sob orientação profissional, especialmente por pessoas com alergias a produtos de abelha ou que estejam grávidas.</p>
    `,
  },
  {
    slug: 'propolis-antibiotico-natural',
    title: 'Própolis: O Antibiótico Natural da Natureza',
    author: 'Alexandre Gonçalves',
    authorImage: 'https://placehold.co/100x100/A8A179/ffffff?text=AG',
    date: '05 de Março, 2024',
    category: 'Apiterapia',
    readTime: '5 min de leitura',
    excerpt: 'Conhecida como "o antibiótico da natureza", a própolis é uma resina poderosa que as abelhas usam para proteger a colmeia. Mas seus benefícios vão muito além da proteção.',
    image: 'https://placehold.co/1200x600/C0B29E/323F30?text=Propolis',
    content: `
      <p>A própolis é uma substância resinosa que as abelhas coletam de brotos e seivas de árvores. Elas a misturam com cera e saliva para criar uma espécie de "cimento" que usam para selar e desinfetar a colmeia. Esta substância é incrivelmente rica em compostos bioativos, como flavonoides e ácidos fenólicos.</p>
      <h2>Propriedades e Benefícios</h2>
      <ul>
        <li><strong>Ação Antibacteriana e Antifúngica:</strong> A própolis é amplamente utilizada para combater infecções bacterianas e fúngicas, sendo um excelente complemento a tratamentos convencionais.</li>
        <li><strong>Ação Anti-inflamatória:</strong> Ajuda a reduzir a inflamação em todo o corpo, aliviando dores e desconfortos.</li>
        <li><strong>Fortalecimento do Sistema Imunológico:</strong> O consumo regular de própolis pode estimular a produção de células de defesa, fortalecendo a imunidade.</li>
        <li><strong>Cura de Feridas:</strong> É um excelente cicatrizante natural, ajudando na regeneração de tecidos e no tratamento de feridas e queimaduras.</li>
      </ul>
      <h2>Como Consumir</h2>
      <p>A própolis pode ser consumida em forma de extrato (líquido), cápsulas ou sprays. É importante escolher produtos de alta qualidade, pois a concentração de compostos ativos pode variar. Uma dose diária é uma excelente forma de manter a saúde em dia.</p>
    `,
  },
  {
    slug: 'acupuntura-medicina-integrativa',
    title: 'Acupuntura e Medicina Integrativa: Uma Visão Holística',
    author: 'João Oliveira',
    authorImage: 'https://placehold.co/100x100/A8A179/ffffff?text=JO',
    date: '28 de Fevereiro, 2024',
    category: 'Acupuntura',
    readTime: '7 min de leitura',
    excerpt: 'A acupuntura, uma prática milenar da medicina chinesa, está cada vez mais integrada à medicina ocidental. Descubra como essa terapia pode complementar tratamentos e promover o bem-estar total.',
    image: 'https://placehold.co/1200x600/D9D8C6/5C4033?text=Acupuntura',
    content: `
      <p>A acupuntura é um dos pilares da medicina tradicional chinesa (MTC) e tem sido praticada há mais de 3.000 anos. Ela envolve a inserção de agulhas finas em pontos específicos do corpo para estimular o fluxo de energia vital (Qi) e restaurar o equilíbrio do organismo. A medicina integrativa, por sua vez, combina a medicina convencional com terapias complementares, como a acupuntura.</p>
      <h2>Como Funciona a Acupuntura?</h2>
      <p>A teoria da MTC sugere que a doença é o resultado de um desequilíbrio ou bloqueio no fluxo de Qi. A inserção das agulhas em pontos de acupuntura específicos estimula os nervos, músculos e tecidos conjuntivos, o que pode aumentar o fluxo sanguíneo e liberar endorfinas, promovendo a cura e o bem-estar.</p>
      <h2>Benefícios e Aplicações</h2>
      <ul>
        <li><strong>Alívio da dor:</strong> A acupuntura é eficaz no tratamento de dores crônicas, como dor nas costas, dores de cabeça e artrite.</li>
        <li><strong>Redução de estresse e ansiedade:</strong> Ajuda a acalmar o sistema nervoso, promovendo o relaxamento e aliviando os sintomas de estresse, ansiedade e depressão.</li>
        <li><strong>Melhora do sono:</strong> Pode ser utilizada para tratar a insônia e outros distúrbios do sono.</li>
        <li><strong>Apoio à fertilidade:</strong> A acupuntura pode ajudar a regular o ciclo menstrual e melhorar o fluxo sanguíneo para os órgãos reprodutivos.</li>
      </ul>
      <p>A acupuntura é segura quando realizada por um profissional qualificado. Ao combinar a acupuntura com tratamentos médicos convencionais, é possível obter resultados mais eficazes e uma abordagem mais completa para a saúde.</p>
    `,
  },
  {
    slug: 'acupuntura-estresse',
    title: 'Acupuntura contra a Ansiedade e o Estresse: Uma Abordagem Holística',
    author: 'Mariana Santos',
    authorImage: 'https://placehold.co/100x100/F2E9E4/5C4033?text=MS',
    date: '10 de Janeiro, 2024',
    category: 'Acupuntura',
    readTime: '6 min de leitura',
    excerpt: 'A vida moderna está cheia de estresse e ansiedade. Descubra como a acupuntura pode ser uma ferramenta poderosa para acalmar a mente e o corpo, promovendo uma sensação de paz e equilíbrio.',
    image: 'https://placehold.co/1200x600/C4B78A/323F30?text=Acupuntura+e+Estresse',
    content: `
      <p>O estresse e a ansiedade são desafios comuns na sociedade de hoje. A acupuntura oferece uma abordagem natural e eficaz para lidar com esses problemas, trabalhando na raiz do desequilíbrio energético do corpo.</p>
      <h2>Como a Acupuntura Ajuda?</h2>
      <p>De acordo com a medicina chinesa, o estresse e a ansiedade podem ser causados por um desequilíbrio nos meridianos do corpo. A acupuntura age liberando endorfinas, que são os analgésicos naturais do corpo, e modulando o sistema nervoso, ajudando a acalmar a mente e a reduzir os níveis de cortisol (o hormônio do estresse).</p>
      <h2>Benefícios e Resultados</h2>
      <p>Muitos pacientes relatam uma sensação de relaxamento profundo e bem-estar após as sessões de acupuntura. Os benefícios incluem:</p>
      <ul>
        <li>Diminuição da frequência e intensidade de ataques de pânico.</li>
        <li>Melhora da qualidade do sono.</li>
        <li>Aumento da clareza mental e da concentração.</li>
        <li>Redução da tensão muscular e dores de cabeça relacionadas ao estresse.</li>
      </ul>
      <p>A acupuntura não trata apenas os sintomas, mas busca a causa subjacente do problema, promovendo um equilíbrio duradouro. Para obter melhores resultados, é recomendável combinar a acupuntura com outras práticas de bem-estar, como meditação e exercícios físicos.</p>
    `,
  },
  {
    slug: 'ventosaterapia-tecnica-milena',
    title: 'Ventosaterapia: Técnica Milenar para Alívio da Tensão Muscular',
    author: 'João Oliveira',
    authorImage: 'https://placehold.co/100x100/A8A179/ffffff?text=JO',
    date: '18 de Janeiro, 2024',
    category: 'Ventosaterapia',
    readTime: '5 min de leitura',
    excerpt: 'A ventosaterapia é uma técnica antiga que utiliza copos de vidro ou plástico para criar vácuo na pele, promovendo a circulação sanguínea e aliviando a dor. Descubra como essa prática pode ser benéfica para você.',
    image: 'https://placehold.co/1200x600/C0B29E/5C4033?text=Ventosaterapia',
    content: `
      <p>A ventosaterapia, também conhecida como cupping therapy, é uma técnica da medicina tradicional chinesa que utiliza ventosas para criar uma sucção na pele. Essa sucção estimula o fluxo sanguíneo e a energia vital, liberando toxinas e aliviando a tensão muscular.</p>
      <h2>Como a Ventosaterapia Funciona?</h2>
      <p>O terapeuta coloca copos de vidro ou plástico na pele e usa uma bomba manual ou calor para remover o ar de dentro do copo. Isso cria um vácuo que suga a pele para dentro do copo, promovendo um aumento do fluxo sanguíneo na área. Esse processo ajuda a relaxar os músculos, reduzir a dor e a inflamação, e liberar aderências nos tecidos.</p>
      <h2>Benefícios</h2>
      <ul>
        <li><strong>Alívio da dor:</strong> A ventosaterapia é eficaz no tratamento de dores nas costas, pescoço e ombros, bem como de dores de cabeça e enxaquecas.</li>
        <li><strong>Melhora da circulação:</strong> A sucção promove o fluxo sanguíneo, o que ajuda a oxigenar os tecidos e a eliminar toxinas.</li>
        <li><strong>Relaxamento muscular:</strong> É uma excelente técnica para liberar a tensão muscular e promover o relaxamento profundo.</li>
        <li><strong>Desintoxicação:</strong> Ajuda o corpo a se livrar de toxinas acumuladas, melhorando o funcionamento dos órgãos.</li>
      </ul>
      <p>A ventosaterapia pode deixar marcas circulares na pele, que são geralmente indolores e desaparecem em poucos dias. É importante que o procedimento seja realizado por um profissional qualificado para garantir a sua segurança e eficácia.</p>
    `,
  },
  {
    slug: 'auriculoterapia-tratamento-complementar',
    title: 'Auriculoterapia: Tratamento Complementar para o Bem-Estar',
    author: 'Mariana Santos',
    authorImage: 'https://placehold.co/100x100/F2E9E4/5C4033?text=MS',
    date: '02 de Março, 2024',
    category: 'Auriculoterapia',
    readTime: '6 min de leitura',
    excerpt: 'A auriculoterapia é uma técnica da medicina chinesa que se baseia na estimulação de pontos específicos na orelha para tratar diversas condições de saúde, como ansiedade, dores e vícios. Descubra como funciona.',
    image: 'https://placehold.co/1200x600/F2E9E4/5C4033?text=Auriculoterapia',
    content: `
      <p>A auriculoterapia é uma técnica milenar que se baseia no conceito de que a orelha é um microssistema do corpo, ou seja, ela reflete a totalidade do corpo humano. A estimulação de pontos específicos na orelha pode ajudar a tratar e prevenir uma variedade de doenças e problemas de saúde.</p>
      <h2>Como Funciona?</h2>
      <p>A terapia envolve a colocação de sementes, esferas de aço, ou agulhas finas nos pontos de acupuntura da orelha. A estimulação desses pontos envia sinais ao cérebro, que por sua vez envia impulsos ao órgão correspondente, promovendo o equilíbrio e a cura. A terapia é geralmente indolor e os resultados podem ser sentidos rapidamente.</p>
      <h2>Benefícios</h2>
      <ul>
        <li><strong>Controle de peso:</strong> A auriculoterapia pode ajudar a controlar o apetite e a compulsão alimentar, sendo uma ferramenta útil em programas de emagrecimento.</li>
        <li><strong>Alívio da dor:</strong> É eficaz no tratamento de dores crônicas, como dores de cabeça, dores nas costas e dores articulares.</li>
        <li><strong>Redução de estresse e ansiedade:</strong> Ajuda a acalmar a mente e o corpo, promovendo o relaxamento e o bem-estar emocional.</li>
        <li><strong>Auxílio no tratamento de vícios:</strong> A terapia pode ser utilizada para ajudar a reduzir a dependência de tabaco, álcool e outras substâncias.</li>
      </ul>
      <p>A auriculoterapia é uma técnica complementar, que pode ser utilizada em conjunto com outros tratamentos médicos. É importante buscar um profissional qualificado para o procedimento para garantir a sua segurança e eficácia.</p>
    `,
  },
];

// --- Components com tipagem corrigida ---

// Props for the BlogList component.
interface BlogListProps {
  onSelectPost: (slug: string) => void;
}

const BlogList: React.FC<BlogListProps> = ({ onSelectPost }) => {
  return (
    <div className="bg-cream min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-moss-green mb-12 text-center">
          Nosso Blog
        </h1>
        <p className="text-xl text-dark-brown/80 text-center mb-16 max-w-3xl mx-auto">
          Descubra o universo da apiterapia e o poder da natureza através de nossos artigos. Conhecimento, saúde e bem-estar, tudo em um só lugar.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <a
              key={post.slug}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onSelectPost(post.slug);
              }}
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
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

// Props for the BlogPost component.
interface BlogPostProps {
  slug: string;
  onBack: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ slug, onBack }) => {
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="bg-cream min-h-screen py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold text-moss-green mb-4">Post não encontrado</h1>
          <p className="text-dark-brown/80 mb-8">O artigo que você está procurando não existe ou foi removido.</p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onBack();
            }}
            className="inline-flex items-center gap-2 text-mustard hover:text-mustard/80 font-medium transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para o Blog
          </a>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter(p => p.slug !== slug);

  return (
    <div className="bg-cream min-h-screen">
      <style>{style}</style>
      <section className="relative py-12 bg-moss-green/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onBack();
            }}
            className="inline-flex items-center gap-2 text-mustard hover:text-mustard/80 font-medium mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para o Blog
          </a>

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

              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex items-center gap-2 text-mustard hover:text-mustard/80 transition-colors duration-200"
              >
                <Share2 className="w-5 h-5" />
                Compartilhar
              </a>
            </div>
          </div>
        </div>
      </section>

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
                  Com mais de 10 anos de experiência em terapias naturais, {post.author} é reconhecido
                  como uma das principais autoridades em apiterapia do Brasil. Através de seus cursos
                  e atendimentos, já transformou a vida de mais de 3.000 pessoas.
                </p>

                <div className="flex gap-4">
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
                    Falar Comigo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-moss-green mb-12 text-center">
            Artigos Relacionados
          </h2>

          {relatedPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {relatedPosts.slice(0, 2).map((relatedPost, index) => (
                <a
                  key={index}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectPost(relatedPost.slug);
                  }}
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
                    <p className="text-dark-brown/80 mt-2 text-base line-clamp-3">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 mt-4 text-sm text-dark-brown/70">
                      <div className="flex items-center gap-1 bg-moss-green text-cream px-2 py-0.5 rounded-full">
                        <Tag className="w-3 h-3" />
                        {relatedPost.category}
                      </div>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {relatedPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {relatedPost.readTime}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <p className="text-center text-dark-brown/70">Nenhum artigo relacionado encontrado.</p>
          )}
        </div>
      </section>
    </div>
  );
};

// Main Blog component
const Blog = () => {
  const [selectedPostSlug, setSelectedPostSlug] = useState<string | null>(null);

  const handleSelectPost = (slug: string) => {
    setSelectedPostSlug(slug);
  };

  const handleBack = () => {
    setSelectedPostSlug(null);
  };

  const style = `
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&family=Inter:wght@400;500;700&display=swap');

    .font-serif {
      font-family: 'Cormorant Garamond', serif;
    }

    .font-sans {
      font-family: 'Inter', sans-serif;
    }

    .bg-cream { background-color: #F8F7F3; }
    .text-moss-green { color: #323F30; }
    .bg-moss-green { background-color: #323F30; }
    .text-mustard { color: #A8A179; }
    .border-mustard { border-color: #A8A179; }
    .text-dark-brown { color: #5C4033; }
    .prose h1, .prose h2, .prose h3 {
      font-family: 'Cormorant Garamond', serif;
    }
  `;

  return (
    <>
      <style>{style}</style>
      <div className="font-sans">
        {selectedPostSlug ? (
          <BlogPost slug={selectedPostSlug} onBack={handleBack} />
        ) : (
          <BlogList onSelectPost={handleSelectPost} />
        )}
      </div>
    </>
  );
};

export default Blog;
