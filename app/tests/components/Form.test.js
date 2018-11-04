import React from 'react';
import {mount} from 'enzyme';
import Root from '../../Root';
import Form from '../../components/Form';

let component;

beforeEach(() => {
    component = mount(<Root><Form/></Root>);
});

afterEach(() => {
    component.unmount();
});

it('shows form element', () => {
    expect(component.find('form').length).toEqual(1);
});

it('updtes order quantity value', () => {
    component.find('#order-quantity').simulate('change', {
        target: {
            value: 42
        }
    });
    component.update();

    expect(component.find('#order-quantity').prop('value')).toEqual(42);
});
