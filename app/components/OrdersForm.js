import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class OrdersForm extends Component {

	state = {
		orderQuantity: 1,
		addresses: {}
	};

	componentDidMount() {
		this.props.fetchAddresses();
	}

	componentDidUpdate() {
		if(this.state.addresses && this.state.addresses != this.props.addresses) {
			this.setState({addresses: this.props.addresses});
		}
	}

	handleOrderQuantity = (event) => {
		this.setState({orderQuantity: event.target.value});
	};

	handleFormSubmit = (event) => {
		event.preventDefault();

		for (let i = 0; i < this.state.orderQuantity; i++) {
			console.log(this.state.addresses[Math.floor(Math.random() * this.state.addresses.length)]);
			// this.props.createOrder();
		}
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
				<button id="generate-orders" className="button button-primary">Generate</button>
			</form>
		);
	}
}

function mapStateToProps(state) {
	return {
		addresses: state.addresses
	}
}

export default connect(mapStateToProps, actions)(OrdersForm);
