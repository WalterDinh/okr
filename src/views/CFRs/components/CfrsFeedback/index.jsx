import React from 'react';
import CommonIcons from 'components/icons';
import { SIZE_ICON } from 'constants';
import User1 from '../../../../assets/User1.jpg';

const CfrsFeedback = (props) => {
  //! State
  const { name, date, hours, feedback, vote, src } = props;

  //! Function

  //! Render
  return (
    <div className="item">
      <div className="item-top">
        <div className="item-top-user">
          <img
            // src={src}
            src={User1}
            alt="user"
          />
          <p className="user-name">{name}</p>
        </div>
        <p className="date">
          {date} - {hours}
        </p>
      </div>
      <div className="item-bottom">
        <p>{feedback}</p>
        <span>
          {Number(vote) > 0 ? '+' : ''} {vote} <CommonIcons.Star size={SIZE_ICON} />
        </span>
      </div>
    </div>
  );
};

export default CfrsFeedback;
