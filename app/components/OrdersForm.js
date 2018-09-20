import React, {Component} from 'react';

class OrdersForm extends Component {

    state = {
      orderQuantity: 10
    };

    handleOrderQuantity = (event) => {
        this.setState({orderQuantity: event.target.value});
    };

    handleFormSubmit = (event) => {
        event.preventDefault();

        // call action creator
        // generate orders
    };

    render() {
        return(
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

export default OrdersForm;
