import React from "react";

const Clock: React.FC<object> = (props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 7V12H17"
        stroke="#212121"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M3 23L6.132 18.824"
        stroke="#212121"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        stroke="#212121"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M1 6L6 1"
        stroke="#212121"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M17.868 18.824L21 23"
        stroke="#212121"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M23 6L18 1"
        stroke="#212121"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default Clock;
