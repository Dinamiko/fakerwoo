import {combineReducers} from 'redux';
import ordersReducer from './orders';
import addressesReducer from './addresses';
import productsReducer from './products';

export default combineReducers({
	orders: ordersReducer,
	addresses: addressesReducer,
	products: productsReducer
});


