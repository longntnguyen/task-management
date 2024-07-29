import React, { useCallback, useState } from "react";
import { useField } from "formik";
import TextField from "./TextField";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const PasswordField = ({ name, label, placeholder, ...rest }) => {
  const [field, meta] = useField({ name });
  const [showPw, setShowPw] = useState(true)

  const handleChange = useCallback(
    (event) => {
      field.onChange({ target: { name, value: event.target.value } });
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <TextField
      name={name}
      label={label}
      placeholder={placeholder}
      type={showPw ? "password" : "text"}
      value={field.value || ""}
      onChange={handleChange}
      error={!!meta.error}
      helperText={meta.error}
      InputProps={{
        endAdornment: <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={() => setShowPw(prev => !prev)}
          >
            {showPw ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      }}
      {...rest}
    />
  );
};

export default PasswordField;
