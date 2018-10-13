import {combineReducers} from 'redux';
import ordersReducer from './orders';
import addressesReducer from './addresses';

export default combineReducers({
	orders: ordersReducer,
	addresses: addressesReducer
});


