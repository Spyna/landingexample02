import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

export default function SearchFilter({ onChange: performSearch }) {
  const classes = useStyles();

const onSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  performSearch(data.get('query'));
}

const whenInputChanges = (event) => {
  performSearch(event.target.value)
}

  return (
    <Grid item sm={12} md={6}>
      <form
        onSubmit={onSubmit}
        className={classes.container}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="search-filter"
          label="Filter items"
          placeholder="filter"
          fullWidth
          type="text"
          className={classes.textField}
          margin="normal"
          name="query"
          onChange={whenInputChanges}
        />
      </form>
    </Grid>
  );
}
