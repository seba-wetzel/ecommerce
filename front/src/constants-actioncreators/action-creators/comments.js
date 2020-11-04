import axios from "axios";
import { ADD_COMMENT, DELETE_COMMENT } from "../constants";

const addComment = (comment) => ({
  type: ADD_COMMENT,
  comment,
});

const deleteComment = (comment) => ({
  type: DELETE_COMMENT,
  comment,
});

export const postComment = () => (dispatch) =>
  axios
    .post(`/api/products/${productId}/comments`)
    .then((res) => res.data)
    .then((comment) => dispatch(addComment(comment)));

// SOLO ADMIN PUEDE BORRAR COMENTARIOS

export const removeComment = () => (dispatch) =>
  axios
    .delete(`/api/products/${productId}/comments/${commentId}`)
    .then((res) => res.data)
    .then((comment) => dispatch(deleteComment(comment)));
