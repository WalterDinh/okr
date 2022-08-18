import React from 'react';
import CommonIcons from 'components/icons';

const CfrsAchievement = (props) => {
  //! State
  const { title, star, children } = props;

  //! Function

  //! Render
  return (
    <div className="item">
      {children}
      <p className="item-title">{title}</p>
      <p className="item-number">{star}</p>
    </div>
  );
};

export default CfrsAchievement;
