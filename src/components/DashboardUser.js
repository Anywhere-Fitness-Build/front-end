import React from 'react';
import Header from './Header';
import axios from 'axios';
import axiosAuth from '../axiosAuth';
import { setNestedObjectValues } from 'formik';
import ClassCard from './ClassCard';

const dummyData = [{
  "name": "Fat 2 Fit",
  "type": "Cardio",
  "startTime": "2020-01-13T16:30:00.000Z",
  "duration": "1h",
  "intensity": 8,
  "location": "San Francisco",
  "maxSize": 10
},{
  "name": "Mobility",
  "type": "Cardio",
  "startTime": "2020-01-13T16:30:00.000Z",
  "duration": "1h",
  "intensity": 8,
  "location": "San Francisco",
  "maxSize": 10
}]

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
          {dummyData.map(dummy => {
            return (
              <ClassCard name={dummyData.name} type={dummyData.type} location={dummyData.location}/>
            )
          })};
      </div>
    </div>
    
  );
};



export default DashboardUser;
