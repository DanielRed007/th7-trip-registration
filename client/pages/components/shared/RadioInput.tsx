import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Controller } from "react-hook-form";

export interface FormInputProps {
    name: string;
    control: any;
    label: string;
    setValue?: any;
    type?: string;
    options?: any;
    required?: boolean;
    row?: boolean
}

export const RadioInput: React.FC<FormInputProps> = ({
  name,
  control,
  label,
  options,
  required,
  row
}) => {
  const generateRadioOptions = () => {
    return options.map((singleOption: any, optionIndex: any) => (
      <FormControlLabel
        key={optionIndex}
        value={singleOption.value}
        label={singleOption.label}
        control={<Radio required={required} />}
      />
    ));
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange, value },
          fieldState: { error },
          formState,
        }) => (
          <RadioGroup row={row} value={value} onChange={onChange}>
            {generateRadioOptions()}
          </RadioGroup>
        )}
      />
    </FormControl>
  );
};