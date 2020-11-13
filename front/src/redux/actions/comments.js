import axios from "axios";
import { ADD_COMMENT, DELETE_COMMENT, SET_COMMENTS } from "../constants";

const addComment = (comment) => ({
  type: ADD_COMMENT,
  payload: comment,
});

const deleteComment = (comment) => ({
  type: DELETE_COMMENT,
  comment,
});

export const setComments = (comments) => ({
  type: SET_COMMENTS,
  payload: comments,
});

export const fetchComments = (id) => async (dispatch, getState) => {
  const res = await axios.get(`/api/comments/${id}`);
  const comment = await res.data;
  dispatch(setComments(comment));
};

export const postComment = (productId, comentario) => async (
  dispatch,
  getState
) => {
  const { user } = getState();
  const response = await fetch(`/api/comments/${productId}`, {
    method: "POST",

    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      authorization: `Bearer ${user.user._lat}`,
    },
    body: JSON.stringify({ content: comentario }),
  });

  const comment = await response.json();

  dispatch(addComment(comment));
};

// SOLO ADMIN PUEDE BORRAR COMENTARIOS

export const removeComment = ({ productId, commentId }) => (dispatch) =>
  axios
    .delete(`/api/products/${productId}/comments/${commentId}`)
    .then((res) => res.data)
    .then((comment) => dispatch(deleteComment(comment)));
