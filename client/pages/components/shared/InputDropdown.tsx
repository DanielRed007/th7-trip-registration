import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useFormContext, Controller } from "react-hook-form";
import styles from "../../styles/InputDropdown.module.css";

interface Option{
    label: string;
    value: string;
}
export interface FormInputProps {
    name: string;
    control: any;
    label: string;
    setValue?: any;
    type?: string;
    options?: any
}

export const InputDropdown: React.FC<FormInputProps> = ({
  name,
  control,
  label,
  options
}) => {
  const generateSingleOptions = (dropdownOptions: any[]) => {
    return dropdownOptions.map((option: any) => {
      return (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      );
    });
  };

  return (
    <FormControl size={"medium"} style={{width: "100%"}}>
      <InputLabel>{label}</InputLabel>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Select className={styles.defaultDropdownStyles} onChange={onChange} value={value}>
            {generateSingleOptions(options)}
          </Select>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
};
