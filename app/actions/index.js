import {CREATE_ORDER, FETCH_ORDERS} from "./types";
import axios from 'axios';
axios.defaults.headers.common['X-WP-Nonce'] = FakerWooLocalizedData.nonce;

export function fetchOrders() {

    const response = axios.get(`${FakerWooLocalizedData.root}wc/v2/orders`);
    return {
        type: FETCH_ORDERS,
        payload: response
    };
}
