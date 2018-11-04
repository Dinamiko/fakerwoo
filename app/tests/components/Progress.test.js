import React from 'react';
import {mount} from 'enzyme';
import Root from '../../Root';
import Progress from '../../components/Progress';

let component;

beforeEach(() => {
    component = mount(<Root><Progress current="1" total="2"/></Root>);
});

afterEach(() => {
   component.unmount();
});

it('shows current and total values', () => {
    expect(component.render().text()).toContain('Processing: 1 of 2');
});
