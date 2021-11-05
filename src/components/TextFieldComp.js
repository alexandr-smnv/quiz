import React from 'react';
import {Box, FormControl, TextField} from "@mui/material";
import {handleAmountChange} from "../redux/actions";
import {useDispatch} from "react-redux";

const TextFieldComp = () => {
  const dispatch = useDispatch()
  const handleChange = (e) => {
    dispatch(handleAmountChange(e.target.value))
  }
  
  return (
    <Box mt={3} width={"100%"}>
      <FormControl fullWidth size={"small"}>
        <TextField
          type={"number"}
          label={"Amount of questions"}
          onChange={handleChange}
          size={"small"}
          variant={"outlined"}
        />
      </FormControl>
    </Box>
  );
};

export default TextFieldComp;
