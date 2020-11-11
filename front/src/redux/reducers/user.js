import {
    LOGIN,
    LOGOUT,
    SET_USER_DB
} from '../constants'


const initialState = {
    user: {},
    db: {}
}

export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN: return { ...state, user: action.payload }
        case LOGOUT: return { ...state, user: {} }
        case SET_USER_DB: return { ...state, db: action.payload }
        default: return state
    }
}