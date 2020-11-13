import axios from "axios";
import {
  ADD_TO_CART,
  ADD_TO_QUANTITY,
  SUBSTRACT_FROM_QUANTITY,
  DELETE_ITEM,
  CHECKOUT,
  EMPTY_CART,
  CALCULATE_UNITS,
  CALCULATE_TOTAL,
} from "../constants";

//COMO HAGO AQUI??? CADA CARRITO TIENE QUE TENER UN ID UNICO QUE SE RELACIONE CON EL USUARIO PERO QUE NO ES UNICO?

export const addToCart = (productId) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: productId,
  });
  dispatch({
    type: CALCULATE_UNITS,
  });
  dispatch({
    type: CALCULATE_TOTAL,
  });
};

export const addToQuantity = (productId) => (dispatch) => {
  dispatch({
    type: ADD_TO_QUANTITY,
    payload: productId,
  });
  dispatch({
    type: CALCULATE_UNITS,
  });
  dispatch({
    type: CALCULATE_TOTAL,
  });
};

export const substractFromQuantity = (productId) => (dispatch) => {
  dispatch({
    type: SUBSTRACT_FROM_QUANTITY,
    payload: productId,
  });
  dispatch({
    type: CALCULATE_UNITS,
  });
  dispatch({
    type: CALCULATE_TOTAL,
  });
};

export const deleteItem = (itemId) => (dispatch) => {
  dispatch({
    type: DELETE_ITEM,
    payload: itemId,
  });
  dispatch({
    type: CALCULATE_UNITS,
  });
  dispatch({
    type: CALCULATE_TOTAL,
  });
};

const checkout = () => ({
  type: CHECKOUT,
});

export const emptyCart = () => ({
  type: EMPTY_CART,
});

export const addCart = () => (dispatch) =>
  axios
    .post("????")
    .then((res) => res.data)
    .then((itemId) => dispatch(addToCart(itemId)));

export const increaseQuantity = () => (dispatch) =>
  axios
    .put("????")
    .then((res) => res.data)
    .then((itemId) => dispatch(addToQuantity(itemId)));

export const decreaseQuantity = () => (dispatch) =>
  axios
    .put("????")
    .then((res) => res.data)
    .then((itemId) => dispatch(substractFromQuantity(itemId)));

export const removeItem = () => (dispatch) =>
  axios
    .delete("??????")
    .then((res) => res.data)
    .then((itemId) => dispatch(deleteItem(itemId)));

// export const checkout = () => (dispatch) =>
//???????

export const removeAllItems = () => (dispatch) => {
  axios
    .delete("??????")
    .then((res) => res.data)
    .then((allItems) => dispatch(emptyCart(allItems)));
};
