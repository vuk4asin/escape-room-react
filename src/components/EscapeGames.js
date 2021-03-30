import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Image from "../img/nis-serbia_l.jpeg";

const useStyles = makeStyles({
  root: {
    width: 275,
    marginLeft: 20,
    display: "table-cell",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export function EscapeGames() {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;
  return (
    <div
      style={{ textAlign: "center", fontSize: 25, color: "rgb(41, 129, 158)" }}
    >
      <h1>What is an Escape Game?</h1>
      <div
        style={{
          marginBottom: 15,
          fontSize: 20,
          fontFamily: "Inder",
          lineHeight: 2,
          color: "#666",
          direction: "column-reverse",
        }}
      >
        <p1>
          An escape game is similar to an escape room, but you do not have to
          escape from a locked room. Escape games are suitable for smaller and
          bigger groups in contact to escape rooms. You can play the games from
          8 people up to even 200 people. Or even bigger on request. All
          ingredients are present to make fun with colleagues, family and
          friends. Teambuilding, cooperation and competition are the ingredients
          in every game. In Escape City and Da Vinci City Game is Eindhoven city
          center your playing field. The Escape Game: Save The World is an
          nerve-racking 2-hours indoor activity, played in teams with cryptic
          puzzles and clues. The Virtual reality game: Casa de Papel is unique
          combination of puzzling in real life and in virtual reality.{" "}
        </p1>
      </div>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            CASA DE PAPEL
          </Typography>
        </CardContent>
        <br />
        <br />
        <br />
        <CardActions>
          <CardMedia
            className={classes.media}
            backgroundImage={Image}
            title="Nis,Serbia"
          />
          <Button size="small">More Information</Button>
        </CardActions>
      </Card>

      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            SAVE THE WORLD
          </Typography>
        </CardContent>
        <br />
        <br />
        <br />
        <CardActions>
          <Button size="small">More Information</Button>
        </CardActions>
      </Card>

      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            ESCAPE CITY
          </Typography>
        </CardContent>
        <br />
        <br />
        <br />
        <CardActions>
          <Button size="small">More Information</Button>
        </CardActions>
      </Card>

      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            GAME OF THRONES
          </Typography>
        </CardContent>
        <br />
        <br />
        <br />
        <CardActions>
          <Button size="small">More Information</Button>
        </CardActions>
      </Card>

      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            DA VINCI CODE
          </Typography>
        </CardContent>
        <br />
        <br />
        <br />
        <CardActions>
          <Button size="small">More Information</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default EscapeGames;
