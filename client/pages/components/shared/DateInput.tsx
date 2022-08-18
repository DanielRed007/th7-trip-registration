

import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import DatePicker from '@mui/lab/DatePicker';
import { Controller, useFormContext } from "react-hook-form";
import LocalizationProvider from '@mui/lab/LocalizationProvider';
const DATE_FORMAT = "dd-MMM-yy";

export interface FormInputProps {
    name: string;
    control: any;
    label: string;
    setValue?: any;
    type?: string;
    options?: any
}


export const DateInput = ({ name, control, label }: FormInputProps) => {
  return (
    <LocalizationProvider utils={DateFnsUtils}>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState, formState }) => (
          <DatePicker
            fullWidth
            variant="inline"
            defaultValue={new Date()}
            id={`date-${Math.random()}`}
            label={label}
            rifmFormatter={(val:any) => val.replace(/[^[a-zA-Z0-9-]*$]+/gi, "")}
            refuse={/[^[a-zA-Z0-9-]*$]+/gi}
            autoOk
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            format={DATE_FORMAT}
            {...field}
          />
        )}
      />
    </LocalizationProvider>
  );
};