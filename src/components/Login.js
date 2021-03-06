import React, { useState, useEffect } from "react";
import { LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS } from "../actions/userActions";
import { Link, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { withFormik, Form, Field, yupToFormErrors } from "formik";
import axiosAuth from "../axiosAuth";
import * as Yup from "yup";
import { Button } from "@material-ui/core/";

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
        <div className="user">
          <label htmlFor="username">Username:</label>
          <Field id="username" type="text" name="username" />
          {touched.username && errors.username && (
            <p className="errors">{errors.username}</p>
          )}
          </div>
          <br />
          <div className="pass">
          <label htmlFor="password">Password: </label>
          <Field id="password" type="password" name="password" />
          {touched.password && errors.password && (
            <p className="errors">{errors.password}</p>
          )}
          </div>
          <br />
          <Button fullWidth variant="contained" color="primary" type="submit">Submit</Button>
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
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            id: res.data.id,
            username: res.data.username,
            role_id: res.data.role_id
          }
        });
      })
      .catch(err => {
        console.log(err.response);
        dispatch({ type: LOGIN_FAIL });
      });
  }
})(UserForm);

export default withRouter(connect(state => state)(FormikUserForm));
