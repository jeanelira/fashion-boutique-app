import React from "react";
import EmptyState from "../components/EmptyState";
import { useApp } from "../context/AppContext";

const collections = ["Origem", "Riviera", "Mirage", "Eterno"];

export default function CollectionsScreen() {
  const { notify } = useApp();

  return (
    <div className="screen padded">
      <p className="eyebrow">Coleções</p>
      <h2 className="screen-heading">Drops editoriais</h2>
      <p className="muted">Cada coleção vira uma entrada visual, em vez de jogar todos os produtos na home.</p>

      {collections.length ? (
        <div className="collection-grid">
          {collections.map((name) => (
            <button
              type="button"
              key={name}
              className="collection-card"
              onClick={() => notify(`Curadoria ${name} selecionada.`)}
            >
              <strong>{name}</strong>
              <span>Ver curadoria</span>
            </button>
          ))}
        </div>
      ) : (
        <EmptyState title="Nenhuma coleção ativa" description="Novos drops aparecerão aqui quando forem publicados." />
      )}
    </div>
  );
}
