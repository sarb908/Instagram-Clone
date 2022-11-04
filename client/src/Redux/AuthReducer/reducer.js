import * as types from "./actionTypes";
const init = {
  user: localStorage.getItem("sarbtoken") ? true : false,
  token: localStorage.getItem("sarbtoken") || "",
  name: localStorage.getItem("sarbusername") || "",
  signinError: false,
  signinLoading: false,
};

export const authReducer = (state = init, action) => {
  switch (action.type) {
    case types.SIGNIN_LOADING: {
      return { ...state, signinError: false, signinLoading: true };
    }
    case types.SIGNIN_ERROR: {
      return { ...state, signinError: true, signinLoading: false };
    }

    case types.SIGNIN_USER_SUCCESS: {
      localStorage.setItem("sarbtoken", action.payload.token);
      localStorage.setItem("sarbusername", action.payload.name);

      return {
        ...state,
        signinError: false,
        signinLoading: false,
        user: true,
        name: action.payload.name,
        token: action.payload.token,
      };
    }
    case types.SIGNUP_SUCCESS: {
      return { ...state, signinError: false, signinLoading: false };
    }
    case "LOGOUT": {
      localStorage.removeItem("sarbtoken");
      localStorage.removeItem("sarbusername");
      return {
        ...state,
        signinError: false,
        signinLoading: false,
        user: false,
        token: "",
        name: "",
      };
    }

    default: {
      return state;
    }
  }
};
