import React from 'react';
import {mount} from 'enzyme';
import Root from '../../Root';
import App from '../../components/App';
import Header from '../../components/Header';
import Orders from '../../components/Orders';

it('shows components', () => {
	const component = mount(<Root><App/></Root>);
	expect(component.find(Header).length).toEqual(1);
	expect(component.find(Orders).length).toEqual(1);
});
