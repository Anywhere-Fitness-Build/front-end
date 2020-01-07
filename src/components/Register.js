import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import '../App.css';

const Register = ({
  values, errors, touched, status
}) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    console.log("status has changed", status);
    status && setUser(user => [
      ...user, status
    ]);
  }, [status]);
  return (
    <div>
      <Form>
        <label>
          Username:
        </label>
        <Field
        type = "text"
        name = "username"
        />
        {touched.name &&
        errors.name && (
          <p>{errors.name}</p>
        )}
        <label>
          Email:
        </label>
        <Field
        type = "text"
        name = "email"
        />
        {touched.name &&
        errors.name && (
          <p>{errors.name}</p>
        )}
        <label>
          I am an instructor
         <Field 
        type="checkbox"
        name="terms"
        checked={values.terms}
        />
        </label>
        <button type = "register">Register</button>
      </Form>
      {user.map(users => (
        <ul key = {users.id}>
            <li>username: {users.name}</li>
            <li>email: {users.email}</li>
        </ul>
      ))}
    </div>
  );
};

const FormikRegister = withFormik({
  mapPropsToValues({
    username,
    email,
    terms
  }) {
    return {
      username: "",
      email: "",
      terms: terms || false
    };
  },
validationSchema: Yup.object().shape({
  username: Yup.string().required(),
  email: Yup.string().email().required()
}),
handleSubmit(values, {setStatus}) {
  console.log("submitting");
  axios
      .post(
        "https://anywhere-fitness-bw.herokuapp.com",
        values
      )
      .then(res => {
        console.log("success", res);
      })
      .catch(err =>
        console.log(err.response)
        );
        }
})(Register);
export default FormikRegister;
