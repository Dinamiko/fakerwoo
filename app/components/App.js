import React, {Component} from 'react';
import Header from './Header';
import Orders from './Orders';

class App extends Component {

    render() {
        return (
            <div className="wrap">
                <Header/>
                <Orders/>
            </div>
        );
    }
}

export default App;
