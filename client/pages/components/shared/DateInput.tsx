

import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Controller } from "react-hook-form";
const DATE_FORMAT = "dd-MMM-yy";

export interface FormInputProps {
    name: string;
    control: any;
    label: string;
    setValue?: any;
    type?: string;
    options?: any;
    required?: boolean;
}


export const DateInput = ({ name, control, label, required }: FormInputProps) => {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState, formState }) => (
          <DatePicker
            label={label}
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField required={required} {...params} />}
          />
        )}
      />
    </LocalizationProvider>
  );
};