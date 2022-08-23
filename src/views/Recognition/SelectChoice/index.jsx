import React from 'react';
import CommonStyles from 'components/CommonStyles';
import SelectInputHome from 'components/CommonStyles/SelectInputHome';

const SelectChoice = (props) => {
  //! State
  const { text, label, listOption, width } = props;

  //! Function

  //! Render
  return (
    <div className="feedback-select-item">
      <p className="feedback-text">{text}</p>
      <SelectInputHome width={width} placeholder={label} listOption={listOption} />
    </div>
  );
};

export default SelectChoice;
