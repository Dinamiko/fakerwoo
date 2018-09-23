import React, {Component} from 'react';
import Header from './Header';
import OrdersForm from './OrdersForm';

class App extends Component {

    render() {
        return(
            <div className="wrap">
                <h1>FakerWoo</h1>
                <Header/>
                <OrdersForm/>
            </div>
        );
    }
}

export default App;
