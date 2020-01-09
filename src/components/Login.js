import React, { useState, useEffect } from "react";
import { LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS } from "../actions/userActions";
import { Link, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { withFormik, Form, Field, yupToFormErrors } from "formik";
import axiosAuth from "../axiosAuth";
import * as Yup from "yup";

const UserForm = ({ values, errors, touched, status, loggedIn }) => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    console.log("status has changed", status);
    status && setUser(users => [...users, status]);
  }, [status]);

  if (loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="loginContainer">
      <div className="login">
        <h1>Login: </h1>
        <Form>
          <label htmlFor="username">Username:</label>
          <Field id="username" type="text" name="username" />
          {touched.username && errors.username && (
            <p className="errors">{errors.username}</p>
          )}
          <br />
          <label htmlFor="password">Password:</label>
          <Field id="password" type="password" name="password" />
          {touched.password && errors.password && (
            <p className="errors">{errors.password}</p>
          )}
          <br />
          <button type="submit">Submit</button>
        </Form>
        <p>
          Don't have an account? <Link to="/register">Register Here.</Link>
        </p>
      </div>
    </div>
  );
};

const FormikUserForm = withFormik({
  mapPropsToValues({ username, email, password }) {
    return {
      username: username || "",
      email: "",
      password: ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Is Required"),
    password: Yup.string().required("Is Required")
  }),
  handleSubmit(values, stuff) {
    console.log("props: ", stuff);

    const { setStatus, resetForm, props } = stuff;
    const { dispatch } = props;
    dispatch({ type: LOGIN_START });
    axiosAuth()
      .post("/auth/login", values)
      .then(res => {
        console.log("success", res);
        setStatus(res.data);
        resetForm();
        localStorage.setItem("token", res.data.token);
        console.log("Token set");
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { id: res.data.id, username: res.data.username }
        });
      })
      .catch(err => {
        console.log(err.response);
        dispatch({ type: LOGIN_FAIL });
      });
  }
})(UserForm);

export default withRouter(connect(state => state)(FormikUserForm));
