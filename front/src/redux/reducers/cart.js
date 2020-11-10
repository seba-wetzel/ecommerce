import {
    ADD_TO_CART,
    ADD_TO_QUANTITY,
    SUBSTRACT_FROM_QUANTITY,
    DELETE_ITEM,
    CHECKOUT,
    EMPTY_CART
} from '../constants'

const findAndIncrement = (state, newItem) => {
    if (!newItem.units) newItem.units = 1

    let isNewItem = true;
    state.map(item => {
        if (item._id === newItem._id) {
            isNewItem = false
            item.units++
        }
        return item
    }

    )
    return (isNewItem ? [...state, newItem] : [...state]);
}
const findAndDecrement = (state, newItem) => {

    return state.map(item => {
        if (item._id === newItem._id) {
            item.units--
        }
        return item
    }

    ).filter(item => item.units != 0)
}


const initialState = {
    added: [],
    total: 0,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: return { ...state, added: [...findAndIncrement(state.added, action.payload)] }
        case ADD_TO_QUANTITY: return { ...state, added: [...findAndIncrement(state.added, action.payload)] }
        case DELETE_ITEM: return { ...state, selectProduct: action.payload }
        case SUBSTRACT_FROM_QUANTITY: return { ...state, added: findAndDecrement(state.added, action.payload) }
        default: return state
    }
}