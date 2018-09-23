import {CREATE_ORDER} from "./types";

export function createOrder(order) {
    return {
        type: CREATE_ORDER,
        payload: order
    };
}
