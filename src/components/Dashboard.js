import React, { useState } from "react";
import Header from "./Header";
import axiosAuth from "../axiosAuth";
import ClassCard from "./ClassCard";

import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";

import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  gridContainer: {
    display: "grid",
    width: "85%",
    gap: "20px",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))"
  },
  button: {
    width: "85%",
    marginBottom: 20
  },
  buttonRoot: {
    backgroundColor: "#000"
  },
  buttonLabel: {
    color: "#fff"
  }
});

const DashboardUser = () => {
  const { loggedIn, roleId } = useSelector(state => state);
  const history = useHistory();
  const [classes, setClasses] = useState([]);
  const styles = useStyles();

  if (localStorage.getItem("token")) {
    if (!loggedIn) {
      return <Redirect to="/login" />;
    }
  } else {
    return <Redirect to="/login" />;
  }

  const handleCreateClass = () => {
    console.log("Clicked");
    history.push("/classes/create");
  };

  return (
    <div>
      <Header />
      <div className="dashContainer">
        <h1>Welcome to Anywhere Fitness!</h1>
        {roleId === 2 ? (
          <Button
            variant="contained"
            color="primary"
            fullWidth
            classes={{ root: styles.buttonRoot, label: styles.buttonLabel }}
            className={styles.button}
            onClick={handleCreateClass}
          >
            Create New Class
          </Button>
        ) : null}
        <div className={styles.gridContainer}>
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
        </div>
      </div>
    </div>
  );
};

export default DashboardUser;
