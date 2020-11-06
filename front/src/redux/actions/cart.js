
import axios from "axios";
import {
  ADD_TO_CART,
  ADD_TO_QUANTITY,
  SUBSTRACT_FROM_QUANTITY,
  DELETE_ITEM,
  CHECKOUT,
  EMPTY_CART,
} from "../constants";

//COMO HAGO AQUI??? CADA CARRITO TIENE QUE TENER UN ID UNICO QUE SE RELACIONE CON EL USUARIO PERO QUE NO ES UNICO?

export const addToCart = (productId) => ({
  type: ADD_TO_CART,
  payload: productId,
});

const addToQuantity = (productId) => ({
  type: ADD_TO_QUANTITY,
  productId,
});

const substractFromQuantity = (productId) => ({
  type: SUBSTRACT_FROM_QUANTITY,
  productId,
});

const deleteItem = (productId) => ({
  type: DELETE_ITEM,
  productId,
});

const checkout = () => ({
  type: CHECKOUT,
});

const emptyCart = () => ({
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
}

