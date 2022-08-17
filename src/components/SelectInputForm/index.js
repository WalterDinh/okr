import React from 'react';

function SelectInputForm(props) {
  const { field, listOption, meta, label } = props;
  return (
    <div className="select-input-form">
      <p className="label-input">{label}</p>
      <select className="select-input" {...field}>
        <option value="" disabled>
          Lựa chọn
        </option>
        {listOption.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {meta.touched && meta.error && <div className="error-message">{meta.error}</div>}
    </div>
  );
}

export default SelectInputForm;
