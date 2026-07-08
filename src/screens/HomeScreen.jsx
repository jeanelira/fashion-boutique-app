import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Badge from "../components/Badge";
import Button from "../components/Button";
import IconButton from "../components/IconButton";
import ProductCard from "../components/ProductCard";
import { ROUTES } from "../constants/routes";
import { useApp } from "../context/AppContext";
import { useCarousel } from "../hooks/useCarousel";
import { useProductActions } from "../hooks/useProductActions";
import { getHomeBlocks, getProducts } from "../services/catalog";

export default function HomeScreen() {
  const { openTab, notify } = useApp();
  const { isFavorite, toggleFavorite } = useProductActions();
  const homeBlocks = getHomeBlocks();
  const products = getProducts();
  const { activeIndex, activeItem: block, go, goTo, swipeHandlers } = useCarousel(homeBlocks);

  function openBlockAction() {
    const routes = [ROUTES.shop, ROUTES.collections, ROUTES.profile];
    openTab(routes[activeIndex]);
    notify(`${block.action}: abrindo a área relacionada.`);
  }

  return (
    <div className="screen">
      <section
        className="home-block"
        style={{ "--image": `url(${block.image})` }}
        aria-roledescription="carousel"
        aria-label="Destaques da home"
        {...swipeHandlers}
      >
        <div>
          <Badge>{block.eyebrow}</Badge>
        </div>
        <div className="home-copy">
          <p className="eyebrow light">{block.eyebrow}</p>
          <h2>{block.title}</h2>
          <p>{block.text}</p>
          <Button variant="light" onClick={openBlockAction}>{block.action}</Button>
        </div>
      </section>

      <div className="block-controls">
        <IconButton onClick={() => go(-1)} label="Bloco anterior">
          <ArrowLeft size={18} />
        </IconButton>
        <div className="dots">
          {homeBlocks.map((item, index) => (
            <button
              type="button"
              key={item.title}
              className={index === activeIndex ? "active" : ""}
              onClick={() => goTo(index)}
              aria-label={`Ir para ${item.title}`}
              aria-current={index === activeIndex ? "true" : undefined}
            />
          ))}
        </div>
        <IconButton onClick={() => go(1)} label="Próximo bloco">
          <ArrowRight size={18} />
        </IconButton>
      </div>

      <section className="content-section">
        <div className="section-title">
          <h3>Lançamentos</h3>
          <span>Carrossel curto</span>
        </div>
        <div className="horizontal-products">
          {products.slice(0, 3).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              favorite={isFavorite(product.id)}
              onFavorite={toggleFavorite}
              variant="home"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
