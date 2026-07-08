import React from "react";
import { getFeatureFrames } from "../services/catalog";
import { text } from "../locales/pt-BR";
import { Card, CardBody, CardHeader } from "./Card";

export default function FeatureBoard() {
  return (
    <section className="board">
      <div className="board-heading">
        <p className="eyebrow">{text.featureBoardEyebrow}</p>
        <h2>{text.featureBoardTitle}</h2>
        <p>{text.featureBoardDescription}</p>
      </div>

      <div className="frames">
        {getFeatureFrames().map(([title, subtitle, description], index) => (
          <Card className="frame" key={title}>
            <CardHeader className="frame-top">
              <strong>{String(index + 1).padStart(2, "0")}</strong>
              <span>{subtitle}</span>
            </CardHeader>
            <CardBody className="frame-body">
              <h3>{title}</h3>
              <p>{description}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}
