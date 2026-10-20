import React from "react";
import "./Button.css";

export default function Button({ text, className, href, newTab, theme }) {
  return (
    <div className={className}>
      <a
        className="main-button"
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
        style={{
          color: theme.accentColor || theme.body,
          backgroundColor: "transparent",
          border: `1px solid ${theme.accentColor || theme.text}`,
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = theme.accentColor || theme.text;
          e.target.style.color = theme.body || theme.dark;
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = "transparent";
          e.target.style.color = theme.accentColor || theme.body;
        }}
      >
        {text}
      </a>
    </div>
  );
}
