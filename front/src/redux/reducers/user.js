import {
    LOGIN,
    LOGOUT,
    SET_USERS_LIST,
    SET_USER_DB
} from '../constants'


const initialState = {
    user: {},
    users:[],
    db: {}
}

export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN: return { ...state, user: action.payload }
        case LOGOUT: return { ...state, user: {} }
        case SET_USERS_LIST: return {...state,users:action.payload}
        case SET_USER_DB: return { ...state, db: action.payload }
        default: return state
    }
}

