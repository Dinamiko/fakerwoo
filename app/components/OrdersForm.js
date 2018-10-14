import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import faker from 'faker';

class OrdersForm extends Component {

	state = {
		orderQuantity: 1,
		addresses: {},
		products: {}
	};

	componentDidMount() {
		this.props.fetchAddresses();
		this.props.fetchProducts();
	}

	componentDidUpdate() {
		if (this.state.addresses && this.state.addresses != this.props.addresses) {
			this.setState({addresses: this.props.addresses});
		}
		if (this.state.products && this.state.products != this.props.products) {
			this.setState({products: this.props.products});
		}
	}

	handleOrderQuantity = (event) => {
		this.setState({orderQuantity: event.target.value});
	};

	handleFormSubmit = (event) => {
		event.preventDefault();

		for (let i = 0; i < this.state.orderQuantity; i++) {
			const address = this.state.addresses[Math.floor(Math.random() * this.state.addresses.length)];
			const customer = this.customer(address);

			const products = this.products(this.state.products);
			console.log(products);

			// this.props.createOrder();
		}
	};

	customer(address) {
		return {
			"first_name": faker.name.firstName(),
			"last_name": faker.name.lastName(),
			"address_1": address.address1,
			"address_2": "",
			"city": address.city,
			"state": address.state,
			"postcode": address.postalCode,
			"country": 'United States (US)',
			"email": faker.internet.email(),
			"phone": faker.phone.phoneNumber()
		};
	}

	products(products) {

		const product_ids = [];
		products.map(product => {
			product_ids.push(product.id);
		});
		this.shuffle(product_ids);

		const product_quantity = Math.round(Math.random() * (product_ids.length - 1) + 1);

		return product_ids.slice(0, product_quantity).map(product_id => {
			return {
				"product_id": product_id,
				"quantity": Math.round(Math.random() * (2 - 1) + 1)
			};
		});
	}

	shuffle(a) {
		for (let i = a.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[a[i], a[j]] = [a[j], a[i]];
		}
		return a;
	}

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
		addresses: state.addresses,
		products: state.products
	}
}

export default connect(mapStateToProps, actions)(OrdersForm);
