import { RECEIVE_PRODUCTS, RECEIVE_SINGLE_PRODUCT } from '../constants-actioncreators/constants'


const initialState = {
    products: [],
    selectProduct: {},
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS: return { ...state, products: action.payload }
        case RECEIVE_SINGLE_PRODUCT: return { ...state, selectProduct: action.payload }
        default: return state
    }
}