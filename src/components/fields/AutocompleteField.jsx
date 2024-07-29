import React, { useCallback } from "react";
import { Autocomplete as MuiAutocomplete } from "@mui/material";
import { useField } from "formik";
import TextField from "./TextField";

const AutoCompleteField = ({ name, label, placeholder, disabled, options = [], multiple, ...rest }) => {
  const [field, meta] = useField({ name });
  const handleChange = useCallback(
    (_, option) => {
      field.onChange({ target: { name, value: option.value } });
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <MuiAutocomplete
      name={name}
      multiple={multiple}
      value={options.find(option => option.value === field.value)}
      selectOnFocus
      onChange={handleChange}
      isOptionEqualToValue={(option, value) => option.value === value?.value}
      getOptionLabel={(option) => option?.label || ""}
      disabled={disabled}
      options={options}
      renderInput={(params) => (
        <TextField {...params}
          name={name} label={label}
          disabled={disabled} placeholder={placeholder}
          error={!!meta.error}
          helperText={meta.error}
        />
      )}
      {...rest}
    />
  );
};

export default AutoCompleteField;
