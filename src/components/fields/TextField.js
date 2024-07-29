import React, { useCallback } from "react";
import { TextField as MuiTextField } from "@mui/material";
import { useField } from "formik";

const TextField = ({ name, label, placeholder, ...rest }) => {
  const [field, meta] = useField({ name });

  const handleChange = useCallback(
    (event) => {
      field.onChange({ target: { name, value: event.target.value } });
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <MuiTextField
      name={name}
      label={label}
      placeholder={placeholder}
      value={field.value || ""}
      onChange={handleChange}
      sx={{
        width: "100%",
        "& .MuiFormHelperText-root": {
          marginLeft: 0,
        },
      }}
      error={!!meta.error}
      helperText={meta.error}
      {...rest}
    />
  );
};

export default TextField;
