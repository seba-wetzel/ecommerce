import { emptyCart } from "../actions/cart";

export const fetchShopping = () => async (dispatch, state) => {
  const { cart, user } = state();
  const products = cart.added.map((item) => ({
    product: item._id,
    units: item.units,
  }));

  console.log(user, "sdfvgaed");

  const response = await fetch(`/api/shopping/`, {
    method: "POST",

    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      authorization: `Bearer ${user.user._lat}`,
    },
    body: JSON.stringify({ products }),
  });
  const CONFIRMAR = await response.json();
  console.log(CONFIRMAR, "ASDAFASDFG");
  /* dispatch(receiveProducts(CONFIRMAR)) */
};

export const createTicket = () => async (dispatch, state) => {
  const { cart, user } = state();
  const products = cart.added.map((item) => ({
    product: item._id,
    units: item.units,
  }));

  console.log(user, "sdfvgaed");

  const response = await fetch(`/api/shopping/ticket`, {
    method: "POST",

    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      authorization: `Bearer ${user.user._lat}`,
    },
    body: JSON.stringify({ products, amount: cart.total }),
  });
  const ticket = await response.json();
  console.log(ticket);
  dispatch(emptyCart());
};
