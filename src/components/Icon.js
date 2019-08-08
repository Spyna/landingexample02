import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = image => makeStyles(theme => ({
  icon: {
    display: "inline-block",
    width:22,
    height:22,
    backgroundRepeat: 'no-repeat',
    backgroundSize:'contain',
    backgroundImage: `url("${image}")`,
    margin: theme.spacing(1)
  },
}));

export default function Icon({ image }) {
  const classes = useStyles(image)();
  return (
    <span
    className={classes.icon}
    ></span>
  );
}
