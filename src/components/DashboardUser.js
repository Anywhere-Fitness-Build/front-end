import React from 'react';
import Header from './Header';
import axios from 'axios';
import axiosAuth from '../axiosAuth';
import { setNestedObjectValues } from 'formik';


const DashboardUser = () => {
  axiosAuth()
.get("/auth/whoami")
.then(res => {
  console.log("success", res);
})
.catch(err => 
  console.log(err.response)
  );
  return (
    <div>
      <Header/>
      <div className="dashContainer">
        <h1>Welcome to Anytime Fitness!</h1>
        <p>start by choosing a class below</p>
        <div className="classes">
          <div className="class">
            class 1
          </div>
          <div className="class">
            class 2
          </div>
          <div className="class">
            class 3
          </div>
        </div>
      </div>
    </div>
  );
};



export default DashboardUser;
