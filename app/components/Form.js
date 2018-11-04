import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Form extends Component {

    handleOrderQuantity = (event) => {
        this.props.orderQuantity(event.target.value);
    };

    render() {
        return(
            <form onSubmit={this.props.submit}>
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
                                value={this.props.form.orderQuantity}
                                onChange={this.handleOrderQuantity}
                            />
                        </td>
                    </tr>
                    </tbody>
                </table>
                <button disabled={this.props.process.processing} id="generate-orders" className="button button-primary">Generate</button>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        form: state.form,
        process: state.process
    }
}

export default connect(mapStateToProps, actions)(Form);
