import React from "react";

const MenuIcon = (props: any) => {
  const color = props?.fill || "#18202e";
  const stroke = props?.stroke || "#18202e";

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <g>
        <path
          d="M23 13H1C0.4 13 0 12.6 0 12C0 11.4 0.4 11 1 11H23C23.6 11 24 11.4 24 12C24 12.6 23.6 13 23 13Z"
          fill={color}
          stroke={stroke}
        />
        <path
          d="M23 6H1C0.4 6 0 5.6 0 5C0 4.4 0.4 4 1 4H23C23.6 4 24 4.4 24 5C24 5.6 23.6 6 23 6Z"
          fill={color}
          stroke={stroke}
        />
        <path
          d="M23 20H1C0.4 20 0 19.6 0 19C0 18.4 0.4 18 1 18H23C23.6 18 24 18.4 24 19C24  19.6 23.6 20 23 20Z"
          fill={color}
          stroke={stroke}
        />
      </g>
    </svg>
  );
};

export default MenuIcon;
