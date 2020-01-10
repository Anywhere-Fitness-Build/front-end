import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Header from "./components/Header";

import ClassesUser from "./components/ClassesUser";
import Login from "./components/Login";
import ClassesInstr from "./components/ClassesInstr";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import { useEffect } from "react";
import { persistLogin } from "./actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import CreateClassForm from "./components/CreateClassForm";

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  useEffect(() => {
    dispatch(persistLogin());
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/register">
            <Header />
            <Register />
          </Route>
          <Route path="/login">
            <Header />
            <Login />
          </Route>
          <Route path="/classesuser" component={ClassesUser} />
          <Route path="/classesinstructor" component={ClassesInstr} />
          <Route exact path="/classes/create" component={CreateClassForm} />
        </div>
      </Switch>
    </Router>
  );
};

export default App;
