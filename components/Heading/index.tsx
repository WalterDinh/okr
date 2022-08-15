import React from "react";

const propTypes = {};

interface HeadingI {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  style?: Object;
}

const Heading: React.FC<HeadingI> = ({ as, className, style, children }) => {
  //! State

  //! Function

  //! Render
  if (as === "h1") {
    return (
      <h1 className={className} style={style}>
        {children}
      </h1>
    );
  }

  if (as === "h2") {
    return (
      <h2 className={className} style={style}>
        {children}
      </h2>
    );
  }

  if (as === "h3") {
    return (
      <h3 className={className} style={style}>
        {children}
      </h3>
    );
  }

  if (as === "h4") {
    return (
      <h4 className={className} style={style}>
        {children}
      </h4>
    );
  }

  if (as === "h5") {
    return (
      <h5 className={className} style={style}>
        {children}
      </h5>
    );
  }

  if (as === "h6") {
    return (
      <h6 className={className} style={style}>
        {children}
      </h6>
    );
  }

  return (
    <h1 className={className} style={style}>
      {children}
    </h1>
  );
};

Heading.propTypes = propTypes;
export default Heading;
