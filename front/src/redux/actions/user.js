import axios from "axios";
import {
    LOGIN,
    LOGOUT,
    SET_USER_DB
} from "../constants";

export const setUser = (user) => ({
    type: LOGIN,
    payload: user,
});

export const resetUser = () => ({
    type: LOGOUT
});

export const setUserDB = (user) => ({
    type: SET_USER_DB,
    payload: user
})

export const fetchUserDB = () => async (dispatch, getState) => {
    const token = getState().user.user._lat
    const response = await fetch('/api/users/me', {
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "authorization": `Bearer ${token}`
        }
    })
    const user = await response.json()
    dispatch(setUserDB(user))


}