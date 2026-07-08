import React from "react";
import { Menu, ShoppingBag } from "lucide-react";
import { tabs } from "../constants/routes";
import { text } from "../locales/pt-BR";
import IconButton from "./IconButton";

export default function PhoneShell({ activeTab, setActiveTab, onMenu, onBag, notice, children }) {
  return (
    <section className="phone" aria-label="Aplicativo boutique">
      <div className="status-bar">
        <span>9:41</span>
        <span>5G 100%</span>
      </div>

      <header className="phone-header">
        <IconButton label="Abrir menu" onClick={onMenu}>
          <Menu size={18} />
        </IconButton>
        <div className="wordmark">{text.appName}</div>
        <IconButton label="Abrir sacola" onClick={onBag}>
          <ShoppingBag size={18} />
        </IconButton>
      </header>

      <div className="phone-content">{children}</div>
      {notice ? <div className="prototype-notice" role="status">{notice}</div> : null}

      <nav className="bottom-nav" aria-label="Navegação principal">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              type="button"
              key={tab.id}
              className={activeTab === tab.id ? "active" : ""}
              onClick={() => setActiveTab(tab.id)}
              aria-label={`Abrir ${tab.label}`}
              aria-current={activeTab === tab.id ? "page" : undefined}
            >
              <Icon size={18} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </nav>
    </section>
  );
}
