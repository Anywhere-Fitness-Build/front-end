import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';

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
          <Field id='password' type='text' name='password' />
          <br />
          <button type='submit'>Submit</button>
        </Form>
        {users.map(user => (
          <ul key={user.id}>
            <li>User: {user.username}</li>
          </ul>
        ))}
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
  }
})(UserForm);

export default FormikUserForm;
