import {
    LOGIN,
    LOGOUT,
    SET_USERS_LIST
} from '../constants'


const initialState = {
    user: {},
    users:[]
}

export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN: return { ...state, user: action.payload }
        case LOGOUT: return { ...state, user: {} }
        case SET_USERS_LIST: return {...state,users:action.payload}

        default: return state
    }
}

