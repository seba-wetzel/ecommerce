import { emptyCart, dispatchCart, saveToStoreCart } from "../actions/cart";
import {
  CALCULATE_UNITS,
  CALCULATE_TOTAL
} from "../constants";

export const retrievedCart = () => async (dispatch, state) => {
  const { user } = state()
  const response = await fetch(`/api/shopping/`, {
    "method": "GET",
    "headers": {
      "Access-Control-Allow-Origin": "*",
      "authorization": `Bearer ${user.user._lat}`
    }
  })
  const retrieved = await response.json()
  dispatch(saveToStoreCart(retrieved))
  dispatch({
    type: CALCULATE_UNITS
  })
  dispatch({
    type: CALCULATE_TOTAL
  })
}

export const saveCart = () => async (dispatch, state) => {
  const { cart, user } = state()
  const products = cart.added.map(item => ({ product: item._id, units: item.units }))
  const response = await fetch(`/api/shopping/`, {
    "method": "POST",
    "headers": {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "authorization": `Bearer ${user.user._lat}`
    },
    "body": JSON.stringify({ products })
  })
  const saved = await response.json()
  console.log(saved)
}

export const createTicket = () => async (dispatch, state) => {
  const { cart, user } = state()
  const products = cart.added.map(item => ({ product: item._id, units: item.units }))
  const response = await fetch(`/api/shopping/ticket`, {
    "method": "POST",
    "headers": {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "authorization": `Bearer ${user.user._lat}`
    },
    "body": JSON.stringify({ products, amount: cart.total })
  })
  const ticket = await response.json()
  console.log(ticket)
  dispatch(emptyCart())
  dispatch(dispatchCart(true))
}
