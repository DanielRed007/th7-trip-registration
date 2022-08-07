import React from 'react';
import TextField from '@mui/material/TextField';
import styles from "../../styles/TextInput.module.css";

interface TextInputProps{
    defaultMessage?: string;
    required?: boolean;
    label: string;
}

const TextInput = (textInputProps: TextInputProps) => {
    return (
        <TextField
            className={styles.defaultTextStyles}
            required={textInputProps.required}
            id="text-field"
            label={textInputProps.label}
            defaultValue={textInputProps.defaultMessage}
            InputLabelProps={{
                placeholder: "Hey",
            }}
        />
    )
}

export default TextInput;
