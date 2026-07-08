import React from "react";

export default function Button({ children, variant = "dark", full = false, onClick, type = "button", label }) {
  return (
    <button
      type={type}
      className={`button ${variant} ${full ? "full" : ""}`}
      onClick={onClick}
      aria-label={label}
    >
      {children}
    </button>
  );
}
