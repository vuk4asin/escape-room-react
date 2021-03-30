import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import { InputLabel, Select } from "@material-ui/core";

export function DatePicker(props) {
  const [city, setCity] = React.useState("");

  const citySetter = (_city) => {
    setCity(_city);
    props.callBackCity(city);
  };

  return (
    <div>
      <h1>Reservation</h1>
      <InputLabel id="Cities">Select City</InputLabel>
      <Select
        label="Cities"
        labelId="Cities"
        id="cities"
        onChange={(e) => {
          citySetter(e.target.value);
        }}
      >
        <MenuItem value={"Nis"}>Nis</MenuItem>
        <MenuItem value={"Beograd"}>Beograd</MenuItem>
        <MenuItem value={"Novi Sad"}>Novi Sad</MenuItem>
      </Select>
    </div>
  );
}

export default DatePicker;
