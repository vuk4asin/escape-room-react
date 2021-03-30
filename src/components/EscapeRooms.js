import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Image from "../img/Game_of_Thrones_Season_1.jpg";

const useStyles = makeStyles({
  root: {
    display: "table-cell",
    borderCollapse: "separate",
    borderSpacing: 0,
    padding: 30,
    marginLeft: 102,
    textAlign: "",
  },
  media: {
    height: 90,
    width: 90,
    // marginTop: 112,
    backgroundImage: `url(${Image})`,
  },
  chip: {
    marginRight: 1,
    color: "rgb(37, 66, 179)",
  },
});
const EscapeRooms = () => {
  const classes = useStyles();
  const Click = () => {
    console.log("time click");
  };

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: 35,
          color: "rgb(204, 193, 165)",
        }}
      >
        Chose your Escape Room!
      </h1>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={Image}
            title="Nis,Serbia"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Crime City
            </Typography>
            <Typography variant="body1`" color="textSecondary" component="p">
              Location: Bulevar Zorana Djindjica 22 Nis,Serbia
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              Min:2 Max: 100 Persons
            </Typography>
            <br />
            <br />

            <Chip className={classes.chip} label="10:00" onClick={Click()} />
            <Chip className={classes.chip} label="10:30" onClick={Click()} />
            <Chip className={classes.chip} label="11:40" onClick={Click()} />
            <Chip className={classes.chip} label="12:00" onClick={Click()} />
            <Chip className={classes.chip} label="13:55" onClick={Click()} />
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            href="/reservation"
          >
            Reserve Now
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} title="Nis,Serbia" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Run the Night
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Location: Bulevar Umetnosti Beograd,Serbia
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              Min:2 Max:58 Person
            </Typography>
            <br />
            <br />
            <Chip className={classes.chip} label="12:00" onClick={Click()} />
            <Chip className={classes.chip} label="13:30" onClick={Click()} />
            <Chip className={classes.chip} label="14:40" onClick={Click()} />
            <Chip className={classes.chip} label="16:00" onClick={Click()} />
            <Chip className={classes.chip} label="17:55" onClick={Click()} />
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            Book
            Now
            href="/reservation"
          >
            Reserve Now
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={Image}
            title="Nis,Serbia"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              The Dark Knight
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              Location: Bulevar Arsenija Carnojevica NoviSad,Serbia
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              Min:2 Max:92 Person
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            Book
            Now
            href="/reservation "
          >
            Reserve Now
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default EscapeRooms;
