import React from 'react';
import {Box, FormControl, TextField} from "@mui/material";

const TextFieldComp = ({name, type, label, handleChange}) => {

  return (
    <Box mt={3} width={"100%"}>
      <FormControl fullWidth size={"small"}>
        <TextField
          name={name}
          type={type}
          label={label}
          onChange={handleChange}
          size={"small"}
          variant={"outlined"}
        />
      </FormControl>
    </Box>
  );
};

export default TextFieldComp;
