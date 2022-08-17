import React from 'react';

function SelectInputHome(props) {
  const { placeholder, listOption, width } = props;

  return (
    <div className="select-input-home">
      <select className="select-input" style={{ width: `${width}` }}>
        <option value="">{placeholder}</option>
        {listOption?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectInputHome;
