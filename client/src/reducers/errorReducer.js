import { RESET_ERROR, ADD_ERROR } from "../actions/types";

const initialState = {
    error: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case RESET_ERROR:
            return initialState;
        case ADD_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}
