import * as types from "./actionTypes";
const init = { loading: false, error: false, posts: [] };

export const postReducer = (state = init, action) => {
  switch (action.type) {
    case types.LOADING_POSTS: {
      return { ...state, loading: true, error: false };
    }
    case types.ERROR_POSTS: {
      return { ...state, loading: false, error: true };
    }
    case types.GET_POSTS: {
      return { ...state, loading: false, error: false, posts: action.payload };
    }

    default: {
      return state;
    }
  }
};
