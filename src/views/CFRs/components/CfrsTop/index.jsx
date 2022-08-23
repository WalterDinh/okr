import React from 'react';
import CommonStyles from 'components/CommonStyles';
import CommonIcons from 'components/icons';
import { HiPlus } from 'react-icons/hi';

const Cfrstop = (props) => {
  //! State
  const { title, star, label, handleClick } = props;

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

      <div>
        <CommonStyles.Button
          color="primary"
          style={{ padding: '0 12px' }}
          borderRadius="round"
          innerText={label}
          icon={<HiPlus />}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Cfrstop;
