import axios from "axios";
import {
    LOGIN,
    LOGOUT,
    SET_USERS_LIST,
} from "../constants";

export const setUser = (user) => ({
    type: LOGIN,
    payload: user,
});

export const resetUser = () => ({
    type: LOGOUT
});

const receiveUsers= (users) => ({
    type: SET_USERS_LIST,
    payload: users,
  });


export const fetchUsers = () => async (dispatch, state) => {
    const response = await fetch(`/api/users/all`, {
      "method": "GET",
       "headers": {
        "Access-Control-Allow-Origin": "*",
        //"authorization": `Bearer ${state.user._lat}`
      }
    })
    const users = await response.json()
    console.log(users,"aqui el axiooooo")
    dispatch(receiveUsers(users))
  }

