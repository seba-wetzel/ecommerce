import {
  ADD_TO_CART,
  ADD_TO_QUANTITY,
  SUBSTRACT_FROM_QUANTITY,
  DELETE_ITEM,
  EMPTY_CART,
  CALCULATE_UNITS,
  CALCULATE_TOTAL,
} from "../constants";

const findAndIncrement = (state, newItem) => {
  if (!newItem.units) newItem.units = 1;

  let isNewItem = true;
  state.map((item) => {
    if (item._id === newItem._id) {
      isNewItem = false;
      item.units++;
    }
    return item;
  });
  return isNewItem ? [...state, newItem] : [...state];
};
const findAndDecrement = (state, newItem) =>
  state
    .map((item) => {
      if (item._id === newItem._id) item.units--;
      return item;
    })
    .filter((item) => item.units != 0);

const initialState = {
  added: [],
  total: 0,
  units: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        added: [...findAndIncrement(state.added, action.payload)],
      };
    case ADD_TO_QUANTITY:
      return {
        ...state,
        added: [...findAndIncrement(state.added, action.payload)],
      };
    case DELETE_ITEM:
      return {
        ...state,
        added: [...state.added.filter((item) => item._id !== action.payload)],
      };
    case SUBSTRACT_FROM_QUANTITY:
      return { ...state, added: findAndDecrement(state.added, action.payload) };
    case CALCULATE_TOTAL:
      return {
        ...state,
        total: state.added.reduce(
          (acc, item) => acc + item.units * item.price,
          0
        ),
      };
    case CALCULATE_UNITS:
      return {
        ...state,
        units: state.added.reduce((acc, item) => acc + item.units, 0),
      };
    case EMPTY_CART:
      return { ...state, added: [], total: 0, units: 0 };
    default:
      return state;
  }
};
