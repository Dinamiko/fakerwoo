import {FETCH_ORDERS, CREATE_ORDER, FETCH_ADDRESSES} from "./types";
import axios from 'axios';

axios.defaults.headers.common['X-WP-Nonce'] = FakerWooLocalizedData.nonce;

/**
 * Fetch Orders.
 * @returns {{type: string, payload: AxiosPromise<any>}}
 */
export function fetchOrders() {
	const response = axios.get(`${FakerWooLocalizedData.root}fakerwoo/v1/orders`);

	return {
		type: FETCH_ORDERS,
		payload: response
	};
}

/**
 * Creates an order.
 * @param data
 * @returns {{type: string, payload: AxiosPromise<any>}}
 */
export function createOrder(data) {
	const response = axios.post(`${FakerWooLocalizedData.root}wc/v2/orders`, data);

	return {
		type: CREATE_ORDER,
		payload: response
	};
}

/**
 * Fetch a list of addresses.
 * @returns {{type: string, payload: AxiosPromise<any>}}
 */
export function fetchAddresses() {
	const response = axios.get(`${FakerWooLocalizedData.data}/addresses-us-all.min.json`);

	return {
		type: FETCH_ADDRESSES,
		payload: response
	};
}
