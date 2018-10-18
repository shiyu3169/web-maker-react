import { GET_USER, ADD_USER, ADD_ERROR } from "./types";
import axios from "axios";

export const getUser = id => {
    return {
        type: GET_USER,
        payload: id
    };
};

export const addUser = user => async dispatch => {
    const res = await axios.get(`/api/user?username=${user.username}`);
    if (res.data) {
        const error = {
            type: "match",
            message: "Username is taken, please try another one."
        };

        dispatch({
            type: ADD_ERROR,
            payload: error
        });
    } else {
        const newRes = await axios.post("/api/register", user);
        dispatch({
            type: ADD_USER,
            payload: newRes.data
        });
    }
};
