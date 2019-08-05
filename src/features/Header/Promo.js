import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    minWidth: 315,
    minHeight: 345,
    backgroundColor: "rgba(255,255,255,0)",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: "3.5rem",
    fontWeight: "bold",
    color: "white",
    marginBottom: 30,
  },
  text: {
    fontSize: ".85rem",
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card} elevation={0}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          variant="h2"
        >
          Black Friday
        </Typography>
        <Typography comptoonent="p" className={classes.text}>
          Don't miss out on Black Friday deals, just in times for Christmas
          shopping! Up to 70% on all your favorite men's, women's, and kids
          brands like Aleberta Ferretti, Casadei, Marni, Dsquared2, Vercace
          n'altro litro, and Maison Margiela. Join in on this fun American
          tradition and keep an eye out for the best offers on clothing, bags,
          accessories, and shoes the day after Thanksgiving. Subscribe to our
          newsletter and to our web push notifications to receive updates on
          sales and special deals.
        </Typography>
      </CardContent>
    </Card>
  );
}
