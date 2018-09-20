import React, {Component} from 'react';
import OrdersForm from './OrdersForm';

class App extends Component {

    render() {
        return(
            <div className="wrap">
                <h1>FakerWoo</h1>
                <OrdersForm/>
            </div>
        );
    }
}

export default App;
