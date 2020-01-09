const initialState = {
  loggedIn: false,

  userId: -1,
  username: "",

  isLoggingIn: false,
  isRegistering: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default rootReducer;
