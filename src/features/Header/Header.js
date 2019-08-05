import React from "react";
import Grid from "@material-ui/core/Grid";
import NewsLetter from "./Newsletter";
import PushNotifications from "./PushNotifications";
import Promo from "./Promo";

export default function Header() {
  return (
    <header className="App-header">
      <Grid container className="Header-content">
        <Grid item xs={12} md={4} className="">
          <Promo />
        </Grid>
        <Grid item xs={12} md={3}>
          <NewsLetter />
        </Grid>
        <Grid item xs={12} md={3}>
          <PushNotifications />
        </Grid>
      </Grid>
    </header>
  );
}
