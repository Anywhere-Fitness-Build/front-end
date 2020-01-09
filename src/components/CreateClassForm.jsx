import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Button, Container } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

import Typography from "@material-ui/core/Typography";
import MomentUtils from "@date-io/moment";

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
  const classes = useStyles();

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Submit");
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
