import {CREATE_ORDER, FETCH_ORDERS} from "../actions/types";

export default function(state = [], action) {
    switch (action.type){
        case CREATE_ORDER:
            return [...state, action.payload];
        case FETCH_ORDERS:
            return [...state, action.payload.data];
        default:
            return state;
    }
}
