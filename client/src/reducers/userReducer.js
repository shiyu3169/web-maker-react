import { GET_USER, ADD_USER } from "../actions/types";

const initialState = {
    users: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                users: [action.payload, ...state.users]
            };
        default:
            return state;
    }
}
