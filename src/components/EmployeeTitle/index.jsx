import React from 'react';
import CommonStyles from 'components/CommonStyles';
import { HiPlus } from 'react-icons/hi';
import CommonIcons from 'components/icons';

const EmployeeTitle = (props) => {
  //! State
  const { title, placeholder, innerText, handleClickOpen } = props;

  //! Function

  //!Render
  return (
    <div className="employeeManager-top">
      <div className="left">
        <h3 className="employeeManager-title">{title}</h3>
      </div>
      <div className="right">
        <CommonStyles.Input
          style={{ height: '40px', width: '400px' }}
          placeholder={placeholder}
          icon={<CommonIcons.Search />}
        />
        <CommonStyles.Button
          style={{ height: '40px', width: '132px' }}
          color="primary"
          borderRadius="round"
          innerText={innerText}
          icon={<HiPlus />}
          onClick={handleClickOpen}
        />
      </div>
    </div>
  );
};

export default EmployeeTitle;
