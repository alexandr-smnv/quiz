import React from 'react';
import {Box, FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const SelectField = ({name, label, value, options, handleChange}) => {

  return (
    <Box mt={3} width={"100%"}>
      <FormControl size={"small"} fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select name={name} value={value} label={label} onChange={handleChange}>
          {
            options.map(option => <MenuItem key={option.id} value={option.id}>{option.name}</MenuItem>)
          }
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectField;
