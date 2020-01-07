import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { withFormik, Form, Field } from 'formik';
import axios from 'axios';
import axiosAuth from '../axiosAuth';

const UserForm = ({ values, errors, touched, status }) => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    console.log('status has changed', status);
    status && setUser(users => [...users, status]);
  }, [status]);
  return (
    <>
      <h1>login here soon</h1>
      <div className='user-form'>
        <Form>
          <label htmlFor='username'>Username:</label>
          <Field id='username' type='text' name='username' />
          <br />
          <label htmlFor='password'>Password:</label>
          <Field id='password' type='password' name='password' />
          <br />
          <button type='submit'>Submit</button>
        </Form>
        <p>Don't have an account? <Link to="/register">Register Here.</Link></p>
      </div>
    </>
  );
};

const FormikUserForm = withFormik({
  mapPropsToValues({ username, email, password }) {
    return {
      username: username || '',
      email: '',
      password: ''
    };
  },
  handleSubmit(
        values,
        {setStatus, resetForm}
    ) {
        console.log("submitting", values);
        axiosAuth()
            .post(
                "/auth/login",
                values
            )
            .then(res => {
                console.log("success", res);
                setStatus(res.data);
                resetForm();
            })
            .catch(err => 
                console.log(err.response)
                );
    }
})(UserForm);

export default FormikUserForm;
