import React from 'react';

const Button = ({ onClick, icon, style, color, type = 'submit', borderRadius, innerText, disabled }) => {
  return (
    <button
      onClick={onClick}
      style={style}
      type={type}
      disabled={disabled}
      className={`button-root button-${color} ${borderRadius ? 'button-radius' : ''}`}
    >
      {icon && <div className="button-root-icon">{icon}</div>}
      <div className="button-text">{innerText}</div>
    </button>
  );
};

export default Button;
