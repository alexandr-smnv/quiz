import React from 'react';
import {Box, FormControl, TextField} from "@mui/material";

const TextFieldComp = ({name, type, label, value, handleChange}) => {

  return (
    <Box mt={3} width={"100%"}>
      <FormControl fullWidth size={"small"}>
        <TextField
          name={name}
          type={type}
          label={label}
          value={value}
          onChange={handleChange}
          size={"small"}
          variant={"outlined"}
        />
      </FormControl>
    </Box>
  );
};

export default TextFieldComp;
