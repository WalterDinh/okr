import React, { Fragment } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const DayPicker = (prop) => {
  const { field, label, fieldStyle, error, value, onChange, ...restProps } = prop;
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

  const handleOpen = () => {
    const calendar = document.getElementsByClassName('MuiCalendarPicker-root');
    if (calendar[0]) calendar[0].style.background = 'red';
    const calendarDay = document.getElementsByClassName('MuiPickersDay-root');
    for (const day of calendarDay) {
      day.addEventListener('click', () => {
        calendar[0].style.background = 'red';
      });
    }
  };
  return (
    <Fragment>
      <div className="dayPickerLabel" style={{ marginBottom: '8px' }}>
        {label}
      </div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          value={value}
          onChange={onChange}
          maxDate={new Date()}
          onOpen={handleOpen}
          renderInput={(params) => <TextField {...params} style={textFieldStyle} />}
        />
      </LocalizationProvider>
      <div className="error">{error}</div>
    </Fragment>
  );
};

export default DayPicker;
