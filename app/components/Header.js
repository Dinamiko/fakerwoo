import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Header extends Component {

	state = {
		orders: 0
	};

	componentDidMount() {
		this.props.fetchOrders();
	}

	totalOrders() {
		return this.props.orders.length;
	}

	render() {
		return (
			<div id="total-orders">
				Orders: {this.totalOrders()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		orders: state.orders
	}
}

export default connect(mapStateToProps, actions)(Header);
