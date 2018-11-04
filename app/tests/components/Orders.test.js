import React from 'react';
import {mount} from 'enzyme';
import Root from '../../Root';
import Orders from '../../components/Orders';
import Form from '../../components/Form';
import Progress from '../../components/Progress';

let component;

beforeEach(() => {
	component = mount(
		<Root>
			<Orders/>
		</Root>
	);
});

afterEach(() => {
	component.unmount();
});

it('shows components', () => {
	expect(component.find(Form).length).toEqual(1);
	expect(component.find(Progress).length).toEqual(1);
});
