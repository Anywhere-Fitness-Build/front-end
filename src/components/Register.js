import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

import "../App.css";

const Register = ({ values, errors, touched, status }) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    console.log("status has changed", status);
    status && setUser(user => [...user, status]);
  }, [status]);
  return (
    <div>
      <Form>
        <label>Username:</label>
        <Field type="text" name="username" />
        {touched.name && errors.name && <p>{errors.name}</p>}
        <label>Password:</label>
        <Field type="text" name="password" />
        {touched.name && errors.name && <p>{errors.name}</p>}
        <label>
          I am an instructor
          <Field type="checkbox" name="isInstructor" checked={values.terms} />
        </label>
        <button type="submit">Register</button>
      </Form>
      {user.map(users => (
        <ul key={users.id}>
          <li>username: {users.name}</li>
          <li>password: {users.password}</li>
        </ul>
      ))}
    </div>
  );
};

withFormik({
  mapPropsToValues({ username, password, isInstructor }) {
    return {
      username: "",
      password: "",
      isInstructor: isInstructor || false
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required()
  }),
  handleSubmit(values, { setStatus }) {
    console.log("submitting");
    axios
      .post("https://anywhere-fitness-bw.herokuapp.com/auth/register/", values)
      .then(res => {
        console.log("success", res);
      })
      .catch(err => console.log(err.response));
  }
})(Register);
export default Register;
