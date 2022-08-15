import React from "react";

interface ContainerI {
    className?:string;
    style?: Object;
}

const Container: React.FC<ContainerI> = ({ children, style, className }) => {
  //! State

  //! Function

  //! Render
  return (
    <div className={`${className || ""} container`} style={style}>
        {children}
    </div>
  )
}

export default Container;