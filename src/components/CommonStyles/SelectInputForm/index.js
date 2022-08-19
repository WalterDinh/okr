import { MenuItem, Select } from '@mui/material';
import React, { memo } from 'react';

function SelectInputForm(props) {
  const { field, listOption, form, isTouched, errorMsg, label, placeholder, style, ...restProps } = props;
  const { name } = field || {};
  const { errors, touched } = form || {};
  const isErrors = (isTouched && errorMsg) || (errors?.[name] && touched?.[name]);
  const errorMessage = errorMsg || errors?.[name];

  return (
    <div className="select-input-form">
      {label && <p className="label-input">{label}</p>}
      <div className="select-input" style={style}>
        <Select
          displayEmpty
          sx={{ width: '100%', height: '100%', backgroundColor: 'white' }}
          {...(field || {})}
          {...restProps}
          renderValue={field.value !== '' ? undefined : () => <em>{placeholder}</em>}
        >
          <MenuItem disabled value="">
            <em>{placeholder}</em>
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

export default memo(SelectInputForm);
