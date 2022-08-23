import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { red } from '@mui/material/colors';
import React, { memo } from 'react';

function SelectInputHome(props) {
  const { placeholder, listOption, width, onChangeSelectInput } = props;
  const [value, setValue] = React.useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="select-input-home">
      <Select
        displayEmpty
        value={value}
        sx={{ height: '100%', width: width, borderRadius: 0, backgroundColor: 'white', border: '1px solid #DBDBDB' }}
        onChange={handleChange}
        renderValue={value !== '' ? undefined : () => <em>{placeholder}</em>}
      >
        <MenuItem disabled value="">
          <em>{placeholder}</em>
        </MenuItem>
        {listOption?.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}

export default memo(SelectInputHome);
