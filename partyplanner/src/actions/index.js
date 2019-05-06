import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  axios
    .post("https://arcane-bayou-55024.herokuapp.com/api/auth/register", creds)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};
