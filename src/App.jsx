import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Home,
  Menu,
  Search,
  ShoppingBag,
  Sparkles,
  Star,
  UserRound
} from "lucide-react";
import { featureFrames, homeBlocks, images, products } from "./data";

const tabs = [
  { id: "home", label: "Home", icon: Home },
  { id: "collections", label: "Coleções", icon: Sparkles },
  { id: "shop", label: "Shop", icon: Search },
  { id: "bag", label: "Sacola", icon: ShoppingBag },
  { id: "profile", label: "Perfil", icon: UserRound }
];

const customerSignals = [
  ["Quiz", "Romântico contemporâneo"],
  ["Tamanho", "P pelo Provador"],
  ["Compras", "Vestidos e tweed"],
  ["Favoritos", "Riviera e Origem"],
  ["Clube", "Nível Insider"]
];

function IconButton({ children, onClick, label }) {
  return (
    <button className="icon-button" onClick={onClick} aria-label={label}>
      {children}
    </button>
  );
}

function Badge({ children }) {
  return <span className="badge">{children}</span>;
}

function Button({ children, variant = "dark", full = false }) {
  return <button className={`button ${variant} ${full ? "full" : ""}`}>{children}</button>;
}

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-photo">
        <img src={product.image} alt={product.name} />
        <Badge>{product.tag}</Badge>
        <IconButton label="Favoritar">
          <Heart size={17} />
        </IconButton>
      </div>
      <h4>{product.name}</h4>
      <span className="fit-recommendation">Seu tamanho ideal: {product.size}</span>
      <p>{product.price}</p>
    </article>
  );
}

function PhoneShell({ activeTab, setActiveTab, children }) {
  return (
    <section className="phone" aria-label="Aplicativo boutique">
      <div className="status-bar">
        <span>9:41</span>
        <span>5G 100%</span>
      </div>

      <header className="phone-header">
        <IconButton label="Menu">
          <Menu size={18} />
        </IconButton>
        <div className="wordmark">Thais Rodrigues</div>
        <IconButton label="Sacola">
          <ShoppingBag size={18} />
        </IconButton>
      </header>

      <div className="phone-content">{children}</div>

      <nav className="bottom-nav" aria-label="Navegação principal">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              className={activeTab === tab.id ? "active" : ""}
              onClick={() => setActiveTab(tab.id)}
            >
              <Icon size={18} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </nav>
    </section>
  );
}

function HomeScreen() {
  const [blockIndex, setBlockIndex] = useState(0);
  const block = homeBlocks[blockIndex];

  function go(delta) {
    setBlockIndex((current) => (current + delta + homeBlocks.length) % homeBlocks.length);
  }

  return (
    <div className="screen">
      <section className="home-block" style={{ "--image": `url(${block.image})` }}>
        <div>
          <Badge>{block.eyebrow}</Badge>
        </div>
        <div>
          <p className="eyebrow light">{block.eyebrow}</p>
          <h2>{block.title}</h2>
          <p>{block.text}</p>
          <Button variant="light">{block.action}</Button>
        </div>
      </section>

      <div className="block-controls">
        <IconButton onClick={() => go(-1)} label="Bloco anterior">
          <ArrowLeft size={18} />
        </IconButton>
        <div className="dots">
          {homeBlocks.map((item, index) => (
            <button
              key={item.title}
              className={index === blockIndex ? "active" : ""}
              onClick={() => setBlockIndex(index)}
              aria-label={`Ir para ${item.title}`}
            />
          ))}
        </div>
        <IconButton onClick={() => go(1)} label="Próximo bloco">
          <ArrowRight size={18} />
        </IconButton>
      </div>

      <section className="content-section">
        <article className="style-card clean">
          <p className="eyebrow">Seu estilo TR</p>
          <h3>Romântico contemporâneo</h3>
          <p>Recomendações orientadas por quiz, favoritos e histórico, sem transformar a Home em catálogo infinito.</p>
        </article>
      </section>

      <section className="content-section">
        <article className="virtual-fitting-card">
          <div>
            <p className="eyebrow">Provador Virtual</p>
            <h3>Compre com mais segurança</h3>
            <p>Seu tamanho ideal aparece nas peças recomendadas.</p>
            <button>Ajustar medidas</button>
          </div>
          <div className="fit-badge">
            <span>Seu tamanho ideal</span>
            <strong>P</strong>
          </div>
        </article>
      </section>

      <section className="content-section">
        <div className="section-title">
          <h3>Recomendações para você</h3>
          <span>Curadoria curta</span>
        </div>
        <div className="horizontal-products">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="club-card highlight club-journey">
          <div className="club-heading">
            <div>
              <p className="eyebrow">Clube das Migas</p>
              <h2 className="screen-heading">Nível Insider</h2>
            </div>
            <strong>1.680 pts</strong>
          </div>
          <div className="club-stats">
            <div><span>Economia</span><strong>R$ 86</strong></div>
            <div><span>Próximo benefício</span><strong>Frete grátis</strong></div>
          </div>
          <div className="progress"><span /></div>
          <Button full>Ver Clube das Migas</Button>
        </div>
      </section>
    </div>
  );
}

