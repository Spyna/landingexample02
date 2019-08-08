import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import downloadImage from "./CTA-App-Store.png";
import qrCode from "./qr-code-lvr-ios-app-1024x1024.png";

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 316,
    width: 316,
    minHeight: 345,
    height: 345,
    padding: theme.spacing(1),
    margin: theme.spacing(1),
  },
  content: {
    maxHeight: 285,
    height: 285,
  },
  title: {
    fontSize: "1.1rem",
    fontWeight: "bold",
    margin: theme.spacing(1),
    textAlign: "center",
  },
  p: {
    fontSize: ".8rem",
  },
  actions: {
    paddingBottom: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
  },
  button: {
    "&:hover": {
      backgroundColor: "#35C37D",
    },
  },
  downloadImage: {
    height: 36,
    cursor: "pointer",
  },
  imageContainer: {
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Typography className={classes.title} variant="h2">
          Download iOS App
        </Typography>
        <Typography component="p" className={classes.p}>
          Score the best Black Friday deals by downloading our app and receiving
          instant updates on sales, exclusive promotions and limited offers.
        </Typography>
        <div className={classes.imageContainer}>
          <img width="125" height="120" src={qrCode} alt="App QR Code" />
        </div>
      </CardContent>
      <CardActions className={classes.actions}>
        <img
          src={downloadImage}
          alt="Download from iOS store"
          className={classes.downloadImage}
        />
      </CardActions>
    </Card>
  );
}
