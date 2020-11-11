import { RECEIVE_PRODUCTS, RECEIVE_SINGLE_PRODUCT, ADD_PRODUCT } from '../constants'


const initialState = {
    products: [],
    selectProduct: {},
    
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS: return { ...state, products: action.payload }
        case RECEIVE_SINGLE_PRODUCT: return { ...state, selectProduct: action.payload }
        case ADD_PRODUCT: return { ...state, products: action.payload }
        default: return state
    }
}