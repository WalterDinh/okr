import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { red } from '@mui/material/colors';
import React from 'react';

function SelectInputHome(props) {
  const { placeholder, listOption, width, onChangeSelectInput } = props;
  const [age, setAge] = React.useState('');

  const handleChange = (e) => {
    setAge(e.target.value);
    // onChangeSelectInput(e.target.value);
  };
  return (
    <div className="select-input-home">
      <Select
        displayEmpty
        value={age}
        sx={{ height: '100%', width: width, borderRadius: 0, backgroundColor: 'white' }}
        onChange={handleChange}
        renderValue={(selected) => {
          if (!selected) {
            return <em>{placeholder}</em>;
          }
          return selected;
        }}
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
  );
}

export default SelectInputHome;
