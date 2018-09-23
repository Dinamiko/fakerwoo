import React from 'react';
import {mount} from 'enzyme';
import OrdersForm from '../../components/OrdersForm';
import Root from '../../Root';

let container;

beforeEach(() => {
    container = mount(
        <Root>
            <OrdersForm/>
        </Root>
    );
});

afterEach(() => {
    container.unmount();
});

test('form element', () => {
    expect(container.find('form').length).toEqual(1);
});

test('order quantity field', () => {
    container.find('#order-quantity').simulate('change', {
        target: {
            value: 42
        }
    });
    container.update();

    expect(container.find('#order-quantity').prop('value')).toEqual(42);
});
