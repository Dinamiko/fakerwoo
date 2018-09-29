import React from 'react';
import {mount} from 'enzyme';
import Root from '../../Root';
import OrdersForm from '../../components/OrdersForm';

let component;

beforeEach(() => {
	component = mount(
		<Root>
			<OrdersForm/>
		</Root>
	);
});

afterEach(() => {
	component.unmount();
});

test('form element', () => {
	expect(component.find('form').length).toEqual(1);
});

test('order quantity field', () => {
	component.find('#order-quantity').simulate('change', {
		target: {
			value: 42
		}
	});
	component.update();

	expect(component.find('#order-quantity').prop('value')).toEqual(42);
});
