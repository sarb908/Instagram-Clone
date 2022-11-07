import axios from "axios";
import * as types from "./actionTypes";
export const getPostsHandler = () => (dispatch) => {
  dispatch({ type: types.LOADING_POSTS });

  return axios
    .get(`http://localhost:8080/posts`)
    .then((r) => {
      console.log(r.data);
      return dispatch({ type: types.GET_POSTS, payload: r.data });
    })
    .catch((err) => {
      return dispatch({ type: types.ERROR_POSTS });
    });
};

export const addPostsHandler = (formData) => (dispatch) => {
  dispatch({ type: types.LOADING_POSTS });
  return axios({
    method: "post",
    url: "http://localhost:8080/upload",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then(() => {
      return dispatch(getPostsHandler());
    })
    .catch((err) => {
      console.log(err);
      return dispatch({ type: types.ERROR_POSTS });
    });
};

export const updatePostHandler =
  ({ status, id, comments }) =>
  (dispatch) => {
    dispatch({ type: types.LOADING_POSTS });
    return axios
      .patch(`http://localhost:8080/posts/${id}`, { status, comments })
      .then(() => {
        return dispatch(getPostsHandler());
      })
      .catch((err) => {
        console.log(err);
        return dispatch({ type: types.ERROR_POSTS });
      });
  };

export const deletePostHandler = (id) => (dispatch) => {
  dispatch({ type: types.LOADING_POSTS });
  return axios
    .delete(`http://localhost:8080/posts/${id}`)
    .then(() => {
      return dispatch(getPostsHandler());
    })
    .catch((err) => {
      console.log(err);
      return dispatch({ type: types.ERROR_POSTS });
    });
};
