import {combineReducers} from 'redux';
import ordersReducer from './orders';

export default combineReducers({
   orders: ordersReducer
});


