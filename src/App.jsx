import React, { useMemo, useState } from "react";
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
import { colors, featureFrames, homeBlocks, images, products } from "./data";

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
      <small className="match-reason">Combina com seus favoritos</small>
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
  const recentlyViewed = products.slice(1, 3);

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
        <div className="home-personal-grid">
          <article className="style-card">
            <p className="eyebrow">Este aplicativo conhece seu estilo</p>
            <h3>Romântico contemporâneo</h3>
            <p>Quiz, tamanho, compras, favoritos, Clube e Provador Virtual juntos para orientar sua navegação.</p>
            <div className="mini-pills">
              <span>Vestidos</span>
              <span>Tweed</span>
              <span>Eventos</span>
            </div>
          </article>

          <article className="continue-card">
            <p className="eyebrow">Continue de onde parou</p>
            <h3>Coleção Riviera</h3>
            <p>Você favoritou peças leves e estava explorando ocasiões especiais.</p>
            <button>Retomar navegação</button>
          </article>
        </div>
      </section>

      <section className="content-section">
        <div className="signal-strip">
          {customerSignals.map(([label, value]) => (
            <article key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <article className="virtual-fitting-card">
          <div>
            <p className="eyebrow">Provador Virtual</p>
            <h3>Compre com mais segurança</h3>
            <p>Seu tamanho ideal aparece nas peças recomendadas para reduzir dúvidas e trocas.</p>
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
          <span>Quiz + tamanho</span>
        </div>
        <div className="horizontal-products">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-title compact">
          <h3>Vistos recentemente</h3>
          <span>2 peças</span>
        </div>
        <div className="recently-viewed">
          {recentlyViewed.map((product) => (
            <article key={product.id}>
              <img src={product.image} alt={product.name} />
              <div>
                <strong>{product.name}</strong>
                <span>{product.color} · {product.price}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <article className="purchase-loop-card">
          <div>
            <p className="eyebrow">A partir do seu histórico</p>
            <h3>Voltar para uma compra que funcionou</h3>
            <p>Você comprou tweed e salvou vestidos para eventos. A curadoria prioriza peças com caimento e ocasião parecidos.</p>
          </div>
          <button>Ver peças similares</button>
        </article>
      </section>

      <section className="content-section">
        <div className="club-card highlight club-journey">
          <div className="club-heading">
            <div>
              <p className="eyebrow">Clube das Migas</p>
              <h2 className="screen-heading">Seu status na jornada</h2>
            </div>
            <strong>Nível Insider</strong>
          </div>
          <p>Use seus pontos e benefícios direto na compra, sem precisar procurar no Perfil.</p>
          <div className="club-stats">
            <div><span>Pontos</span><strong>1.680</strong></div>
            <div><span>Economia</span><strong>R$ 86</strong></div>
            <div><span>Próximo nível</span><strong>2.000</strong></div>
          </div>
          <div className="level-row">
            <span>Faltam 320 pontos</span>
            <span>84%</span>
          </div>
          <div className="progress"><span /></div>
          <div className="club-benefit-cards">
            <article><span>✓</span><strong>Cupom ativo</strong><small>MIGAS10 na sacola</small></article>
            <article><span>✓</span><strong>Acesso antecipado</strong><small>Novidades antes da vitrine</small></article>
            <article><span>•</span><strong>Frete grátis</strong><small>Desbloqueia no próximo nível</small></article>
          </div>
          <Button full>Conhecer Clube das Migas</Button>
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
        <p className="eyebrow">Board visual</p>
        <h2>Arquitetura proposta</h2>
        <p>
          Esta parte funciona como uma prancha de produto: mostra o que entra no aplicativo real e como cada área se conecta.
        </p>
      </div>

      <div className="frames">
        {featureFrames.map(([title, subtitle, description], index) => (
          <article className="frame" key={title}>
            <div className="frame-top">
              <strong>{String(index + 1).padStart(2, "0")}</strong>
              <span>{subtitle}</span>
            </div>
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

function DesignTokens() {
  const tokenList = useMemo(
    () => [
      ["Off-white", colors.paper],
      ["Areia", colors.sand],
      ["Grafite", colors.ink],
      ["Cinza quente", colors.muted],
      ["Coral", colors.coral],
      ["Rosa suave", colors.blush]
    ],
    []
  );

  return (
    <section className="tokens">
      {tokenList.map(([name, color]) => (
        <div className="token" key={name} style={{ background: color }}>
          <span>{name}</span>
          <strong>{color}</strong>
        </div>
      ))}
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
        <DesignTokens />
      </section>

      <section className="workspace">
        <PhoneShell activeTab={activeTab} setActiveTab={setActiveTab}>
          <ActiveScreen activeTab={activeTab} />
        </PhoneShell>

        <aside className="notes">
          <article className="executive-card principles-card">
            <p className="eyebrow">Princípios da proposta</p>
            <h2>Uma evolução da experiência, não apenas um redesign</h2>
            <div className="principles-grid">
              {[
                "Valorizar funcionalidades já existentes",
                "Melhorar a descoberta de produtos",
                "Integrar o Clube à jornada de compra",
                "Destacar o Provador Virtual",
                "Personalizar a experiência",
                "Incentivar fidelização",
                "Preservar a identidade premium da marca"
              ].map((principle) => (
                <div key={principle}><span>✓</span><strong>{principle}</strong></div>
              ))}
            </div>
          </article>

          <article className="executive-card">
            <p className="eyebrow">Diagnóstico</p>
            <h2>Problemas observados</h2>
            <div className="insight-grid">
              <div><strong>Funcionalidades dispersas</strong><span>Clube, quiz, favoritos e Provador aparecem como pontos separados.</span></div>
              <div><strong>Home pouco pessoal</strong><span>A experiência tende a parecer vitrine de campanha, não uma jornada da cliente.</span></div>
              <div><strong>Decisão de compra</strong><span>Tamanho, benefícios e histórico poderiam reduzir dúvida antes do checkout.</span></div>
            </div>
          </article>

          <article>
            <p className="eyebrow">Potencial</p>
            <h2>Oportunidades</h2>
            <div className="opportunity-bars">
              <div><span>Personalização</span><strong style={{ "--bar": "92%" }} /></div>
              <div><span>Fidelização</span><strong style={{ "--bar": "84%" }} /></div>
              <div><span>Compra segura</span><strong style={{ "--bar": "78%" }} /></div>
            </div>
          </article>

          <article className="executive-card">
            <p className="eyebrow">Pensamento de produto</p>
            <h2>Alavancas da proposta</h2>
            <div className="lever-grid">
              <div><strong>Retenção</strong><span>Home com continuidade, histórico e benefícios em evidência.</span></div>
              <div><strong>Conversão</strong><span>Tamanho ideal e recomendação explicada reduzem dúvida.</span></div>
              <div><strong>Recorrência</strong><span>Histórico de compras vira entrada para novas curadorias.</span></div>
              <div><strong>Clube</strong><span>Pontos, economia e próximo nível aparecem na jornada de compra.</span></div>
              <div><strong>Descoberta</strong><span>Coleções e Shop deixam de ser listas e viram curadoria.</span></div>
              <div><strong>Personalização</strong><span>Quiz, favoritos, tamanho e compras alimentam toda a navegação.</span></div>
            </div>
          </article>

          <article>
            <p className="eyebrow">Direção de produto</p>
            <h2>Objetivos</h2>
            <ul className="check-list">
              <li>Transformar dados da cliente em recomendações visíveis</li>
              <li>Conectar Clube, Provador Virtual, quiz e favoritos à compra</li>
              <li>Reduzir atrito na escolha de produto e tamanho</li>
              <li>Manter a estética premium, editorial e minimalista</li>
            </ul>
          </article>

          <article>
            <p className="eyebrow">Experiência proposta</p>
            <h2>Jornada proposta</h2>
            <div className="journey-map">
              {["Home personalizada", "Coleções orientadas", "Produto com tamanho", "Sacola com benefícios", "Clube/Fidelização"].map((step, index) => (
                <div key={step}>
                  <strong>{String(index + 1).padStart(2, "0")}</strong>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </article>

          <article>
            <p className="eyebrow">Como medir</p>
            <h2>Métricas de sucesso</h2>
            <div className="success-metrics">
              <div><strong>Conversão</strong><span>Adicionar à sacola, checkout iniciado, compra concluída.</span></div>
              <div><strong>Recorrência</strong><span>Retorno ao app, recompra, uso de favoritos e histórico.</span></div>
              <div><strong>Clube</strong><span>Visualização de benefícios, uso de cupom, evolução de nível.</span></div>
              <div><strong>Descoberta</strong><span>Cliques em coleções, busca, produtos vistos e salvos.</span></div>
            </div>
          </article>

          <article className="comparison-card">
            <p className="eyebrow">Antes e depois</p>
            <h2>Experiência atual x proposta</h2>
            <div className="comparison-list">
              <div>
                <strong>Experiência atual</strong>
                <p>Funcionalidades boas, mas percebidas em momentos separados da navegação.</p>
                <ul>
                  <li>Home mais focada em campanhas</li>
                  <li>Clube com menor protagonismo</li>
                  <li>Provador pouco conectado ao catálogo</li>
                </ul>
              </div>
              <div>
                <strong>Proposta</strong>
                <p>Jornada integrada, usando dados já fornecidos para orientar descoberta e compra.</p>
                <ul>
                  <li>Home personalizada</li>
                  <li>Clube dentro da compra</li>
                  <li>Tamanho ideal visível nos produtos</li>
                </ul>
              </div>
            </div>
          </article>

          <article>
            <p className="eyebrow">Impacto esperado</p>
            <h2>Benefícios para a cliente</h2>
            <div className="benefit-cards">
              <div><strong>Descoberta mais relevante</strong><span>Produtos alinhados ao estilo, tamanho e favoritos.</span></div>
              <div><strong>Compra mais segura</strong><span>Provador Virtual e tamanho ideal reduzem incerteza.</span></div>
              <div><strong>Valor percebido</strong><span>Clube, pontos, cupons e benefícios aparecem no momento certo.</span></div>
            </div>
          </article>

          <article>
            <p className="eyebrow">Valor para a marca</p>
            <h2>Benefícios para o negócio</h2>
            <div className="metric-grid">
              <div><strong>+ Retenção</strong><span>Clube e personalização aumentam recorrência.</span></div>
              <div><strong>+ Conversão</strong><span>Menos dúvida entre descoberta, tamanho e checkout.</span></div>
              <div><strong>- Trocas</strong><span>Provador Virtual mais visível apoia compra correta.</span></div>
              <div><strong>+ Dados úteis</strong><span>Quiz, favoritos e histórico alimentam curadoria futura.</span></div>
            </div>
          </article>

          <article>
            <p className="eyebrow">Princípios</p>
            <h2>Premissas da proposta</h2>
            <p>
              A solução não copia a interface atual nem reinventa o produto. Ela reorganiza funcionalidades já
              existentes para criar uma experiência mais integrada, personalizada e coerente com uma marca premium.
            </p>
          </article>
        </aside>
      </section>

      <FeatureBoard />
    </main>
  );
}
