import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import Header from "./components/Header";
import ClassesUser from "./components/ClassesUser";
import Login from "./components/Login";
import ClassesInstr from "./components/ClassesInstr";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
