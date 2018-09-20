import React from 'react';
import {mount} from 'enzyme';
import OrdersForm from '../../components/OrdersForm';

let container;

beforeEach(() => {
    container = mount(<OrdersForm/>);
});

afterEach(() => {
    container.unmount();
});

test('form element', () => {
    expect(container.find('form').length).toEqual(1);
});

test('order quantity field', () => {
    expect(container.find('#order-quantity').length).toEqual(1);

    container.find('#order-quantity').simulate('change', {
        target: {
            value: 20
        }
    });
    container.update();

    expect(container.find('#order-quantity').prop('value')).toEqual(20);
});
