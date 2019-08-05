import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import validate from "./EmailForm/LoginFormValidationRules";
import useForm from "./EmailForm/useForm";

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 316,
    width: 316,
    minHeight: 345,
    height: 345,
    padding: theme.spacing(1),
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
  button : {
    "&:hover": {
        backgroundColor: "#35C37D"
      }
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: 19,
  },
  checkboxRoot: {
    alignItems: "flex-start",
    color: "#a5a5a5",
    fontSize: ".7rem",
  },
  label: {
    fontSize: ".8rem",
  },
  fieldError: {
    margin: theme.spacing(0, 2),
  },
}));

export default function SimpleCard() {
  const classes = useStyles();

  const { values, errors, handleChange, handleSubmit } = useForm(
    afterValidation,
    validate
  );

  function afterValidation() {
    console.log("No errors, submit callback called!");
  }
  return (
    <Card className={classes.card}>
      <form
        className={classes.container}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <CardContent>
          <Typography className={classes.title} variant="h2">
            Newsletter
          </Typography>
          <Typography component="p" className={classes.p}>
            Receive updates on sales and offers directly to your inbox.
          </Typography>
          <TextField
            id="standard-with-placeholder"
            label="Email"
            placeholder="your-email@example.com"
            fullWidth
            type="email"
            className={classes.textField}
            margin="normal"
            name="email"
            InputLabelProps={{ shrink: true }}
            onChange={handleChange}
            value={values.email || ""}
            required
            error={errors.email !== undefined}
          />
          {errors.email && (
            <FormHelperText error className={classes.fieldError}>
              {errors.email}
            </FormHelperText>
          )}
          <br />
          <FormGroup aria-label="position" name="position" value="yes" row>
            <FormControlLabel
              value="yes"
              control={<Checkbox color="primary" required />}
              label="I have read the Privacy Policy, and I agree to the processing of my personal data in order to receive commercial communications and promotions by newsletter from LUISAVIAROMA.COM"
              labelPlacement="end"
              name="marketing"
              onChange={handleChange}
              classes={{
                root: classes.checkboxRoot,
                label: classes.checkboxRoot,
              }}
            />
          </FormGroup>
          {errors.marketing && (
            <FormHelperText error className={classes.fieldError}>
              {errors.marketing}
            </FormHelperText>
          )}
        </CardContent>
        <CardActions className={classes.actions}>
          <Button
            variant="contained"
            fullWidth
            color="primary"
            type="submit"
            className={classes.button}
          >
            Subscribe
          </Button>
        </CardActions>
      </form>
    </Card>
  );
}
