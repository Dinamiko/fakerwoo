import {FETCH_ORDERS, CREATE_ORDER} from "../actions/types";

export default function(state = [], action) {
    switch (action.type){
        case FETCH_ORDERS:
			const orders = action.payload.data.map(order => order.id);
			return [...state, ...orders];
        case CREATE_ORDER:
            return [...state, action.payload.data];
        default:
            return state;
    }
}
