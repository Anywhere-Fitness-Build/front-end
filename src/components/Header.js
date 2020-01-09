import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/userActions";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  infoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  name: {
    fontSize: 15,
    fontWeight: 400,
    textTransform: "uppercase",
    marginRight: 20
  }
}));

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { loggedIn, username, roleId } = useSelector(state => state);

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/login");
    dispatch(logout());
    //TODO, logout in redux
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            Anywhere Fitness
          </Typography>

          {loggedIn ? (
            <div className={classes.infoContainer}>
              <Typography variant="h6" className={classes.name}>
                {username}
              </Typography>
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          ) : (
            <div>
              <Button color="inherit" onClick={() => history.push("/register")}>
                Register
              </Button>
              <Button color="inherit" onClick={() => history.push("/login")}>
                Login
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
