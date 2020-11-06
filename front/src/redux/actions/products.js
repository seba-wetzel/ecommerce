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
  payload: products,
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

export const fetchProducts = () => async (dispatch, state) => {
  const response = await fetch(`/api/products/`, {
    "method": "GET",
    // "headers": {
    //   "Access-Control-Allow-Origin": "*",
    //   "authorization": `Bearer ${state.user._lat}`
    // }
  })
  const products = await response.json()
  dispatch(receiveProducts(products))
}

export const fetchProduct = (name) => async (dispatch, state) => {
  const response = await fetch(`/api/products/search?name=${name}`, {
    "method": "GET",
    // "headers": {
    //   "Access-Control-Allow-Origin": "*",
    //   "authorization": `Bearer ${state.user._lat}`
    // }
  })
  const products = await response.json()
  dispatch(receiveProducts(products))
}

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

export const updatedProduct = (id) => (dispatch) => {
  axios
    .put(`/api/products/${id}`)
    .then((res) => res.data)
    .then((product) => dispatch(updateProduct(product)));
}

