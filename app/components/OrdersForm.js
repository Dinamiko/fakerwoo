import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class OrdersForm extends Component {

    state = {
        orderQuantity: 10,
        order: {}
    };

    handleOrderQuantity = (event) => {
        this.setState({orderQuantity: event.target.value});
    };

    handleFormSubmit = (event) => {
        event.preventDefault();

        this.props.createOrder(this.state.order);

        // call action creator
        // generate orders
    };

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <table className="form-table">
                    <tbody>
                    <tr>
                        <th scope="row">
                            <label htmlFor="blogname">Orders</label>
                        </th>
                        <td>
                            <input
                                id="order-quantity"
                                type="number"
                                className="regular-text"
                                value={this.state.orderQuantity}
                                onChange={this.handleOrderQuantity}
                            />
                        </td>
                    </tr>
                    </tbody>
                </table>
                <button className="button button-primary">Generate</button>
            </form>
        );
    }
}

export default connect(null, actions)(OrdersForm);
