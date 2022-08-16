import React from "react";

const Close = (props: any) => {
  const color = props?.fill || "#18202e";
  const stroke = props?.stroke || "#18202e";

  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M15.7 0.3C15.3 -0.1 14.7 -0.1 14.3 0.3L8 6.6L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L6.6 8L0.3 14.3C-0.1 14.7 -0.1 15.3 0.3 15.7C0.5 15.9 0.7 16 1 16C1.3 16 1.5 15.9 1.7 15.7L8 9.4L14.3 15.7C14.5 15.9 14.8 16 15 16C15.2 16 15.5 15.9 15.7 15.7C16.1 15.3 16.1 14.7 15.7 14.3L9.4 8L15.7 1.7C16.1 1.3 16.1 0.7 15.7 0.3Z"
        fill={color}
        stroke={stroke}
      />
    </svg>
  );
};

export default Close;
