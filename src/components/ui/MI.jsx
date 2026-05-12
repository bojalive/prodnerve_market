import React from 'react';

export function MI({ children, size = 20, style = {} }) {
  return (
    <span
      className="material-symbols-outlined"
      style={{ fontSize: size, ...style }}
    >
      {children}
    </span>
  );
}
