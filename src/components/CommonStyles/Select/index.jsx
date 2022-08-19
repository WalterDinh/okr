import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectField = ({ sx, value, variant, onChange, size, label, options, ...restProps }) => {
  //! State

  //! function

  //! Render
  return (
    <FormControl sx={sx} variant={variant} size={size}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select autoWidth value={value} label={label} onChange={onChange} {...restProps}>
        {options?.map((option, index) => {
          return (
            <MenuItem key={index} value={option.value}>
              {option.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectField;
