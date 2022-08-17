import React from 'react';

const CfrsItemTop = (props) => {
  //! State
  const { title, label } = props;

  //! Function

  //! Render
  return (
    <div className="cfrs-item-top">
      <h4 className="cfrs-bottom-title">{title}</h4>
      <button className="cfrs-button">{label}</button>
    </div>
  );
};

export default CfrsItemTop;
