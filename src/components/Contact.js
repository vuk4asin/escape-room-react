import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "table-cell",
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    marginTop: "10",

    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",

    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export function Contact() {
  const classes = useStyles();

  return (
    <div
      style={{
        fontFamily: "initial",
        color: "rgb(7, 111, 143)",
        textAlign: "center",
      }}
    >
      <h1>Contact</h1>

      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="pic"
                  src="nis-serbia_l.jpeg"
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    Crime City - Escape Room
                  </Typography>
                  <Typography gutterBottom variant="subtitle1">
                    Open:10:00-23:00
                  </Typography>
                  <br />
                  <br />
                  <Typography gutterBottom variant="subtitle1">
                    Telephone: 018/444/112
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    Location: Bulevar Zorana Djindjica 22 Nis,Serbia
                  </Typography>
                </Grid>
              </Grid>
              <Grid item></Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>

      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src="/static/images/grid/complex.jpg"
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    Run the Night - Escape Room
                  </Typography>
                  <Typography gutterBottom variant="subtitle1">
                    Open:11:30-23:00
                  </Typography>
                  <br />
                  <br />
                  <Typography gutterBottom variant="subtitle1">
                    Telephone: 011/614/512
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    Location: Bulevar Umetnosti Beograd,Serbia
                  </Typography>
                </Grid>
              </Grid>
              <Grid item></Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>

      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src="/static/images/grid/complex.jpg"
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    The Dark Knight - Escape Room
                  </Typography>
                  <Typography gutterBottom variant="subtitle1">
                    Open:09:00-23:00
                  </Typography>
                  <br />
                  <br />
                  <Typography gutterBottom variant="subtitle1">
                    Telephone: 028/432/781
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    Location: Bulevar Arsenija Carnojevica ,Novi Sad ,Serbia
                  </Typography>
                </Grid>
              </Grid>
              <Grid item></Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
}

export default Contact;
