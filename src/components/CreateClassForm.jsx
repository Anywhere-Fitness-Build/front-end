import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Button, Container } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import Typography from "@material-ui/core/Typography";
import MomentUtils from "@date-io/moment";

import axiosAuth from "../axiosAuth";
import { MuiPickersUtilsProvider, DateTimePicker } from "@material-ui/pickers";

import Header from "./Header";
const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    margin: 20
  },
  form: {
    width: "100%",
    maxWidth: 600
  },
  textField: {
    marginTop: 20
  },
  label: {
    fontSize: 18,
    marginTop: 15,
    marginBottom: 15
  },
  button: {
    marginTop: 20
  }
});

const initialFormData = {
  name: "",
  type: "",
  startTime: new Date(),
  duration: "",
  intensity: 0,
  location: "",
  maxSize: 0
};
const CreateClassForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Submit");

    const body = {
      ...formData,
      startTime: formData.startTime.toISOString()
    };
    console.log("new body: ", body);
    axiosAuth()
      .post("/classes", body)
      .then(res => {
        console.log("New class created with response: ", res);
        setOpen(true);
      })
      .catch(err => {
        console.log("Error making new class:", err.response);
      });
  };

  const handleFormChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = date => {
    setFormData({ ...formData, startTime: date });
    console.log("Setting date, testing: ", date.toISOString());
  };
  return (
    <div>
      <Header />
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Class Created"
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
      <Container className={classes.container}>
        <Typography className={classes.title} variant="h4">
          Create Class
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <TextField
              className={classes.textField}
              fullWidth
              id="name"
              name="name"
              label="Name"
              placeholder="Working Worms"
              variant="outlined"
              value={formData.name}
              onChange={handleFormChange}
            />
            <TextField
              className={classes.textField}
              fullWidth
              id="type"
              placeholder="Cardio, Weights, etc..."
              name="type"
              label="Type"
              variant="outlined"
              value={formData.type}
              onChange={handleFormChange}
            />

            <TextField
              className={classes.textField}
              fullWidth
              id="location"
              placeholder="San Francisco"
              name="location"
              label="Location"
              variant="outlined"
              value={formData.location}
              onChange={handleFormChange}
            />

            <TextField
              className={classes.textField}
              fullWidth
              id="duration"
              name="duration"
              placeholder="1h"
              label="Duration"
              value={formData.duration}
              variant="outlined"
              onChange={handleFormChange}
            />
            <TextField
              className={classes.textField}
              fullWidth
              id="intensity"
              name="intensity"
              label="Intensity"
              value={formData.intensity}
              variant="outlined"
              type="number"
              onChange={handleFormChange}
            />
            <TextField
              className={classes.textField}
              fullWidth
              id="maxSize"
              name="maxSize"
              label="Max Size"
              variant="outlined"
              type="number"
              onChange={handleFormChange}
              value={formData.maxSize}
            />
            <DateTimePicker
              fullWidth
              className={classes.textField}
              label="Date and Time"
              id="datepicker"
              inputVariant="outlined"
              value={formData.startTime}
              onChange={handleDateChange}
            />
          </MuiPickersUtilsProvider>
          <Button
            fullWidth
            className={classes.button}
            variant="contained"
            color="primary"
            type="submit"
          >
            Create Class
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default CreateClassForm;
