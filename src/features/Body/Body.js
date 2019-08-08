import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import useApi from "./useApiHook";
import ShopGallery from "./ShopGallery";
import Search from "./SearchFilter";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
  },
  gridItem: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default function Body() {
  const classes = useStyles();
  const [{ data, isLoading, hasError }, doFetch] = useApi("", []);

  const whenSearchTermChanges = query => {
    if (query.length > 2 || query.length === 0) {
      doFetch(query);
    }
  };

  return (
    <Grid container className={classes.root}>
      <Grid component="main" item xs={12} md={12} className={classes.gridItem}>
        <Search onChange={whenSearchTermChanges} />
      </Grid>
      <Grid
        component="section"
        item
        xs={12}
        md={12}
        className={classes.gridItem}
      >
        <ShopGallery
          title="SHOP WOMEN"
          items={data}
          loading={isLoading}
          error={hasError}
        />
      </Grid>
      <Grid
        component="section"
        item
        xs={12}
        md={12}
        className={classes.gridItem}
      >
        <ShopGallery
          title="SHOP MEN"
          items={data}
          loading={isLoading}
          error={hasError}
        />
      </Grid>
    </Grid>
  );
}
