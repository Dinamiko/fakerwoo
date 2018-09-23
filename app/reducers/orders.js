import {CREATE_ORDER} from "../actions/types";

export default function(state = [], action) {
    switch (action.type){
        case CREATE_ORDER:
            return [...state, action.payload];
        default:
            return state;
    }
}
