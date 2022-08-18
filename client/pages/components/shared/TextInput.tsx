

import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import TextField from '@mui/material/TextField';
import styles from "../../styles/TextInput.module.css";

export interface FormInputProps {
    name: string;
    control: any;
    label: string;
    setValue?: any;
    type: string;
}

export const TextInput = ({ name, control, label, type }: FormInputProps) => {
  return (
    <Controller
        name={name}
        control={control}
        render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
        }) => (
        <TextField
            className={styles.defaultTextStyles}
            helperText={error ? error.message : null}
            size="medium"
            error={!!error}
            onChange={onChange}
            value={value}
            fullWidth
            label={label}
            variant="outlined"
            type={type}
        />
        )}
    />
  );
};
