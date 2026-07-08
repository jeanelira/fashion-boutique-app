import React, { useEffect, useState } from "react";
import EmptyState from "../components/EmptyState";
import ProductCard from "../components/ProductCard";
import { useApp } from "../context/AppContext";
import { useProductActions } from "../hooks/useProductActions";
import { fetchProducts } from "../services/catalog";

const filters = ["Vestidos", "Blusas", "Tweed", "Conjuntos"];

export default function ShopScreen() {
  const { notify } = useApp();
  const { addToBag, isFavorite, openProduct, shareProduct, toggleFavorite } = useProductActions();
  const [activeChip, setActiveChip] = useState("Vestidos");
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    fetchProducts().then((items) => {
      if (!mounted) return;
      setProducts(items);
      setLoading(false);
    });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="screen padded">
      <div className="panel">
        <p className="eyebrow">Shop</p>
        <h2 className="screen-heading">O que você procura hoje?</h2>
        <p className="muted">Busca, filtros e atalhos para tirar produto da home infinita.</p>
      </div>

      <div className="chips">
        {filters.map((chip) => (
          <button
            type="button"
            key={chip}
            className={activeChip === chip ? "active" : ""}
            onClick={() => {
              setActiveChip(chip);
              notify(`Filtro aplicado: ${chip}.`);
            }}
          >
            {chip}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="product-grid" aria-label="Carregando produtos">
          {[1, 2, 3, 4].map((item) => <div className="skeleton-card" key={item} />)}
        </div>
      ) : products.length ? (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              favorite={isFavorite(product.id)}
              onAddToBag={addToBag}
              onClick={openProduct}
              onFavorite={toggleFavorite}
              onShare={shareProduct}
            />
          ))}
        </div>
      ) : (
        <EmptyState title="Nenhum produto encontrado" description="Tente outro filtro ou volte mais tarde." />
      )}
    </div>
  );
}
