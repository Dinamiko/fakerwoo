import {FETCH_ADDRESSES} from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_ADDRESSES:
            return action.payload.data.addresses;
        default:
            return state;
    }
}
