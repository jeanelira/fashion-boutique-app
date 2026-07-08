# Boutique App

App de estudos criado do zero em React + Vite, com visual de boutique/e-commerce de moda.

Ele não usa nome de marca real. A ideia é servir como base para aprender e evoluir:

- home em blocos, sem rolagem infinita de produtos;
- carrossel curto de lançamentos;
- coleções;
- shop com filtros visuais;
- produto/sacola/perfil;
- clube de benefícios;
- board visual de funcionalidades.

## Como rodar

Instale as dependências:

```bash
npm install
```

Rode o app:

```bash
npm run dev
```

Depois abra o endereço mostrado no terminal.

## Como gerar build web

```bash
npm run build
```

O resultado fica em:

```text
dist/
```

## Estrutura principal

```text
src/
  components/  # Button, Card, ProductCard, PhoneShell e peças reutilizáveis
  constants/   # rotas e navegação
  context/     # estado compartilhado do protótipo
  hooks/       # carrossel, ações de produto e dados do clube
  locales/     # textos da interface
  screens/     # Home, Shop, Coleções, Sacola e Perfil
  services/    # mocks de catálogo, carrinho, favoritos, checkout, clube e autenticação
  types/       # documentação JSDoc dos modelos
  utils/       # funções pequenas, como formatMoney
  App.jsx      # composição do layout e mapa de telas
  data.js      # dados mockados
  styles.css   # design system e estilos visuais
```

## Onde mexer primeiro

1. `src/data.js`
   Mude nomes de produtos, preços, imagens e blocos da home.

2. `src/screens/`
   Estude uma tela por vez, como `HomeScreen.jsx` ou `ShopScreen.jsx`.

3. `src/components/`
   Veja como os componentes reaproveitáveis foram separados.

4. `src/context/AppContext.jsx`
   Entenda como aba ativa, favoritos e avisos são compartilhados.

5. `src/hooks/`
   Veja como o carrossel com swipe e as ações de produto foram isolados.

6. `src/services/`
   Prepare integrações reais sem alterar as telas.

7. `src/styles.css`
   Ajuste cores, espaçamentos, cards, botões e layout mobile.

## Como preparar Android com Capacitor

Depois de rodar `npm run build`:

```bash
npm run cap:add:android
npm run cap:sync
npm run cap:open:android
```

No Android Studio, use:

```text
Build > Build Bundle(s) / APK(s) > Build APK(s)
```

## Importante

Este app é visual/demonstrativo. Ele não tem backend, login real, pagamento real, checkout real ou integração com Shopify.
