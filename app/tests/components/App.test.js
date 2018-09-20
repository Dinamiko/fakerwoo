import React from 'react';
import {shallow} from 'enzyme';
import App from '../../components/App';

test('shows app title', () => {
   const container = shallow(<App/>);
   expect(container.find('h1').length).toEqual(1);
});
