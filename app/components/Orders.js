import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import faker from 'faker';
import Form from './Form';
import Progress from './Progress';

class Orders extends Component {

    state = {
        addresses: {},
        products: {}
    };

    componentDidMount() {
        this.props.fetchAddresses();
        this.props.fetchProducts();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.addresses !== this.props.addresses) {
            this.setState({addresses: this.props.addresses});
        }
        if (prevProps.products !== this.props.products) {
            this.setState({products: this.props.products});
        }
    }

    handleFormSubmit = (event) => {
        event.preventDefault();

        const ordersData = [];
        for (let i = 0; i < this.props.form.orderQuantity; i++) {
            const address = this.state.addresses[Math.floor(Math.random() * this.state.addresses.length)];
            const customer = this.customer(address);
            const products = this.products(this.state.products);

            const data = {
                "payment_method": "bacs",
                "payment_method_title": "Direct Bank Transfer",
                "set_paid": true,
                "status": this.orderStatus(),
                "billing": customer,
                "shipping": customer,
                "line_items": products
            };

            ordersData.push(data);
        }

        this.props.createOrders(ordersData);
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

    orderStatus() {
        const status = ['pending', 'processing', 'on-hold', 'completed', 'cancelled', 'refunded', 'failed'];
        return status[Math.floor(Math.random() * status.length)];
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
            <div>
                <Form submit={(event) => this.handleFormSubmit(event)}/>
                <Progress current={this.props.process.current} total={this.props.form.orderQuantity} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        addresses: state.addresses,
        products: state.products,
        process: state.process,
        form: state.form
    }
}

export default connect(mapStateToProps, actions)(Orders);
