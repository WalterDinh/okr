import React from 'react';
import CommonStyles from 'components/CommonStyles';
import CommonIcons from 'components/icons';
import { HiPlus } from 'react-icons/hi';

const Cfrstop = (props) => {
  //! State
  const { title, star, label } = props;

  //! Function

  //! Render
  return (
    <div className="cfrs-top">
      <div className="cfrs-top-left">
        <h3 className="cfrs-title">{title}</h3>
        <span>
          {star} <CommonIcons.Star />
        </span>
      </div>

      <div cfrs-top-right>
        <CommonStyles.Button type="primary" borderRadius="round" innerText={label} icon={<HiPlus />} />
      </div>
    </div>
  );
};

export default Cfrstop;
