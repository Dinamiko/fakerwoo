import {FINISH, START, CURRENT, RESET} from "../actions/types";

const initialState = {
    processing: false,
    current: 0
};

export default function(state = initialState, action) {
    switch (action.type) {
        case START:
            return {...state, processing: true};
        case FINISH:
            return {...state, processing: false};
        case CURRENT:
            return {...state, current: action.payload};
        case RESET:
            return {...state, current: 0};
        default:
            return state;
    }
}
