import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useStyles from "../cardStyle";

import { enablePushNotification } from "./pushNotificationManager";

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Typography className={classes.title} variant="h2">
          Web Push Notifications
        </Typography>
        <Typography component="p" className={classes.p}>
          Be the first to know about special deals
        </Typography>
        <Typography component="div" className={classes.p}>
          <ul>
            <li>Real time instant notification</li>
            <li>No need to fill or download anything</li>
            <li>Turn on notification anytime from your browser settings</li>
          </ul>
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button
          id="js-push-btn"
          variant="contained"
          fullWidth
          color="primary"
          className={classes.button}
          onClick={enablePushNotification}
        >
          Keep me updated
        </Button>
      </CardActions>
    </Card>
  );
}
