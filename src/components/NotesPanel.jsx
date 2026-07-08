import React from "react";
import { text } from "../locales/pt-BR";

export default function NotesPanel() {
  return (
    <aside className="notes">
      <article>
        <h2>{text.notes.studyTitle}</h2>
        <p>
          Comece por <code>src/data.js</code> para mudar produtos, blocos e funcionalidades.
          Depois veja <code>src/App.jsx</code>, onde cada tela foi separada em componentes.
        </p>
      </article>
      <article>
        <h2>{text.notes.homeTitle}</h2>
        <p>{text.notes.homeBody}</p>
      </article>
      <article>
        <h2>{text.notes.nextTitle}</h2>
        <p>{text.notes.nextBody}</p>
      </article>
    </aside>
  );
}
