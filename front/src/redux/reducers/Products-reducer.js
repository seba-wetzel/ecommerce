import {
  RECEIVE_PRODUCTS,
  RECEIVE_SINGLE_PRODUCT,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  SET_SEARCH_PRODUCT,
  FILTER_PRODUCTS,
} from "../constants";

const initialState = {
  products: [],
  selectProduct: {},
  searchText: "",
  filterProducts: [],
};

const filterProducts = (products, filter) => {
  return filter
    ? products.filter((product) => product.categories[0].name === filter)
    : products;
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return { ...state, products: action.payload };
    case RECEIVE_SINGLE_PRODUCT:
      return { ...state, selectProduct: action.payload };
    case ADD_PRODUCT:
      return { ...state, products: action.payload };
    case DELETE_PRODUCT:
      return { ...state, products: action.payload };
    case SET_SEARCH_PRODUCT:
      return { ...state, searchText: action.payload };
    case FILTER_PRODUCTS:
      return {
        ...state,
        filterProducts: filterProducts(state.products, action.payload),
      };

    default:
      return state;
  }
};
