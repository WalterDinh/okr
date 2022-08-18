import { MenuItem, Select } from '@mui/material';
import React from 'react';

function SelectInputForm(props) {
  const { field, listOption, form, label } = props;
  const { name } = field;
  const { errors, touched } = form;

  const isErrors = errors[name] && touched[name];
  const errorMessage = errors[name];

  return (
    <div className="select-input-form">
      <p className="label-input">{label}</p>
      <div className="select-input">
        <Select
          displayEmpty
          sx={{ width: '100%', height: '100%', backgroundColor: 'white' }}
          {...field}
          renderValue={(selected) => {
            if (!selected) {
              return <em>Lua chon</em>;
            }
            return selected;
          }}
        >
          <MenuItem disabled value="">
            <em>Lua chon</em>
          </MenuItem>
          {listOption.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </div>
      {isErrors && <div className="error-message">{errorMessage}</div>}
    </div>
  );
}

export default SelectInputForm;
