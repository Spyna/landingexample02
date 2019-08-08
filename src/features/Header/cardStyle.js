import { makeStyles } from "@material-ui/core/styles";

const cardStyle = makeStyles(theme => ({
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
    bottom: 0,
    paddingBottom: theme.spacing(2),
  },
  button: {
    "&:hover": {
      backgroundColor: "#35C37D",
    },
  },
}));

export default cardStyle;