function CollectionsScreen() {
  const exploreGroups = [
    ["Tipos de peças", ["Vestidos", "Blusas", "Saias", "Conjuntos"]],
    ["Coleções", ["Origem", "Riviera", "Viva TR", "Aquarela"]],
    ["Momentos de uso", ["Trabalho", "Evento", "Fim de semana", "Viagem"]],
    ["Mais desejados", ["Best Sellers", "Tweed", "Tricot", "Flash Sale"]]
  ];

  return (
    <div className="screen padded">
      <p className="eyebrow">Coleções</p>
      <h2 className="screen-heading">Explorar por desejo</h2>
      <p className="muted">Busca, coleções, momentos de uso e categorias em uma curadoria menos administrativa.</p>

      <div className="search-panel">
        <Search size={16} />
        <span>Buscar vestido, tweed, coleção...</span>
      </div>

      <div className="personal-context-card">
        <p className="eyebrow">Curadoria para você</p>
        <strong>Peças alinhadas ao seu quiz e ao tamanho P</strong>
        <span>Priorizando coleções que você visitou, favoritos salvos e categorias compradas antes.</span>
      </div>

      {exploreGroups.map(([title, items]) => (
        <section className="explore-section" key={title}>
          <h3>{title}</h3>
          <div className="explore-pills">
            {items.map((item) => <button key={item}>{item}</button>)}
          </div>
        </section>
      ))}
    </div>
  );
}

