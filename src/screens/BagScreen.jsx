import React from "react";
import Button from "../components/Button";
import EmptyState from "../components/EmptyState";
import { Card, CardBody } from "../components/Card";
import { useApp } from "../context/AppContext";
import { getBagPreview, createCheckout } from "../services/orders";
import { formatMoney } from "../utils/money";

export default function BagScreen() {
  const { notify } = useApp();
  const bagProducts = getBagPreview();
  const subtotal = 858;
  const discount = 85.8;

  async function handleCheckout() {
    const response = await createCheckout();
    notify(response.message);
  }

  return (
    <div className="screen padded">
      <div className="section-title">
        <h2 className="screen-heading">Sacola</h2>
        <span>{bagProducts.length} itens</span>
      </div>

      {bagProducts.length ? (
        <>
          <div className="list">
            {bagProducts.map((product) => (
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

          <Card className="summary">
            <CardBody>
              <div><span>Cupom</span><strong>APP10 aplicado</strong></div>
              <div><span>Subtotal</span><strong>{formatMoney(subtotal)}</strong></div>
              <div><span>Desconto</span><strong>- {formatMoney(discount)}</strong></div>
              <div className="total"><span>Total</span><strong>{formatMoney(subtotal - discount)}</strong></div>
            </CardBody>
          </Card>

          <Button full onClick={handleCheckout}>Ir para checkout</Button>
        </>
      ) : (
        <EmptyState title="Sua sacola está vazia" description="Quando você escolher produtos, eles aparecerão aqui." />
      )}
    </div>
  );
}
