import React from "react";
import { Star } from "lucide-react";
import EmptyState from "../components/EmptyState";
import { Card, CardBody } from "../components/Card";
import { useApp } from "../context/AppContext";
import { useClubSummary } from "../hooks/useClubSummary";

const profileLinks = [
  ["Cupons", "Descontos e benefícios exclusivos"],
  ["Pedidos", "Acompanhe compras e entregas"],
  ["Guarda-roupa", "Comprados, favoritos e looks"],
  ["Quiz de estilo", "Curadoria e pontos extras"]
];

export default function ProfileScreen() {
  const { favorites, notify } = useApp();
  const club = useClubSummary();
  const progress = Math.min((club.points / club.nextLevelPoints) * 100, 100);

  return (
    <div className="screen padded">
      <Card className="club-card">
        <CardBody>
          <p className="eyebrow">Clube</p>
          <h2 className="screen-heading">{club.level}</h2>
          <p>{club.points.toLocaleString("pt-BR")} de {club.nextLevelPoints.toLocaleString("pt-BR")} pontos para liberar o próximo nível.</p>
          <div className="progress"><span style={{ width: `${progress}%` }} /></div>
        </CardBody>
      </Card>

      <div className="list">
        {profileLinks.map(([title, description]) => (
          <button
            type="button"
            className="list-row"
            key={title}
            onClick={() => notify(`${title}: área demonstrativa do protótipo.`)}
          >
            <span><Star size={16} /></span>
            <strong>{title}</strong>
            <small>{description}</small>
          </button>
        ))}
      </div>

      {!favorites.length ? (
        <EmptyState title="Nenhum favorito ainda" description="Toque no coração de um produto para montar sua lista." />
      ) : null}
    </div>
  );
}
