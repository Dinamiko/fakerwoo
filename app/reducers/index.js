import {combineReducers} from 'redux';
import ordersReducer from './orders';
import addressesReducer from './addresses';
import productsReducer from './products';
import processReducer from './process';
import formReducer from './form';

export default combineReducers({
    orders: ordersReducer,
    addresses: addressesReducer,
    products: productsReducer,
    process: processReducer,
    form: formReducer
});


