import React, { Fragment } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const DayPicker = (prop) => {
  const { field, label, fieldStyle, error, value, onChange, maxDate, minDate, ...restProps } = prop;
  const { name } = field || {};

  const textFieldStyle = {
    width: '100%',
    height: '40px',
    border: '1px solid #e8e8e8',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '4px',
    ...fieldStyle,
  };

  return (
    <Fragment>
      <div className="dayPickerLabel" style={{ marginBottom: '8px', lineHeight: '16px' }}>
        {label}
      </div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          value={value}
          onChange={onChange}
          maxDate={maxDate}
          minDate={minDate}
          renderInput={(params) => <TextField {...params} style={textFieldStyle} />}
        />
      </LocalizationProvider>
      <div className="error">{error}</div>
    </Fragment>
  );
};

export default DayPicker;
