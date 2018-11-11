import {ORDER_QUANTITY} from '../actions/types';

const initialState = {
    orderQuantity: 2
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ORDER_QUANTITY:
            return {orderQuantity: action.payload};
        default:
            return state;
    }
}
