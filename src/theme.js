import { createMuiTheme } from "@material-ui/core/styles";

const theme = {
  palette: {
    primary: {
      light: "#5c93ff",
      main: "#313131",
      dark: "#003399",
      contrastText: "#fff",
    },
  },
  shape: {
    borderRadius: 1,
  },
  overrides: {
    MuiButton: {
      root: {
        "&:hover": {
          textDecoration: "none",
          backgroundColor: "#35C37D",
          "@media (hover: none)": {
            backgroundColor: "#35C37D",
          },
        },
      },
      outlined: {
        "&:hover": {
          backgroundColor: "#35C37D",
        },
      },
    },
  },
};

export default createMuiTheme(theme);
