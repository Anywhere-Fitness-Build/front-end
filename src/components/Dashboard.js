import React from "react";
import Header from "./Header";
import axiosAuth from "../axiosAuth";
import ClassCard from "./ClassCard";

const DashboardUser = () => {
  return (
    <div>
      <Header />
      <div className="dashContainer">
        <h1>Welcome to Anytime Fitness!</h1>
        <p>start by choosing a class below</p>
        <div className="classes">
          <ClassCard />
          <div className="class">class 1</div>
          <div className="class">class 2</div>
          <div className="class">class 3</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardUser;
