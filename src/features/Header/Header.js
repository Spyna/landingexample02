import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import NewsLetter from "./Newsletter";
import PushNotifications from "./PushNotification/PushNotifications";
import Promo from "./Promo";
import { pushNotificationSupported } from "./PushNotification/pushNotificationManager";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "0 70px",
    backgroundColor: "#000",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    height: "580px",
    backgroundImage: 'url("/Assets/black-friday.png")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    "@media (min-width: 320px) and (max-width: 480px) ": {
      width: "100%",
      height: "auto",
      padding: 0,
    },
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gridItem :{
    display:'flex',
    justifyContent: 'center'
  }
}));

export default function Header() {
  const classes = useStyles();
  const canUsePushNotifications = pushNotificationSupported();
  return (
    <header className={classes.root}>
      <Grid container className={classes.content}>
        <Grid item xs={12} md={4} className={classes.gridItem}>
          <Promo />
        </Grid>
        <Grid item xs={12} md={3} className={classes.gridItem}>
          <NewsLetter />
        </Grid>
        <Grid item xs={12} md={3} className={classes.gridItem}>
          {canUsePushNotifications && <PushNotifications />}
          {!canUsePushNotifications && (
            <div style={{ background: "red" }}>"Scarica la nostra app!"</div>
          )}
        </Grid>
      </Grid>
    </header>
  );
}
