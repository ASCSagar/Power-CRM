import React, { useState } from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

function CustomDatePicker(props) {
  const { value, onChange, onBlur, format = "dd/MM/yyyy" } = props;
  // const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        autoOk
        label=""
        clearable
        format={format}
        //   disableFuture
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        variant={"outline"}
        {...props}
      />
    </MuiPickersUtilsProvider>
  );
}

export default CustomDatePicker;
