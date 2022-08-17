import React from 'react';

function SelectInputHome(props) {
  const { placeholder, listOption, width, onChangeSelectInput } = props;

  const handleChange = (e) => {
    console.log('e.target.value: ', e.target.value);
    onChangeSelectInput(e.target.value);
  };
  return (
    <div className="select-input-home">
      <select className="select-input" style={{ width: `${width}` }} onChange={handleChange}>
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
