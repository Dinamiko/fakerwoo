import {FETCH_ORDERS, CREATE_ORDER} from "./types";
import axios from 'axios';
axios.defaults.headers.common['X-WP-Nonce'] = FakerWooLocalizedData.nonce;

/**
 * Fetch Orders.
 * @returns {{type: string, payload: AxiosPromise<any>}}
 */
export function fetchOrders() {

    const response = axios.get(`${FakerWooLocalizedData.root}wc/v2/orders`);

    return {
        type: FETCH_ORDERS,
        payload: response
    };
}

/**
 * Creates an Order.
 * @param data
 * @returns {{type: string, payload: AxiosPromise<any>}}
 */
export function createOrder(data)
{
	const response = axios.post( `${FakerWooLocalizedData.root}wc/v2/orders`, data );

	return {
		type: CREATE_ORDER,
		payload: response
	};
}
