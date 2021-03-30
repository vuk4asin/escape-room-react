import React, { useState } from "react";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import { DatePickerCalendar, useDateInput } from "react-nice-dates";
import "react-nice-dates/build/style.css";

export function Calendar(props) {
  const [date, setDate] = React.useState("");

  const test = (date) => {
    setDate(date);
    props.parentCallBack(date);
  };

  const inputProps = useDateInput({
    date,
    format: "dd-MM-yyyy",
    locale: enGB,
    onDateChange: setDate,
  });
  return (
    <div>
      <p>
        The selected date is{" "}
        {date && format(date, "dd MMM yyyy", { locale: enGB })}
      </p>
      <input className="input" {...inputProps} />
      <DatePickerCalendar date={date} onDateChange={setDate} locale={enGB} />
    </div>
  );
}

export default Calendar;
