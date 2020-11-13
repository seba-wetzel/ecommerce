import axios from "axios";
import {
  LOGIN,
  LOGOUT,
  SET_USERS_LIST,
  SET_USER_DB,
  DELETE_USER,
  UPDATE_USER,
  LOGOUT_DB,
} from "../constants";

export const setUser = (user) => ({
  type: LOGIN,
  payload: user,
});

export const resetUser = () => ({
  type: LOGOUT,
});
export const resetUserDb = (user) => ({
  type: LOGOUT_DB,
  payload: user,
});

const receiveUsers = (users) => ({
  type: SET_USERS_LIST,
  payload: users,
});

const deleteUser = (user) => ({
  type: DELETE_USER,
  payload: user,
});

const updateUser = (user) => ({
  type: UPDATE_USER,
  payload: user,
});

export const fetchUsers = () => async (dispatch, state) => {
  const response = await fetch(`/api/users/all`, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      //"authorization": `Bearer ${state.user._lat}`
    },
  });
  const users = await response.json();

  dispatch(receiveUsers(users));
};

export const setUserDB = (user) => ({
  type: SET_USER_DB,
  payload: user,
});

export const fetchUserDB = () => async (dispatch, getState) => {
  const token = getState().user.user._lat;
  const response = await fetch("/api/users/me", {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      authorization: `Bearer ${token}`,
    },
  });
  const user = await response.json();
  dispatch(setUserDB(user));
};

export const removeUser = (id) => (dispatch) =>
  axios
    .delete(`/api/users/${id}`)
    .then((res) => res.data)
    .then((users) => dispatch(fetchUsers()));

export const updatedUser = (id) => (dispatch) => {
  axios
    .put(`/api/products/${id}`)
    .then((res) => res.data)
    .then((users) => dispatch(updateUser()));
};
