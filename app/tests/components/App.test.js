import React from 'react';
import {mount} from 'enzyme';
import App from '../../components/App';

test('shows app title', () => {
   const container = shallow(<App/>);
   expect(container.find('h1').length).toEqual(1);
});

test('create orders', () => {
// TODO integration test
});
