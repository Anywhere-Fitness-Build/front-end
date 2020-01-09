import {
  LOGIN_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
  PERSIST_LOGIN,
  LOGOUT
} from "../actions/userActions";

const initialState = {
  loggedIn: false,

  userId: -1,
  username: "",
  roleId: -1,

  isLoggingIn: false,
  isRegistering: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        loggedIn: false,
        userId: -1,
        username: "",
        roleId: -1
      };
    case PERSIST_LOGIN:
      return {
        ...state,
        userId: action.payload.id,
        username: action.payload.username,
        roleId: action.payload.role_id,
        loggedIn: true
      };
    case LOGIN_START:
      return { ...state, isLoggingIn: true };
    case LOGIN_SUCCESS:
      const { id, username, role_id } = action.payload;
      return {
        ...state,
        loggedIn: true,
        isLoggingIn: false,
        userId: id,
        username: username,
        roleId: role_id
      };
    case LOGIN_FAIL:
      return { ...state, isLoggingIn: false };
    default:
      return state;
  }
};

export default rootReducer;
