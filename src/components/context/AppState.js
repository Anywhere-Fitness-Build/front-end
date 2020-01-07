import React, { useReducer } from 'react';
import axios from 'axios';
import AppContext from './AppContext';
import Reducer from './Reducer';

import {
  SIGNIN_INSTRUCTOR,
  SIGNIN_CLIENT,
  ADD_CLASSES,
  EDIT_CLASSES,
  DELETE_CLASSES,
  SIGNUP_FOR_CLASSES,
  DROP_CLASSES
} from './Types';

const AppState = props => {
  const initialState = {
    instructor: {},
    client: {},
    classes: []
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  // SING IN INSTRUCTOR

  // SIGN IN CLIENT

  // ADD CLASSES

  // EDIT CLASSES

  // DELETE CLASSES

  // SIGN UP FOR CLASSES

  // DROP CLASSES

  return (
    <AppContext.Provider
      value={{
        instructor: state.instructor,
        client: state.client,
        classes: state.classes
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
