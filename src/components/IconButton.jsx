import React from "react";

export default function IconButton({ children, onClick, label }) {
  return (
    <button type="button" className="icon-button" onClick={onClick} aria-label={label}>
      {children}
    </button>
  );
}
