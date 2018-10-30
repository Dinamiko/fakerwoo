import {FINISH, START} from "../actions/types";

export default function(state = {}, action) {
    switch (action.type) {
        case START:
            return {...state, processing: true};
        case FINISH:
            return {...state, processing: false};
        default:
            return state;
    }
}
