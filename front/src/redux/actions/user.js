
import {
    LOGIN,
    LOGOUT,
    SET_USERS_LIST,
    SET_USER_DB
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
