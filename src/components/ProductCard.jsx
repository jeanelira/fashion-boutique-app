import React from "react";
import { Heart, Share2, ShoppingBag } from "lucide-react";
import Badge from "./Badge";
import IconButton from "./IconButton";

function ProductCard({
  product,
  favorite = false,
  variant = "default",
  onFavorite,
  onAddToBag,
  onClick,
  onShare
}) {
  const showSecondaryActions = variant !== "home" && (onAddToBag || onShare);

  function stopAndRun(event, action) {
    event.stopPropagation();
    action?.(product);
  }

  return (
    <article
      className={`product-card product-card--${variant} ${onClick ? "clickable" : ""}`}
      onClick={() => onClick?.(product)}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(event) => {
        if (!onClick || (event.key !== "Enter" && event.key !== " ")) return;
        event.preventDefault();
        onClick(product);
      }}
      aria-label={onClick ? `Abrir produto ${product.name}` : undefined}
    >
      <div className="product-photo">
        <img src={product.image} alt={product.name} />
        <Badge>{product.tag}</Badge>
        <IconButton
          label={`${favorite ? "Remover dos favoritos" : "Favoritar"} ${product.name}`}
          onClick={(event) => stopAndRun(event, onFavorite)}
        >
          <Heart size={17} fill={favorite ? "currentColor" : "none"} />
        </IconButton>
      </div>
      <h4>{product.name}</h4>
      <p>{product.price}</p>

      {showSecondaryActions ? (
        <div className="product-actions">
          {onAddToBag ? (
            <IconButton label={`Adicionar ${product.name} à sacola`} onClick={(event) => stopAndRun(event, onAddToBag)}>
              <ShoppingBag size={15} />
            </IconButton>
          ) : null}
          {onShare ? (
            <IconButton label={`Compartilhar ${product.name}`} onClick={(event) => stopAndRun(event, onShare)}>
              <Share2 size={15} />
            </IconButton>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}

export default React.memo(ProductCard);
