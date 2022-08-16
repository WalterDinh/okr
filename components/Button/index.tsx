import React from "react";

interface ButtonI {
  onClick: () => void;
  icon?: React.ReactElement;
  style?: Object;
  type: "primary" | "secondary";
  borderRadius?: string;
  innerText: string;
}

const Button: React.FC<ButtonI> = ({
  onClick,
  icon,
  style,
  type,
  borderRadius,
  innerText,
}) => {
  return (
    <button
      onClick={onClick}
      style={style}
      className={`button-root button-${type} ${
        borderRadius ? "button-radius" : ""
      }`}
    >
      {icon && <div className="button-icon">{icon}</div>}
      <div className="button-text">{innerText}</div>
    </button>
  );
};

export default Button;
