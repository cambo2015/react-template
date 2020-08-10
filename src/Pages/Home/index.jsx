import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";

import React from "react";
import Spacing from "../../Components/Spacing";

const useStyles = makeStyles((theme) => ({
  title: {
    position: "relative",
    top: "40vh",
    color: "white",
  },
  contentHeader:{
    margin:theme.spacing(10)
  },
  card: {
    width: 300,
    height: 300,
    margin:32,
    borderRadius: "50%",
    color:theme.palette.primary.main
  },
}));

const Home = (props) => {
  const classes = useStyles();
  const cards = [
    <Paper className={classes.card} elevation={10}>
      Content A
    </Paper>,
    <Paper className={classes.card} elevation={10}>
      Content B
    </Paper>,
    <Paper className={classes.card} elevation={10}>
      Content C
    </Paper>,
  ];
  return (
    <div>
      {/* see app.css */}
      <div className="hero">
        <Typography className={classes.title} variant="h1">
        Brand Name
        </Typography>
      </div>
      <div className="content">
        <Spacing />
        <div className={classes.contentHeader}>
          <Typography variant="h3">
           Brand Name App helps you to...
          </Typography>
        </div>
        <div className="card-content">
          <Grid
            container
            direction="row"
            justify="center"
            alignContent="center"
            spacing={10}
          >
            {cards.map((x,i) => (
              <Grid item key={x+i}>{x}</Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Home;
