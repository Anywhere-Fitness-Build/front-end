import axiosAuth from "../axiosAuth";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const PERSIST_LOGIN = "PERSIST_LOGIN";

export const persistLogin = () => dispatch => {
  if (localStorage.getItem("token")) {
    axiosAuth()
      .get("/auth/whoami")
      .then(res => {
        dispatch({ type: PERSIST_LOGIN, payload: { ...res.data } });
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  }
};
