import React, { useMemo } from "react";
import { getDesignTokens } from "../services/catalog";

export default function DesignTokens() {
  const tokenList = useMemo(() => getDesignTokens(), []);

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
