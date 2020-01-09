import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ClassesUser from './components/ClassesUser';
import ClassesAttend from './components/ClassesAttend';
import Login from './components/Login';
import ClassesInstr from './components/ClassesInstr';
import DashboardUser from './components/DashboardUser';
import DashboardInstr from './components/DashboardInstr';
import Register from './components/Register';
import AppState from './components/context/AppState';

const App = () => {
  return (
    <AppState>
      <Router>
        <Switch>
          <div className='App'>
            <Route path='/dashboarduser' component={DashboardUser} />
            <Route path='/dashboardinstr' component={DashboardInstr} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/classesuser' component={ClassesUser} />
            <Route path='/classesinstructor' component={ClassesInstr} />
            <Route path='/classesattendance/:id' component={ClassesAttend} />
          </div>
        </Switch>
      </Router>
    </AppState>
  );
};

export default App;