function ShopScreen() {
  return (
    <div className="screen padded">
      <div className="panel">
        <p className="eyebrow">Shop</p>
        <h2 className="screen-heading">Selecionado para o seu estilo</h2>
        <p className="muted">Busca e filtros continuam livres, mas a vitrine prioriza peças próximas ao seu quiz, tamanho e histórico.</p>
      </div>

      <div className="chips">
        {["Vestidos", "Blusas", "Tweed", "Conjuntos"].map((chip, index) => (
          <button key={chip} className={index === 0 ? "active" : ""}>
            {chip}
          </button>
        ))}
      </div>

      <div className="personalized-strip">
        <p className="eyebrow">Seu estilo TR</p>
        <strong>Recomendações para o seu momento</strong>
        <span>Quiz, favoritos, coleções visitadas e Provador Virtual ajudam a priorizar peças com mais intenção.</span>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

function BagScreen() {
  const subtotal = 858;
  const discount = 85.8;

  return (
    <div className="screen padded">
      <div className="section-title">
        <h2 className="screen-heading">Sacola</h2>
        <span>2 itens</span>
      </div>

      <div className="list">
        {products.slice(0, 2).map((product) => (
          <article key={product.id} className="bag-item">
            <img src={product.image} alt={product.name} />
            <div>
              <strong>{product.name}</strong>
              <span>{product.color} · {product.size} · 1 un.</span>
              <b>{product.price}</b>
            </div>
          </article>
        ))}
      </div>

      <div className="summary">
        <div><span>Seu tamanho</span><strong>Provador: P confirmado</strong></div>
        <div><span>Cupom</span><strong>MIGAS10 aplicado</strong></div>
        <div><span>Clube</span><strong>+ 172 pontos nesta compra</strong></div>
        <div><span>Próximo nível</span><strong>Faltam 148 pontos após este pedido</strong></div>
        <div><span>Subtotal</span><strong>R$ {subtotal.toFixed(2).replace(".", ",")}</strong></div>
        <div><span>Desconto</span><strong>- R$ {discount.toFixed(2).replace(".", ",")}</strong></div>
        <div className="total"><span>Total</span><strong>R$ {(subtotal - discount).toFixed(2).replace(".", ",")}</strong></div>
      </div>

      <Button full>Ir para checkout</Button>
    </div>
  );
}

function ProfileScreen() {
  const benefits = [
    ["Descontos", "Cupons aplicados na sacola"],
    ["Pontos", "Acúmulo por compra"],
    ["Compra antecipada", "Lançamentos antes"],
    ["Frete grátis", "Próximo nível"],
    ["Indique amigas", "Benefício compartilhado"]
  ];

  return (
    <div className="screen padded">
      <div className="club-card membership-card">
        <div className="club-heading">
          <div>
            <p className="eyebrow">Clube das Migas</p>
            <h2 className="screen-heading">TR Insider</h2>
          </div>
          <strong>R$ 86</strong>
        </div>
        <p>Economia obtida neste mês. Faltam 320 pontos para liberar o próximo nível.</p>
        <div className="progress"><span /></div>
        <Button full>Ver vantagens da assinatura</Button>
      </div>

      <div className="panel">
        <p className="eyebrow">Seu perfil de estilo</p>
        <h2 className="screen-heading">O aplicativo aprende com você</h2>
        <p className="muted">O quiz e o Provador Virtual podem alimentar produtos, tamanhos, coleções e momentos sugeridos para cada cliente.</p>
        <Button full>Personalizar meu estilo</Button>
      </div>

      <div className="profile-signals">
        {customerSignals.map(([label, value]) => (
          <article key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </article>
        ))}
      </div>

      <div className="benefit-grid">
        {benefits.map(([benefit, description]) => (
          <div key={benefit}>
            <span>✓</span>
            <strong>{benefit}</strong>
            <small>{description}</small>
          </div>
        ))}
      </div>

      <div className="list">
        {[
          ["Clube das Migas", "Benefícios e pontos"],
          ["Pedidos", "Acompanhe compras e entregas"],
          ["Cupons", "Descontos exclusivos"],
          ["Configurações", "Conta e notificações"]
        ].map(([title, description]) => (
          <button className="list-row" key={title}>
            <span><Star size={16} /></span>
            <strong>{title}</strong>
            <small>{description}</small>
          </button>
        ))}
      </div>
    </div>
  );
}

function ActiveScreen({ activeTab }) {
  if (activeTab === "collections") return <CollectionsScreen />;
  if (activeTab === "shop") return <ShopScreen />;
  if (activeTab === "bag") return <BagScreen />;
  if (activeTab === "profile") return <ProfileScreen />;
  return <HomeScreen />;
}

function FeatureBoard() {
  return (
    <section className="board">
      <div className="board-heading">
        <p className="eyebrow">Estrutura do produto</p>
        <h2>Arquitetura proposta</h2>
        <p>
          A navegação mantém áreas familiares, mas passa a conectar descoberta, compra e relacionamento em uma jornada única.
        </p>
      </div>

      <div className="frames">
        {featureFrames.map(([title, subtitle, description], index) => (
          <article className="frame" key={title}>
            <span>{String(index + 1).padStart(2, "0")} · {subtitle}</span>
            <div className="frame-body">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <main className="app">
      <section className="intro">
        <div>
          <p className="eyebrow">Conceito de UX</p>
          <p className="eyebrow">Thais Rodrigues</p>
          <h1>Proposta de evolução da experiência do aplicativo</h1>
          <p>
            Conceito de evolução da experiência mobile da marca, pensado para tornar o aplicativo mais editorial,
            integrado e personalizado, conectando descoberta, compra, Clube das Migas e relacionamento com a cliente.
          </p>
        </div>
        <aside className="intro-statement">
          <p className="eyebrow">Direção de produto</p>
          <h2>Uma experiência que reconhece a cliente</h2>
          <p>
            A Home deixa de ser apenas uma sequência de campanhas e passa a orientar escolhas com estilo,
            tamanho, Clube e histórico de navegação.
          </p>
        </aside>
      </section>

      <section className="workspace">
        <PhoneShell activeTab={activeTab} setActiveTab={setActiveTab}>
          <ActiveScreen activeTab={activeTab} />
        </PhoneShell>

        <aside className="notes">
          <article className="executive-card principles-card">
            <p className="eyebrow">Conceito da proposta</p>
            <h2>Uma evolução da experiência, não apenas um redesign</h2>
            <p>
              A proposta reorganiza funcionalidades já existentes para tornar descoberta, compra, Clube das Migas
              e Provador Virtual mais conectados, preservando a identidade premium da marca.
            </p>
          </article>

          <article className="executive-card">
            <p className="eyebrow">Diagnóstico</p>
            <h2>Problemas observados</h2>
            <div className="editorial-list">
              <p><strong>Funcionalidades dispersas</strong><span>Clube, quiz, favoritos e Provador aparecem como pontos separados.</span></p>
              <p><strong>Home pouco pessoal</strong><span>A experiência tende a parecer vitrine de campanha, não uma jornada da cliente.</span></p>
              <p><strong>Decisão de compra</strong><span>Tamanho, benefícios e histórico podem reduzir dúvida antes do checkout.</span></p>
            </div>
          </article>

          <article className="comparison-card">
            <p className="eyebrow">Antes e depois</p>
            <h2>Experiência atual x proposta</h2>
            <div className="comparison-editorial">
              <div>
                <strong>Experiência atual</strong>
                <p>Funcionalidades boas, mas percebidas em momentos separados da navegação: campanhas, Clube, Provador e favoritos não parecem parte da mesma jornada.</p>
                <ul>
                  <li>Home mais focada em campanhas.</li>
                  <li>Clube com menor protagonismo.</li>
                  <li>Provador pouco conectado ao catálogo.</li>
                </ul>
              </div>
              <div>
                <strong>Proposta</strong>
                <p>Jornada integrada, usando dados já fornecidos para orientar descoberta e compra com mais contexto, sem criar uma experiência artificial.</p>
                <ul>
                  <li>Home personalizada e editorial.</li>
                  <li>Clube presente no momento de compra.</li>
                  <li>Tamanho ideal visível nos produtos.</li>
                </ul>
              </div>
            </div>
          </article>

          <article>
            <p className="eyebrow">Impacto esperado</p>
            <h2>Benefícios para a cliente</h2>
            <ul className="quiet-list">
              <li><strong>Descoberta mais relevante</strong><span>Produtos alinhados ao estilo, tamanho e favoritos.</span></li>
              <li><strong>Compra mais segura</strong><span>Provador Virtual e tamanho ideal reduzem incerteza.</span></li>
              <li><strong>Valor percebido</strong><span>Clube, pontos e benefícios aparecem no momento certo.</span></li>
            </ul>
          </article>

          <article>
            <p className="eyebrow">Valor para a marca</p>
            <h2>Benefícios para o negócio</h2>
            <ul className="quiet-list">
              <li><strong>Retenção</strong><span>Clube e personalização aumentam motivos para voltar.</span></li>
              <li><strong>Conversão</strong><span>Menos dúvida entre descoberta, tamanho e checkout.</span></li>
              <li><strong>Menos trocas</strong><span>Provador Virtual mais visível apoia compra correta.</span></li>
              <li><strong>Dados úteis</strong><span>Quiz, favoritos e histórico alimentam curadoria futura.</span></li>
            </ul>
          </article>
        </aside>
      </section>

      <FeatureBoard />
    </main>
  );
}
