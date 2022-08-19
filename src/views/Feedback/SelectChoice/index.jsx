import React from 'react';
import CommonStyles from 'components/CommonStyles';

const SelectChoice = (props) => {
  //! State
  const { text, label, options, size, sx } = props;

  //! Function

  //! Render
  return (
    <div className="feedback-select-item">
      <p className="feedback-text">{text}</p>
      <CommonStyles.SelectField sx={sx} size={size} label={label} options={options} />
    </div>
  );
};

export default SelectChoice;
