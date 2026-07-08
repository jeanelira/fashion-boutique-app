import React from "react";

export function Card({ as: Tag = "article", className = "", children, ...props }) {
  return (
    <Tag className={`card ${className}`.trim()} {...props}>
      {children}
    </Tag>
  );
}

export function CardHeader({ className = "", children }) {
  return <div className={`card-header ${className}`.trim()}>{children}</div>;
}

export function CardBody({ className = "", children }) {
  return <div className={`card-body ${className}`.trim()}>{children}</div>;
}

export function CardFooter({ className = "", children }) {
  return <div className={`card-footer ${className}`.trim()}>{children}</div>;
}
