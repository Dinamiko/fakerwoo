import React from 'react';
import {mount} from 'enzyme';
import Root from '../../Root';
import App from '../../components/App';

test('shows app title', () => {
	const container = mount(<Root><App/></Root>);
	expect(container.find('h1').length).toEqual(1);
});
