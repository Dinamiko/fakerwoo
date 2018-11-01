import {FETCH_ORDERS, CREATE_ORDER, FETCH_ADDRESSES, FETCH_PRODUCTS, START, FINISH, CURRENT, RESET} from "./types";
import axios from 'axios';

axios.defaults.headers.common['X-WP-Nonce'] = FakerWooLocalizedData.nonce;

/**
 * Fetch all orders.
 * @returns {Function}
 */
export function fetchOrders() {
    return async function (dispatch) {
        dispatch({type: START});
        const response = await axios.get(`${FakerWooLocalizedData.root}fakerwoo/v1/orders`);

        dispatch({
            type: FETCH_ORDERS,
            payload: response
        });

        dispatch({type: FINISH});
    }
}

export function createOrders(ordersData) {
    return async function(dispatch) {
        dispatch({type: START});

        for (let i = 0; i < ordersData.length; i++) {
            dispatch({type: CURRENT,  payload: i + 1});

            const order = await axios.post(`${FakerWooLocalizedData.root}wc/v2/orders`, ordersData[i]);
            dispatch({
                type: CREATE_ORDER,
                payload: order
            });
        }

        dispatch({type: FINISH});
        dispatch({type: RESET});
    }
}

export function fetchAddresses() {
    return async function (dispatch) {
        const response = await axios.get(`${FakerWooLocalizedData.data}/addresses-us-all.min.json`);

        dispatch({
            type: FETCH_ADDRESSES,
            payload: response
        });
    }
}

export function fetchProducts() {
    return async function (dispatch) {
        const response = await axios.get(`${FakerWooLocalizedData.root}wc/v2/products?per_page=20&status=publish`);

        dispatch({
            type: FETCH_PRODUCTS,
            payload: response
        });
    }
}
