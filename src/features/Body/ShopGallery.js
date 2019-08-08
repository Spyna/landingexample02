import React from "react";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import loaderImage from "./loading.svg";

const useStyles = makeStyles(theme => ({
  title: {
    margin: theme.spacing(4),
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
  gallery: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  galleryItem: {
    margin: theme.spacing(2),
    display: "flex",
    backgroundSize: "cover",
    width: 362,
    height: 362,
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(4),
    backgroundColor: "#999",
    "@media (min-width: 320px) and (max-width: 480px) ": {
      width: 312,
      height: 312,
    },
  },
  galleryItemTitle: {
    color: "black",
    fontSize: `2rem`,
    fontWeight: `bold`,
  },
}));

const withBackgoundUrl = url => ({
  backgroundImage: `url("${url}")`,
});

const getMockItems = title => {
  let loadedItems = [];
  for (let i = 0; i < 12; i++) {
    loadedItems.push({
      id: `loading-${title}-${i}`,
      title: "",
      url: loaderImage,
    });
  }
  return loadedItems;
};

//TODO spostare fuori e aggiungere call to action
const Error = () => <div>Something went wrong ...</div>;

function ShopGallery({ title, items, loading, error }) {
  const classes = useStyles();
  let loadedItems = [...items];
  if (loading) {
    loadedItems = getMockItems(title);
  }
  return (
    <div>
      <Typography
        component="h3"
        classes={{
          root: classes.title,
        }}
        variant="h4"
      >
        {title}
      </Typography>
      {error ? (
        <Error />
      ) : (
        <Grid item xs={12} md={12} className={classes.gallery}>
          {loadedItems.length === 0 && <div>Nothing found!</div>}
          {loadedItems.map(item => (
            <div
              key={`item-${title}-${item.id}`}
              className={classes.galleryItem}
              style={withBackgoundUrl(item.url)}
            >
              <Typography
                variant="h4"
                component="h4"
                classes={{ h4: classes.galleryItemTitle }}
              >
                {item.title}
              </Typography>
            </div>
          ))}
        </Grid>
      )}
    </div>
  );
}

export default ShopGallery;
