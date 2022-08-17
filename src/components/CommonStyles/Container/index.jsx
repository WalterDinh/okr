import React from 'react';

const Container = ({ children, style, className }) => {
  //! State

  //! Function

  //! Render
  return (
    <div className={`${className || ''} content-container`} style={style}>
      {children}
    </div>
  );
};

export default Container;
