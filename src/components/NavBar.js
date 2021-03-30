import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export function NavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab key={0} label="Home" href="/" />
        <Tab key={1} label="Escape Rooms" href="/escaperooms" />
        <Tab key={2} label="Escape Games" href="/escapegames" />
        <Tab key={3} label="Reservation" href="/reservation" />
        <Tab key={4} label="Contact" href="/contact" />
      </Tabs>
    </Paper>
  );
}

export default NavBar;
