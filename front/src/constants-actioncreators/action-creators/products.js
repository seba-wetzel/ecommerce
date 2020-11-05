<<<<<<< HEAD
import axios from "axios";
import {
  RECEIVE_PRODUCTS,
  RECEIVE_SINGLE_PRODUCT,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
} from "../constants";

const receiveProducts = (products) => ({
  type: RECEIVE_PRODUCTS,
  products,
});

const receiveSingleProduct = (product) => ({
  type: RECEIVE_SINGLE_PRODUCT,
  product,
});

const addProduct = (product) => ({
  type: ADD_PRODUCT,
  product,
});

const deleteProduct = (product) => ({
  type: DELETE_PRODUCT,
  product,
});

const updateProduct = (product) => ({
  type: UPDATE_PRODUCT,
  product,
});

export const fetchProducts = () => (dispatch) =>
  axios
    .get("/api/products")
    .then((res) => res.data)
    .then((products) => dispatch(receiveProducts(products)));

export const fetchProduct = (id) => (dispatch) =>
  axios
    .get(`/api/products/${id}`)
    .then((res) => res.data)
    .then((product) => dispatch(receiveSingleProduct(product)));

// recordar validacion, esto solo deberia ser accesible para admin
export const postProduct = () => (dispatch) =>
  axios
    .post("/api/products")
    .then((res) => res.data)
    .then((product) => dispatch(addProduct(product)));

export const removeProduct = (id) => (dispatch) =>
  axios
    .delete(`/api/products/${id}`)
    .then((res) => res.data)
    .then((product) => dispatch(deleteProduct(product)));

export const updatedProduct = (id) => (dispatch) =>
  axios
    .put(`/api/products/${id}`)
    .then((res) => res.data)
    .then((product) => dispatch(updateProduct(product)));
=======
import axios from "axios";
import {
  RECEIVE_PRODUCTS,
  RECEIVE_SINGLE_PRODUCT,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
} from "../constants";

const receiveProducts = (products) => ({
  type: RECEIVE_PRODUCTS,
  products,
});

const receiveSingleProduct = (product) => ({
  type: RECEIVE_SINGLE_PRODUCT,
  product,
});

const addProduct = (product) => ({
  type: ADD_PRODUCT,
  product,
});

const deleteProduct = (product) => ({
  type: DELETE_PRODUCT,
  product,
});

const updateProduct = (product) => ({
  type: UPDATE_PRODUCT,
  product,
});

export const fetchProducts = () => (dispatch) =>
  axios
    .get("/api/products")
    .then((res) => res.data)
    .then((products) => dispatch(receiveProducts(products)));

export const fetchProduct = (id) => (dispatch) =>
  axios
    .get(`/api/products/${id}`)
    .then((res) => res.data)
    .then((product) => dispatch(receiveSingleProduct(product)));

// recordar validacion, esto solo deberia ser accesible para admin
export const postProduct = () => (dispatch) =>
  axios
    .post("/api/products")
    .then((res) => res.data)
    .then((product) => dispatch(addProduct(product)));

export const removeProduct = () => (dispatch) =>
  axios
    .delete(`/api/products/${id}`)
    .then((res) => res.data)
    .then((product) => dispatch(deleteProduct(product)));

export const updatedProduct = () => (dispatch) =>
  axios
    .put(`/api/products/${id}`)
    .then((res) => res.data)
    .then((product) => dispatch(updateProduct(product)));
>>>>>>> master
