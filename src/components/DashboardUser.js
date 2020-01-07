import React from 'react';
import Header from './Header';


const DashboardUser = () => {
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
