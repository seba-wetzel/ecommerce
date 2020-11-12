import axios from "axios";
import { ADD_CATEGORY, DELETE_CATEGORY } from "../constants";

const addCat = (cat) => ({
  type: ADD_CATEGORY,
  cat,
});

const deleteCat = (cat) => ({
  type: DELETE_CATEGORY,
  cat,
});

// SOLO PARA ADMIN

export const postCat = () => (dispatch) =>
  axios
    .post("/api/category")
    .then((res) => res.data)
    .then((cat) => dispatch(addCat(cat)));

export const removeCat = (id) => (dispatch) =>
  axios
    .delete(`/api/category/${id}`)
    .then((res) => res.data)
    .then((cat) => dispatch(deleteCat(cat)));
