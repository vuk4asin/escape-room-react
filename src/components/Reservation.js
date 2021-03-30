import React from "react";
import Calendar from "./Calendar";
import DatePicker from "./DatePicker";
import Button from "@material-ui/core/Button";
import axios from "axios";

const Reservation = () => {
  const [city, setCity] = React.useState("");
  const [date, setDate] = React.useState("");

  const [data, setData] = React.useState("");

  const API = `http://localhost:8000/api/reservations/${date}/${city}`;

  const callBackCity = (_city) => {
    setCity(_city);
  };

  const onchangeD = async (date) => {
    await setDate(date);
  };
  // const API = 'http://localhost:8000/api/reservations/{$city}';

  // const canClick = () => {
  //   if (city != null && date != null) {
  //     return true;
  //   }

  //   return false;
  // };

  // const gameListData = () => {
  //   return axios
  //     .get(API)
  //     .then((res) => {
  //       setData(res.data);
  //       console.log("DATA:" + data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <DatePicker callBackCity={callBackCity} />
        CITY: {city}
      </div>

      <br />

      <div style={{ textAlign: "center" }}>
        <Button
          variant="contained"
          onchange={(e) => {
            onchange(onchangeD);
          }}
        >
          Reserve
        </Button>
      </div>

      <br />
      <br />
      <br />

      <div className="Calendar">
        <Calendar parentCallBack={onchangeD} />
      </div>
    </div>
  );
};

export default Reservation;
