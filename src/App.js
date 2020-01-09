import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import ClassesUser from "./components/ClassesUser";
import Login from "./components/Login";
import ClassesInstr from "./components/ClassesInstr";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import AppState from "./components/context/AppState";

const App = () => {
  return (
    <AppState>
      <Router>
        <Switch>
          <div className="App">
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
          </div>
        </Switch>
      </Router>
    </AppState>
  );
};

export default App;
