import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import styles from "../../styles/TextInput.module.css";

interface SelectProps{
    defaultMessage?: string;
    required?: boolean;
    label: string;
}

const SelectOptions = (selectProps: SelectProps) => {
    const [selectOption, setOptions] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setOptions(event.target.value as string);
    };

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectOption}
                label={selectProps.label}
                onChange={handleChange}
            >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
    )
}

export default SelectOptions;
