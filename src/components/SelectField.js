import React, {useState} from 'react';
import {Box, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {handleCategoryChange, handleDifficultyChange, handleTypeChange} from "../redux/actions";
import {useDispatch} from "react-redux";

const SelectField = ({label, options}) => {
  const dispatch = useDispatch()
  const [value, setValue] = useState("");

  const handleChange = e => {
    setValue(e.target.value)
    switch (label) {
      case "Category":
        dispatch(handleCategoryChange(e.target.value))
        break;
      case "Difficulty":
        dispatch(handleDifficultyChange(e.target.value))
        break;
      case "Type":
        dispatch(handleTypeChange(e.target.value))
        break;
      default:
        return;
    }
  }

  return (
    <Box mt={3} width={"100%"}>
      <FormControl size={"small"} fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select value={value} label={label} onChange={handleChange}>
          {
            options.map(option => <MenuItem key={option.id} value={option.id}>{option.name}</MenuItem>)
          }
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectField;
