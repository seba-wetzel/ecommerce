import axios from "axios";
import {
    LOGIN,
    LOGOUT
} from "../constants";

export const setUser = (user) => ({
    type: LOGIN,
    payload: user,
});

export const resetUser = () => ({
    type: LOGOUT
});

