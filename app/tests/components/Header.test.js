import React from 'react';
import {mount} from 'enzyme';
import Header from '../../components/Header';
import Root from '../../Root';
import moxios from 'moxios';

beforeEach(() => {
	moxios.install();
	moxios.stubRequest(`${FakerWooLocalizedData.root}fakerwoo/v1/orders`, {
		status: 200,
		response: [
			{id: 1},
			{id: 2}
		]
	});
});

afterEach(() => {
	moxios.uninstall();
});

test('display total orders', (done) => {

	const component = mount(
		<Root>
			<Header/>
		</Root>
	);

	moxios.wait(() => {
		component.update();
		expect(component.render().text()).toContain('Orders: 2');
		done();
	});
});
