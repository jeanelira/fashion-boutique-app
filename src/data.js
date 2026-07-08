export const colors = {
  paper: "#fffdfa",
  sand: "#f7f2e9",
  ink: "#403e3c",
  muted: "#5f5d59",
  coral: "#fa8b82",
  blush: "#fddbd6"
};

export const images = {
  hero: "https://www.thaisrodrigues.com.br/cdn/shop/files/thumb-TR-site.png?v=1755027372",
  collection: "https://www.thaisrodrigues.com.br/cdn/shop/collections/Destaque_das_Colecoes_-_Site_1_1080_x_1560_px_5.png?v=1774007274&width=600",
  productA: "https://www.thaisrodrigues.com.br/cdn/shop/collections/Destaque_das_Colecoes_-_Site_1_1080_x_1560_px_3.png?v=1759520655&width=600",
  productB: "https://www.thaisrodrigues.com.br/cdn/shop/collections/Destaque_das_Colecoes_-_Site_1_1.png?v=1759520517&width=600",
  productC: "https://www.thaisrodrigues.com.br/cdn/shop/files/Banner-Categorias-1080x1500px_1.webp?v=1780341268",
  productD: "https://www.thaisrodrigues.com.br/cdn/shop/collections/Destaque_das_Colecoes_-_Site_1_1080_x_1560_px_5.png?v=1774007274&width=600"
};

export const products = [
  {
    id: 1,
    name: "Vestido Riviera",
    price: "R$ 489,00",
    tag: "TR",
    image: images.productA,
    color: "Off",
    size: "P"
  },
  {
    id: 2,
    name: "Blusa Celina",
    price: "R$ 369,00",
    tag: "Novo",
    image: images.productB,
    color: "Areia",
    size: "M"
  },
  {
    id: 3,
    name: "Conjunto Origem",
    price: "R$ 598,00",
    tag: "Novo",
    image: images.productC,
    color: "Grafite",
    size: "P"
  },
  {
    id: 4,
    name: "Blusa Daniela",
    price: "R$ 279,00",
    tag: "Favorito",
    image: images.productD,
    color: "Preto",
    size: "M"
  }
];

export const homeBlocks = [
  {
    eyebrow: "Novidades TR",
    title: "Origem em destaque",
    text: "Lançamentos semanais com estilo exclusivo e contemporâneo, em um carrossel curto e editorial.",
    image: images.hero,
    action: "Conhecer lançamento"
  },
  {
    eyebrow: "Explorar",
    title: "Coleções, categorias e desejos",
    text: "Origem, Riviera, Mirage, Viva TR e categorias como Vestidos, Blusas, Saias e Conjuntos.",
    image: images.collection,
    action: "Explorar coleções"
  },
  {
    eyebrow: "Clube das Migas",
    title: "Benefícios para comprar antes",
    text: "Pontos, cupons e acesso antecipado aparecem como valor do aplicativo, não escondidos no perfil.",
    image: images.productD,
    action: "Ver Clube das Migas"
  }
];

export const featureFrames = [
  ["Descoberta", "Home + Explorar", "Campanhas, coleções, busca, momentos de uso e recomendações"],
  ["Compra", "Produto + Sacola", "Galeria, tamanho, favorito, cupom, subtotal e checkout"],
  ["Relacionamento", "Clube + Quiz", "Pontos, benefícios, estilo pessoal, favoritos e fidelização"],
  ["Pós-compra", "Perfil + Suporte", "Pedidos, avaliações, rastreamento, cupons e configurações"]
];
