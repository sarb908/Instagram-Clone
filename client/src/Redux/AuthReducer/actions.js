import axios from "axios";
import * as types from "./actionTypes";

export const loginHandler = (data) => (dispatch) => {
  dispatch({ type: types.SIGNIN_LOADING });
  return axios
    .post(`http://localhost:8080/login`, data)
    .then((d) => {
      console.log(d);
      return dispatch({
        type: types.SIGNIN_USER_SUCCESS,
        payload: { token: d.data.token, name: d.data.user.name },
      });
    })
    .catch((err) => {
      console.log(err);

      return dispatch({ type: types.SIGNIN_ERROR });
    });
};

export const signupHandler = (data) => (dispatch) => {
  dispatch({ type: types.SIGNIN_LOADING });

  return axios
    .post("http://localhost:8080/signup", data)
    .then((r) => {
      console.log(r);
      return dispatch({
        type: types.SIGNUP_SUCCESS,
      });
    })
    .catch((err) => {
      console.log(err);
      return dispatch({ type: types.SIGNIN_ERROR });
    });
};
