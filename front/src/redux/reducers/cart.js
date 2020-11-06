import {
    ADD_TO_CART,
    ADD_TO_QUANTITY,
    SUBSTRACT_FROM_QUANTITY,
    DELETE_ITEM,
    CHECKOUT,
    EMPTY_CART
} from '../constants'


const initialState = {
    added: [],
}

export const reducer = (state = initialState, action) => {
    console.log("action", action)
    console.log("state", state)
    switch (action.type) {
        case ADD_TO_CART: return { ...state, added: [...state.added, action.payload] }
        case DELETE_ITEM: return { ...state, selectProduct: action.payload }
        default: return state
    }
}